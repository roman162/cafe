const middleware = {}

middleware['api'] = require('../middleware/api.js')
middleware['api'] = middleware['api'].default || middleware['api']

export default middleware
