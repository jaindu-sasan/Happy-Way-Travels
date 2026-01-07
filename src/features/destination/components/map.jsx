import { GoogleMap, Marker, Polyline, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";

export default function PackageMap({ stops, selectedDay }) {
  const mapRef = useRef(null);
  const [infoOpen, setInfoOpen] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // replace with your key
  });

  const center = stops[selectedDay].position;
  const path = stops.map((s) => s.position);

  // Fly to selected day
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo(stops[selectedDay].position);
      mapRef.current.setZoom(9);
    }
  }, [selectedDay, stops]);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="h-[450px] rounded-2xl overflow-hidden shadow-lg max-w-6xl mx-auto mb-12">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={7}
        onLoad={(map) => (mapRef.current = map)}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {stops.map((stop, idx) => (
          <Marker
            key={idx}
            position={stop.position}
            onClick={() => setInfoOpen(idx)}
            animation={idx === selectedDay ? window.google.maps.Animation.BOUNCE : undefined}
          >
            {infoOpen === idx && (
              <InfoWindow onCloseClick={() => setInfoOpen(null)}>
                <div className="w-64">
                  <h3 className="font-semibold">{stop.name}</h3>
                  {stop.image && (
                    <img
                      src={stop.image}
                      alt={stop.name}
                      className="w-full h-32 object-cover rounded mt-2"
                    />
                  )}
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}

        <Polyline
          path={path}
          options={{
            strokeColor: "#1E90FF",
            strokeOpacity: 0.8,
            strokeWeight: 4,
            geodesic: true,
          }}
        />
      </GoogleMap>
    </div>
  );
}
