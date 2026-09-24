# Setup and Installation

## Installation order

1. Install Java and the JDK.
2. Install an emulator such as Genymotion or MEmu, or prepare an authorized test device.
3. Install ADB and confirm the device is visible.
4. Record Android version, CPU ABI, root state, and SELinux mode.
5. Choose matching Frida server and client versions if instrumentation is in scope.

## Device checks

```bash
adb devices
adb shell getprop ro.product.cpu.abi
adb shell getprop ro.build.version.release
adb shell getenforce
adb shell ip route
```

## Install and inspect an APK

```bash
adb install app.apk
adb shell pm list packages -3
adb shell pm path com.example.app
adb shell dumpsys package com.example.app
adb shell monkey -p com.example.app -c android.intent.category.LAUNCHER 1
adb uninstall com.example.app
```

Use a dedicated emulator or test device. Keep extracted credentials, tokens, logs, and personal data inside the authorized evidence boundary.
