function isSuccessStatusCode(value) {
    return /^(200|201|202|203|204|205|206|304)$/.test(value);
}

export function sendRequest(url, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (isSuccessStatusCode(xhr.status)) {
                onSuccess(xhr.responseText);
            }
            else if (onError) { onError(xhr, xhr.status); }
        }
    };
    xhr.send(null);
}

export class MovieAPI {
    searchMovies(title) {
        return new Promise((resolve, reject) => {
            sendRequest(`http://www.omdbapi.com/?s=${title}`, (response) => {
                let data = JSON.parse(response);
                resolve(data.Search);
            }, (xhr, status) => {
                reject('Cannot load movies', xhr, status);
            });
        });
    }
}

export const movieAPI = new MovieAPI();


