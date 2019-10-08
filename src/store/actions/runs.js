
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
const fetchRuns = (authToken) => (dispatch) => {
  const options = {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${authToken}`,
    }),
  };

  return fetch(`${API}/api/v1/run`, options)
    .then((results) => results.json())
    .then((data) => dispatch(get(data)));
};

const addRuns = (coords, authToken) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(coords),
    headers: new Headers({
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  return fetch(`${API}/api/v1/run`, options)
    .then((results) => results.json())
    .then((data) => dispatch(add(data)));
};

const deleteRuns = (runId, authToken) => (dispatch) => {
  const options = {
    method: 'DELETE',
    headers: new Headers({
      Authorization: `Bearer ${authToken}`,
    }),
  };

  return fetch(`${API}/api/v1/run/${runId}`, options)
    .then(() => dispatch(remove(runId)))
    .catch(console.log);
};


export default {
  fetchRuns,
  addRuns,
  deleteRuns,
};
