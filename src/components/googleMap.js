import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { polygon } from 'polygon-tools';

const POLYGON = [
  [0, 100],
  [400, 150],
  [400, 400],
  [0, 400]
];
const HOLE2 = [
  [200, 250],
  [300, 250],
  [220, 270],
  [200, 270]
];
const HOLE = [
  [50, 50],
  [150, 50],
  [150, 450],
  [250, 450],
  [250, 200],
  [350, 100],
  [350, 450],
  [50, 450]
]
let triangles = polygon.subtract(HOLE2, POLYGON);
console.log('triangles', triangles);

const helperCoordsConverter = (coordsArr) => {
  const resultArr = [];
  if (coordsArr[0].lat) {
    // coords are stored as objects
    coordsArr.forEach(element => {
      resultArr.push([element.lat, element.lng])
    });
  } else {
    // coords are stored as arrays   
    coordsArr.forEach(element => {
      resultArr.push({ lat: element[0], lng: element[1] })
    });
  }
  console.log(resultArr);
  return resultArr;
}



// ==============================================
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
      territories: [],
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
    if (prevState) {
      // if current position gets updated update the google map center as well
      if (prevState.currentPosition !== this.state.currentPosition) {
        console.log('CURRENT LOCATION UPDATED', this.googleMap);
        this.googleMap.panTo({
          lat: this.state.currentPosition.lat,
          lng: this.state.currentPosition.lng,
        });
      }

      // if territories gets updated them update google map
      if (prevState.territories !== this.state.territories) {

      }

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
    const googlePolygon = this.createPolygon(this.state.currentRunCoordinates)
    googlePolygon.setOptions({ strokeWeight: 1.0, fillColor: '#4BDF3F', strokeColor: '#4BDF3F', });
    let newTerritories = [...this.state.territories, googlePolygon];
    this.setState({ territories: newTerritories, currentRunCoordinates: [] });
    this.polygon.setPath([]);

  }

  render() {
    return (
      <>
        <button onClick={this.handleDeleteRun} >Delete Run</button>
        <button onClick={this.handleAddRun} >Add Run</button>
        <div
          id="google-map"
          ref={this.googleMapRef}
          style={{ width: '700px', height: '400px' }}
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
