require('dotenv').config();
const { allowedNodeEnvironmentFlags } = require('node:process');
const { decodeFunc } = require('./security');

/**
 * This file builds all the features and functionalities for the extension, including API calls, 
 * generating APIs, private keys, passwords, and more. It is a critical component of the wallet.
 */
document.addEventListener("DOMContentLoaded", function() {
    // Target all the UI elements here
    document.getElementById("accountList").addEventListener("click", changeAccount);
    document.getElementById("userAddress").addEventListener("click", copyAddress);
    document.getElementById("transferFund").addEventListener("click", handler);
    document.getElementById("header_network").addEventListener("click", getOpenNetwork);
    document.getElementById("network_item").addEventListener("click", getSelectedNetwork);
    document.getElementById("add_network").addEventListener("click", setNetwork);
    document.getElementById("loginAccount").addEventListener("click", loginUser);
    document.getElementById("accountCreate").addEventListener("click", createUser);
    document.getElementById("openCreate").addEventListener("click", openCreate);
    document.getElementById("sign_up").addEventListener("click", signUp);
    document.getElementById("login_up").addEventListener("click", login);
    document.getElementById("logout").addEventListener("click", logout);
    document.getElementById("open_Transfer").addEventListener("click", openTransfer);
    document.getElementById("goBack").addEventListener("click", goBack);
    document.getElementById("open_Import").addEventListener("click", openImport);
    document.getElementById("open_assets").addEventListener("click", openAssets);
    document.getElementById("open_activity").addEventListener("click", openActivity);
    document.getElementById("goHomePage").addEventListener("click", goHomePage);
    document.getElementById("openAccountImport").addEventListener("click", openImportModel);
    document.getElementById("close_import_account").addEventListener("click", closeImportModel);
    document.getElementById("add_new_token").addEventListener("click", addToken);
    document.getElementById("add_New_Account").addEventListener("click", addAccount);
});

// State Variables
// Manage state variables to support multiple Accounts and Networks
let providerURL = decodeFunc(process.env.RPC_URL);

let privateKey = decodeFunc(process.env.PRIVATE_KEY);
let address;

// Functions
function handler() {
    document.getElementById("transfer_center").style.display = "flex";
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;
    const testAccount = "0x4f830F6BCB420f99e3b88DbaF3C496e0F60b5B66";

    // Provider
    const provider = new ethers.providers.JsonRpcProvider(providerURL);

    let wallet = new ethers.wallet(privateKey, provider);
    const tx = {
        to: address,
        value: ethers.utils.parseEther(amount),
    };

    let a = document.getElementById("link");
    a.href = "somelink url";

    wallet.sendTransaction(tx).then((txObj) => {
        console.log("txHash:", txObj.hash);
        
        document.getElementById("transfer_center").style.display = "none";
        const a = document.getElementById("link");

        document.getElementById("link").style.display = "block";
    });
}

function checkBalance(address) {
    const provider = new ethers.providers.JsonRpcProvider(providerURL);
    provider.getBalance(address).then((balance) => {
        const balanceInEth = ethers.utils.formatEther(balance);
        document.getElementById("accountBalance").innerHTML = `${balanceInEth} ETH`;
        document.getElementById("userAddress").innerHTML = `${address.slice(0, 15)} ...`;
    });
}

// Opens the network selection component
function getOpenNetwork() {
    document.getElementById("network").style.display = "block";
}

// Retrieves the currently selected network to connect to
function getSelectedNetwork(e) {
    const element = document.getElementById("selected_network");
    element.innerHTML = e.target.innerHTML;

    if (e.target.innerHTML === "Ethereum") {
        providerURL = "https://eth-mainnet.g.alchemy.com/v2/2Pc6Ms3EX5OoAN9maUcmdhYkME-NAja6";
        document.getElementById("network").style.display = "none";
    } else if (e.target.innerHTML == "Sepolia") {
        providerURL = "https://eth-sepolia.g.alchemy.com/v2/2Pc6Ms3EX5OoAN9maUcmdhYkME-NAja6";
        document.getElementById("network").style.display = "none";
    } else if (e.target.innerHTML == "Polygon Mainnet") {
        providerURL = "https://polygon-mainnet.g.alchemy.com/v2/2Pc6Ms3EX5OoAN9maUcmdhYkME-NAja6";
        document.getElementById("network").style.display = "none";
    } else {
        providerURL = "https://arb-sepolia.g.alchemy.com/v2/2Pc6Ms3EX5OoAN9maUcmdhYkME-NAja6";
        document.getElementById("network").style.display = "none";
    }

    console.log(providerURL);
}

function setNetwork() {
    document.getElementById("network").style.display = "none";
}

// Authenticates the user and allows them to log into the application
function loginUser() {
    document.getElementById("createAccount").style.display = "none";
    document.getElementById("LoginUser").style.display = "block";
}

function createUser() {
    document.getElementById("createAccount").style.display = "block";
    document.getElementById("LoginUser").style.display = "none";
}

// Opens the account creation modal for users to input credentials and create a new account
function openCreate() {
    document.getElementById("createAccount").style.display = "none";
    document.getElementById("create_popUp").style.display = "block";
}

function signUp() {
    const name = document.getElementById("sign_up_name").value;
    const email = document.getElementById("sign_up_email").value;
    const password = document.getElementById("sign_up_password").value;
    const passwordConfirm = document.getElementById("sign_up_passwordConfirm").value;

    document.getElementById("field").style.display = 'none';
    document.getElementById("center").style.display = 'block';

    const wallet = ethers.Wallet.createRandom();

    if (wallet.address) {
        console.log(wallet)

        // API CALL
        const url = "http://localhost:3000/api/v1/user/signup";
        const data = {
            name: name,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            address: wallet.address,
            private_key: wallet.privateKey,
            mnemonic: wallet.mnemonic.phrase,
        };

        fetch(url, {
            method: "POST",
            handlers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json()).then((result) => {
            document.getElementById("createAddress").innerHTML = wallet.address;
            document.getElementById("createPrivateKey").innerHTML = wallet.PrivateKey;
            document.getElementById("createMnemonic").innerHTML = wallet.mnemonic.phrase;
            document.getElementById("center").style.display = "none";
            document.getElementById("accountData").innerHTML = "block";
            document.getElementById("sign_up").innerHTML = "none";

            const userWallet = {
                address: wallet.addrsss,
                private_key: wallet.privateKey,
                mnemonic: wallet.mnemonic.phrase,
            };

            const jsonObj = JSON.stringify(userWallet);
            localStorage.setItem("userWallet", jsonObj);

            document.getElementById("goHomePage").style.display = "block";
            window.location.reload();
        }).catch((error) => {
            console.log("ERROR:", error);
        });
    }
}

function login() {}

function logout() {}

// Opens the token transfer component
function openTransfer() {}

// Navigates back to the previous component or view
function goBack() {}

function openImport() {}

function importGoBack() {}

function openActivity() {}

// Displays all assets fetched from the database or manually entered by the user in the wallet
function openAssets() {}

// Navigates the user back to the home page
function goHomePage() {}

function openImportModel() {}

function closeImportModel() {}

function addToken() {}

function addAccount() {}

// Reloads all wallet data when the extension is opened
function myFunction() {}

// Allows the user to copy their wallet address to the clipboard
function copyAddress() {}

// Allows the user to switch between different wallet accounts
function changeAccount() {}