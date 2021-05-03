const TestRPC = require('ganache-cli');

module.exports = {
    networks: {
        development: {
            provider: TestRPC.provider(),
            network_id: '*'
        }
    },
    plugins: ["solidity-coverage"],
    compilers: {
        solc: {
            version: '^0.8.0',
            settings: {
                optimizer: {
                    enabled: true
                }
            }
        }
    }
}
