# Chrome EOA Extension - Project Documentation

This document tracks the deployment status, updates, and functional descriptions of the Chrome EOA Extension project. It will be updated as the project evolves.

## Latest Update: [2026-04-16]

### File Updated: `popup.js`
The core logic file for the extension's popup interface has been initialized. The following changes were implemented:
- **Refined Documentation**: All Chinese comments were translated into professional English, ensuring technical accuracy for a blockchain wallet context.
- **Code Structure Preservation**: The original function stubs and state variables were maintained to ensure compatibility with existing development plans.

---

## Core Components & State Variables

The `popup.js` file manages the state of the wallet and handles interactions between the user interface and the blockchain.

| Variable | Description |
| :--- | :--- |
| `providerURL` | Stores the RPC endpoint URL for the current blockchain network. |
| `provider` | The active Ethers/Web3 provider instance used for blockchain communication. |
| `privateKey` | The sensitive private key of the currently active account (handled in memory). |
| `address` | The public wallet address of the currently active account. |

---

## Function Reference

Below is a detailed breakdown of the functions defined in `popup.js`. These functions are responsible for the wallet's core features, including account management, network switching, and transaction handling.

### 1. Initialization & UI Management
- **`DOMContentLoaded` Listener**: Initializes the extension by targeting all necessary DOM elements once the popup is loaded.
- **`goBack()`**: Navigates the user back to the previous view or component.
- **`goHomePage()`**: Returns the user to the main dashboard/home screen of the wallet.
- **`myFunction()`**: A utility function designed to reload or refresh all wallet data when the extension is opened.

### 2. Account & Authentication
- **`loginUser()`**: Authenticates the user and grants access to the wallet application.
- **`createUser()`**: Handles the logic for generating a new wallet account.
- **`openCreate()`**: Opens the modal or view where users can input credentials to create a new account.
- **`signUp()` / `login()` / `logout()`**: Standard authentication flow for managing user sessions.
- **`addAccount()`**: Allows the user to create or add an additional account to the wallet.
- **`copyAddress()`**: Copies the current wallet address to the user's clipboard.
- **`changeAccount()`**: Enables the user to switch between multiple accounts within the wallet.

### 3. Network Management
- **`getOpenNetwork()`**: Opens the UI component for network selection.
- **`getSelectedNetwork()`**: Retrieves the details of the network the user intends to connect to.
- **`setNetwork()`**: Updates the wallet's active provider to the newly selected network.

### 4. Asset & Transaction Handling
- **`checkBalance()`**: Fetches and displays the current balance of the active account.
- **`openTransfer()`**: Opens the interface for sending tokens or assets.
- **`openAssets()`**: Displays a list of all assets (tokens/NFTs) associated with the user's account.
- **`addToken()`**: Allows users to manually add custom tokens to their asset list.
- **`openActivity()`**: Shows the transaction history or recent activity of the wallet.

### 5. Import Functionality
- **`openImport()`**: Opens the initial import interface.
- **`importGoBack()`**: Navigates back from the import screen.
- **`openImportModel()`**: Opens the specific modal for importing an existing wallet via private key or seed phrase.
- **`closeImportModel()`**: Closes the import modal.

---

## Future Roadmap
- Implementation of `ethers.js` or `web3.js` for actual blockchain interaction.
- Secure storage integration for encrypted private keys.
- Real-time price fetching for assets.
- Support for EIP-1559 transactions.
