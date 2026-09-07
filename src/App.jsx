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
  //planes by default is holding all planes data in the array. setPlanes used to update planes.
  //useState is put here to add and remove planes, but not implemented.
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

  //Filtering mechanism.
  //Array destructuring, filter is current string value and setFilter is used to change the string.
  //Current Filter value is 'All'
  const [filter, setFilter] = useState('All');
  
  //Light and Dark array destructuring to give me current value and fn to update it
  //isDarkTheme is boolean
  //isDarkTheme starts with True, forcing default dark mode.
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const [sortByRating, setSortByRating] = useState(false);

  //loop through each plane in the planes array and .filter builds a new array called filteredPlanes. 
  const filteredPlanes = planes.filter((plane) => {
    //Show 'All'
    if (filter === 'All') {
      return true;
    }
    //Check for either Available or Unavailable OR plane or biplane or propeller
    //Avaiability and engineType are all encompassing categories because availabilty never conflict with engineType as filtered only by 1 filter at a time.
    return plane.availability === filter || plane.engineType === filter;
  });

  return (
    //Light and Dark mode. isDarkTheme true? If yes, set 'app dark-theme' as classname.
    //Had a bug here where i wrote app.dark-theme and app.light-theme. the . only applies in CSS Class selector.
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
