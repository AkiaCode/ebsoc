const fetch = require('node-fetch')

const api = async (method, url, referer, options, kyg2 = false, data = {}) => {

    const defaultHeaders = {
        "Referer": referer,
        "Content-Type": "application/json;charset=UTF-8",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36"
    }

    const headers = Object.assign({}, defaultHeaders, options)
    let body = JSON.stringify(data)

    if (kyg2 === false) {
        domin = 'https://ebsoc.co.kr/'
    } else {
        domin = 'https://kyg2.ebsoc.co.kr/'
    }

    if (method === 'GET') {
        body = null
    }

    return await fetch(domin + url, {
        method: method,
        headers: headers,
        body: body
    }).then(res=>res.json())
}

module.exports = api