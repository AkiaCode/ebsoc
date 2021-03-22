const api = require('../utils/api')

const myClassListByTabType = async (token, schoolAffairsYear, searchType, searchWord, tabType) => {
    return await api('POST', 'common_domain/cls/api/v1/mypage/myClassListByTabType',
        'https://kyg2.ebsoc.co.kr/',
        { "X-AUTH-TOKEN": token },
        true,
        { schoolAffairsYear: schoolAffairsYear, searchType: searchType, searchWord: searchWord,  tabType: tabType }
    )
}

module.exports = myClassListByTabType