# 1. Reading Hardcoded Strings

Search decompiled code, resources, assets, and native libraries for:

- API keys, access tokens, passwords, and database credentials
- Internal hostnames, IP addresses, debug endpoints, and Firebase URLs
- Encryption keys, initialization vectors, salts, and signing material
- PII, test accounts, verbose errors, and feature flags

```bash
grep -RniE 'password|passwd|secret|token|apikey|api_key|bearer|firebaseio|http://' app-jadx/ app-decoded/
find app-decoded/lib -type f -name '*.so' -exec strings {} \; | grep -Ei 'token|secret|key|http'
```

A string is not automatically a live credential. Verify scope, expiry, permissions, and whether it is only a public identifier. Never publish live secrets.
