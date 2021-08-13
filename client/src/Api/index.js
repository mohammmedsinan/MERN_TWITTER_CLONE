import axios from 'axios';
const baseURL = 'http://localhost:5000';

export const GetTheTweets = () => axios.get(`${baseURL}/Tweets`);
export const PostTheTweets = (Tweets) => axios.post(`${baseURL}/Tweets`, Tweets);
