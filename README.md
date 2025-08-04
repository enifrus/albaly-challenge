# 📊 Albaly Challenge Dashboard

A modern, responsive dashboard for business insights built with **Next.js**, **Tailwind CSS**, and **TypeScript**. The dashboard provides real-time metrics, trends, and activity data to help businesses stay on top of their performance.

## 🚀 Project Features

- 🧾 Summary cards for Total Sales, Active Customers, Inventory Status
- 📉 Monthly performance chart (Jan–Jul) with revenue trends
- 🌎 Regional sales performance with animated progress bars
- 🔄 Real-time customer activity feed (filtered by today)
- 💡 Smooth skeleton + animated loading states
- ✅ Fully responsive layout with sidebar and navbar

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/albary-dashboard.git
cd albary-dashboard

### 2. Install dependencies
npm install
# or
yarn

### 3. Run the development server
npm run dev
# or
yarn dev

Visit http://localhost:3000 to view the app.

## 📦 Tech Stack

- **Next.js 14**
- **React 18**
- **Tailwind CSS 3**
- **TypeScript**
- **Lucide Icons**
- **Framer Motion**
- **Recharts** (for charts)
- **Next Fonts (Google Fonts)**

---

## 💡 Assumptions

- Data is currently mocked and fetched via `/api` routes for demo purposes.
- `recentActivity` only shows events that occurred **today**.
- Monthly revenue is hardcoded for **January–July**, with percent change calculated against previous month.
- Font setup uses `next/font/google` with `Geist Mono`.

---