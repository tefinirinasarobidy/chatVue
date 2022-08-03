import Echo from 'laravel-echo';
import config from './config'

export default {
    configEcho: (token) =>{
        window.Pusher = require('pusher-js');
    
        window.Echo = new Echo({
            broadcaster: 'pusher',
            key: '5a62c10d65059c1ecfdb',
            cluster: 'eu',
            // wsHost: 'https://back-chat-v1.herokuapp.com/',
            wsHost: 'localhost',
            wsPort: 6001,
            disableStats: true,
            forceTLS: false,
            authEndpoint: config.baseUrl + 'api/broadcasting/auth',
            auth: {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            },
            enabledTransports: ['ws']
        });
    }
}