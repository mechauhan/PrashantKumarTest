import axios from 'axios';

const AxiosBase = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : 'http://localhost:4000',
});

export default AxiosBase;
export const handleError = (error) => {
  alert('handle Error');
  console.log('HandleError : ', JSON.stringify(error));
  if (error.response.status === 404) {
  }
};
