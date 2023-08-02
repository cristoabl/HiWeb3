const CHAIN_ID = "0x5";
const CHAIN_NAME = "Goerli";
const CONTRACT_ADDRESS = "0xfa1af7953872A7BD4913e1C049B30e2Fc02d0340";


async function greet() {
    const url = "https://goerli.infura.io/v3/974b779b823e472992871110fd05819e"
    const infura_response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            params: [{
                    data: "0xef690cc0",
                    to: CONTRACT_ADDRESS
                },
                "latest"
            ],
            jsonrpc: "2.0",
            method: "eth_call",
            id: 1
        })
    });
    const result = await infura_response.json();

    let hex = result.result;
    hex = String(hex).slice(2);

    const bytes = new Uint8Array(Math.ceil(String(hex).length / 2));
    for (let i = 0; i < bytes.length; i++) {
        const start = i*2;
        const stop = start+2;
        const BASE = 16;
        const currentSubString = String(hex).substring(start, stop)
        bytes[i] = parseInt(currentSubString, BASE);
   }

    const decoder = new TextDecoder("ascii");
    const message = decoder.decode(bytes);
    console.log("message: ", message);
    alert(message);
}
async function connect() {
    if(!window.ethereum) {
        alert("Wallet not injected in browser");
    } else {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
                params: []
            });
            const account = accounts[0];

            const chainId = await window.ethereum.request({
                method: "eth_chainId",
                params: []
            });
            if (chainId !== CHAIN_ID) {
                alert("Connected to wrong chain! Change to " + CHAIN_NAME)
            } else {
                alert("Connected to acc: " + String(account) + 
                        " and chain: " + String(chainId));
            }

        } catch {
            alert("Refresh and try again");
        }
    }
}