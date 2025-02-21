// Imports
// ================================================================
import { PublicKey } from '@chainsafe/blst';

// Main Function
// ================================================================
const main = async () => {
  const COMETBFT_PUBLIC_KEY = process.argv[2];
  const decodedBuffer = Buffer.from(COMETBFT_PUBLIC_KEY, 'base64');

  if (decodedBuffer.length !== 96) {
    throw new Error('Invalid public key length. 96 bytes.');
  }
  
  const hexStrPubkey = PublicKey.fromBytes(decodedBuffer).toHex()
  console.log({ hexStrPubkey });
};

// Init
// ================================================================
main()
  .then(() => {
    console.log('Script complete!')
  })
  .catch((error) => {
    console.error({ error })
  });