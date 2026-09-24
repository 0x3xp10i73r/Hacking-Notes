# 2. Bad Cryptography Implementation

Look for:

- ECB mode, DES/3DES, MD5 or SHA-1 used for security decisions
- Hardcoded keys, IVs, static salts, predictable random values, or XOR
- Keys stored in preferences, databases, logs, or external storage
- Custom encryption without authenticated integrity protection

```bash
grep -RniE 'Cipher\.getInstance|SecretKeySpec|IvParameterSpec|SecureRandom|MessageDigest|AES/ECB|DES|MD5|SHA-1|Base64' app-jadx/
```

Document the algorithm, key lifecycle, storage location, exploitability, and recommended authenticated primitive or key-management boundary.
