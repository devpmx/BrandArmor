"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  ExternalLink,
  FileText,
  TrendingDown,
  User,
  Check,
  X,
  Lock,
  Unlock,
  Clock,
  ArrowRight,
  ChevronRight,
  Info,
  Terminal,
  Cpu,
  Database,
  AlertCircle,
  Award
} from "lucide-react";

// Types corresponding to our DynamoDB models
interface Product {
  asin: string;
  title: string;
  price: number;
  imageUrl: string;
  bulletPoints: string[];
  status: "Clean" | "Warning" | "Alert";
}

interface Alert {
  asin: string;
  timestamp: number;
  alertType: "PRICE_DROP" | "TITLE_DRIFT" | "BULLET_POINTS_DRIFT";
  severity: "Warning" | "Critical";
  status: "Active" | "Takedown Initiated" | "Resolved";
  description: string;
  deviationDetails: {
    authorized: Record<string, any>;
    hijacked: Record<string, any>;
  };
  takedownSubmittedAt?: string;
  dmcaDetails?: any;
}

interface Stats {
  threatLevel: "Clean" | "Warning" | "Critical";
  lastChecked: string;
  totalProducts: number;
  activeAlertsCount: number;
  resolvedAlertsCount: number;
  resolvedThisMonth: number;
}

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [stats, setStats] = useState<Stats>({
    threatLevel: "Clean",
    lastChecked: new Date().toISOString(),
    totalProducts: 5,
    activeAlertsCount: 0,
    resolvedAlertsCount: 12,
    resolvedThisMonth: 4
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  
  // UI states
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [submittingTakedown, setSubmittingTakedown] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sandboxMode, setSandboxMode] = useState(false);
  
  // Notification banner state
  const [notification, setNotification] = useState<{
    type: "success" | "error" | "warning";
    title: string;
    message: string;
  } | null>(null);

  // DMCA Form fields
  const [legalForm, setLegalForm] = useState({
    infringementType: "Buybox Hijacking & Price Manipulation",
    contactName: "",
    brandName: "BrandArmor Core Ltd",
    authorizedSeller: "BrandArmor Official",
    signature: "",
    agreeToTerms: false
  });

  // Load dashboard telemetry data
  const fetchData = async (showNotification = false) => {
    try {
      setLoading(true);
      const resProducts = await fetch("/api/dashboard/products");
      const resStats = await fetch("/api/dashboard/stats");

      const productsData = await resProducts.json();
      const statsData = await resStats.json();

      if (productsData.success && statsData.success) {
        setProducts(productsData.products);
        setAlerts(productsData.alerts);
        setStats(statsData.data);
        setSandboxMode(false);

        // Pre-select first hijacked product or first product
        const firstHijacked = productsData.products.find((p: Product) => p.status === "Alert");
        if (firstHijacked) {
          setSelectedProduct(firstHijacked);
          const relatedAlert = productsData.alerts.find((a: Alert) => a.asin === firstHijacked.asin && a.status === "Active");
          setSelectedAlert(relatedAlert || null);
        } else if (productsData.products.length > 0) {
          setSelectedProduct(productsData.products[0]);
          setSelectedAlert(null);
        }

        if (showNotification) {
          showToast("success", "Telemetry Synced", "Successfully retrieved latest brand security telemetry from DynamoDB.");
        }
      } else {
        throw new Error("API reports failure. Database might need seeding.");
      }
    } catch (err) {
      console.warn("DynamoDB client unreachable, switching to demo sandbox mode...", err);
      enableSandbox();
    } finally {
      setLoading(false);
    }
  };

  // Switch to fully functional frontend sandbox if DynamoDB connection is not configured locally
  const enableSandbox = () => {
    setSandboxMode(true);
    
    // Seed in-memory structures
    const mockProducts: Product[] = [
      {
        asin: "B07ZPKN6SS",
        title: "BrandArmor Premium Security Key - FIDO2 & U2F Double Factor Authentication",
        price: 49.99,
        imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=300&auto=format&fit=crop",
        bulletPoints: [
          "MAXIMUM SECURITY: Certified FIDO2 and U2F compliance to secure your accounts.",
          "UNIVERSAL COMPATIBILITY: Works with Google, Facebook, GitHub, and major platforms.",
          "DURABLE DESIGN: Waterproof and crushproof aluminum shell for everyday carry."
        ],
        status: "Alert"
      },
      {
        asin: "B0892XSPLT",
        title: "ShieldPro Antimicrobial Laptop Sleeve - 14 Inch Premium Protective Case",
        price: 29.99,
        imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop",
        bulletPoints: [
          "ANTIMICROBIAL COATING: Specialized exterior fabric repels 99.9% of common bacteria.",
          "SHOCKPROOF LAYERS: Five-layer protection shield guards against drops and bumps.",
          "SLIM & TRAVEL-READY: Slides easily into backpacks or carry-on luggage."
        ],
        status: "Clean"
      },
      {
        asin: "B09B2L4H79",
        title: "ApexGrid Smart Wi-Fi 6 Router - 3000 Mbps High Speed Mesh System",
        price: 129.99,
        imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&auto=format&fit=crop",
        bulletPoints: [
          "ULTRA-FAST WI-FI 6: Delivers up to 3 Gbps speeds for seamless 4K/8K streaming.",
          "EXPANDABLE MESH: Cover up to 3000 sq ft with dead-zone elimination technology.",
          "ADVANCED PARENTAL CONTROL: Manage screen time and filter content easily."
        ],
        status: "Alert"
      },
      {
        asin: "B0C7D5K2SS",
        title: "BioLock Biometric Padlock - Smart Fingerprint Scanner for Gym & Locker",
        price: 39.99,
        imageUrl: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?w=300&auto=format&fit=crop",
        bulletPoints: [
          "FINGERPRINT RECOGNITION: Unlock in 0.5 seconds with state-of-the-art scanner.",
          "CAPACITY FOR 20 FINGERPRINTS: Register multiple users or angles for quick access.",
          "USB RECHARGEABLE: Up to 6 months of standby time on a single 1-hour charge."
        ],
        status: "Clean"
      },
      {
        asin: "B0D98P39ZZ",
        title: "VeloSafe Heavy Duty U-Lock - Smart Bluetooth Bike Lock with Alarm",
        price: 89.99,
        imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=300&auto=format&fit=crop",
        bulletPoints: [
          "KEYLESS BLUETOOTH UNLOCK: Unlock using your smartphone or fallback passcode.",
          "120dB ANTI-THEFT ALARM: Siren triggers immediately if motion is detected.",
          "16mm HARDENED STEEL: Resists cutting, leverage attacks, and weather damage."
        ],
        status: "Alert"
      }
    ];

    const now = Date.now();
    const mockAlerts: Alert[] = [
      {
        asin: "B07ZPKN6SS",
        timestamp: now - 4 * 3600 * 1000,
        alertType: "PRICE_DROP",
        severity: "Critical",
        status: "Active",
        description: "Buybox Hijacked: Listing price dropped from $49.99 to $19.99 by unauthorized merchant 'CheapGoodsCorp'.",
        deviationDetails: {
          authorized: { price: 49.99 },
          hijacked: { price: 19.99, sellerName: "CheapGoodsCorp", buybox: true }
        }
      },
      {
        asin: "B09B2L4H79",
        timestamp: now - 24 * 3600 * 1000,
        alertType: "TITLE_DRIFT",
        severity: "Warning",
        status: "Active",
        description: "Title Drifting: Authorized brand title altered to lower-quality, SEO-stuffed version.",
        deviationDetails: {
          authorized: { title: "ApexGrid Smart Wi-Fi 6 Router - 3000 Mbps High Speed Mesh System" },
          hijacked: { title: "ApexGrid Smart Cheap Router Net System - 3000 Mbps High Speed Mesh System" }
        }
      },
      {
        asin: "B0D98P39ZZ",
        timestamp: now - 12 * 3600 * 1000,
        alertType: "BULLET_POINTS_DRIFT",
        severity: "Critical",
        status: "Active",
        description: "Bullet Point Removed: Crucial anti-theft siren alarm details deleted from description.",
        deviationDetails: {
          authorized: {
            bulletPoints: [
              "KEYLESS BLUETOOTH UNLOCK: Unlock using your smartphone or fallback passcode.",
              "120dB ANTI-THEFT ALARM: Siren triggers immediately if motion is detected.",
              "16mm HARDENED STEEL: Resists cutting, leverage attacks, and weather damage."
            ]
          },
          hijacked: {
            bulletPoints: [
              "KEYLESS BLUETOOTH UNLOCK: Unlock using your smartphone or fallback passcode.",
              "100% SATISFACTION GUARANTEED: Contact us if you have issues, cheap returns.",
              "16mm HARDENED STEEL: Resists cutting, leverage attacks, and weather damage."
            ]
          }
        }
      }
    ];

    setProducts(mockProducts);
    setAlerts(mockAlerts);
    setStats({
      threatLevel: "Critical",
      lastChecked: new Date().toISOString(),
      totalProducts: 5,
      activeAlertsCount: 3,
      resolvedAlertsCount: 12,
      resolvedThisMonth: 4
    });

    setSelectedProduct(mockProducts[0]);
    setSelectedAlert(mockAlerts[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Quick helper to show alerts
  const showToast = (type: "success" | "error" | "warning", title: string, message: string) => {
    setNotification({ type, title, message });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  // Seed DynamoDB database via API call
  const handleSeedDatabase = async () => {
    try {
      setSeeding(true);
      const res = await fetch("/api/db/seed");
      const data = await res.json();
      if (data.success) {
        showToast("success", "Database Initialized", "Created DynamoDB tables and seeded 5 mock listings successfully!");
        await fetchData();
      } else {
        throw new Error(data.error);
      }
    } catch (err: any) {
      showToast("error", "AWS Credentials Missing", "Unable to create/seed DynamoDB. Running in sandbox simulation mode.");
      enableSandbox();
    } finally {
      setSeeding(false);
    }
  };

  // Simulate drift detection webhook
  const handleSimulateDrift = async () => {
    if (sandboxMode) {
      // Sandbox mode simulation
      const cleanProd = products.find(p => p.status === "Clean");
      if (!cleanProd) {
        showToast("warning", "No Clean Listings", "All mock listings are already hijacked. Initiate a takedown first to clear listings.");
        return;
      }
      
      setSimulating(true);
      setTimeout(() => {
        const now = Date.now();
        const updatedProducts = products.map(p => {
          if (p.asin === cleanProd.asin) {
            return { ...p, status: "Alert" as const };
          }
          return p;
        });

        let newAlert: Alert;
        if (cleanProd.asin === "B0892XSPLT") {
          newAlert = {
            asin: cleanProd.asin,
            timestamp: now,
            alertType: "TITLE_DRIFT",
            severity: "Critical",
            status: "Active",
            description: "Critical Drift: Title changed to generic name and price cut by 58% by unauthorized reseller.",
            deviationDetails: {
              authorized: {
                title: "ShieldPro Antimicrobial Laptop Sleeve - 14 Inch Premium Protective Case",
                price: 29.99
              },
              hijacked: {
                title: "ShieldPro Antimicrobial Laptop Sleeve - 14 Inch Cheap Nylon Case (Flimsy Zipper)",
                price: 12.50,
                sellerName: "BargainBinDistributors",
                buybox: true
              }
            }
          };
        } else {
          newAlert = {
            asin: cleanProd.asin,
            timestamp: now,
            alertType: "PRICE_DROP",
            severity: "Warning",
            status: "Active",
            description: "Price Hijacked: Buybox price dropped significantly from authorized minimum advertised price.",
            deviationDetails: {
              authorized: { price: cleanProd.price },
              hijacked: { price: Number((cleanProd.price * 0.6).toFixed(2)), sellerName: "DiscountMerch", buybox: true }
            }
          };
        }

        setProducts(updatedProducts);
        setAlerts([newAlert, ...alerts]);
        setStats(prev => ({
          ...prev,
          activeAlertsCount: prev.activeAlertsCount + 1,
          threatLevel: "Critical"
        }));

        setSelectedProduct(updatedProducts.find(p => p.asin === cleanProd.asin) || null);
        setSelectedAlert(newAlert);
        
        setSimulating(false);
        showToast("warning", "Listing Drift Detected!", `ASIN ${cleanProd.asin} was hijacked. Global threat score escalated to Critical.`);
      }, 1000);
      return;
    }

    try {
      setSimulating(true);
      const res = await fetch("/api/cron/check-listings");
      const data = await res.json();
      if (data.success) {
        showToast("warning", "Listing Drift Detected!", `Drift check finished. ASIN ${data.details.affectedAsin} has been compromised.`);
        await fetchData();
      } else {
        throw new Error(data.error);
      }
    } catch (err: any) {
      showToast("error", "Simulation Failed", err.message || "Failed to trigger catalog drift engine.");
    } finally {
      setSimulating(false);
    }
  };

  // Submit legal DMCA request
  const handleTakedownSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct || !selectedAlert) return;

    if (!legalForm.contactName || !legalForm.signature || !legalForm.agreeToTerms) {
      showToast("warning", "Form Incomplete", "Please complete all mandatory legal authorization signatures and check agreement.");
      return;
    }

    setSubmittingTakedown(true);

    if (sandboxMode) {
      // Sandbox mode takedown processing
      setTimeout(() => {
        const updatedProducts = products.map(p => {
          if (p.asin === selectedProduct.asin) {
            return { ...p, status: "Clean" as const };
          }
          return p;
        });

        const updatedAlerts = alerts.map(a => {
          if (a.asin === selectedProduct.asin && a.timestamp === selectedAlert.timestamp) {
            return { ...a, status: "Resolved" as const, takedownSubmittedAt: new Date().toISOString(), dmcaDetails: legalForm };
          }
          return a;
        });

        const activeCount = updatedAlerts.filter(a => a.status === "Active").length;
        let newLevel: "Clean" | "Warning" | "Critical" = "Clean";
        if (activeCount > 0) {
          const hasCritical = updatedAlerts.filter(a => a.status === "Active").some(a => a.severity === "Critical");
          newLevel = hasCritical ? "Critical" : "Warning";
        }

        setProducts(updatedProducts);
        setAlerts(updatedAlerts);
        setStats(prev => ({
          ...prev,
          activeAlertsCount: activeCount,
          threatLevel: newLevel,
          resolvedAlertsCount: prev.resolvedAlertsCount + 1,
          resolvedThisMonth: prev.resolvedThisMonth + 1
        }));

        setSelectedProduct(updatedProducts.find(p => p.asin === selectedProduct.asin) || null);
        setSelectedAlert(updatedAlerts.find(a => a.asin === selectedProduct.asin && a.timestamp === selectedAlert.timestamp) || null);

        setSubmittingTakedown(false);
        setDrawerOpen(false);
        showToast("success", "DMCA Legal Report Filed", `Brand infringement takedown successfully executed for ASIN ${selectedProduct.asin}. DynamoDB mock state synchronized.`);
      }, 1500);
      return;
    }

    try {
      const res = await fetch("/api/alerts/takedown", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          asin: selectedProduct.asin,
          timestamp: selectedAlert.timestamp,
          dmcaDetails: legalForm
        })
      });
      const data = await res.json();
      if (data.success) {
        showToast("success", "Takedown Report Executed", `Formal Amazon Seller IP infringement notice filed for ASIN ${selectedProduct.asin}.`);
        setDrawerOpen(false);
        await fetchData();
      } else {
        throw new Error(data.error);
      }
    } catch (err: any) {
      showToast("error", "Takedown Request Failed", err.message || "Failed to execute takedown API call.");
    } finally {
      setSubmittingTakedown(false);
    }
  };

  // Helper function to format timestamps nicely
  const formatDate = (ts: number) => {
    return new Date(ts).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  // SVG parameters for animated threat ring widget
  const getThreatRingConfig = () => {
    switch (stats.threatLevel) {
      case "Clean":
        return {
          colorClass: "text-emerald-500 stroke-emerald-500",
          glowClass: "glow-safe",
          bgClass: "bg-emerald-500/10 border-emerald-500/20",
          title: "ALL SECURED",
          desc: "0 Active Threat Signals"
        };
      case "Warning":
        return {
          colorClass: "text-amber-500 stroke-amber-500",
          glowClass: "glow-warning",
          bgClass: "bg-amber-500/10 border-amber-500/20",
          title: "MODERATE DRIFT",
          desc: `${stats.activeAlertsCount} Warning Alert Active`
        };
      case "Critical":
        return {
          colorClass: "text-red-500 stroke-red-500",
          glowClass: "glow-critical",
          bgClass: "bg-red-500/10 border-red-500/20",
          title: "CRITICAL COMPROMISE",
          desc: `${stats.activeAlertsCount} Active Hijack Alerts`
        };
    }
  };

  const threatConfig = getThreatRingConfig();

  // Helper to extract hijacked seller name
  const getHijackedSellerName = (alert: Alert | null) => {
    if (!alert) return "Unknown Hijacker";
    return alert.deviationDetails?.hijacked?.sellerName || "Unknown Reseller";
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#070a13] font-sans text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Toast Notification HUD Banner */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 max-w-md p-4 rounded-xl border shadow-2xl backdrop-blur-md animate-in slide-in-from-top-4 duration-300 bg-slate-900/90 border-slate-800">
          <div className="flex-shrink-0">
            {notification.type === "success" && <CheckCircle className="w-6 h-6 text-emerald-400" />}
            {notification.type === "warning" && <AlertTriangle className="w-6 h-6 text-amber-400 animate-bounce" />}
            {notification.type === "error" && <AlertCircle className="w-6 h-6 text-red-500" />}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-sm text-slate-50">{notification.title}</h4>
            <p className="text-xs mt-0.5 text-slate-400 leading-normal">{notification.message}</p>
          </div>
          <button onClick={() => setNotification(null)} className="text-slate-500 hover:text-slate-300">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Database Setup Required HUD */}
      {!loading && products.length === 0 && !sandboxMode && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4">
          <div className="w-full max-w-lg p-8 rounded-2xl border bg-slate-900 border-slate-800 shadow-2xl text-center">
            <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
              <Database className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white mb-2">BrandArmor Database Required</h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Welcome to the BrandArmor Command Center. To begin tracking threats, initialize the Amazon single-table schema and populate mock test products on your DynamoDB instance.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleSeedDatabase}
                disabled={seeding}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 disabled:opacity-50 hover:cursor-pointer transition-all duration-200"
              >
                {seeding ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Provisioning DynamoDB Table...
                  </>
                ) : (
                  <>
                    <Database className="w-4 h-4" />
                    Initialize & Seed DynamoDB
                  </>
                )}
              </button>
              <button
                onClick={enableSandbox}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold hover:bg-slate-700 hover:cursor-pointer transition-all duration-200"
              >
                Run In-Browser Sandbox (No AWS Required)
              </button>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                <Terminal className="w-4 h-4" />
                <span>ENVIRONMENT DEPLOYMENT KEYWORDS</span>
              </div>
              <ul className="text-xs font-mono text-slate-400 space-y-1.5 list-disc pl-4">
                <li>AWS_ACCESS_KEY_ID & AWS_SECRET_ACCESS_KEY</li>
                <li>AWS_REGION (Defaults to us-east-1)</li>
                <li>DYNAMODB_TABLE_NAME (Defaults to BrandArmor)</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Header Panel */}
      <header className="sticky top-0 z-30 border-b bg-[#070a13]/85 border-slate-800/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-white">BrandArmor</h1>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">
                  v1.2.0-Production
                </span>
              </div>
              <p className="text-xs text-slate-400">Real-Time Amazon Seller Counterfeit Command Center</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {sandboxMode && (
              <div className="hidden md:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Info className="w-4 h-4" />
                <span>Running in Local Sandbox Mode</span>
              </div>
            )}
            
            <button
              onClick={handleSimulateDrift}
              disabled={simulating || loading}
              className="flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl border bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white transition-all disabled:opacity-50 hover:cursor-pointer shadow-lg"
            >
              <Cpu className={`w-4 h-4 ${simulating ? "animate-spin" : ""}`} />
              Simulate Listing Drift (Webhook)
            </button>

            <button
              onClick={() => fetchData(true)}
              disabled={loading}
              className="p-2.5 rounded-xl border bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-50 hover:cursor-pointer transition-all"
              title="Sync Telemetry"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Space */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex flex-col gap-8">
        
        {/* Sandbox Warning HUD Alert Bar */}
        {sandboxMode && (
          <div className="p-4 rounded-xl border flex items-center justify-between bg-amber-950/20 border-amber-900/50 text-amber-300">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <div className="text-xs md:text-sm">
                <span className="font-semibold">AWS Connection Status: Off-Grid.</span> Running in local sandbox. DynamoDB local environmental credentials were not detected.
              </div>
            </div>
            <button 
              onClick={handleSeedDatabase} 
              className="text-xs bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-lg text-amber-300 hover:bg-amber-500/25 transition-all hover:cursor-pointer font-medium"
            >
              Try AWS Sync
            </button>
          </div>
        )}

        {/* Telemetry Row */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Animated Threat Circle Card */}
          <div className="lg:col-span-1 p-6 rounded-2xl border bg-slate-900/40 border-slate-800/80 flex flex-col items-center justify-center text-center">
            <h3 className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-4">Threat Level HUD</h3>
            
            <div className="relative flex items-center justify-center w-36 h-36 mb-4">
              {/* Outer Glow Ring */}
              <div className={`absolute inset-0 rounded-full ${threatConfig?.bgClass} ${threatConfig?.glowClass}`} />
              
              {/* SVG Circle Drawing */}
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-slate-800"
                  strokeWidth="6"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className={`transition-all duration-1000 ease-in-out ${threatConfig?.colorClass}`}
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray="264"
                  strokeDashoffset={stats.threatLevel === "Clean" ? "0" : stats.threatLevel === "Warning" ? "88" : "176"}
                  strokeLinecap="round"
                />
              </svg>

              {/* Inner Status Icon */}
              <div className="absolute flex flex-col items-center justify-center">
                {stats.threatLevel === "Clean" && <CheckCircle className="w-10 h-10 text-emerald-400" />}
                {stats.threatLevel === "Warning" && <AlertTriangle className="w-10 h-10 text-amber-400" />}
                {stats.threatLevel === "Critical" && <AlertTriangle className="w-10 h-10 text-red-500 animate-pulse" />}
              </div>
            </div>

            <span className={`text-sm font-bold tracking-tight ${threatConfig?.colorClass}`}>
              {threatConfig?.title}
            </span>
            <span className="text-[11px] text-slate-400 mt-1 font-mono">{threatConfig?.desc}</span>
          </div>

          {/* Stats Metrics Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl border bg-slate-900/40 border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start text-slate-400">
                  <span className="text-xs uppercase font-mono tracking-wider">Monitored Catalog</span>
                  <Database className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-4xl font-extrabold tracking-tight text-white mt-4">{stats.totalProducts}</div>
              </div>
              <div className="text-[11px] text-slate-400 mt-2 border-t border-slate-800/60 pt-2 flex items-center justify-between">
                <span>Active ASIN Tracking</span>
                <span className="text-blue-400 font-semibold font-mono">100% Online</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border bg-slate-900/40 border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start text-slate-400">
                  <span className="text-xs uppercase font-mono tracking-wider">Active Hijacks</span>
                  <AlertTriangle className={`w-5 h-5 ${stats.activeAlertsCount > 0 ? "text-red-500 animate-pulse" : "text-slate-600"}`} />
                </div>
                <div className="text-4xl font-extrabold tracking-tight text-white mt-4">{stats.activeAlertsCount}</div>
              </div>
              <div className="text-[11px] text-slate-400 mt-2 border-t border-slate-800/60 pt-2 flex items-center justify-between">
                <span>Requires Intervention</span>
                <span className={`font-semibold font-mono ${stats.activeAlertsCount > 0 ? "text-red-400" : "text-emerald-400"}`}>
                  {stats.activeAlertsCount > 0 ? "Drift Alert Active" : "Clear System"}
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border bg-slate-900/40 border-slate-800/80 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start text-slate-400">
                  <span className="text-xs uppercase font-mono tracking-wider">Takedowns Executed</span>
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-4xl font-extrabold tracking-tight text-white mt-4">{stats.resolvedAlertsCount}</div>
              </div>
              <div className="text-[11px] text-slate-400 mt-2 border-t border-slate-800/60 pt-2 flex items-center justify-between">
                <span>Resolved This Month</span>
                <span className="text-emerald-400 font-semibold font-mono">+{stats.resolvedThisMonth}</span>
              </div>
            </div>

          </div>
        </section>

        {/* Dashboard Grid System */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Block: Monitored Products & Active Alerts feed (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Catalog Panel */}
            <div className="rounded-2xl border bg-slate-900/40 border-slate-800/80 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-800/80 bg-slate-900/60 flex items-center justify-between">
                <h3 className="font-semibold text-sm tracking-wide text-white">Monitored Amazon Catalog</h3>
                <span className="text-[11px] font-mono bg-slate-800 border border-slate-700 text-slate-400 px-2 py-0.5 rounded">
                  ASIN Level
                </span>
              </div>

              <div className="divide-y divide-slate-800/60 max-h-[360px] overflow-y-auto">
                {products.length === 0 ? (
                  <div className="p-6 text-center text-slate-500 text-xs font-mono">
                    No active ASIN catalog monitored. Initialize Database.
                  </div>
                ) : (
                  products.map((prod) => {
                    const isSelected = selectedProduct?.asin === prod.asin;
                    const hasAlert = prod.status === "Alert";
                    
                    return (
                      <button
                        key={prod.asin}
                        onClick={() => {
                          setSelectedProduct(prod);
                          const activeAlert = alerts.find(a => a.asin === prod.asin && a.status === "Active");
                          const anyAlert = alerts.find(a => a.asin === prod.asin);
                          setSelectedAlert(activeAlert || anyAlert || null);
                        }}
                        className={`w-full text-left p-4 hover:bg-slate-800/40 hover:cursor-pointer transition-all flex items-center justify-between gap-4 ${
                          isSelected ? "bg-slate-800/30 border-l-4 border-emerald-500" : "border-l-4 border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={prod.imageUrl}
                            alt={prod.title}
                            className="w-10 h-10 object-cover rounded bg-slate-950 border border-slate-800"
                          />
                          <div>
                            <div className="text-xs font-bold text-slate-300 font-mono tracking-wider">
                              {prod.asin}
                            </div>
                            <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 max-w-[200px] sm:max-w-xs">
                              {prod.title}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {hasAlert ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded bg-red-500/10 border border-red-500/30 text-red-400 animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                              HIJACKED
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                              <Check className="w-3 h-3" />
                              SAFE
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4 text-slate-600" />
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Live Incidents Alert Feed */}
            <div className="rounded-2xl border bg-slate-900/40 border-slate-800/80 overflow-hidden flex-1 flex flex-col">
              <div className="px-6 py-5 border-b border-slate-800/80 bg-slate-900/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <h3 className="font-semibold text-sm tracking-wide text-white">Live Intrusion Log</h3>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Real-Time Sync</span>
              </div>

              <div className="divide-y divide-slate-800/60 overflow-y-auto max-h-[300px] flex-1">
                {alerts.filter(a => a.status === "Active").length === 0 ? (
                  <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                    <CheckCircle className="w-8 h-8 text-emerald-500/30 mb-2" />
                    <p className="text-xs font-mono text-slate-500">Zero active brand integrity violations detected.</p>
                  </div>
                ) : (
                  alerts
                    .filter((a) => a.status === "Active")
                    .map((alert) => {
                      const isSelected = selectedAlert?.timestamp === alert.timestamp && selectedProduct?.asin === alert.asin;
                      return (
                        <button
                          key={alert.timestamp}
                          onClick={() => {
                            const prod = products.find(p => p.asin === alert.asin);
                            if (prod) setSelectedProduct(prod);
                            setSelectedAlert(alert);
                          }}
                          className={`w-full text-left p-4 hover:bg-slate-800/40 hover:cursor-pointer transition-all flex flex-col gap-2 ${
                            isSelected ? "bg-slate-800/25 border-l-4 border-red-500" : "border-l-4 border-transparent"
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 border border-red-500/30 text-red-400 uppercase font-mono">
                              {alert.alertType.replace("_", " ")}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500">
                              {formatDate(alert.timestamp)}
                            </span>
                          </div>
                          
                          <p className="text-xs text-slate-300 font-semibold line-clamp-2">
                            {alert.description}
                          </p>
                          
                          <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                            <span>ASIN: {alert.asin}</span>
                            <span className="text-red-400">By: {getHijackedSellerName(alert)}</span>
                          </div>
                        </button>
                      );
                    })
                )}
              </div>
            </div>

          </div>

          {/* Right Block: Content Comparison & Visual Diff (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-2xl border bg-slate-900/40 border-slate-800/80 overflow-hidden flex flex-col flex-1">
              
              <div className="px-6 py-5 border-b border-slate-800/80 bg-slate-900/60 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-semibold text-sm tracking-wide text-white">Listing Telemetry & Content Diff</h3>
                </div>
                {selectedProduct && (
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                    ASIN: {selectedProduct.asin}
                  </span>
                )}
              </div>

              {!selectedProduct ? (
                <div className="p-16 text-center flex-1 flex flex-col items-center justify-center text-slate-500">
                  <Shield className="w-12 h-12 text-slate-800 mb-3" />
                  <p className="text-sm font-mono">Select a product from the monitored list to view structural differences.</p>
                </div>
              ) : (
                <div className="p-6 flex-1 flex flex-col gap-6 overflow-y-auto max-h-[730px]">
                  
                  {/* Selected Listing details */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pb-5 border-b border-slate-800/60">
                    <div className="flex gap-4 items-center">
                      <img
                        src={selectedProduct.imageUrl}
                        alt={selectedProduct.title}
                        className="w-16 h-16 object-cover rounded-xl bg-slate-950 border border-slate-800"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white line-clamp-1 max-w-sm sm:max-w-md">
                          {selectedProduct.title}
                        </h4>
                        <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400 font-mono">
                          <span>ASIN: {selectedProduct.asin}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            Authorized Price: <strong className="text-slate-200">${selectedProduct.price}</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    {selectedProduct.status === "Alert" && selectedAlert && (
                      <button
                        onClick={() => setDrawerOpen(true)}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-500 transition-all flex items-center justify-center gap-2 hover:cursor-pointer shadow-lg animate-pulse"
                      >
                        <FileText className="w-4 h-4" />
                        Initiate Takedown
                      </button>
                    )}
                  </div>

                  {/* Drift Evaluation status */}
                  {selectedProduct.status === "Clean" ? (
                    <div className="p-4 rounded-xl border bg-emerald-500/5 border-emerald-500/20 text-emerald-400 flex gap-3 text-xs leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <div>
                        <span className="font-semibold block text-slate-200">Listing Integrity Intact</span>
                        The live listing on Amazon.com completely aligns with your authorized brand catalog. Zero drift or unauthorized pricing adjustments detected.
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {/* Active Alert Detail banner */}
                      {selectedAlert && (
                        <div className="p-4 rounded-xl border bg-red-500/5 border-red-500/20 text-red-400 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
                          <div className="flex gap-3">
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <div>
                              <span className="font-semibold block text-slate-200 uppercase tracking-wider font-mono">
                                COMPROMISED: {selectedAlert.alertType.replace("_", " ")}
                              </span>
                              <span className="text-slate-400 mt-0.5 block">{selectedAlert.description}</span>
                            </div>
                          </div>
                          <span className="text-[10px] px-2.5 py-1 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-mono flex-shrink-0">
                            {selectedAlert.severity.toUpperCase()}
                          </span>
                        </div>
                      )}

                      {/* Side-by-Side Visual Diff Panel */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Column 1: Authorized Content */}
                        <div className="rounded-xl border bg-slate-950 border-slate-800 p-4 flex flex-col gap-3">
                          <div className="text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Authorized Brand Content
                          </div>

                          <div className="space-y-3.5 mt-2">
                            <div>
                              <span className="text-[10px] font-mono text-slate-500 block">PRODUCT TITLE</span>
                              <p className={`text-xs mt-1 leading-normal ${selectedAlert?.alertType === "TITLE_DRIFT" ? "diff-highlight-add p-1.5 rounded" : "text-slate-300"}`}>
                                {selectedProduct.title}
                              </p>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono text-slate-500 block">AUTHORIZED MIN PRICE</span>
                              <p className={`text-sm font-semibold mt-1 ${selectedAlert?.alertType === "PRICE_DROP" ? "diff-highlight-add px-2 py-0.5 rounded inline-block" : "text-slate-200"}`}>
                                ${selectedProduct.price}
                              </p>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono text-slate-500 block">KEY BULLET POINTS</span>
                              <ul className="text-xs space-y-2 mt-1.5 text-slate-400 pl-4 list-disc">
                                {selectedProduct.bulletPoints.map((bp, idx) => {
                                  const isAffected = selectedAlert?.alertType === "BULLET_POINTS_DRIFT" && idx === 1;
                                  return (
                                    <li key={idx} className={isAffected ? "diff-highlight-add p-1.5 rounded text-slate-300" : ""}>
                                      {bp}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Column 2: Live Hijacked Content */}
                        <div className="rounded-xl border bg-slate-950 border-slate-800 p-4 flex flex-col gap-3">
                          <div className="text-[10px] font-mono font-bold tracking-wider text-red-400 uppercase flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            Live Compromised Listing
                          </div>

                          <div className="space-y-3.5 mt-2">
                            <div>
                              <span className="text-[10px] font-mono text-slate-500 block">LIVE TITLE (EXTERNAL DETECTED)</span>
                              <p className={`text-xs mt-1 leading-normal ${selectedAlert?.alertType === "TITLE_DRIFT" ? "diff-highlight-del p-1.5 rounded" : "text-slate-300"}`}>
                                {selectedAlert?.alertType === "TITLE_DRIFT" 
                                  ? selectedAlert.deviationDetails.hijacked.title 
                                  : selectedProduct.title}
                              </p>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono text-slate-500 block">LIVE BUYBOX PRICE</span>
                              <div className="flex items-center gap-2 mt-1">
                                <p className={`text-sm font-semibold ${selectedAlert?.alertType === "PRICE_DROP" ? "diff-highlight-del px-2 py-0.5 rounded inline-block" : "text-slate-200"}`}>
                                  ${selectedAlert?.alertType === "PRICE_DROP" 
                                    ? selectedAlert.deviationDetails.hijacked.price 
                                    : selectedProduct.price}
                                </p>
                                {selectedAlert?.alertType === "PRICE_DROP" && (
                                  <span className="text-[10px] font-mono text-red-400 flex items-center gap-0.5">
                                    <TrendingDown className="w-3.5 h-3.5" />
                                    -58% Drop
                                  </span>
                                )}
                              </div>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono text-slate-500 block">LIVE BULLET POINTS</span>
                              <ul className="text-xs space-y-2 mt-1.5 text-slate-400 pl-4 list-disc">
                                {selectedProduct.bulletPoints.map((bp, idx) => {
                                  const isAffected = selectedAlert?.alertType === "BULLET_POINTS_DRIFT" && idx === 1;
                                  return (
                                    <li key={idx} className={isAffected ? "diff-highlight-del p-1.5 rounded text-slate-400" : ""}>
                                      {isAffected && selectedAlert?.deviationDetails?.hijacked?.bulletPoints 
                                        ? selectedAlert.deviationDetails.hijacked.bulletPoints[1]
                                        : bp}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Unauthorized Reseller metadata info banner */}
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span>Hijacker: <strong className="text-red-400">{getHijackedSellerName(selectedAlert)}</strong></span>
                        <span>Buybox: <strong className="text-red-400">Yes (Altered)</strong></span>
                        <span>Location: External Marketplace Proxy</span>
                      </div>
                    </div>
                  )}

                  {/* Alert History Section */}
                  <div className="pt-6 border-t border-slate-800/60 mt-2">
                    <h5 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-4">Historical Incidents (ASIN Telemetry)</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-500 font-mono text-[10px] uppercase">
                            <th className="py-2">Timestamp</th>
                            <th className="py-2">Incident type</th>
                            <th className="py-2 text-center">Status</th>
                            <th className="py-2 text-right">Takedown record</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-850">
                          {alerts.filter(a => a.asin === selectedProduct.asin).length === 0 ? (
                            <tr>
                              <td colSpan={4} className="py-4 text-center text-slate-600 font-mono text-[10px]">
                                No historical incidents logged for this ASIN.
                              </td>
                            </tr>
                          ) : (
                            alerts
                              .filter((a) => a.asin === selectedProduct.asin)
                              .map((a, idx) => (
                                <tr key={idx} className="text-slate-300">
                                  <td className="py-3 font-mono text-[10px] text-slate-500">
                                    {formatDate(a.timestamp)}
                                  </td>
                                  <td className="py-3 font-medium">
                                    {a.alertType.replace("_", " ")}
                                  </td>
                                  <td className="py-3 text-center">
                                    {a.status === "Active" ? (
                                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                                        UNRESOLVED
                                      </span>
                                    ) : (
                                      <span className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        RESOLVED
                                      </span>
                                    )}
                                  </td>
                                  <td className="py-3 text-right font-mono text-[10px] text-slate-500">
                                    {a.takedownSubmittedAt ? (
                                      <span className="text-emerald-400 inline-flex items-center gap-1">
                                        <Check className="w-3 h-3" />
                                        FILED
                                      </span>
                                    ) : (
                                      <span className="text-slate-600">NONE</span>
                                    )}
                                  </td>
                                </tr>
                              ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              )}
            </div>
          </div>

        </section>

      </main>

      {/* Slide-out Takedown Drawer Container (Fixed overlay) */}
      <div className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        
        {/* Backdrop overlay */}
        <div 
          onClick={() => setDrawerOpen(false)}
          className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
        />

        {/* Drawer slide-out panel */}
        <div className={`absolute inset-y-0 right-0 max-w-xl w-full bg-[#090e1a] border-l border-slate-800 shadow-2xl flex flex-col transition-all duration-300 transform ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
          
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-slate-800/80 bg-slate-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-red-400" />
              <h3 className="font-bold text-base text-white">Initiate Takedown Report</h3>
            </div>
            <button 
              onClick={() => setDrawerOpen(false)}
              className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:cursor-pointer transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Form Body */}
          {selectedProduct && selectedAlert && (
            <form onSubmit={handleTakedownSubmit} className="flex-1 flex flex-col overflow-hidden">
              
              <div className="p-6 flex-1 overflow-y-auto space-y-5">
                
                {/* Visual HUD Alert Banner in Drawer */}
                <div className="p-4 rounded-xl border bg-slate-950 border-slate-800 text-xs">
                  <div className="font-bold text-slate-200 mb-2 font-mono uppercase tracking-wider text-[10px] text-red-400">
                    HIJACK COMPROMISE TELEMETRY
                  </div>
                  <div className="space-y-1.5 text-slate-400 font-mono text-[11px]">
                    <div>ASIN: {selectedProduct.asin}</div>
                    <div>Violation: {selectedAlert.alertType.replace("_", " ")}</div>
                    <div>Hijacking Entity: {getHijackedSellerName(selectedAlert)}</div>
                    <div>MSRP: ${selectedProduct.price} | Live Hijack: ${selectedAlert.deviationDetails?.hijacked?.price || selectedProduct.price}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  
                  {/* Infringement Type Select */}
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">INFRINGEMENT ACTION CLASSIFICATION</label>
                    <select
                      value={legalForm.infringementType}
                      onChange={(e) => setLegalForm({ ...legalForm, infringementType: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Buybox Hijacking & Price Manipulation">Buybox Hijacking & Price Manipulation</option>
                      <option value="Trademark Infringement (Logo/Brand Abuse)">Trademark Infringement (Logo/Brand Abuse)</option>
                      <option value="Copyright Piracy (Copied Images/Titles)">Copyright Piracy (Copied Images/Titles)</option>
                      <option value="Patent Abuse & Counterfeit Hardware Sales">Patent Abuse & Counterfeit Hardware Sales</option>
                    </select>
                  </div>

                  {/* Brand Owner Contact Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">LEGAL RIGHTS OWNER</label>
                      <input
                        type="text"
                        required
                        value={legalForm.brandName}
                        onChange={(e) => setLegalForm({ ...legalForm, brandName: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                        placeholder="e.g. BrandArmor Ltd"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1.5">AUTHORIZED MERCHANT</label>
                      <input
                        type="text"
                        required
                        value={legalForm.authorizedSeller}
                        onChange={(e) => setLegalForm({ ...legalForm, authorizedSeller: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                        placeholder="e.g. BrandArmor Official Store"
                      />
                    </div>
                  </div>

                  {/* Representative Full Name */}
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">COMPLAINANT REPRESENTATIVE FULL NAME</label>
                    <input
                      type="text"
                      required
                      value={legalForm.contactName}
                      onChange={(e) => setLegalForm({ ...legalForm, contactName: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                      placeholder="e.g. Sarah Jenkins, Director of Brand Integrity"
                    />
                  </div>

                  {/* Live Legal Document Preview Box */}
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-1.5">AUTOMATED LEGAL DMCA COMPLIANCE EXPORT PREVIEW</span>
                    <div className="w-full h-44 p-3 bg-slate-950 border border-slate-800 rounded-xl overflow-y-auto text-[10px] font-mono text-slate-500 leading-normal select-all">
                      AMAZON INTELLECTUAL PROPERTY COMPLIANT REPORT
                      {"\n"}======================================================
                      {"\n"}DATE: {new Date().toLocaleDateString()}
                      {"\n"}TO: Amazon Seller Performance / Legal Department
                      {"\n"}
                      {"\n"}SUBJECT: NOTICE OF INTELLECTUAL PROPERTY INFRINGEMENT (DMCA / HIJACKING)
                      {"\n"}
                      {"\n"}Monitored Brand: {legalForm.brandName || "[Brand Name]"}
                      {"\n"}Authorized Rights Owner: {legalForm.contactName || "[Representative Name]"}
                      {"\n"}Affiliation: {legalForm.signature || "[Authorized Signee]"}
                      {"\n"}
                      {"\n"}HIJACKED PRODUCT IDENTIFIERS:
                      {"\n"}- Product ASIN: {selectedProduct.asin}
                      {"\n"}- Target Listing Title: {selectedProduct.title}
                      {"\n"}- Reference Listing URL: https://www.amazon.com/dp/{selectedProduct.asin}
                      {"\n"}
                      {"\n"}UNAUTHORIZED INFRINGING PARTY:
                      {"\n"}- Merchant Name: {getHijackedSellerName(selectedAlert)}
                      {"\n"}- Infringement Type: {legalForm.infringementType}
                      {"\n"}
                      {"\n"}DETAILED INFRACTION TELEMETRY:
                      {"\n"}Listing modification anomaly detected in catalog scan. 
                      {"\n"}Live Buybox price dropped below MSRP minimum. Authorized state: ${selectedProduct.price} | Live state: ${selectedAlert.deviationDetails?.hijacked?.price || selectedProduct.price}.
                      {"\n"}
                      {"\n"}LEGAL DECLARATION:
                      {"\n"}Under penalty of perjury, I declare that I am the authorized representative of the brand rights owner. The information in this report is accurate, and the use of the complained material is not authorized by the copyright/trademark owner, its agent, or the law.
                      {"\n"}
                      {"\n"}Digitally Signed: {legalForm.signature || "[Digital Signature]"}
                      {"\n"}IP Address Logging Key: BRANDARMOR-SECURE-KEY-HASH
                    </div>
                  </div>

                  {/* Digital Signature */}
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1.5">
                      ELECTRONIC SIGNATURE (Type "/First Last/")
                    </label>
                    <input
                      type="text"
                      required
                      value={legalForm.signature}
                      onChange={(e) => setLegalForm({ ...legalForm, signature: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                      placeholder="e.g. /Sarah Jenkins/"
                    />
                  </div>

                  {/* Agree Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      checked={legalForm.agreeToTerms}
                      onChange={(e) => setLegalForm({ ...legalForm, agreeToTerms: e.target.checked })}
                      className="w-4 h-4 rounded bg-slate-950 border border-slate-800 text-emerald-500 focus:ring-0 hover:cursor-pointer mt-0.5"
                    />
                    <label htmlFor="agree" className="text-[11px] leading-relaxed text-slate-400 hover:cursor-pointer">
                      I certify under penalty of perjury that I hold the legal copyright, trademark, or representation authorizations for the brand and ASIN catalog declared in this report.
                    </label>
                  </div>

                </div>

              </div>

              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-slate-800 bg-slate-900/60 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 text-xs hover:cursor-pointer transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submittingTakedown}
                  className="flex-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 hover:cursor-pointer transition-all disabled:opacity-50 text-xs flex items-center justify-center gap-2"
                >
                  {submittingTakedown ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Filing Infringement Report...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      Submit Legal Takedown
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>

    </div>
  );
}
