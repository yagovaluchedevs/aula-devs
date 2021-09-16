const crypto = require("crypto");

const encryptionAlgorithm = "aes-256-ctr";
const passwordEncryption = "helloworld";

function cryptography() {
  const elementCryptography = "Joaquim";
  const createdCryptography = crypto.createCipher(
    encryptionAlgorithm,
    passwordEncryption
  );
  const encryptedElement = createdCryptography.update(
    elementCryptography,
    "utf-8",
    "hex"
  );

  return encryptedElement;
}

const resultCryptography = cryptography();

console.log("[criptografado]...", resultCryptography);

function decryption() {
  const decipher = crypto.createDecipher(
    encryptionAlgorithm,
    passwordEncryption
  );
  const decipherElement = decipher.update(resultCryptography, "hex", "utf-8");
  return decipherElement;
}

const resultDecryption = decryption();
console.log("[Descriptografado]...", resultDecryption);
