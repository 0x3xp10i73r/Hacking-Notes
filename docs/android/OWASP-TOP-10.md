# OWASP Mobile Top 10 (Android)

| Code | Vulnerability | Description |
| :---: | :--- | :--- |
| `M1` | **Improper Credential Usage** | Storing passwords/tokens in plaintext, hardcoding API keys, or using weak authentication flows. |
| `M2` | **Inadequate Supply Chain Security** | Risky third-party dependencies, unverified SDKs, or vulnerable third-party libraries. |
| `M3` | **Insecure Authentication/Authorization** | Missing authorization checks, flawed biometric logic, or weak session management. |
| `M4` | **Insufficient Input/Output Validation** | Unvalidated user or IPC inputs, enabling injection attacks, path traversal, or WebView XSS. |
| `M5` | **Insecure Communication** | Missing TLS encryption, disabled certificate validation, or cleartext HTTP traffic. |
| `M6` | **Inadequate Privacy Controls** | Unnecessary permissions, excessive data collection, or logging sensitive user data to Logcat. |
| `M7` | **Insufficient Binary Protections** | Binaries lacking obfuscation, root detection, or tamper resistance against reverse engineering. |
| `M8` | **Security Misconfiguration** | Unnecessarily exported components, `android:debuggable="true"`, or permissive backup flags. |
| `M9` | **Insecure Data Storage** | Storing sensitive data insecurely in SharedPreferences, SQLite databases, or external storage. |
| `M10` | **Insufficient Cryptography** | Deprecated algorithms (DES, MD5, SHA-1), hardcoded encryption keys, or improper IV generation. |
