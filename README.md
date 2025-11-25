---

# 📝 Team & Task Management API (NestJS)

A backend API built with **NestJS**, **TypeScript**, and **MongoDB** for managing teams, users, and tasks with clean architecture and modular design.

---

## 🚀 Features

### 👥 **Teams**
- Create and manage teams  
- Add/remove members  
- View all teams  

### 👤 **Users**
- Create and manage users  
- Assign users to tasks  
- View user-based tasks  

### 🗂 **Tasks**
- Create tasks  
- Update tasks  
- Assign tasks to users  
- Change task status (Todo, In-Progress, Done)  
- List tasks by team or user  

---

## 🏗 Tech Stack

- **NestJS** (Node.js Framework)
- **TypeScript**
- **MongoDB** (Mongoose)
- **Jest** for testing
- **ESLint + Prettier** for code formatting

---

## 📦 Project Setup

Install dependencies:

```bash
$ npm install


## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# coverage
$ npm run test:cov
```

## 🔐 Environment Variables
Create a `.env` file in the root directory with:


MONGO_URI=<your-mongo-db-url>
JWT_SECRET=<your-secret>
PORT=3000

:

📬 Postman Collection

A complete Postman collection is included in this project to help you easily test all API endpoints such as Auth, Users, Teams, and Tasks.

You can find it here:
postman/task-manager.postman_collection.json

This collection includes:

-Login to get JWT token

-Create/Fetch/Delete Users

-Create Teams & Add Members

-Create Tasks, Update Tasks, Assign Tasks

-Fetch Tasks with Assignee details

To use it:

1.Open Postman

2.Click Import

3.Select the file from the postman folder

4.Set the environment variable:

    baseUrl = http://localhost:3000

    token = <your JWT token>

This will allow you to test all routes quickly, including fetching tasks, creating teams, and assigning users to tasks.



## License

This project is open-source and available under the MIT License.
