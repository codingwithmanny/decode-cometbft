# Decode Public CometBFT Public Key

## Requirements

- Node.js v18+
- pnpn or npm or yarn

## Installation

```bash
pnpm install;
```

## Usage

```bash
COMETBFT_PUBKEY="Eo1vZr/Zyx7xjaaEOtnbbBtux+MJNwXJUiTo8gIy8kPnpifQkUQ2DUwXddj6/bDnA/JGLBmsIamicyjCsL4MvoTBUfn94ddnaBx+2km5aN3YlrAJoyMCl9Zc+UTGDJjJ";
pnpm run decode $COMETBFT_PUBKEY;

# [Expected Output]:
# {
#   hexStrPubkey: '0x928d6f66bfd9cb1ef18da6843ad9db6c1b6ec7e3093705c95224e8f20232f243e7a627d09144360d4c1775d8fafdb0e7'
# }
```
