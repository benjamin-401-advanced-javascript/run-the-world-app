import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import runsActions from '../store/actions/runs';

const Runs = (props) => {
  const [runDate, setRunDate] = useState('');
  const [runDistance, setRunDistance] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.addRuns({ day: runDate, distance: runDistance });
  }

  useEffect(() => {
    props.fetchRuns();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Run Date"
          value={runDate}
          onChange={(e) => setRunDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Run Distance"
          value={runDistance}
          onChange={(e) => setRunDistance(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {props.runs.map((run, idx) => (
          <li key={idx}>RUN INFO:
            <p>Day: {run.day}</p>
            <p>Distance: {run.distance}</p>
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
});

Runs.propTypes = {
  fetchRuns: PropTypes.func,
  addRuns: PropTypes.func,
  runs: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Runs);
