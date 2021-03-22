const api = require('../utils/api')

const detail = async (token, classUrlPath) => {
    return await api('POST', 'common_domain/cls/api/v1/lctClass/detail',
        'https://kyg2.ebsoc.co.kr',
        { "X-AUTH-TOKEN": token },
        true,
        { classUrlPath: classUrlPath }
    )
}

module.exports = detail