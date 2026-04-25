# 📝 NoteFlow - Modern Note Taking Application

> A sleek, modern note-taking application built with Next.js, featuring a beautiful dark theme interface and seamless user authentication.

## 🌟 Key Features

- 🔐 **Secure Authentication** - User registration, login, and JWT-based authentication
- 📝 **Note Management** - Create, read, update, and delete notes with ease
- 🎨 **Modern Dark Theme** - Beautiful gradient-based dark interface with vibrant colors
- 📱 **Responsive Design** - Fully responsive layout that works on all devices
- ⚡ **Real-time Updates** - Instant note synchronization and updates
- 🔄 **State Management** - Efficient state management with React hooks and context
- 🎯 **User-Friendly UI** - Intuitive interface with smooth animations and transitions

## 🛠️ Tech Stack

### Frontend Technologies
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development environment
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern React state management
- **Axios** - HTTP client for API requests

### Backend Integration
- **RESTful API** - Node.js backend running on port 5001
- **JWT Authentication** - Secure token-based authentication
- **Database** - Data persistence layer
- **Prisma ORM** - Modern database toolkit

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing pipeline
- **Next.js Dev Server** - Hot reload development environment
- **Git** - Version control system

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, pnpm, or bun package manager
- Backend API running on `http://localhost:5001`


### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5001
```

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 5. Open Application
Navigate to [http://localhost:3000](http://localhost:3000) in your browser.


## 🔧 API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `GET /api/verify` - Token verification

### Notes
- `GET /api/notes` - Get all user notes
- `POST /api/notes` - Create new note
- `PUT /api/notes/:id` - Update existing note
- `DELETE /api/notes/:id` - Delete note

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue, Green, and Gray gradients
- **Background**: Dark theme (`gray-900`, `gray-800`)
- **Text**: White and vibrant gradient colors
- **Accent**: Purple, Pink, Yellow, Orange for highlights

### UI Components
- Glass morphism effects
- Smooth animations and transitions
- Gradient text effects
- Responsive grid layouts
- Interactive hover states

## 🔐 Authentication Flow

1. **Registration**: User creates account with name, email, and password
2. **Login**: User authenticates and receives JWT token
3. **Token Storage**: JWT stored in localStorage
4. **Auto-verification**: Token verified on app load
5. **Protected Routes**: API calls include Authorization header

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Axios](https://axios-http.com/) - HTTP client library
- [React Icons](https://react-icons.org/) - Icon library

## 📞 Support

For support, please email pyaebhonen4@gmail.com or create an issue on GitHub.

---

**Built with ❤️ using Next.js and modern web technologies**
