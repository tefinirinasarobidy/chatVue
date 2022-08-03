export default {
    baseUrl: 'https://back-chat-v1.herokuapp.com/',
    headers: {headers: { 'Content-type':'application/json',Authorization: 'Bearer '+ localStorage.getItem('token')} }
}