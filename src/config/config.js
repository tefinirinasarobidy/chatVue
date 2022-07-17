export default {
    baseUrl: 'http://localhost:8000/',
    headers: {headers: { 'Content-type':'application/json',Authorization: 'Bearer '+ localStorage.getItem('token')} }
}