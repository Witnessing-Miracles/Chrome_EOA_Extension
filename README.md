# Chrome EOA Extension

A lightweight Chrome browser extension for managing Ethereum-based wallets and conducting blockchain transactions directly from your browser. This extension provides a simple, user-friendly interface for EOA (Externally Owned Account) wallet management with support for multiple blockchain networks.

## Overview

Chrome EOA Extension is designed for users who want to manage their cryptocurrency assets without installing heavy wallet applications. It enables you to send tokens, manage multiple accounts, import wallets, and track transaction history—all within a Chrome extension popup.

![alt text](./img/chrome_eoa_extension.png)

## Features

### 🔐 Account Management
- **Create Wallet**: Generate new wallet accounts with private keys and mnemonics
- **Import Account**: Import existing wallets using private keys
- **Multiple Accounts**: Switch between multiple wallet accounts seamlessly
- **Account Balance**: View real-time balance for each account
- **Copy Address**: Quick copy-to-clipboard functionality for wallet addresses

### 🌐 Network Support
- **Multi-Network**: Support for multiple blockchain networks (Ethereum, Sepolia, Polygon, Arbitrum)
- **Network Switching**: Easily switch between different networks via dropdown selector
- **RPC Integration**: Uses Alchemy RPC endpoints for reliable blockchain communication

### 💸 Transaction Management
- **Send Tokens**: Transfer tokens to any address with customizable amounts
- **Transaction Simulation**: Preview transactions before execution
- **Transaction History**: View activity log of all transactions
- **Gas Estimation**: Automatic gas fee calculation

### 🎫 Token Management
- **Add Custom Tokens**: Import custom ERC-20 tokens by address
- **Token Display**: View all tokens in your portfolio with balances
- **Token Information**: Display token symbols and contract addresses

### 🔑 Security Features
- **Encrypted Private Keys**: Private keys are encrypted using crypto-js before storage
- **Environment Variables**: Sensitive data stored in .env with .gitignore protection
- **Secure Authentication**: Email and password-based login system
- **Password Hashing**: Passwords hashed with bcryptjs for security

### 📱 User Interface
- **Modern Design**: Gradient-based UI with green and purple color scheme
- **Responsive Layout**: Optimized for 22rem width (typical Chrome extension size)
- **Smooth Animations**: Loading spinner and transition effects
- **Intuitive Navigation**: Easy-to-use interface with clear action buttons

## Project Structure

```
Chrome_EOA_Extension/
├── popup.js                    # Main extension logic and event handlers
├── popup.html                  # UI markup for the extension popup
├── style.css                   # Styling for the extension interface
├── ethers.js                   # Ethers.js library for blockchain interaction
├── chromeapi/                  # Backend API server
│   ├── server.js              # Express server entry point
│   ├── app.js                 # Express app configuration
│   ├── config.env             # Environment variables
│   ├── Api/
│   │   ├── Controllers/
│   │   │   └── authController.js    # Authentication and data operations
│   │   ├── Models/
│   │   │   ├── userModel.js         # User schema (MongoDB)
│   │   │   ├── tokenModel.js        # Token schema (MongoDB)
│   │   │   └── accountModel.js      # Account schema (MongoDB)
│   │   └── Routers/
│   │       ├── userRouter.js        # User authentication routes
│   │       ├── tokenRouter.js       # Token management routes
│   │       └── accountRouter.js     # Account management routes
├── assets/                    # UI assets and images
└── package.json              # Project dependencies
```

## Installation

### Prerequisites
- Node.js (v20.19.0 or higher)
- npm or pnpm
- Chrome browser
- MongoDB Atlas account (for backend)

### Setup Instructions

**1. Clone the repository**
```bash
git clone https://github.com/Witnessing-Miracles/Chrome_EOA_Extension.git
cd Chrome_EOA_Extension
```

**2. Install dependencies**
```bash
npm install
# or
pnpm install
```

**3. Configure environment variables**
Create a `config.env` file in the `chromeapi` directory:
```env
DATABASE=mongodb+srv://your_username:your_password@cluster.mongodb.net/?appName=Cluster0
DATABASE_PASSWORD=your_password
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
JWT_COOKIE_EXPIRES_IN=7
```

**4. Start the backend server**
```bash
node chromeapi/server.js
```

**5. Load the extension in Chrome**
- Open Chrome and navigate to `chrome://extensions/`
- Enable "Developer mode" (top right)
- Click "Load unpacked"
- Select the project directory
- The extension should now appear in your Chrome toolbar

## Usage

### Creating a New Wallet
1. Click the extension icon in your Chrome toolbar
2. Click "Create Account" on the login screen
3. Enter your email and password
4. A new wallet will be generated with a private key and mnemonic
5. Save your recovery phrase in a safe place

### Sending Tokens
1. Click the "Send" button on the home screen
2. Enter the recipient's address
3. Enter the amount to send
4. Review the transaction and click "Transfer"
5. Wait for the transaction to complete
6. Click the transaction link to view it on the blockchain explorer

### Switching Networks
1. Click the network selector at the top of the extension
2. Choose your desired network (Ethereum, Sepolia, Polygon, Arbitrum)
3. The extension will automatically switch to the selected network

### Importing a Custom Token
1. Click "Import" on the home screen
2. Enter the token contract address
3. Enter the token name and symbol
4. Click "Import" to add the token to your portfolio

### Importing an Existing Wallet
1. Click "Account" on the home screen
2. Enter your private key in the textarea
3. Click "Import" to add the account to your wallet

## API Endpoints

### User Management
- `POST /api/v1/user/signup` - Register a new user
- `POST /api/v1/user/login` - Authenticate user

### Token Management
- `GET /api/v1/tokens/alltoken` - Fetch all tokens
- `POST /api/v1/tokens/createtoken` - Add a new token

### Account Management
- `GET /api/v1/account/allaccount` - Fetch all accounts
- `POST /api/v1/account/createaccount` - Create a new account

## Technologies Used

### Frontend
- **HTML5**: Markup structure
- **CSS3**: Styling with gradients and animations
- **JavaScript**: Core extension logic
- **Ethers.js**: Blockchain interaction library
- **crypto-js**: Encryption for sensitive data

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **dotenv**: Environment variable management
- **CORS**: Cross-origin resource sharing

## Security Considerations

⚠️ **Important**: This extension is for educational purposes. Before using with real funds:

1. **Private Key Safety**: Never share your private keys with anyone
2. **Backup Recovery Phrase**: Store your mnemonic in a secure location
3. **Network Security**: Only use on trusted networks
4. **Password Strength**: Use a strong, unique password
5. **Regular Updates**: Keep the extension and dependencies updated

## Data Storage

- **Frontend**: User wallet data stored in browser's localStorage
- **Backend**: User credentials and account data stored in MongoDB
- **Encryption**: Private keys encrypted using crypto-js before transmission

## Troubleshooting

### Extension not loading
- Ensure you're loading from the correct directory
- Check the browser console for error messages
- Verify all dependencies are installed

### Transaction failed
- Check your account balance
- Verify the recipient address is correct
- Ensure you have sufficient gas fees
- Check network connectivity

### Backend connection issues
- Verify the backend server is running on port 3000
- Check MongoDB connection string in config.env
- Ensure CORS is properly configured

## Future Enhancements

- [ ] Hardware wallet integration (Ledger, Trezor)
- [ ] Multi-signature wallet support
- [ ] Advanced transaction builder
- [ ] Real-time price charts
- [ ] NFT management
- [ ] DeFi protocol integration
- [ ] Mobile app version
- [ ] Biometric authentication

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is open source and available under the MIT License.

## Disclaimer

This extension is provided as-is for educational purposes. Users are responsible for their own security and the safety of their private keys. The developers are not responsible for any loss of funds or security breaches.

## Support

For issues, questions, or suggestions, please open an issue on the GitHub repository or contact the development team.

---

**Built with ❤️ by Peile Wu**
