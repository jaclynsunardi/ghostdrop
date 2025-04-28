# GhostDrop

GhostDrop is a minimalist file sharing platform for local and online transfers — no accounts, no clutter, just fast and secure

# Demo

## Screenshots

## Features
- Drag-and-drop file sharing
- Local network transfers (Wi-Fi / LAN)
- Internet sharing via ecrypted room codes
- Temporary hosting (optional cloud storage)
- Light real-time status notifications
- Instant send/receive UX — no clunky uploads

## Tech Stack
- Frontend: Next.js + TailwindCSS
- Backend: Node.js + Express
- Real-Time: WebSockets (socket.io)
- Database: MongoDB (for optional metadata)
- Hosting: Vercel + Render
- Extra: ESLint, Prettier, Github Actions

## Installation (Local Development)

```bash
# Clone the repo
git clone https://github.com/jaclynsunardi/ghostdrop.git

# Install dependencies
cd ghostdrop
npm install

# Run the app locally
npm run dev