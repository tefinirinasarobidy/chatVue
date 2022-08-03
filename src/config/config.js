export default {
    // baseUrl: 'https://back-chat-v1.herokuapp.com/',
    baseUrl:'http://localhost:8000/',
    headers: {headers: { 'Content-type':'application/json',Authorization: 'Bearer '+ localStorage.getItem('token')} }
}