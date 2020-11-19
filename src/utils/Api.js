class Api {
    constructor({unsplashURL, accessKeyUnsplash, secretKeyUnsplashuserURL}) {
        this._unsplashURL = unsplashURL;
        this._accessKeyUnsplash = accessKeyUnsplash;
        this._secretKeyUnsplashuserURL = secretKeyUnsplashuserURL;
        
    }
    picturesDownload(query, num) {
        return fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=${num}`, {
                 method: 'GET',
                 headers: {
                     Authorization: `Client-ID ${this._accessKeyUnsplash}`,
                     Accept_Version: 'v1'
                    },
            }
            )
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    console.log(res.json());
                    return Promise.reject(`Ошибка загрузки изображений ${res.status}`);
                }
            });
    }
}
const apiConfig = {
    unsplashURL: 'https://api.unsplash.com/search/photos',
    accessKeyUnsplash:'3FMK3V572lWdB23IFTYsKuNwmbu9KHeQ1jlTEWLYJyM',
    secretKeyUnsplash:'HMASxe5yIhP9YvVIdyUAGzth5jdG9TvoY8WUTorfLRg',
}
const api = new Api(apiConfig);
export default api;