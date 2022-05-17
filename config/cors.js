module.exports = function (req, res, next) {
res.header('Acess-Control-Allow-Oring', '*')
res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
next()
}