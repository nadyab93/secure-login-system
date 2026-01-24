# Secure Login System
A simple, beginner-friendly secure login system built using Node.js, Express, SQLite, and bcrypt. It lets users register, log in, and access a protected welcome page, all while keeping passwords safe with hashing.

### Demo Video
Check out the quick demo showing how registering, logging in, and the welcome page work:
<video src="https://github.com/user-attachments/assets/40ec540e-7bea-4d4b-9a49-c0692855a686" width="100%" controls>
</video>

---

## What It Does
- Users can create accounts and store passwords securely with hashing
- Login validates credentials and redirects to a welcome page
- Shows basic full-stack functionality with a backend, database, and frontend
- Simple HTML + CSS forms keep things easy to use and understand

---

## Tech Used
- Backend: Node.js + Express
- Database: SQLite
- Security: bcrypt for password hashing
- Frontend: HTML + CSS
- Extras: express-session for managing user sessions, body-parser for handling forms

---

## Getting Started
- Clone this repo: git clone 
- Go to the project folder: cd secure-login-system
- Install dependencies: npm install
- Start the server: node server.js
- Open a browser and go to: http://localhost:3000/

---

## How It Works
1. Register: New users can make an account, and passwords are automatically hashed
2. Login: Credentials are checked against the database, and only valid users get access
3. Welcome Page: A simple page for logged-in users
4. Extras That Could Be Added

---

## Limit login attempts for extra security
- Add a logout button for sessions
- Make the frontend look nicer with CSS
- Expand it into a bigger web app with more user features

---

## Why This Project Is Fun
- Shows practical coding skills in a real project, not just theory
- Builds a full-stack system from frontend to database
- Has a working demo to play with and see it in action
- Beginner-friendly, but still demonstrates concepts used in real-world security

---

## License
This project is licensed under the MIT License.
