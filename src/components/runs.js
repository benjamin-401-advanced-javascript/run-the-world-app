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
  const [runDate, setRunDate] = useState('');
  const [runDistance, setRunDistance] = useState('');

  /**
   *
   *
   * @param {*} e
   */
  function handleSubmit(e) {
    e.preventDefault();
    props.addRuns({ day: runDate, distance: runDistance });
  }

  function handleRunDelete(e, id) {
    console.log('Run component delete', id);
    props.deleteRuns(id);
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
          <li key={idx}> RUN INFO:

          <button onClick={(e) => handleRunDelete(e, run._id)} >Delete Run Info</button>
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
  deleteRuns: (id) => dispatch(runsActions.deleteRuns(id)),
  fetchRuns: () => dispatch(runsActions.fetchRuns()),
  addRuns: (data) => dispatch(runsActions.addRuns(data)),
});

Runs.propTypes = {
  deleteRuns: PropTypes.func,
  fetchRuns: PropTypes.func,
  addRuns: PropTypes.func,
  runs: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Runs);
