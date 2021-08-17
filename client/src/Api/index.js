import axios from 'axios';
const baseURL = 'http://localhost:5000';
//Tweets Info Fetching
export const GetTheTweets = () => axios.get(`${baseURL}/Tweets`);
export const PostTheTweets = (Tweets) => axios.post(`${baseURL}/Tweets`, Tweets);
//Profile Info Fetching
export const GetYourProfile = (params) => axios.get(`${baseURL}/profile/${params}`);
export const PostYourProfile = (Profile) => axios.post(`${baseURL}/profile`, Profile);
