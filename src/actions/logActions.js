import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_LOG,
	SEARCH_LOGS,
} from './types';

// export const getLogs = () => {
// 	return async (dispatch) => {
//         setLoading();
//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({

//         })
// 	};
// };

//get Logs from server
export const getLogs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		});
	}
};

//Add new Log from server
export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/logs`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(log),
		});

		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		});
	}
};

//set Current Log
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log,
	};
};

//set Current Log
export const clearCurrent = () => ({
	type: CLEAR_CURRENT,
});

//delete LOG from server
export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading();

		await fetch(`/logs/${id}`, {
			method: 'DELETE',
		});

		dispatch({
			type: DELETE_LOG,
			payload: id,
		});
	} catch (err) {
		dispatch({
			type: DELETE_LOG,
			payload: err.response.data,
		});
	}
};

//update log on server
export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(log),
		});
		const data = await res.json();

		dispatch({
			type: UPDATE_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: DELETE_LOG,
			payload: err.response.data,
		});
	}
};

//search logs
export const searchLogs = (text) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/logs?q=${text}`);
		const data = await res.json();

		dispatch({
			type: SEARCH_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		});
	}
};

//set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
