const api = require('../utils/api')

const checkCertifiedTeacher = async (token) => {
    return await api('POST', 'auth_domain/auth/api/v1/member/checkCertifiedTeacher',
        'https://kyg2.ebsoc.co.kr',
        { "X-AUTH-TOKEN": token },
        true
    )
}

module.exports = checkCertifiedTeacher