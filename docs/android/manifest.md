# Android Manifest

`AndroidManifest.xml` is the first file to read. It declares the package, permissions, components, intent filters, backup behavior, and network policy.

| Attribute or declaration | Why it matters |
| --- | --- |
| `android:exported` | Makes a component callable by other applications. |
| `android:permission` | Defines the permission required to reach a component. |
| `android:debuggable` | Allows debugging interfaces and should be disabled in production. |
| `android:allowBackup` | May permit application data extraction depending on OS and backup rules. |
| `android:dataExtractionRules` | Controls newer backup and transfer behavior. |
| `android:usesCleartextTraffic` | Allows unencrypted HTTP traffic when enabled. |
| `android:networkSecurityConfig` | Selects trust anchors, cleartext rules, and debug overrides. |
| `<queries>` | Declares package visibility and app interaction requirements. |
| Intent filters | Define implicit entry points and deep links. |

```bash
apktool d app.apk -o app-decoded
grep -RniE 'exported|allowBackup|debuggable|networkSecurityConfig|usesCleartextTraffic' app-decoded/AndroidManifest.xml
grep -RniE '<activity|<service|<receiver|<provider|<intent-filter|<data' app-decoded/AndroidManifest.xml
adb shell dumpsys package com.example.app
```

An exported component is a review signal, not proof of exploitability. Confirm the action is sensitive and check effective permissions and authentication.
