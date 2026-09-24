# 4. Obfuscation and Integrity Checks

R8 and ProGuard raise the cost of reversing but do not protect secrets embedded in the client. Review:

- Class, method, and string obfuscation
- Repackaging and signing-certificate checks
- Tampered resources and unexpected APK signatures
- Debugger and emulator detection
- Native integrity checks

Document both the protection and the authorized bypass conditions. Obfuscation is not a complete security control.
