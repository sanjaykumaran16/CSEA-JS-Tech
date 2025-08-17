import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Footer from './components/Footer'

function App() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [seeding, setSeeding] = useState(false)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events')
      const data = await response.json()
      setEvents(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching events:', error)
      setLoading(false)
    }
  }

  const seedDatabase = async () => {
    setSeeding(true)
    try {
      const response = await fetch('http://localhost:5000/api/seed', {
        method: 'POST'
      })
      const data = await response.json()
      console.log('Database seeded:', data)
      // Refresh events after seeding
      await fetchEvents()
    } catch (error) {
      console.error('Error seeding database:', error)
    } finally {
      setSeeding(false)
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      {/* Seed Database Button - Remove this after testing */}
      {events.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          background: '#f8f9fa',
          margin: '2rem 0'
        }}>
          <h3>No Events Found</h3>
          <p>Click the button below to populate the database with sample events:</p>
          <button 
            onClick={seedDatabase}
            disabled={seeding}
            style={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '25px',
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            {seeding ? 'Seeding Database...' : 'Seed Database with Sample Events'}
          </button>
        </div>
      )}
      
      <Events events={events} loading={loading} />
      <Footer />
    </div>
  )
}

export default App
