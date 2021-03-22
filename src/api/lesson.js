const api = require('../utils/api')

const lesson = async (token, number) => {
    return await api('GET', 'common_domain/common/api/v1/lecture/detail/lesson/' + number,
        'https://kyg2.ebsoc.co.kr/',
        { "X-AUTH-TOKEN": token },
        true
    )
}

module.exports = lesson