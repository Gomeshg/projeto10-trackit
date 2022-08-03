import axios from 'axios';

const baseURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'; 


function signUp({body}){
    const promise = axios.post(`${baseURL}/auth/sing-up`, body);
    return promise;
}

function login({body, config}){
	const promise = axios.post(`${baseURL}/auth/login`, body, config);
	return promise;
}

function setHabit({body, config}){
	const promise = axios.post(`${baseURL}/habits`, body, config);
	return promise;
}

function getHabits({config}){
	const promise = axios.get(`${baseURL}/habits`, config);
	return promise;
}

function deleteHabit({idHabit, config}){
	const promise = axios.delete(`${baseURL}/habits/${idHabit}`, config);
	return promise;
}

function getHabitsToday({config}){
	const promise = axios.get(`${baseURL}/habits/today`, config);
	return promise;
}

function checkHabit({idHabit, config}){
	const promise = axios.post(`${baseURL}/habits/${idHabit}/check`, config);
	return promise;
}

function uncheckHabit({idHabit, config}){
	const promise = axios.post(`${baseURL}/habits/${idHabit}/uncheck`, config);
	return promise;
}

function getHistory({config}){
	const promise = axios.get(`${baseURL}/habits/history/daily`, config);
	return promise;
}
