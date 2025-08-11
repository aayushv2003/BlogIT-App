<div align="center">

# BlogIt — Full‑stack Blog App

A simple blog platform where users can sign up/sign in, create posts with cover images, and comment on posts.

<a><img src="https://img.shields.io/badge/Node.js-18%2B-brightgreen" /></a>
<a><img src="https://img.shields.io/badge/Express-5-black" /></a>
<a><img src="https://img.shields.io/badge/MongoDB-Mongoose-green" /></a>
<a><img src="https://img.shields.io/badge/View-EJS-blue" /></a>
<a><img src="https://img.shields.io/badge/UI-Bootstrap%205-7952B3" /></a>


</div>

---

## Overview

**BlogIt** is a classic, server‑rendered web app built with **Node.js, Express, EJS, MongoDB/Mongoose, Multer, JWT cookies, and Bootstrap**.

Key capabilities:
- User auth with **JWT** stored in **HTTP‑only cookies** (custom middleware attaches `req.user`/`res.locals.user`)
- Create/read blog posts with **image uploads** (Multer → `public/uploads/`)
- **Comments** on posts; author avatar + name rendered via **Mongoose `populate`**
- Clean, responsive UI with Bootstrap layout
- Input hardening (trim, **ObjectId** validation) and correct middleware order

---

## Tech Stack

- **Backend:** Node.js, Express, Mongoose  
- **Views:** EJS, Bootstrap 5  
- **Auth:** JWT (cookie) + `cookie-parser`  
- **Uploads:** Multer (disk storage)  
- **Config:** `dotenv`

---

## Getting Started

### Prerequisites
- Node.js **18+** and npm
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

At the **top** of `index.js` (before reading any `process.env`):
```js
require('dotenv').config();
```

Sanity check (optional):
```js
console.log('MONGO_URL ->', process.env.MONGO_URL);
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
node index.js
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
│  ├─ blog.js
│  ├─ comment.js
│  └─ user.js
├─ routes/
│  ├─ blog.js
│  └─ user.js
├─ middlewares/
│  └─ authentication.js  # checkForAuthenticationCookie('token')
├─ index.js
├─ package.json
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

> The auth middleware reads the JWT from the **`token`** cookie and sets `req.user` / `res.locals.user`.

---

## Screenshots

<p align="center">
  <!-- Replace with your own images -->
  <img src="screenshots/home.png" alt="Home" width="48%">
  <img src="screenshots/blog.png" alt="Blog Detail" width="48%">
</p>
<p align="center">
  <img src="screenshots/signin.png" alt="Signin" width="32%">
  <img src="screenshots/create.png" alt="Create Post" width="32%">
  <img src="screenshots/comment.png" alt="Comments" width="32%">
</p>



<div align="center">
  <sub>Thank You.</sub>
</div>
