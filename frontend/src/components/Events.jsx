import './Events.css'

const Events = ({ events, loading }) => {
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  // Hardcoded event data to avoid database seeding
  const hardcodedEvents = [
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

  if (loading) {
    return (
      <section className="events" id="events">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Discover amazing events happening around you</p>
          </div>
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading events...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="events" id="events">
      <div className="container">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <p>Discover amazing events happening around you</p>
        </div>
        
        <div className="events-grid">
          {hardcodedEvents.map((event, index) => {
            return (
            <div key={index} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.name} />
                <div className="event-category">{event.category}</div>
              </div>
              
              <div className="event-content">
                <h3 className="event-title">{event.name}</h3>
                <p className="event-description">{event.description}</p>
                
                <div className="event-meta">
                  <div className="event-date">
                    <span className="date-icon">📅</span>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="event-location">
                    <span className="location-icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="event-actions">
                  <button className="btn-primary">Register Now</button>
                  <button className="btn-secondary">Learn More</button>
                </div>
              </div>
            </div>
            );
          })}
        </div>
        
        <div className="events-cta">
          <h3>Can't find what you're looking for?</h3>
          <p>Browse our full calendar or create your own event</p>
          <div className="cta-buttons">
            <button className="btn-primary">View All Events</button>
            <button className="btn-secondary">Create Event</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
