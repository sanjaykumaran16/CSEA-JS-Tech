const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/events_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Event Schema
const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, default: '' },
    category: { type: String, default: 'General' },
    location: { type: String, required: true }
});

const Event = mongoose.model('Event', eventSchema);

// Routes
app.get('/api/events', async (req, res) => {
    try {
        const events = await Event.find().sort({ date: 1 });
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/events', async (req, res) => {
    try {
        const event = new Event(req.body);
        const savedEvent = await event.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Seed initial data
app.post('/api/seed', async (req, res) => {
    try {
        const initialEvents = [
            {
                name: "Chennai Code Carnival",
                description: "A vibrant celebration of coding culture in the heart of Chennai! Join us for workshops, coding challenges, and networking with the city's top tech talent. From AI workshops to blockchain development, there's something for every developer.",
                date: "2025-09-15",
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500",
                category: "Technology",
                location: "Chennai, Tamil Nadu"
            },
            {
                name: "Bangalore Design Fusion",
                description: "Experience the perfect blend of creativity and innovation in Bangalore's premier design event. Master the art of modern UI/UX through interactive workshops, design sprints, and collaborative projects that push creative boundaries.",
                date: "2025-10-20",
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500",
                category: "Design",
                location: "Bangalore, Karnataka"
            },
            {
                name: "Trichy Startup Summit",
                description: "Discover the entrepreneurial spirit of Trichy! Connect with visionary founders, angel investors, and industry mentors. From idea validation to scaling strategies, learn the secrets of building successful startups in emerging markets.",
                date: "2025-11-05",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
                category: "Business",
                location: "Trichy, Tamil Nadu"
            }
        ];

        await Event.deleteMany({});
        const events = await Event.insertMany(initialEvents);
        res.json({ message: 'Database seeded successfully', events });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
