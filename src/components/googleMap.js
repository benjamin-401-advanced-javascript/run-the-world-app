import React from 'react';

const GOOGLE_MAP_API_KEY = 'AIzaSyBp-epXMW6aYyu6k1PoD5h9wj8S-lGnWok';


const flightPlanCoordinates = [
  { lat: 37.772, lng: -122.214 },
  { lat: 21.291, lng: -157.821 },
  { lat: -18.142, lng: 178.431 },
  { lat: -27.467, lng: 153.027 },
  { lat: 37.772, lng: -122.214 },
];

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.googleMap = {};
    this.marker = {};
    this.polyline = {};
  }

  componentDidMount() {
    const googleScript = document.createElement('script');
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleScript);

    googleScript.addEventListener('load', () => {
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
      this.polyline = this.createPolyline();
    });
  }

  createPolyline = () => new window.google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
    map: this.googleMap,
  });
  

  createGoogleMap = () => new window.google.maps.Map(this.googleMapRef.current, {
    zoom: 16,
    center: {
      lat: 43.642567,
      lng: -79.387054,
    },
    disableDefaultUI: true,
  })

  createMarker = () => new window.google.maps.Marker({
    position: { lat: 43.642567, lng: -79.387054 },
    map: this.googleMap,
  })

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: '400px', height: '300px' }}
      />
    );
  }
}

export default GoogleMap;
