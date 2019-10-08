import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import runsActions from '../store/actions/runs';
import { LoginContext } from './auth/context';

/**
 *
 *
 * @param {*} props
 * @returns
 */
const Runs = (props) => {

  const context = useContext(LoginContext);

  const [lat, setlat] = useState('');
  const [lng, setlng] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  const [runName, setRunName] = useState('');
  const [currentLocation, setCurrentLocation] = useState({});


  useEffect(() => {
    props.fetchRuns(context.token);
    navigator.geolocation.getCurrentPosition((data) => {
      setCurrentLocation({ lat: data.coords.latitude, lng: data.coords.longitude });
    });
  }, []);


  function handleRunDelete(e, id) {
    console.log('Run component delete', id);
    props.deleteRuns(id);
  }

  function handleGetCurrentLocation(e) {
    e.preventDefault();
    setlat(currentLocation.lat);
    setlng(currentLocation.lng);
  }

  function handleLogCoordinates(e) {
    e.preventDefault();
    setCoordinates([...coordinates, { lat, lng }]);
  }

  function handleLogRun(e) {
    e.preventDefault();
    props.addRuns({ name: runName, coordinates }, context.token);
  }

  return (
    <>
      <form onSubmit={handleLogCoordinates}>

        <ul>
          <li>
            <label>
              Latitude:
          <input
                type="text"
                placeholder="latitude"
                value={lat}
                onChange={(e) => setlat(e.target.value)}
              />
            </label>
            <label>
              Longitude:
          <input
                type="text"
                placeholder="longitude"
                value={lng}
                onChange={(e) => setlng(e.target.value)}
              />
            </label>
            <button onClick={handleGetCurrentLocation} > Set to Current Location </button>
          </li>
        </ul>

        <button type="submit">Log Coordinates</button>

      </form>

      <p>Current Run ----------------------------</p>

      <label>
        Name Run:
          <input
          type="text"
          placeholder="Run Name"
          value={runName}
          onChange={(e) => setRunName(e.target.value)}
        />
      </label>
      <button onClick={handleLogRun} > Log Current Run </button>

      <ul>
        {coordinates.map((coord, idx) => (

          <li key={idx}>
            <p>
              <button onClick={() => setCoordinates(coordinates.filter((v, i) => i !== idx))} > X </button>
              Lat: {coord.lat} Lng: {coord.lng}
            </p>
          </li>

        ))}
      </ul>

      <p>Previous Runs----------------------------</p >

      <ul>
        {props.runs.map((run, idx) => (
          <li key={idx}>
            <p>
              <button onClick={(e) => handleRunDelete(e, run._id)} > X </button>
              Name: {run.name}
            </p>
            <p># of Coordinates: {run.coordinates.length}</p>
          </li>
        ))}
      </ul>

    </>
  );
};

const mapStateToProps = (state) => ({
  runs: state.runs,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRuns: (authToken) => dispatch(runsActions.fetchRuns(authToken)),
  addRuns: (data, authToken) => dispatch(runsActions.addRuns(data, authToken)),
  deleteRuns: (id, authToken) => dispatch(runsActions.deleteRuns(id, authToken)),
});

Runs.propTypes = {
  fetchRuns: PropTypes.func,
  addRuns: PropTypes.func,
  deleteRuns: PropTypes.func,
  runs: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Runs);
