import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const googleMapStyle = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
      {
        saturation: '-100',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#000000',
      },
      {
        lightness: 40,
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#4d6059',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#4d6059',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#4d6059',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#4d6059',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#4d6059',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#7f8d89',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#7f8d89',
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#2b3638',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2b3638',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#24282b',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#24282b',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];
const testCoordinates = [
  { lat: 47.605, lng: -122.351 },
  { lat: 47.634, lng: -122.380 },
  { lat: 47.635, lng: -122.341 },
  { lat: 47.590, lng: -122.300 },
];

const mapPolygonOptions = {
  path: testCoordinates,
  geodesic: true,
  fillColor: '#FF0000',
  fillOpacity: 0.5,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2,
  map: {},
};

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.googleMap = {};
    this.marker = {};
    this.polygon = {};
    this.state = {
      currentPosition: { lat: 47.606209, lng: -122.332069 },
      currentRunCoordinates: [],
      currentMapPolygon: {},
    };
  }

  componentDidMount() {
    // add google api to a script tag and append to DOM
    const googleScript = document.createElement('script');
    const key = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
    window.document.body.appendChild(googleScript);

    // when google script finishes loading
    googleScript.addEventListener('load', () => {
      navigator.geolocation.getCurrentPosition((data) => {
        this.setState({
          currentPosition: {
            lat: data.coords.latitude,
            lng: data.coords.longitude,
          },
        }, () => {
          console.log('CURRENT POSITION RETRIEVED', data.coords);
          console.log('NEWLY SET STATE', this.state.currentPosition);
        });
      });
      this.setupMap();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState
      && (prevState.currentPosition !== this.state.currentPosition)) {
      console.log('CURRENT LOCATION UPDATED', this.googleMap);
      this.googleMap.panTo({
        lat: this.state.currentPosition.lat,
        lng: this.state.currentPosition.lng,
      });
    }
  }

  handleNewCoordinateClick = (e) => {
    const newCoords = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    this.setState({
      currentRunCoordinates: [...this.state.currentRunCoordinates, newCoords],
    });
    this.polygon.setPath([...this.state.currentRunCoordinates, newCoords]);
  }

  setupMap = () => {
    this.googleMap = this.createGoogleMap();
    // this.marker = this.createMarker();
    this.polygon = this.createPolygon(testCoordinates);
    this.googleMap.addListener('click', this.handleNewCoordinateClick);
  }

  createPolygon = (coordinates) => {
    return new window.google.maps.Polygon({
      path: coordinates,
      geodesic: true,
      fillColor: '#FF0000',
      fillOpacity: 0.5,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      map: this.googleMap,
      clickable: false,
      // editable: true,
    });
  }


  createGoogleMap = () => new window.google.maps.Map(this.googleMapRef.current, {
    zoom: 12,
    center: {
      lat: this.state.currentPosition.lat,
      lng: this.state.currentPosition.lng,
    },
    disableDefaultUI: true,
    styles: googleMapStyle,
  })

  createMarker = () => new window.google.maps.Marker({
    position: { lat: 43.642567, lng: -79.387054 },
    map: this.googleMap,
  })

  handleDeleteRun = () => {
    this.setState({ currentRunCoordinates: [] });
    this.polygon.setPath([]);
  }

  handleAddRun = () => {

  }

  render() {
    return (
      <>
        <button onClick={this.handleDeleteRun} >Delete Run</button>
        <button onClick={this.handleAddRun} >Add Run</button>
        <div
          id="google-map"
          ref={this.googleMapRef}
          style={{ width: '500px', height: '300px' }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  runs: state.runs,
});

export default connect(mapStateToProps)(GoogleMap);

GoogleMap.propTypes = {
  runs: PropTypes.array,
};
