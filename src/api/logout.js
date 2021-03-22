const api = require('../utils/api')

const logout = async (token) => {
    return await api('POST', 'auth_domain/auth/api/v1/logout',
        'https://www.ebsoc.co.kr/logout',
        { "X-AUTH-TOKEN": token },
        false
    )
}

module.exports = logout