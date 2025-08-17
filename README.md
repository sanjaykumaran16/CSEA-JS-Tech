# EventVista - Panoramic Event Discovery Platform

A cutting-edge, immersive event discovery platform that offers a panoramic view of the world's most exciting events. Built with modern web technologies, EventVista transforms how people discover, explore, and engage with events across technology, design, business, and beyond.

## Features

- 🌟 **Immersive Experience**: Panoramic design that transports users into a world of endless possibilities
- 🎯 **Smart Discovery**: AI-powered event recommendations and intelligent filtering
- 🚀 **Next-Gen Tech Stack**: React 18, Vite, Node.js, MongoDB with cutting-edge optimizations
- 🎨 **Visual Masterpiece**: Stunning gradients, fluid animations, and modern design language
- 📱 **Universal Access**: Seamlessly responsive across all devices and screen sizes
- 🔍 **Advanced Event Management**: Rich event profiles with multimedia content and real-time updates
- 📧 **Smart Notifications**: Intelligent newsletter system with personalized content
- 🌐 **Social Integration**: Deep social media integration and community features
- 🎭 **Interactive Elements**: Engaging hover effects, micro-interactions, and smooth transitions

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with animations and gradients
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## Project Structure

```
WEB-PAGE/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Navbar.jsx   # Navigation bar with dropdown
│   │   │   ├── Hero.jsx     # Hero section
│   │   │   ├── Events.jsx   # Events display section
│   │   │   └── Footer.jsx   # Footer with multiple sections
│   │   ├── App.jsx          # Main application component
│   │   └── App.css          # Global styles
│   └── package.json
├── backend/                  # Node.js backend application
│   ├── server.js            # Express server with MongoDB
│   └── package.json
└── README.md
```

## Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd WEB-PAGE
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/events_db
PORT=5000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Start MongoDB service
mongod
```

### 5. Run the Application

#### Start Backend (Terminal 1)
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:5000`

#### Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

### 6. Seed the Database
To populate the database with sample events, make a POST request to:
```bash
curl -X POST http://localhost:5000/api/seed
```

Or use the provided script:
```bash
cd backend
npm run seed
```

## API Endpoints

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create a new event
- `POST /api/seed` - Seed database with sample events

### Sample Event Structure
```json
{
  "name": "Chennai Code Carnival",
  "description": "A vibrant celebration of coding culture in the heart of Chennai! Join us for workshops, coding challenges, and networking with the city's top tech talent.",
  "date": "2025-09-15",
  "image": "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500",
  "category": "Technology",
  "location": "Chennai, Tamil Nadu"
}
```

## Features Breakdown

### Navigation Bar
- **Logo**: EventVista with gradient text effect
- **Dropdown Menu**: More options with hover effects
- **Responsive**: Mobile hamburger menu
- **Smooth Animations**: Hover effects and transitions

### Hero Section
- **Gradient Background**: Beautiful purple-blue gradient
- **Interactive Cards**: Hover effects and animations
- **Statistics**: Display key metrics
- **Call-to-Action**: Primary and secondary buttons

### Events Section
- **Dynamic Loading**: Fetch events from MongoDB
- **Responsive Grid**: Auto-fit grid layout
- **Event Cards**: Image, title, description, date, category
- **Interactive Elements**: Hover effects and buttons

### Footer
- **Multiple Sections**: Logo, links, categories, support, newsletter
- **Social Media**: SVG icons with hover effects
- **Newsletter Form**: Email subscription input
- **Responsive Layout**: Grid-based responsive design

## Customization

### Colors
The website uses a consistent color scheme:
- **Primary**: `#667eea` to `#764ba2` (gradient)
- **Accent**: `#ffd700` (golden yellow)
- **Text**: `#333` (dark gray)
- **Background**: `#f8f9fa` (light gray)

### Styling
- All components have their own CSS files
- Global styles in `App.css`
- Responsive breakpoints: 768px (tablet), 480px (mobile)
- Smooth transitions and hover effects

## Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Set environment variables
# Deploy to your preferred platform
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- **Lazy Loading**: Images load on demand
- **Optimized CSS**: Efficient selectors and minimal reflows
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Responsive Images**: Optimized for different screen sizes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the repository.

---

**Built with ❤️ using React, Node.js, and MongoDB**
