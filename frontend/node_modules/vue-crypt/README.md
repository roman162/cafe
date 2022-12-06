# Crypto Vue-Plugin

Easy way to encrypt and decrypt with AES and RSA in Vue with pure JavaScript.

## Installation

```ecmascript 6
import Vue from 'vue'
import vueCrypt from 'vue-crypt'

Vue.use(VueCrypt)
```

## AES Example

```ecmascript 6
this.$aes.setKey('myPassword')

let encrypted = this.$aes.encrypt('Secret message')
let decrypted = this.$aes.decrypt(encrypted)

// Console print message "Secret message"
console.log(decrypted)
```

## RSA Example

```ecmascript 6
// Generate new Key with 1024 Bits
this.$rsa.setBit(1024)

let encrypted = this.$rsa.encrypt('Top-Secret message')
let decrypted = this.$rsa.decrypt(encrypted)

// Console print message "Top-Secret message"
console.log(decrypted)
```
