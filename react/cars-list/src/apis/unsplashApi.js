
import axios from 'axios';

const accessKey = '02e13a51a9678801fee9bb611bd724227a84d9cae2f6b9277a524b59acd4f74b';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${accessKey}`
    }
});