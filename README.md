BlogIt — Full-stack Blog App
A simple blog platform where users can sign up/sign in, create posts with cover images, and comment on posts. Built with Node.js, Express, EJS, MongoDB/Mongoose, Multer, JWT cookies, Bootstrap.

Features
User auth with JWT in HTTP-only cookies (custom middleware attaches req.user)

Create/read blog posts with image uploads (Multer → public/uploads/)

Comments on posts; author avatar/name via populate

Server-rendered UI (EJS) + Bootstrap layout

Basic input hardening (trim, ObjectId validation), proper middleware order

Tech Stack
Backend: Node.js, Express, Mongoose

Views: EJS, Bootstrap 5

Auth: JWT (cookie), cookie-parser

Uploads: Multer (disk storage)

Config: dotenv

Getting Started
Prerequisites
Node.js 18+ and npm

MongoDB running locally (or MongoDB Atlas)

1) Clone & install
bash
Copy
Edit
git clone <your-repo-url>
cd blog-app
npm install
2) Environment variables
Create a .env in the project root:

env
Copy
Edit
MONGO_URL=mongodb://localhost:27017/bloggify
JWT_SECRET=replace_with_a_long_random_string
PORT=8000
At the top of index.js:

js
Copy
Edit
require('dotenv').config();
Sanity check (optional):

js
Copy
Edit
console.log('MONGO_URL ->', process.env.MONGO_URL);
3) Create uploads folder
Multer writes to ./public/uploads/. Make sure it exists:

bash
Copy
Edit
mkdir -p public/uploads
4) Run
bash
Copy
Edit
# if you have a dev script with nodemon
npm run dev

# or plain node
npm start
# or
node index.js
App will start on http://localhost:8000 (or your PORT).

Folder Structure
pgsql
Copy
Edit
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
Routes (Quick Reference)
Home / Blogs
GET / — List all blogs

GET /blog/add-new — Render “new blog” form

POST /blog/ — Create blog (Multer field: coverImage)

GET /blog/:id — View a single blog (populates createdBy)

POST /blog/comment/:blogId — Add a comment to a blog

Auth (examples)
GET /user/signin — Sign in page

POST /user/signin — Sign in (sets token cookie)

GET /user/signup — Sign up page

POST /user/signup — Create account

(optional) POST /user/logout — Clear cookie

The auth middleware reads the JWT from the token cookie and sets req.user / res.locals.user.
