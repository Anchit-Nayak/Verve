import axios from 'axios';

const getPosts = async (data) => {
    const response = await axios.post('http://localhost:3000/post/filter', data);
    return response.data;
}

export {getPosts}