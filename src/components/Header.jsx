// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   // const [hoveredItem, setHoveredItem] = useState(null);

//   // const handleMouseEnter = (item) => setHoveredItem(item);
//   // const handleMouseLeave = () => setHoveredItem(null);

//   // const linkStyle = (item) => ({
//   //   color: hoveredItem === item ? '#4C8055' : 'white',
//   //   textDecoration: hoveredItem === item ? 'underline' : 'none',
//   //   transition: 'color 0.3s ease-in-out',
//   // });
//   return (
//     <header style={styles.header}>
//       <div style={styles.logo}>PLANTVISION</div>
//       <nav>
//         <ul style={styles.navList}>
//           <li style={styles.navItem}><Link to="/" style={styles.link}>Home</Link></li>
//           <li style={styles.navItem}><Link to="/gardenia" style={styles.link}>Gardenia</Link></li>
//           <li style={styles.navItem}><Link to="/library" style={styles.link}>Library</Link></li>
//           <li style={styles.navItem}><Link to="/floraquest" style={styles.link}>Floraquest</Link></li> 
//         </ul>
//       </nav>
//       <div style={styles.userIcon}>
//         <img src="/profile.png" alt="user" style={styles.icon} />
//       </div>
//     </header>
//   );
// };

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '20px 60px',
//     backgroundColor: '#101B12',
//     zIndex: 1000,
//     position: 'fixed', // Fixes the navbar at the top
//     top: 0,            
//     width: '100%',     
//   },
//   logo: {
//     fontSize: '24px',
//     color: 'white',
//     fontWeight: 'bold',
//     marginLeft: '10px', // Adjust margin if needed
//   },
//   navList: {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '20px',
//     margin: 0,
//     padding: 0,
//   },
//   navItem: {
//     fontSize: '24px',
//     padding: '0 10px',
//   },
//   link: {
//     color: 'white',
//     textDecoration: 'none',
//     cursor: 'pointer',
//   },
//   icon: {
//     width: '40px', // Set width of the user icon
//     height: '40px', // Set height of the user icon
//   },
// };

// export default Header;


import React from 'react';//added hover effect with header.css
import { Link } from 'react-router-dom';
import '../header.css'; // Import the CSS file

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>PLANTVISION</div>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/gardenia" className="nav-link">
              Gardenia
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/library" className="nav-link">
              Library
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/floraquest" className="nav-link">
              Floraquest
            </Link>
          </li>
        </ul>
      </nav>
      <div style={styles.userIcon}>
        <img src="/profile.png" alt="user" style={styles.icon} />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 60px',
    backgroundColor: '#101B12',
    zIndex: 1000,
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  logo: {
    fontSize: '24px',
    color: 'white',
    fontWeight: 'bold',
    marginLeft: '10px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: '24px',
    padding: '0 10px',
  },
  icon: {
    width: '40px',
    height: '40px',
  },
};

export default Header;
