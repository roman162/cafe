import NodeRSA from 'node-rsa'

let key = new NodeRSA({b: 128})

function generateKeys (bits) {
  key = new NodeRSA({b: bits})
}

function getPrivateKey () {
  return key.exportKey('private')
}

function getPublicKey () {
  return key.exportKey('public')
}

function setPrivateKey (key) {
  key.importKey(key, 'private')
}

function setPublicKey (key) {
  key.importKey(key, 'public')
}

function decrypt (message, encoding, source) {
  if (encoding !== undefined) {
    encoding = 'utf8'
  }
  if (source !== undefined) {
    source = 'base64'
  }
  return key.decrypted(message, encoding, source)
}

function encrypt (message, encoding, source) {
  if (encoding !== undefined) {
    encoding = 'utf8'
  }
  if (source !== undefined) {
    source = 'base64'
  }
  return key.encrypted(message, encoding, source)
}

export default {
  generateKeys,
  getPrivateKey,
  getPublicKey,
  setPrivateKey,
  setPublicKey,
  decrypt,
  encrypt
}
