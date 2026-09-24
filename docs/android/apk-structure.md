# APK Structure

An APK is an Android application package. Treat each archive section as an evidence source during triage.

| Section | Contents | Review focus |
| --- | --- | --- |
| `AndroidManifest.xml` | App info, permissions, activities | Exported components and security configuration |
| `META-INF/` | Signing metadata | Certificate and signature evidence |
| `assets/` | Extra files and bundles | JavaScript, certificates, and configuration |
| `resources.arsc` | Compiled resources | Values not obvious in source output |
| `classes.dex` | Compiled code | Application logic and secrets |
| `lib/` | Native `.so` files | JNI boundaries and native strings |
| `res/` | Layouts, images, and strings | UI, URLs, and network configuration |

```bash
unzip -l app.apk
apktool d app.apk -o app-decoded
jadx -d app-jadx app.apk
apksigner verify --verbose --print-certs app.apk
```
