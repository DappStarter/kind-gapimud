require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food invite return pizza push goddess light army genius'; 
let testAccounts = [
"0xf9a87dae1632dc8b2d45df584db6f8bb41c4cf6eab037c22c77850988ea5e6a3",
"0x931499685d83b20c15356898b25978f1838b4848f99c1d2446638fb1c872376a",
"0x6237354568dd15452d1ff46fa40b6d6c11ddedeccada67acc827846fb3e77108",
"0x672a2eb88004c91a1733e268949fe69ebe6e02bdc42ecae92945e27ab34af6b9",
"0x03b50c52019c9c187c78f02562571d672ea043bdcee5d9f43e5cca7bebacc85c",
"0x74d31d4080299363fe601a5fcc44a2e077747bf5ecba35c4a243a99aa360b2fa",
"0x61818a375b6ace0eabefc57cf03dac69f100f61613f552899e82416f41a13955",
"0x4f5195bb3b20f1d45d50723c2891df7d50f194a7b5134b9fe1dfcc954cbab9fb",
"0xcb17b1e5f734c41e29ec88531e248b77ac2ab031ff49ecb813f8129183e44bc6",
"0xbd6812edee9f70f5f241151b04b5af2738f61d1eaeaac49b8c60d609dc203242"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
