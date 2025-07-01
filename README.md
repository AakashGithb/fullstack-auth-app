Full Stack Auth Project – React + Node.js + TypeScript

This is a simple full stack project that includes user registration and login using React, Node.js, and MongoDB.

📁 Project Structure

/frontend  → Frontend built with Vite + React + TypeScript  
/backend  → Backend built with Node.js + Express + Prisma  

Tech Stack

Frontend
. React (Vite)
. TypeScript
. Zod
. React Hook Form
. React Query

 Backend
. Node.js
. Express
. TypeScript
. Prisma ORM
. MongoDB (local)

How to Run the Project

 1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

2. Start the Backend

cd backend
npm install
npx prisma generate
npx prisma db push
npm run dev
Make sure MongoDB is running locally
Check .env contains your DB connection string

3. Start the Frontend

cd frontend
npm install
npm run dev