import Axios from 'axios';

class Service {
  readonly axios = Axios.create({
    baseURL: 'http://localhost:3333',
  });

  public async getMessages() {
    const { data } = await this.axios.get('/messages');
    return data;
  }
}

export default new Service();
