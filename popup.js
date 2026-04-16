require('dotenv').config();
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
};

function checkBalance() {};

// Opens the network selection component
function getOpenNetwork() {};

// Retrieves the currently selected network to connect to
function getSelectedNetwork() {};

function setNetwork() {};

// Authenticates the user and allows them to log into the application
function loginUser() {};

function createUser() {};

// Opens the account creation modal for users to input credentials and create a new account
function openCreate() {};

function signUp() {};

function login() {};

function logout() {};

// Opens the token transfer component
function openTransfer() {};

// Navigates back to the previous component or view
function goBack() {};

function openImport() {};

function importGoBack() {};

function openActivity() {};

// Displays all assets fetched from the database or manually entered by the user in the wallet
function openAssets() {};

// Navigates the user back to the home page
function goHomePage() {};

function openImportModel() {};

function closeImportModel() {};

function addToken() {};

function addAccount() {};

// Reloads all wallet data when the extension is opened
function myFunction() {};

// Allows the user to copy their wallet address to the clipboard
function copyAddress() {};

// Allows the user to switch between different wallet accounts
function changeAccount() {};