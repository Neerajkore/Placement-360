# Placement360 - Placement Readiness Platform

A modern, scalable frontend application for tracking student placement readiness, DSA practice, and faculty analytics.

## 🚀 Features

### For Students
- **Placement Readiness Dashboard**: Track your overall placement preparation score
- **DSA Progress Tracking**: Monitor problem-solving across LeetCode, Codeforces, and HackerRank
- **Assignment Management**: View and track assigned tasks with deadlines
- **Role Recommendations**: Get AI-powered career suggestions based on performance
- **Recent Activity**: Track your latest problem-solving achievements

### For Faculty
- **Class Overview**: Monitor total students, average readiness scores, and DSA completion
- **Student Analytics**: Detailed performance metrics for each student
- **Assignment Management**: Create and assign tasks with difficulty levels and deadlines
- **Performance Tracking**: View individual student progress across difficulty levels

## 🛠️ Tech Stack

- **React** - UI library with functional components
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and dev server

## 📦 Installation

1. Navigate to the project directory:
```bash
cd placement360
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🔐 Demo Credentials

### Student Login
- **Email**: student@placement360.com
- **Password**: student123

### Faculty Login
- **Email**: faculty@placement360.com
- **Password**: faculty123

## 📁 Project Structure

```
placement360/
├── src/
│   ├── components/
│   │   └── ui/              # shadcn/ui components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── badge.jsx
│   │       ├── progress.jsx
│   │       ├── table.jsx
│   │       ├── input.jsx
│   │       └── tabs.jsx
│   ├── context/
│   │   └── AuthContext.jsx  # Authentication context
│   ├── data/
│   │   └── mockData.js      # Mock data for demo
│   ├── lib/
│   │   └── utils.js         # Utility functions
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── StudentDashboard.jsx
│   │   └── FacultyDashboard.jsx
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json
```

## 🎨 Design Philosophy

- **Modern & Clean**: Professional UI suitable for educational SaaS
- **Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Accessible**: Built with semantic HTML and ARIA attributes
- **Performant**: Optimized with Vite for fast load times
- **Scalable**: Modular component architecture for easy expansion

## 🔄 Routing

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Landing page | Public |
| `/login` | Login page with role selection | Public |
| `/student/dashboard` | Student dashboard | Protected (Student) |
| `/faculty/dashboard` | Faculty dashboard | Protected (Faculty) |

## 🎯 Key Components

### UI Components (shadcn/ui)
- **Button**: Multiple variants (default, outline, ghost, etc.)
- **Card**: Container for content sections
- **Badge**: Status indicators with color variants
- **Progress**: Visual progress bars
- **Table**: Data tables with sorting
- **Input**: Form input fields
- **Tabs**: Tabbed navigation

### Pages
- **LandingPage**: Marketing page with features and CTAs
- **LoginPage**: Role-based authentication
- **StudentDashboard**: Student metrics and assignments
- **FacultyDashboard**: Class overview and task management

## 📊 Mock Data

The application uses realistic mock data including:
- 8 sample students with varying performance levels
- DSA statistics across difficulty levels
- Platform-specific problem counts
- Assignment tracking with deadlines
- Role recommendations based on performance

## 🔒 Authentication

- Role-based authentication using React Context
- Protected routes with automatic redirection
- Separate dashboards for students and faculty
- No backend required - uses local state

## 🚀 Future Enhancements

- Backend API integration
- Real-time data synchronization
- Advanced analytics and charts
- Resume builder integration
- Mock interview scheduler
- Peer comparison features
- Notification system
- Dark mode toggle

## 📝 Notes

- This is a **frontend-only** implementation
- All data is **mock data** stored in local state
- No actual authentication or API calls
- Ready for backend integration

## 🤝 Contributing

This is a demo project. For production use:
1. Integrate with a backend API
2. Add proper authentication (JWT, OAuth)
3. Implement real-time updates
4. Add comprehensive testing
5. Set up CI/CD pipeline

## 📄 License

MIT License - feel free to use this project for learning or as a starting point for your own application.

---

Built with ❤️ using React, Tailwind CSS, and shadcn/ui
