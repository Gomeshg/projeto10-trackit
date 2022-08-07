import axios from 'axios';

const baseURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit'; 

function setSignUp(body){
    const promise = axios.post(`${baseURL}/auth/sign-up`, body);
    return promise;
}

function setLogin(body){
	const promise = axios.post(`${baseURL}/auth/login`, body);
	return promise;
}

function postHabit(body, config){
	const promise = axios.post(`${baseURL}/habits`, body, config);
	return promise;
}

function getHabits(config){
	const promise = axios.get(`${baseURL}/habits`, config);
	return promise;
}

function deleteHabit(idHabit, config){
	const promise = axios.delete(`${baseURL}/habits/${idHabit}`, config);
	return promise;
}

function getHabitsToday(config){
	const promise = axios.get(`${baseURL}/habits/today`, config);
	return promise;
}

function checkHabit(idHabit, config, body){
	const promise = axios.post(`${baseURL}/habits/${idHabit}/check`, body, config);
	return promise;
}

function uncheckHabit(idHabit, config, body){
	const promise = axios.post(`${baseURL}/habits/${idHabit}/uncheck`, body, config);
	return promise;
}

function getHistory(config){
	const promise = axios.get(`${baseURL}/habits/history/daily`, config);
	return promise;
}


export {setSignUp, setLogin, postHabit, getHabits, deleteHabit, getHabitsToday, checkHabit, uncheckHabit, getHistory};