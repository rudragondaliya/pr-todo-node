# Employee & Task Management System

A simple **Node.js + Express + EJS** web application to manage employees and their tasks.
**Live Demo:** [https://pr-todo-node.onrender.com](https://pr-todo-node.onrender.com)

---

## 🚀 Features

* **Employee Management**: Add, edit, and delete employees.
* **Task Management**: Assign tasks to employees, edit tasks, change task status, or delete them.
* **Status Toggle**: Switch task status between *Pending → In Progress → Completed*.
* **EJS Views**: Uses server-side rendering for dynamic pages.
* **Bootstrap UI**: Clean and responsive design.
* **Data Storage**: In-memory arrays (no database required).

---

## 🛠 Tech Stack

* **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
* **Frontend**: [EJS Templates](https://ejs.co/)
* **Styling**: [Bootstrap 5](https://getbootstrap.com/)
* **Deployment**: [Render](https://render.com/)

---

## 📂 Project Structure

```
.
├── public/           # Static files (CSS, JS, Images)
├── views/            # EJS templates (index.ejs, form.ejs, table.ejs, taskForm.ejs)
├── index.js          # Main server file
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the server**:

   ```bash
   node index.js
   ```

   The server will start at **[http://localhost:9000](http://localhost:9000)**

---

## 🔗 Routes

### **Employees**

* `GET /form` – Add new employee form.
* `POST /` – Save new employee.
* `GET /table` – View all employees.
* `GET /edit/:id` – Edit employee.
* `POST /edit/:id` – Update employee.
* `GET /delete/:id` – Delete employee.

### **Tasks**

* `GET /taskForm` – Add new task.
* `POST /tasks` – Save new task.
* `POST /tasks/status/:id` – Toggle task status.
* `GET /tasks/edit/:id` – Edit task.
* `POST /tasks/edit/:id` – Update task.
* `POST /tasks/delete/:id` – Delete task.


## 📜 License

This project is licensed under the MIT License.
