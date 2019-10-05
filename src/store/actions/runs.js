
const API = process.env.REACT_APP_API;


const get = (payload) => {
  return {
    type: 'FETCH_RUNS',
    payload,
  };
};

const add = (payload) => {
  return {
    type: 'ADD_RUNS',
    payload,
  };
};

const remove = (payload) => {
  return {
    type: 'DELETE_RUNS',
    payload,
  };
};

// THUNK
const fetchRuns = () => (dispatch) => {
  return fetch(`${API}/api/v1/run`)
    .then((results) => results.json())
    .then((data) => dispatch(get(data)));
};

const addRuns = (run) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(run),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/api/v1/run`, options)
    .then((results) => results.json())
    .then((data) => dispatch(add(data)));
};

const deleteRuns = (runId) => (dispatch) => {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${API}/api/v1/run/${runId}`, options)
    .then((results) => results.json())
    .then((data) => dispatch(remove(data)))
    .catch(console.log);
};


export default {
  fetchRuns,
  addRuns,
  deleteRuns,
};
