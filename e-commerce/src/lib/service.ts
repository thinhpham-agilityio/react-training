interface ConfigAPI {
  method: string,
  headers: { 
    [key: string]: string
  },
  body?: string
}

/**
 * Class handle about api service
 */
export default class APIService<T> {
  protected readonly rootUrl: string = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
  protected resource: string;
  constructor(resource: string) {
    this.resource = resource;
  }

  async request(resource:string, method: string, data?: T): Promise<Response> {
    const URL = `${this.rootUrl}/${resource}`;
    const config: ConfigAPI = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (data) {
      config.body = JSON.stringify(data);
    }
    const response = await fetch(URL, config);
    return response;
  }

  async createData(data: T): Promise<void> {
    const response = await this.request(this.resource, 'POST', data);
    
    return response.json();
  }

  async editData(data: T, id: string): Promise<void> {
    const response = await this.request(`${this.resource}/${id}`, 'PUT', data);
    
    return response.json();
  }

  async deleteData(id: string): Promise<void> {
    const response = await this.request(`${this.resource}/${id}`, 'DELETE');
    
    return response.json();
  }

  async getData(id: string): Promise<T> {
    const response = await this.request(`${this.resource}/${id}`, 'GET');

    return response.json();
  }

  async getArrayData(): Promise<T[]> {
    const response = await this.request(`${this.resource}`, 'GET');
    return response.json();
  }
}


