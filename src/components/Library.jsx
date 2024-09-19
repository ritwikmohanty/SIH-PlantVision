// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from './Header';

// const Library = () => {
//   const [bookmarkedPlants, setBookmarkedPlants] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [hoveredPlant, setHoveredPlant] = useState(null);

//   const plantData = [
//     { name: 'Tulsi', system: 'Ayurveda', description: 'Tulsi is revered in Ayurveda for its ability to promote balance in the body, often used for respiratory conditions and immunity boosting.', route: '/library/tulsi', image: 'tulsi.jpg' },
//     { name: 'Aloe Vera', system: 'Ayurveda', description: 'Aloe Vera is known for its soothing, healing properties, especially in skincare. It is also used to aid digestion.', route: '/library/aloe-vera', image: 'Aloevera.jpg' },
//     { name: 'Ashwagandha', system: 'Ayurveda', description: 'Ashwagandha is an adaptogen, helping the body manage stress. It is also believed to boost energy and improve concentration.', route: '/library/ashwagandha', image: '/ashwagandha.jpg' },
//     { name: 'Gotu-kola', system: 'Ayurveda', description: 'Gotu-kola is prized for its ability to enhance cognitive function and promote skin health. It is used in anti-aging and wound healing.', route: '/library/goti-kola', image: '/gotu.jpg' },
//     { name: 'Lemon Grass', system: 'Ayurveda', description: 'Lemon Grass is commonly used for digestive issues, and its refreshing scent is known to relieve stress and anxiety.', route: '/library/lemon-grass', image: '/lemongrass.jpg' },
//     { name: 'Peppermint', system: 'Naturopathy', description: 'Peppermint has cooling properties and is used to treat digestive ailments like bloating and indigestion. It also soothes headaches.', route: '/library/peppermint', image: '/Peppermint.jpg' },
//     { name: 'Neem', system: 'Siddha', description: 'Neem is renowned for its antibacterial and antifungal properties. It is used for skincare and detoxification.', route: '/library/neem', image: '/Neem.jpg' },
//     { name: 'Amla', system: 'Ayurveda', description: 'Amla is rich in Vitamin C and antioxidants, used for boosting immunity, promoting hair health, and enhancing digestion.', route: '/library/amla', image: '/amla.jpg' },
//     { name: 'Ajwain', system: 'Unani', description: 'Ajwain seeds are traditionally used to improve digestion and treat colds. Its seeds are often used in culinary practices.', route: '/library/ajwain', image: '/Ajwain.jpg' },
//     { name: 'Fennel', system: 'Unani', description: 'Fennel is valued for its digestive properties and ability to relieve bloating and gas. It is also used in culinary dishes.', route: '/library/fennel', image: '/Fennel.jpg' },
//     { name: 'Cinnamon', system: 'Unani', description: 'Cinnamon is widely used for its antioxidant properties and ability to help regulate blood sugar levels.', route: '/library/cinnamon', image: '/Cinnamon.jpg' },
//     { name: 'Sandalwood', system: 'Unani', description: 'Sandalwood is revered for its aromatic properties, commonly used in skincare for its anti-inflammatory benefits.', route: '/library/sandalwood', image: '/Sandalwood.jpg' },
//     { name: 'Henna', system: 'Unani', description: 'Henna is a popular natural dye for hair and skin, also known for its cooling and antifungal properties.', route: '/library/henna', image: '/Henna.jpg' },
//     { name: 'Ginger', system: 'Naturopathy', description: 'Ginger is a well-known remedy for nausea and indigestion, also believed to have anti-inflammatory properties.', route: '/library/ginger', image: '/Ginger.jpg' },
//     { name: 'Garlic', system: 'Naturopathy', description: 'Garlic is prized for its cardiovascular benefits, known for lowering cholesterol and boosting immunity.', route: '/library/garlic', image: '/Garlic.jpg' },
//     { name: 'Echinacea', system: 'Naturopathy', description: 'Echinacea is widely used to boost the immune system and reduce the severity of colds and infections.', route: '/library/echinacea', image: '/Echinacea.jpg' },
//     { name: 'Vasambu', system: 'Siddha', description: 'Vasambu is used in traditional remedies for digestive issues and is known for its calming properties for babies.', route: '/library/vasambu', image: '/vasambu.jpg' },
//     { name: 'Nilavembu', system: 'Siddha', description: 'Nilavembu is commonly used for treating fevers and infections, especially in treating viral fevers like dengue.', route: '/library/nilavembu', image: '/Nilavembu.jpg' },
//     { name: 'Vetiver', system: 'Siddha', description: 'Vetiver is used in traditional cooling remedies and skincare, known for its anti-inflammatory and calming properties.', route: '/library/vetiver', image: '/Vetiver.jpg' },
//     { name: 'Acalypha', system: 'Siddha', description: 'Acalypha is commonly used to treat respiratory conditions, coughs, and skin ailments in traditional Siddha medicine.', route: '/library/acalypha', image: '/Acalypha.jpg' },
//     { name: 'Arnica', system: 'Homeopathy', description: 'Arnica is known for its anti-inflammatory properties, used for healing bruises, sprains, and muscle soreness.', route: '/library/arnica', image: '/Arnica.jpg' },
//   ];

//   const styles = {
//     main: {
//       padding: '75px',
//       backgroundColor: '#D5E0D9',
//       fontFamily: '"Jaini Purva", sans-serif', // Apply the font to the whole page
//       marginTop:'80px',
//     },
//     headerSection: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       backgroundColor: '#1A442A',
//       padding: '15px 20px',
//       borderRadius: '10px',
//       marginBottom: '20px',
//     },
//     headerText: {
//       fontSize: '36px',
//       fontWeight:'400px',
//       color: 'white',
//       fontFamily: '"Jaini Purva", sans-serif', // Retain Montserrat for header
      
//     },
//     searchInputContainer: {
//       display: 'flex',
//       alignItems: 'center',
//       backgroundColor: 'white',
//       borderRadius: '5px',
//       padding: '0 10px',
//       width: '400px',
//       fontFamily:'Janvi '
//     },
//     searchInput: {
//       border: 'none',
//       padding: '10px',
//       width: '100%',
//       outline: 'none',
//       fontSize: '16px',
//     },
//     searchIcon: {
//       fontSize: '18px',
//       color: '#333',
//     },
//     plantGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(3, 1fr)',
//       gap: '20px',
//     },
//     plantCard: {
//       backgroundColor: 'white',
//       borderRadius: '10px',
//       padding: '20px',
//       boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//       position: 'relative',
//       transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//       cursor: 'pointer',
//     },
//     plantCardHovered: {
//       transform: 'scale(1.05)',
//       boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
//     },
    
//     plantImage: {
//       backgroundColor: '#e0e0e0',
//       width: '100%',
//       height: '200px',
//       borderRadius: '10px',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     },
//     plantDetails: {
//       marginTop: '15px',
//     },
//     plantName: {
//       fontSize: '36px',
//       marginBottom: '15px',
//       fontWeight:'400px'
//     },
//     plantDescription: {
//       fontSize: '16px',
//       lineHeight: '1.6',
//       color: '#333',
//       fontFamily: '"Montserrat", sans-serif', // Plant description stays with Montserrat
//     },
//     plantSystem: {
//       fontFamily: '"Montserrat", sans-serif', // Retain Montserrat for system text
//     },
//     bookmarkIcon: {
//       position: 'absolute',
//       right: '10px',
//       bottom: '10px',
//       fontSize: '45px',
//       cursor: 'pointer',
//       color: '#888',
//     },
//     bookmarked: {
//       color: '#FFD700', // Gold color for bookmarked plants
//     },
//     link: {
//       textDecoration: 'none',
//       color: 'inherit',
//     },
//   };

//   const toggleBookmark = (plantName) => {
//     setBookmarkedPlants((prev) =>
//       prev.includes(plantName)
//         ? prev.filter((name) => name !== plantName)
//         : [...prev, plantName]
//     );
//   };

//   const filteredPlants = plantData
//     .filter((plant) =>
//       plant.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => {
//       const isBookmarkedA = bookmarkedPlants.includes(a.name);
//       const isBookmarkedB = bookmarkedPlants.includes(b.name);
//       return isBookmarkedA === isBookmarkedB ? 0 : isBookmarkedA ? -1 : 1;
//     });

//   return (
//     <div>
//       <Header />
//       <style>
// @import url('https://fonts.googleapis.com/css2?family=Jaini+Purva&display=swap');
// </style>
//       <main style={styles.main}>
//         <div style={styles.headerSection}>
//           <h2 style={styles.headerText}>Does your plant have a personality? Check your plant out!</h2>
//           <div style={styles.searchInputContainer}>
//             <input
//               type="text"
//               placeholder="Search..."
//               style={styles.searchInput}
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <span style={styles.searchIcon}>🔍</span>
//           </div>
//         </div>

//         {/* Plant Grid */}
//         <div style={styles.plantGrid}>
//           {filteredPlants.map((plant) => (
//             <div key={plant.name}
//             style={{
//               ...styles.plantCard,
//               ...(hoveredPlant === plant.name ? styles.plantCardHovered : {}),
//             }}
//             onMouseEnter={() => setHoveredPlant(plant.name)}
//             onMouseLeave={() => setHoveredPlant(null)}>
//               <Link to={plant.route} style={styles.link}>
//                 <div
//                   style={{
//                     ...styles.plantImage,
//                     backgroundImage: `url(${plant.image})`,
//                   }}
//                 />
//                 <div style={styles.plantDetails}>
//                   <h3 style={styles.plantName}>{plant.name}</h3>
//                   <p style={styles.plantDescription}>{plant.description}</p>
//                   <p style={styles.plantSystem}>{plant.system}</p>
//                 </div>
//               </Link>
//               <span
//                 style={{
//                   ...styles.bookmarkIcon,
//                   ...(bookmarkedPlants.includes(plant.name)
//                     ? styles.bookmarked
//                     : {}),
//                 }}
//                 onClick={(e) => {
//                   e.preventDefault(); // Prevents the Link from navigating
//                   toggleBookmark(plant.name);
//                 }}
//               >
//                 {bookmarkedPlants.includes(plant.name) ? '★' : '☆'}
//               </span>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };
// export default Library;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Library = () => {
  const [bookmarkedPlants, setBookmarkedPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredPlant, setHoveredPlant] = useState(null);
  const [sortSystem, setSortSystem] = useState('All');

  const plantData = [
    { name: 'Tulsi', system: 'Ayurveda', description: 'Tulsi is revered in Ayurveda for its ability to promote balance in the body, often used for respiratory conditions and immunity boosting.', route: '/library/tulsi', image: 'tulsi.jpg' },
    { name: 'Aloe Vera', system: 'Ayurveda', description: 'Aloe Vera is known for its soothing, healing properties, especially in skincare. It is also used to aid digestion.', route: '/library/aloe-vera', image: 'Aloevera.jpg' },
    { name: 'Ashwagandha', system: 'Ayurveda', description: 'Ashwagandha is an adaptogen, helping the body manage stress. It is also believed to boost energy and improve concentration.', route: '/library/ashwagandha', image: '/ashwagandha.jpg' },
    { name: 'Gotu-kola', system: 'Ayurveda', description: 'Gotu-kola is prized for its ability to enhance cognitive function and promote skin health. It is used in anti-aging and wound healing.', route: '/library/goti-kola', image: '/gotu.jpg' },
    { name: 'Lemon Grass', system: 'Ayurveda', description: 'Lemon Grass is commonly used for digestive issues, and its refreshing scent is known to relieve stress and anxiety.', route: '/library/lemon-grass', image: '/lemongrass.jpg' },
    { name: 'Peppermint', system: 'Naturopathy', description: 'Peppermint has cooling properties and is used to treat digestive ailments like bloating and indigestion. It also soothes headaches.', route: '/library/peppermint', image: '/Peppermint.jpg' },
    { name: 'Neem', system: 'Siddha', description: 'Neem is renowned for its antibacterial and antifungal properties. It is used for skincare and detoxification.', route: '/library/neem', image: '/Neem.jpg' },
    { name: 'Amla', system: 'Ayurveda', description: 'Amla is rich in Vitamin C and antioxidants, used for boosting immunity, promoting hair health, and enhancing digestion.', route: '/library/amla', image: '/amla.jpg' },
    { name: 'Ajwain', system: 'Unani', description: 'Ajwain seeds are traditionally used to improve digestion and treat colds. Its seeds are often used in culinary practices.', route: '/library/ajwain', image: '/Ajwain.jpg' },
    { name: 'Fennel', system: 'Unani', description: 'Fennel is valued for its digestive properties and ability to relieve bloating and gas. It is also used in culinary dishes.', route: '/library/fennel', image: '/Fennel.jpg' },
    { name: 'Cinnamon', system: 'Unani', description: 'Cinnamon is widely used for its antioxidant properties and ability to help regulate blood sugar levels.', route: '/library/cinnamon', image: '/Cinnamon.jpg' },
    { name: 'Sandalwood', system: 'Unani', description: 'Sandalwood is revered for its aromatic properties, commonly used in skincare for its anti-inflammatory benefits.', route: '/library/sandalwood', image: '/Sandalwood.jpg' },
    { name: 'Henna', system: 'Unani', description: 'Henna is a popular natural dye for hair and skin, also known for its cooling and antifungal properties.', route: '/library/henna', image: '/Henna.jpg' },
    { name: 'Ginger', system: 'Naturopathy', description: 'Ginger is a well-known remedy for nausea and indigestion, also believed to have anti-inflammatory properties.', route: '/library/ginger', image: '/Ginger.jpg' },
    { name: 'Garlic', system: 'Naturopathy', description: 'Garlic is prized for its cardiovascular benefits, known for lowering cholesterol and boosting immunity.', route: '/library/garlic', image: '/Garlic.jpg' },
    { name: 'Echinacea', system: 'Naturopathy', description: 'Echinacea is widely used to boost the immune system and reduce the severity of colds and infections.', route: '/library/echinacea', image: '/Echinacea.jpg' },
    { name: 'Vasambu', system: 'Siddha', description: 'Vasambu is used in traditional remedies for digestive issues and is known for its calming properties for babies.', route: '/library/vasambu', image: '/vasambu.jpg' },
    { name: 'Nilavembu', system: 'Siddha', description: 'Nilavembu is commonly used for treating fevers and infections, especially in treating viral fevers like dengue.', route: '/library/nilavembu', image: '/Nilavembu.jpg' },
    { name: 'Vetiver', system: 'Siddha', description: 'Vetiver is used in traditional cooling remedies and skincare, known for its anti-inflammatory and calming properties.', route: '/library/vetiver', image: '/Vetiver.jpg' },
    { name: 'Acalypha', system: 'Siddha', description: 'Acalypha is commonly used to treat respiratory conditions, coughs, and skin ailments in traditional Siddha medicine.', route: '/library/acalypha', image: '/Acalypha.jpg' },
    { name: 'Arnica', system: 'Homeopathy', description: 'Arnica is known for its anti-inflammatory properties, used for healing bruises, sprains, and muscle soreness.', route: '/library/arnica', image: '/Arnica.jpg' },
  ];

  const styles = {
    main: {
      padding: '75px',
      paddingTop: '30px',
      backgroundColor: '#D5E0D9',
      fontFamily: '"Jaini Purva", sans-serif',
      marginTop: '80px',
    },
    headerSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#1A442A',
      padding: '15px 20px',
      borderRadius: '10px',
      marginBottom: '20px',
    },
    headerText: {
      fontSize: '36px',
      fontWeight: '400px',
      color: 'white',
      fontFamily: '"Jaini Purva", sans-serif',
    },
    searchInputContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '5px',
      padding: '0 10px',
      width: '400px',
      fontFamily: 'Janvi',
    },
    searchInput: {
      border: 'none',
      padding: '10px',
      width: '100%',
      outline: 'none',
      fontSize: '16px',
    },
    searchIcon: {
      fontSize: '18px',
      color: '#333',
    },
    plantGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
    },
    plantCard: {
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    },
    plantCardHovered: {
      transform: 'scale(1.05)',
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
    },
    plantImage: {
      backgroundColor: '#e0e0e0',
      width: '100%',
      height: '200px',
      borderRadius: '10px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    plantDetails: {
      marginTop: '15px',
    },
    plantName: {
      fontSize: '36px',
      marginBottom: '15px',
      fontWeight: '400px',
    },
    plantDescription: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#333',
      fontFamily: '"Montserrat", sans-serif',
    },
    plantSystem: {
      fontFamily: '"Montserrat", sans-serif',
    },
    bookmarkIcon: {
      position: 'absolute',
      right: '10px',
      bottom: '10px',
      fontSize: '45px',
      cursor: 'pointer',
      color: '#888',
    },
    bookmarked: {
      color: '#FFD700',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
    sortContainer: {
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    sortButton: {
      padding: '10px 15px',
      fontSize: '16px',
      backgroundColor: '#1A442A',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      // Custom arrow styling
      WebkitAppearance: 'none', 
      MozAppearance: 'none', 
      appearance: 'none', 
      background: '#1A442A', 
      paddingRight: '30px', 
      backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23FFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`, // Custom arrow
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 10px center', 
      backgroundSize: '22px 22px', 
    },
  };

  const toggleBookmark = (plantName) => {
    setBookmarkedPlants((prev) =>
      prev.includes(plantName)
        ? prev.filter((name) => name !== plantName)
        : [...prev, plantName]
    );
  };

  const filteredAndSortedPlants = plantData
    .filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((plant) => sortSystem === 'All' || plant.system === sortSystem)
    .sort((a, b) => {
      const isBookmarkedA = bookmarkedPlants.includes(a.name);
      const isBookmarkedB = bookmarkedPlants.includes(b.name);
      return isBookmarkedA === isBookmarkedB ? 0 : isBookmarkedA ? -1 : 1;
    });

  const uniqueSystems = ['All', ...new Set(plantData.map((plant) => plant.system))];

  return (
    <div>
      <Header />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Jaini+Purva&display=swap');
      </style>
      <main style={styles.main}>
        <div style={styles.headerSection}>
          <h2 style={styles.headerText}>Does your plant have a personality? Check your plant out!</h2>
          <div style={styles.searchInputContainer}>
            <input
              type="text"
              placeholder="Search..."
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span style={styles.searchIcon}>🔍</span>
          </div>
        </div>

        <div style={styles.sortContainer}>
          <select
            style={styles.sortButton}
            value={sortSystem}
            onChange={(e) => setSortSystem(e.target.value)}
          >
            {uniqueSystems.map((system) => (
              <option key={system} value={system}>
                {system === 'All' ? 'Sort by System' : `Sort: ${system}`}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.plantGrid}>
          {filteredAndSortedPlants.map((plant) => (
            <div
              key={plant.name}
              style={{
                ...styles.plantCard,
                ...(hoveredPlant === plant.name ? styles.plantCardHovered : {}),
              }}
              onMouseEnter={() => setHoveredPlant(plant.name)}
              onMouseLeave={() => setHoveredPlant(null)}
            >
              <Link to={plant.route} style={styles.link}>
                <div
                  style={{
                    ...styles.plantImage,
                    backgroundImage: `url(${plant.image})`,
                  }}
                />
                <div style={styles.plantDetails}>
                  <h3 style={styles.plantName}>{plant.name}</h3>
                  <p style={styles.plantDescription}>{plant.description}</p>
                  <p style={styles.plantSystem}>{plant.system}</p>
                </div>
              </Link>
              <span
                style={{
                  ...styles.bookmarkIcon,
                  ...(bookmarkedPlants.includes(plant.name)
                    ? styles.bookmarked
                    : {}),
                }}
                onClick={(e) => {
                  e.preventDefault();
                  toggleBookmark(plant.name);
                }}
              >
                {bookmarkedPlants.includes(plant.name) ? '★' : '☆'}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Library;