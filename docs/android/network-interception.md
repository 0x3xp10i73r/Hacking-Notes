# Network Interception

## Proxy with ADB

```bash
adb shell settings put global http_proxy <proxy-ip>:8080
adb shell settings put global http_proxy :0
adb shell settings delete global http_proxy
adb shell settings delete global global_http_proxy_host
adb shell settings delete global global_http_proxy_port
```

Configure Burp to listen on an interface reachable by the authorized test device. Install a CA only on that device and remove it after testing.

## Certificate pinning

Common indicators include:

```text
Trust anchor for certification path not found
SSLPeerUnverifiedException
Certificate pinning failure
```

Identify whether the app uses Network Security Config, OkHttp `CertificatePinner`, a custom `TrustManager`, native TLS, or a hybrid runtime. Prefer a debug build with pinning disabled. Any instrumentation or rebuilt APK should remain isolated to the assessment environment.
