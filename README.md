

Copy
Edit
# Team Collaboration Dashboard

A simple and responsive dashboard application for managing tasks, messaging, and scheduling. Built using **React**, **Vite**, and **React Router**, this project includes a light/dark mode toggle for a customizable user experience.

---

## Features

- **Tasks Page**: Add, view, and mark tasks as completed.
- **Messages Page**: View and send messages in a clean interface.
- **Calendar Page**: A responsive calendar for selecting and displaying dates.
- **Light/Dark Mode**: Toggle between light and dark themes for better usability.
- **Responsive Design**: Ensures the app works across various screen sizes.

---

## Installation

Follow these steps to get the project up and running:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd team-collaboration-dashboard
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Open your browser and go to:

arduino
Copy
Edit
http://localhost:5173
Usage
Tasks: Add tasks, hover over them to mark them as completed, and view task details.
Messages: Interact with the messaging interface to send and view messages.
Calendar: Navigate and select dates; see the selected date displayed dynamically.
Theme Toggle: Use the "Light Mode/Dark Mode" button in the navigation bar to switch themes.
Project Structure
css
Copy
Edit
team-collaboration-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   ├── context/
│   │   ├── ThemeContext.jsx
│   ├── pages/
│   │   ├── Tasks.jsx
│   │   ├── Messages.jsx
│   │   ├── Calendar.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
├── package.json
└── README.md
Technologies Used
React: A library for building user interfaces.
Vite: A fast development build tool.
React Router: For managing routing in the application.
CSS Variables: For easy theme customization.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch:
bash
Copy
Edit
git checkout -b feature-name
Commit your changes:
bash
Copy
Edit
git commit -m "Description of your changes"
Push the branch:
bash
Copy
Edit
git push origin feature-name
Open a Pull Request.
License
This project is licensed under the MIT License.

