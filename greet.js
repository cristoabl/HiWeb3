function greet() {
    alert("Hi World");
}
function connect() {
    if(window.ethereum) {
        alert("Wallet not injected in browser");
    } else {
        try {
            const accounts = window.ethereum.request({
                method: "eth_requestAccounts",
                params: []
            })
            const account = accounts[0];

            const chainId = window.ethereum.request({
                method: "eth_chainId",
                params: []
            })
            alert("Connected to acc: ", account, " and chain: ", chainId);
        } catch {
            alert("Refresh and try again");
        }
    }
}