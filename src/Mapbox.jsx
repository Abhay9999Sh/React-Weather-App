
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { Icon } from 'leaflet';

const MapBox = ({ lat, lon }) => {
  const [mapCenter, setMapCenter] = useState({ lat, lng: lon });
  const [mapHeight, setMapHeight] = useState('651px');


  useEffect(() => {
    setMapCenter({ lat, lng: lon });

    // Update map height based on window width
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setMapHeight('396px'); // Adjust height for very small screens
      } else {
        setMapHeight('651px'); // Default height
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial height

    return () => window.removeEventListener('resize', handleResize);
  }, [lat, lon]);

  const customIcon = new Icon({
    iconUrl: "https://i.pinimg.com/originals/3f/52/a7/3f52a778db4b741e7773eb753565a1f6.png",
    iconSize: [45, 45]
  });

  return (
    <div className='Mapbox' style={{ height: mapHeight, width: '100%',   }}>
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: '100%', width: '100%', borderRadius: '0.8rem' }}
        key={`${mapCenter.lat}-${mapCenter.lng}`}  // Add key prop to force re-render
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        />
        <Marker position={mapCenter} icon={customIcon}>
          <Popup>
            {`Latitude: ${mapCenter.lat}, Longitude: ${mapCenter.lng}`}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapBox;
