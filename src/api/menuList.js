const api = require('../utils/api')

const menuList = async (token, classSqno) => {
    return await api('POST', 'common_domain/cls/api/v1/classMenu/menuList',
        'https://kyg2.ebsoc.co.kr/',
        { "X-AUTH-TOKEN": token },
        true,
        { classSqno: classSqno }
    )
}

module.exports = menuList