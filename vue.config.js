module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/lazyer-ui-test-preview/'
        : '/'
}