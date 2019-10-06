import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import runsActions from '../store/actions/runs';

/**
 *
 *
 * @param {*} props
 * @returns
 */
const Runs = (props) => {
  const [lat, setlat] = useState('');
  const [lng, setlng] = useState('');
  const [coordinates, setCoordinates] = useState([]);


  useEffect(() => {
    props.fetchRuns();
  }, []);


  function handleRunDelete(e, id) {
    console.log('Run component delete', id);
    props.deleteRuns(id);
  }

  function handleRunStart(data) {
    setlat(data.coords.latitude);
    setlng(data.coords.longitude);
    setCoordinates([...coordinates, { lat: data.coords.latitude, lng: data.coords.longitude }]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCoordinates([...coordinates, { lat, lng }]);
  }

  function handleRunEnd(data) {
    setlat(data.coords.latitude);
    setlng(data.coords.longitude);
    setCoordinates([...coordinates, { lat: data.coords.latitude, lng: data.coords.longitude }]);
    props.addRuns(coordinates);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="latitude"
          value={lat}
          onChange={(e) => setlat(e.target.value)}
        />
        <input
          type="text"
          placeholder="longitude"
          value={lng}
          onChange={(e) => setlng(e.target.value)}
        />
        <button onClick={() => navigator.geolocation.getCurrentPosition(handleRunStart)} > Start Run </button>
        <button type="submit">Submit</button>
        <button onClick={() => navigator.geolocation.getCurrentPosition(handleRunEnd)} > Finish Run </button>
      </form>

      <p>Previous Runs:</p>
      <ul>
        {props.runs.map((run, idx) => (
          <li key={idx}> RUN INFO:

          <button onClick={(e) => handleRunDelete(e, run._id)} >Delete</button>
            <p>Name: {run.name}</p>
            <p>User ID: {run.userId}</p>

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
  fetchRuns: () => dispatch(runsActions.fetchRuns()),
  addRuns: (data) => dispatch(runsActions.addRuns(data)),
  deleteRuns: (id) => dispatch(runsActions.deleteRuns(id)),
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
