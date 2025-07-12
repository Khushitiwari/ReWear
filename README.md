# 👗 ReWear — Give Clothes a Second Life ♻️

**ReWear** is a community platform that lets you **exchange unused clothes** through direct swaps or a point-based system. Reduce textile waste, embrace sustainable fashion, and give your wardrobe a fresh purpose.

![ReWear Screenshot](./assets/screenshot.png)

---

## 🌟 Features

- 👚 Upload and list unused clothes
- 🔁 Swap directly with others or use a point system
- 🔍 Browse items by category or type
- 🔐 User authentication (Appwrite)
- 🖥️ Responsive and modern UI

---

## 🚀 Tech Stack

| Category        | Tech Used             |
|-----------------|------------------------|
| Frontend        | React.js, Tailwind CSS |
| Backend         | Appwrite               |
| Hosting         | Netlify / Vercel       |
| Version Control | Git & GitHub           |

---

## 🛠️ Getting Started

### ✅ Prerequisites

- Node.js & npm
- Git

### 🚀 Setup Instructions

bash
# Clone the repository
git clone https://github.com/your-username/rewear.git
cd rewear

## Install dependencies
npm install

# Start local dev server
npm run dev
Then open http://localhost:5173 or http://localhost:3000 (based on your setup).
 
##🔐 Appwrite Configuration
🧾 1. Create .env file
env
Copy
Edit
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
🌐 2. Add Web Platform in Appwrite Console
Go to:

arduino
Copy
Edit
Appwrite Console → Your Project → Settings → Platforms → Add Web
Add the following hostnames:

arduino
Copy
Edit
http://localhost:5173
https://your-site-name.vercel.app
https://your-site-name.netlify.app
⚠️ Make sure you match the port and platform you're using.



-----------
## 🧑‍🤝‍🧑 Team Member
	
👩‍💻 Khooshi Tiwari
👩‍💻 Soha Patel
👩‍💻 Shreya Mishra
-----------

## 📸 Screenshots
![Home Page](<img width="1898" height="911" alt="Screenshot 2025-07-12 164914" src="https://github.com/user-attachments/assets/3ef6307a-e48e-4bb9-bff4-7c55c3a1e067" />)
![LogIn Page](<img width="1896" height="907" alt="Screenshot 2025-07-12 165004" src="https://github.com/user-attachments/assets/e768fe24-64ee-40b8-8bed-5548ae7d5f80" />)
![SignUp Page](<img width="1891" height="907" alt="Screenshot 2025-07-12 165013" src="https://github.com/user-attachments/assets/f4875c68-8fe6-45c6-a7a1-57dd795b3d69" />)
![Browse by categories](<img width="1887" height="855" alt="Screenshot 2025-07-12 164941" src="https://github.com/user-attachments/assets/f7b90c4b-cab4-4383-94fe-5fba574e593d" />)





