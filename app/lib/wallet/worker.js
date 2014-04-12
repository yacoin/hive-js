var BIP39 = require('bip39')
var bip39 = new BIP39()

self.addEventListener('message', function(e) {
  var data = e.data || {}
  var mnemonic = data.passphrase || bip39.generateMnemonic()
  var seed = bip39.mnemonicToSeed(mnemonic)

  self.postMessage({seed: seed, mnemonic: mnemonic})
}, false);

