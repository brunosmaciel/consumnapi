import axios from 'axios';

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTAsImVtYWlsIjoiYnJ1bm9AZ21haWwuY29tIiwiaWF0IjoxNjU0ODc5MzAyLCJleHAiOjE2NjM1MTkzMDJ9.T8_iW6fpWSDxOiyAmzROPd9T54XOh7RCSZNvzgOENx4';

export default axios.create({
  baseURL: 'https://www.brunoapi.ga/',
  headers: {
    authorization: `Bearer ${jwt}`,
  },
});
