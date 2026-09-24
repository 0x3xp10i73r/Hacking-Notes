# Android Terminologies

| Term | Category | Definition |
| --- | --- | --- |
| Activity | Component | A UI screen or application flow. Exported activities may be launched by other apps. |
| Service | Component | A background component that performs long-running work. |
| BroadcastReceiver | Component | Listens for system or application events. |
| ContentProvider | Component | Shares structured data through `content://` URIs. |
| Intent | Component | Message object used to request an action from another component. |
| Explicit Intent | Component | Targets a component within a known application. |
| Implicit Intent | Component | Lets Android resolve a handler, which creates interception risk. |
| Binder IPC | Architecture | Android's inter-process communication mechanism. |
| ADB | Tool | Command-line bridge for device communication, shell access, and evidence collection. |
| DEX | Architecture | Compiled bytecode stored inside an APK. |
| ART | Architecture | Modern Android Runtime that replaced Dalvik. |
| Smali | Architecture | Assembly-like representation of DEX bytecode. |
| Deep link | Attack surface | URI or intent entry point that may bypass authentication or validation. |
| Certificate pinning | Security | Validation of an expected server certificate or public key. |
| Keystore | Security | Android API and storage boundary for cryptographic keys. |
