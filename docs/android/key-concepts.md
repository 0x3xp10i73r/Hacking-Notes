# Key Concepts

## App Types

### Native

Built for one operating system using Java or Kotlin for Android, or Swift and Objective-C for iOS. Native apps have full access to device hardware and platform APIs.

### Cross-Platform

A single codebase targets multiple operating systems. Common examples include Flutter and React Native.

### Hybrid

HTML, CSS, and JavaScript are wrapped inside a native container. Common examples include Cordova and Ionic.

## Android Internals

### Smali

An assembly-like language for Android Dalvik bytecode, commonly found in `classes.dex` after decompilation.

### DVM (Dalvik Virtual Machine)

A process virtual machine designed to run Android applications efficiently.

### Compilation Flow

```text
Java/Kotlin -> .class -> .dex -> Dalvik VM -> Android runtime
```

### Common Android Analysis Tools

- **JADX**: Decompiles an APK into readable Java-like source.
- **Dex2Jar**: Converts APK and DEX content into JAR files.
- **APKTool**: Extracts and rebuilds APK resources and Smali code.
- **IPC**: Inter-Process Communication, allowing separate processes or apps to communicate like an API between apps.

## APK Signing

The developer uses a private key to generate a digital signature. Android stores the corresponding public certificate inside the APK.

During installation and updates, Android verifies the signature. If an APK is modified or signed with a different key, the installation or update fails because the signing identity no longer matches.

## Android Architecture Layers

1. **Kernel**: The lowest layer, responsible for core system operations and hardware communication.
2. **Libraries**: The transaction layer between the kernel, applications, and the Android Runtime.
3. **Application Framework**: APIs and compiled system code used by applications and system services.
4. **Applications**: The top layer where user-facing Android apps run.
