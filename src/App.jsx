//Project Title: Mission 5 Fighter Planes Collection Dashboard
import { useState } from 'react';
import './App.css';

//Child component to render card
function Plane(props) {
  return (
    <div className="plane-card">
      <img src={props.image} className="plane-image" />
      <h3>{props.title}</h3>
      <p className="country-origin">{props.country}</p>
      <p
        className={
          props.availability === 'Available'
            ? 'status-available'
            : 'status-unavailable'
        }
      >
        {props.availability}
      </p>
      <p className="plane-rating">Rating: {props.rating}/5</p>
    </div>
  );
}

//Parent component
function App() {
  const [planes, setPlanes] = useState([
    {
      title: 'F-22 Raptor',
      image: '/f221.png',
      country: 'USA',
      rating: 5,
      engineType: 'Jet',
      availability: 'Available',
    },
    {
      title: 'F-35 Lightning II',
      image: '/f351.png',
      country: 'USA',
      rating: 4,
      engineType: 'Jet',
      availability: 'Unavailable',
    },
    {
      title: 'Su-57 Felon',
      image: '/felon1.png',
      country: 'Russia',
      rating: 4,
      engineType: 'Jet',
      availability: 'Available',
    },
    {
      title: 'Saab JAS 39 Gripen',
      image: '/gripen1.png',
      country: 'Sweden',
      rating: 4,
      engineType: 'Jet',
      availability: 'Available',
    },
    {
      title: 'Sopwith Camel',
      image: '/camel1.png',
      country: 'UK',
      rating: 3,
      engineType: 'Biplane',
      availability: 'Unavailable',
    },
    {
      title: 'Spitfire',
      image: '/spitfire.png',
      country: 'UK',
      rating: 5,
      engineType: 'Propeller',
      availability: 'Available',
    },
  ]);

  const [filter, setFilter] = useState('All');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const filteredPlanes = planes.filter((plane) => {
    if (filter === 'All') {
      return true;
    }
    return plane.availability === filter || plane.engineType === filter;
  });

  return (
    //Light and Dark mode
    <div className={isDarkTheme ? 'app dark-theme' : 'app light-theme'}>
      {/*Background image*/}
      <div className="bg-image"></div>
      {/*Hero Content*/}
      <header className="hero">
        <img src="/logo1.png" className="hero-logo" />
        <div>
          <h1>SecureAir</h1>
          <p className="hero-subtitle">Secure the skies, anytime, anywhere.</p>
        </div>
      </header>

      {/*Filter Buttons*/}
      <div className="header-bar">
        <div className="filter-buttons">
          <button onClick={() => setFilter('All')}>All</button>
          <button onClick={() => setFilter('Available')}>Available</button>
          <button onClick={() => setFilter('Unavailable')}>Unavailable</button>
          <button onClick={() => setFilter('Jet')}>Jet</button>
          <button onClick={() => setFilter('Biplane')}>Biplane</button>
          <button onClick={() => setFilter('Propeller')}>Propeller</button>
        </div>

        <div className="right-controls">
          <div className="plane-count">
            {filteredPlanes.length}{' '}
            {filteredPlanes.length === 1 ? 'plane' : 'planes'} on display
          </div>
          <button
            className="theme-toggle"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            {isDarkTheme ? '☀' : '☾'}
          </button>
        </div>
      </div>

      <div className="plane-grid">
        {filteredPlanes.map((plane) => (
          <Plane
            title={plane.title}
            image={plane.image}
            country={plane.country}
            engineType={plane.engineType}
            availability={plane.availability}
            rating={plane.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
