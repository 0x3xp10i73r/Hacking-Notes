# Static Analysis

Static analysis reviews an APK without running it. Start with the manifest, then inspect code, resources, native libraries, and bundled JavaScript.

## Workflow

1. Decode with APKTool and decompile with JADX.
2. Review manifest permissions, exported components, backup, and network policy.
3. Search for secrets, URLs, cryptographic misuse, WebView sinks, and trust decisions.
4. Inspect native `.so` files and hybrid bundles.
5. Record file paths, hashes, and reproducible evidence.

```bash
apktool d app.apk -o app-decoded
jadx -d app-jadx app.apk
grep -RniE 'password|secret|token|apikey|firebaseio|http://' app-jadx/ app-decoded/
```
