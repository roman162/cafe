import crypto from 'crypto'

let _key = ''

function setKey (key) {
  _key = key
}

function getKey () {
  return _key
}

function decrypt (message) {
  let cipher = crypto.createDecipher('aes-256-ctr', _key)
  let crypted = cipher.update(message, 'base64', 'utf8')
  crypted += cipher.final('utf8')

  return crypted
}

function encrypt (message) {
  let cipher = crypto.createCipher('aes-256-ctr', _key)
  let crypted = cipher.update(message, 'utf8', 'base64')
  crypted += cipher.final('base64')

  return crypted
}

export default {
  encrypt,
  decrypt,
  setKey,
  getKey
}
