require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note ranch pulp grace drive equal giggle'; 
let testAccounts = [
"0xcc9f9b85d2af25f3d769e9dfd2ee54a831ac25f11166455616b67a386e388e52",
"0x69a7a820b33319bc5d5d743fdd550589d0c68e9c407f92b02800d61769d91217",
"0xe7b0869d2fd79e28e63d2c1a59a4d54e3ea2edd8ceeef68fe56485f9b0761923",
"0xfef7b2c56af22af9b615ed389cd28ffc9d5bb1d877bab4225efe120351eaf994",
"0x7fa35eafb473d46c17f5a494a62f1c3afa9f782f5e8a4c03d595e24ac0e0d186",
"0x0cb66d62c77df9c00e0f90f4f2726a61b3efd8e957c29b5833a1dcb823608616",
"0x1a2399e5f45d77a33a7d6f75c0a1b38348acdf25eae78b1efa997e88eaf5c6e0",
"0x41be17330d8f4fcd7b2a731bc7edb35b95b8453ee98bb0557737629026cae7d5",
"0x6e714270ef4558a7b3f1973de2a12294d9012c307bf0736d7e8cbe1334b80132",
"0x85f2049ecd803741c9e2bc99a1e4013cd6adb63ecd9a2a786482ef32ba3960bc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


