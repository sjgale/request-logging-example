import axios from 'axios';

async function get(url: string): Promise<any> {
  return axios.get(url).catch(err => {
      // do my thing (such as logging)
      console.log(`%%%%%%%%%%%% There was an error during ${err.request.method} to ${url}! %%%%%%%%%%%%`);
      // then still throw the error as similar to if I haven't caught it here
      throw err;
    });
}

export default {get}