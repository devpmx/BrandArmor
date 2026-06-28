
# 🛡️ BrandArmor

### Real-Time Counterfeit & Brand Protection Command Center for Amazon Sellers

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![AWS DynamoDB](https://img.shields.io/badge/AWS-DynamoDB-FF9900?style=for-the-badge&logo=amazon-aws)](https://aws.amazon.com/dynamodb)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![AWS Budget](https://img.shields.io/badge/AWS%20Cost-%3C%241%2Fmo-10B981?style=for-the-badge&logo=amazon-aws)](https://aws.amazon.com/dynamodb/pricing)

> **A B2B SaaS cybersecurity command center** that monitors Amazon product listings in real-time, detects unauthorized counterfeit hijackers, and enables instant DMCA/IP takedown filings — all backed by a cost-optimized AWS DynamoDB single-table schema.

</div>

---

## 📸 Screenshots

### Main Command Center Dashboard
![BrandArmor Dashboard](https://raw.githubusercontent.com/your-username/brand-armor/main/docs/dashboard_main.png)

> *Dark obsidian command center with animated threat ring, monitored catalog panel, live intrusion log, and side-by-side listing diff visualizer.*

---

### 🔴 Live Threat Ring & Drift Detection
![Threat Ring Critical State](https://raw.githubusercontent.com/your-username/brand-armor/main/docs/threat_ring_critical.png)

> *The Global Threat Ring pulsing in neon crimson when active hijacks are detected. Instantly transitions from Emerald → Amber → Red based on live DynamoDB data.*

---

### 📄 DMCA Takedown Drawer
![DMCA Takedown Drawer](https://raw.githubusercontent.com/your-username/brand-armor/main/docs/takedown_drawer.png)

> *Slide-out legal drawer auto-populates a formal Amazon IP Infringement Notice. Supports digital signature capture, legal certification, and live DynamoDB state sync on submit.*

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🔴 **Animated Threat Ring** | SVG ring with CSS glow transitions — Emerald (Safe) → Amber (Warning) → Neon Crimson (Critical) |
| 🔍 **Visual Content Diff** | Side-by-side split showing Authorized vs. Hijacked listing with green/red highlights |
| ⚡ **Drift Engine Webhook** | Simulates a real-time external Amazon catalog scan, writes new alert to DynamoDB |
| 📄 **DMCA Takedown Drawer** | Auto-populated legal template with digital signature, fires POST to API on submit |
| 📊 **Live Telemetry Cards** | Real-time stats for monitored ASINs, active hijacks, and resolved takedowns |
| 🛡️ **Browser Sandbox Mode** | Fully functional demo mode — no AWS credentials required |
| ☁️ **AWS DynamoDB Backend** | Single-table design, PAY_PER_REQUEST billing — costs **< $1/month** |
| 🔐 **Production-Ready API** | 5 typed Next.js API routes with AWS SDK v3 and error handling |

---

## 🏗️ System Architecture

![Architecture Diagram](https://raw.githubusercontent.com/your-username/brand-armor/main/docs/architecture_diagram.png)

```
BrandArmor/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    ← Root layout + SEO metadata
│   │   ├── page.tsx                      ← Full dashboard (Client Component)
│   │   ├── globals.css                   ← Dark theme + glow animations
│   │   └── api/
│   │       ├── db/seed/route.ts          ← Create table + seed mock data
│   │       ├── dashboard/stats/route.ts  ← Global threat metrics
│   │       ├── dashboard/products/route.ts ← All ASINs + alert history
│   │       ├── cron/check-listings/route.ts ← Drift simulation engine
│   │       └── alerts/takedown/route.ts  ← DMCA submission handler
│   └── lib/
│       └── dynamodb.ts                   ← AWS SDK v3 client + helpers
├── package.json
└── README.md
```

---

## 🗄️ DynamoDB Single-Table Schema

> **Table Name:** `BrandArmor` | **Billing:** `PAY_PER_REQUEST` (On-Demand)

| PK | SK | Item Type | Key Fields |
|---|---|---|---|
| `USER#100` | `METADATA` | 📊 Global Analytics | `threatLevel`, `activeAlertsCount`, `totalProducts`, `resolvedAlertsCount` |
| `USER#100` | `PRODUCT#<ASIN>` | 📦 Monitored Listing | `title`, `price`, `imageUrl`, `bulletPoints`, `status` |
| `PRODUCT#<ASIN>` | `ALERT#<Timestamp>` | 🚨 Hijack Alert | `alertType`, `severity`, `status`, `deviationDetails`, `dmcaDetails` |

### Alert Types

| Alert Type | Description | Severity |
|---|---|---|
| `PRICE_DROP` | Buybox price slashed below MSRP by unauthorized seller | 🔴 Critical |
| `TITLE_DRIFT` | Product title altered to SEO-stuffed or degraded copy | 🟡 Warning |
| `BULLET_POINTS_DRIFT` | Key selling points deleted or replaced by generic text | 🔴 Critical |

---

## 🌐 API Reference

### `GET /api/db/seed`
Creates the DynamoDB table if it doesn't exist and seeds it with 5 mock products and 3 active hijacking alerts.

```json
{
  "success": true,
  "message": "Database seeded successfully",
  "details": { "table": "BrandArmor", "productsCount": 5, "alertsCount": 3 }
}
```

### `GET /api/dashboard/stats`
Returns global threat telemetry from the `METADATA` item.

```json
{
  "success": true,
  "data": {
    "threatLevel": "Critical",
    "activeAlertsCount": 3,
    "totalProducts": 5,
    "resolvedAlertsCount": 12,
    "resolvedThisMonth": 4,
    "lastChecked": "2026-06-26T22:40:35.059Z"
  }
}
```

### `GET /api/dashboard/products`
Returns all monitored products with their full alert history (parallel queries for performance).

```json
{
  "success": true,
  "products": [...],
  "alerts": [...]
}
```

### `GET /api/cron/check-listings`
Triggers the drift simulation engine — picks a clean product, injects an unauthorized modification, writes a new alert to DynamoDB, escalates global Threat Level.

```json
{
  "success": true,
  "message": "Drift event simulated successfully",
  "details": {
    "affectedAsin": "B0892XSPLT",
    "alertType": "TITLE_DRIFT",
    "globalThreatLevel": "Critical"
  }
}
```

### `POST /api/alerts/takedown`
Resolves an active alert — marks it as `Resolved`, saves DMCA details, resets product to `Clean`, recalculates threat level.

```json
// Request body
{
  "asin": "B07ZPKN6SS",
  "timestamp": 1750000000000,
  "dmcaDetails": { "contactName": "Sarah Jenkins", "signature": "/Sarah Jenkins/" }
}
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16.2 (App Router, TypeScript) |
| **Styling** | Tailwind CSS v4, Vanilla CSS Animations |
| **Icons** | Lucide React |
| **Database** | AWS DynamoDB (Single-table, PAY_PER_REQUEST) |
| **AWS SDK** | `@aws-sdk/client-dynamodb` + `@aws-sdk/lib-dynamodb` v3 |
| **Runtime** | Bun 1.2 |
| **Deployment** | Vercel (Serverless Functions) |

---

## 🛠️ Local Development

### Prerequisites
- [Bun](https://bun.sh) 1.x installed
- AWS Account with DynamoDB access (or use sandbox mode — no AWS needed)

### 1. Clone & Install

```bash
git clone https://github.com/your-username/brand-armor.git
cd brand-armor
bun install
```

### 2. Configure Environment Variables

Create a `.env.local` file at the project root:

```env
# Required for AWS DynamoDB connection
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=us-east-1

# DynamoDB table name (will be auto-created on first seed)
DYNAMODB_TABLE_NAME=BrandArmor
```

> 💡 **No AWS?** Skip `.env.local` entirely — the app automatically switches to **Browser Sandbox Mode** with full feature parity.

### 3. Run the Development Server

```bash
bun run dev
```

Navigate to [http://localhost:3000](http://localhost:3000).

### 4. Seed the Database

Hit the seed endpoint once to create the DynamoDB table and populate mock data:

```bash
# PowerShell
Invoke-RestMethod -Uri "http://localhost:3000/api/db/seed"

# curl
curl http://localhost:3000/api/db/seed
```

---

## 🚀 Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "feat: BrandArmor brand protection command center"
git remote add origin https://github.com/your-username/brand-armor.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework will be **auto-detected** as Next.js

### 3. Set Environment Variables

In **Vercel Dashboard → Project → Settings → Environment Variables**:

| Variable | Value |
|---|---|
| `AWS_ACCESS_KEY_ID` | Your IAM User access key |
| `AWS_SECRET_ACCESS_KEY` | Your IAM User secret key |
| `AWS_REGION` | `us-east-1` (or your preferred region) |
| `DYNAMODB_TABLE_NAME` | `BrandArmor` |

### 4. Seed Production Database

After your first deployment, hit:
```
https://your-app.vercel.app/api/db/seed
```

> 🔐 **Security Tip:** Create a dedicated IAM user with only `dynamodb:*` permissions scoped to the `BrandArmor` table ARN for least-privilege access.

---

## 💰 AWS Cost Estimate

| Service | Usage | Monthly Cost |
|---|---|---|
| DynamoDB On-Demand (Reads) | ~10,000 reads/mo | ~$0.03 |
| DynamoDB On-Demand (Writes) | ~5,000 writes/mo | ~$0.03 |
| Vercel Hobby Plan | Hosting + Serverless Functions | **$0.00** |
| **Total** | | **🟢 < $1 / month** |

> `PAY_PER_REQUEST` billing means **zero cost when idle** — no provisioned throughput charges. Perfectly optimized for the $50 AWS budget.

---

## 🔐 IAM Policy (Minimal Permissions)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:CreateTable",
        "dynamodb:DescribeTable",
        "dynamodb:PutItem",
        "dynamodb:GetItem",
        "dynamodb:Query",
        "dynamodb:UpdateItem"
      ],
      "Resource": "arn:aws:dynamodb:*:*:table/BrandArmor"
    }
  ]
}
```

---

## 🎯 Roadmap

- [ ] 🔔 Real-time WebSocket alerts using AWS API Gateway
- [ ] 📧 Email notifications via Amazon SES on critical drift events
- [ ] 🤖 AI-powered counterfeit image detection using Amazon Rekognition
- [ ] 📈 Historical analytics charts (30-day hijack trends)
- [ ] 🌍 Multi-marketplace support (Amazon EU, JP, CA)
- [ ] 👥 Multi-brand / multi-seller account management

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

**Built for the AWS Hackathon** 🏆 | Powered by **Next.js + AWS DynamoDB** ⚡

*Protecting Amazon sellers from brand hijackers, one ASIN at a time.*

</div>
