# 2. Logging, Screenshots, and Device Checks

```bash
adb logcat -c
adb logcat | grep -iE 'password|token|secret|authorization|session'
adb shell 'which su'
adb shell 'which busybox'
adb shell getprop | grep -Ei 'test-keys|generic|goldfish|emulator|sdk'
```

Check Logcat, crash reports, clipboard behavior, recent-app previews, and screenshots for sensitive content. Verify whether sensitive screens use `FLAG_SECURE`.

Root and emulator detection are defense-in-depth signals, not substitutes for server-side authorization. Keep bypass testing to disposable, explicitly authorized builds.
