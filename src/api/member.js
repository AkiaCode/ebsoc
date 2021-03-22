const api = require('../utils/api')

const member = async (token) => {
    return await api('GET', 'common_domain/common/api/v1/member',
        'https://kyg2.ebsoc.co.kr/',
        { "X-AUTH-TOKEN": token },
        true
    )
}

module.exports = member