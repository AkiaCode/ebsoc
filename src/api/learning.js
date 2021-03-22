const api = require('../utils/api')

const learning = async (token) => {
    return await api('GET', 'common_domain/lecture/api/v1/student/learning',
        'https://kyg2.ebsoc.co.kr/student/home',
        { "X-AUTH-TOKEN": token },
        true
    )
}

module.exports = learning