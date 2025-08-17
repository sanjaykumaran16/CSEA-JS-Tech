import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover Amazing
            <span className="hero-highlight"> Events</span>
          </h1>
          <p className="hero-description">
            Join the most exciting events in technology, design, and business. 
            Connect with like-minded professionals and expand your network.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn primary">Explore Events</button>
            <button className="hero-btn secondary">Learn More</button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-icon">🎯</div>
            <h3>Tech Events</h3>
            <p>Latest in AI & Web Dev</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">🎨</div>
            <h3>Design Workshops</h3>
            <p>UI/UX Mastery</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">🚀</div>
            <h3>Startup Meetups</h3>
            <p>Network & Grow</p>
          </div>
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Events</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10K+</span>
          <span className="stat-label">Attendees</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Cities</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
