const api = require('../utils/api')

const list = async (token, classDate, memberSeq) => {
    return await api('POST', 'common_domain/lecture/api/v1/schedule/student/list',
        'https://kyg2.ebsoc.co.kr/student/home',
        { "X-AUTH-TOKEN": token },
        true,
        { classDate: classDate, memberSeq: memberSeq }
    )
}

module.exports = list