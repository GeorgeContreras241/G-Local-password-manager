import CryptoJS from "crypto-js";

export const encrypt = (data, keyUser) => {
	const salt = CryptoJS.lib.WordArray.random(16);
	const iv = CryptoJS.lib.WordArray.random(16);

	const key = CryptoJS.PBKDF2(keyUser, salt, {
		keySize: 256 / 32,
		iterations: 10000,
	});

	const encrypted = CryptoJS.AES.encrypt(data, key, { iv });
	const hmac = CryptoJS.HmacSHA256(encrypted.toString(), key);

	return (
		salt.toString() + iv.toString() + encrypted.toString() + hmac.toString()
	);
};

export const decrypt = (data, keyUser) => {
	const salt = CryptoJS.enc.Hex.parse(data.substring(0, 32));
	const iv = CryptoJS.enc.Hex.parse(data.substring(32, 64));
	const ciphertext = data.substring(64, data.length - 64);
	const hmacStored = data.substring(data.length - 64);

	const key = CryptoJS.PBKDF2(keyUser, salt, {
		keySize: 256 / 32,
		iterations: 10000,
	});

	const hmacComputed = CryptoJS.HmacSHA256(ciphertext, key).toString();
	if (hmacComputed !== hmacStored) {
		return false
	}
	const decrypted = CryptoJS.AES.decrypt(ciphertext, key, { iv });

	return decrypted.toString(CryptoJS.enc.Utf8);
};
