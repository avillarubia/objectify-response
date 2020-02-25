const status = require('http-status')

module.exports = (res, message, code = 200) => {
    res.status(200).send(buildErrorMessage(code, message))
};

const buildErrorMessage = (code, message) => {
    return { code, name: getErrorName(code), message }
}

const getErrorName = (code) => {
    return status[`${code}_NAME`];
}