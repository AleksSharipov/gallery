class Api {
  constructor(baseUrl, token) {
    this.baseUrl = baseUrl;
    this.token = token
  }

  getCards(){
    return fetch(`${this.baseUrl}/photos/random?collections=228275&orientation=landscape&count=30&client_id=${this.token}`, {
      method: 'GET',
      headers: {
        autorization: `Client-ID ${this.token}`,
      }
    })
      .then((res)=>{
        if(res.ok){
          return res.json();
        }
        return Promise.reject(new Error(`Error ${res.status}`))
      })

  }
}

const baseUrl = `https://api.unsplash.com`;
const token = `useg_kyexGi1NKV7upkROzPnQH6ocXefcRjiLgmmDhU`;

export const api = new Api (baseUrl, token);

