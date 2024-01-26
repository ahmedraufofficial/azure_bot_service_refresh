const qs = require('qs');
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const getToken = (endpoint, credentials) => {
    return new Promise((resolve, reject) => {
        axios.post(endpoint, qs.stringify(credentials))
        .then(response => {
            resolve(response.data?.access_token)
        })
        .catch(error => {
            reject(error);
        })
    })
}

exports.getToken = getToken;