module.exports = {
    checkCertifiedTeacher: require('./api/checkCertifiedTeacher'),
    detail: require('./api/detail'),
    learning: require('./api/learning'),
    lesson: require('./api/lesson'),
    list: require('./api/list'),
    login: require('./api/login'),
    logout: require('./api/logout'),
    member: require('./api/member'),
    menuList: require('./api/menuList'),
    myClassListByTabType: require('./api/myClassListByTabType'),
    //package.json
    version: require('../package.json').version
}