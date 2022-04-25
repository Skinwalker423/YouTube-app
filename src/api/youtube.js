import axios from "axios";

const KEY = "AIzaSyAQS_c96zdMHFoXwHXk4xSQ9jZRJsXaPGs";

export default axios.create( {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: "snippet", 
            maxResults: 5, 
            key: KEY, 
            type: 'video'
        }
        })