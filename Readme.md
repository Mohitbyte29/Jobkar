# 💼 JobKar — Find Jobs & Internships

A modern full-stack job board platform designed to help students and professionals discover jobs and internships effortlessly.

---

## 🚀 Features

- 🔍 **Search Jobs & Internships** — Browse listings by role, location, or company
- 🔐 **User Authentication** — Secure register & login with hashed passwords (Argon2)
- 📋 **Job Listings** — Post and manage job/internship opportunities
- 📄 **Apply for Jobs** — Submit applications directly through the platform
- 🛡️ **Input Validation** — Zod-powered schema validation on all inputs
- 📦 **RESTful API** — Clean and structured API endpoints

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Web framework |
| Prisma ORM | Database management |
| MySQL | Database |
| Argon2 | Password hashing |
| Zod | Input validation |
| JWT | Authentication tokens |

---

## 📁 Project Structure

```
JobKar/
├── prisma/
│   └── schema.prisma         # Database schema
│   ├── controllers/
│   │   └── auth.controllers.js
│   ├── services/
│   │   └── auth.services.js
│   ├── validators/
│   │   └── auth.validators.js
│   ├── routes/
│   │   └── auth.routes.js
│   └── app.js              # Entry point
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MySQL
- npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/MohitByte29/JobKar.git
cd JobKar
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```env
DATABASE_URL="mysql://user:password@localhost:5432/jobboard"
JWT_SECRET="your_jwt_secret_key"
PORT=4000
```

4. **Run Prisma migrations**
```bash
npx prisma migrate dev --name init
```

5. **Start the server**
```bash
npm run dev
```

Server runs at `http://localhost:4000`

---

## 📡 API Endpoints

### Auth Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Job Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/jobs` | Get all job listings |
| GET | `/api/jobs/:id` | Get a single job |
| POST | `/api/jobs` | Post a new job (auth required) |
| PUT | `/api/jobs/:id` | Update a job (auth required) |
| DELETE | `/api/jobs/:id` | Delete a job (auth required) |

### Application Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/jobs/:id/apply` | Apply for a job |
| GET | `/api/applications` | Get user's applications |

---

## 🔐 Auth Flow

```
POST /api/auth/register
Body: { name, email, password }

POST /api/auth/login
Body: { email, password }
Response: { token }
```

All protected routes require:
```
Authorization: Bearer <token>
```

---

## ✅ Validation Rules

| Field | Rules |
|---|---|
| Name | Min 3, Max 50 characters |
| Email | Valid email format, Max 100 characters |
| Password | Min 8 chars, at least one letter and one number |

---

## 🌱 Future Improvements

- [ ] Frontend with React.js
- [ ] Email verification on registration
- [ ] Resume upload for applications
- [ ] Admin dashboard for managing listings
- [ ] Filter by job type (Remote, On-site, Hybrid)
- [ ] Pagination for job listings
- [ ] OAuth (Google / GitHub login)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@MohitByte29](https://github.com/MohitByte29)
- LinkedIn: [mohit-upadhyay-395a14311](https://linkedin.com/in/mohit-upadhyay-395a14311/)

---

> Built with ❤️ to help people find their dream jobs and internships.