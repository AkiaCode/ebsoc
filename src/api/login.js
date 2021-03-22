const api = require('../utils/api')

const login = async (Id, Password) => {
    return await api('POST', 'auth_domain/auth/api/v1/login',
        'https://www.ebsoc.co.kr/login',
        { "X-AUTH-TOKEN": null },
        false,
        { memberId: Id, memberPassword: Password }
    )
}

module.exports = login