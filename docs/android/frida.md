# Frida Scripting

## Start Frida

```bash
adb push frida-server /data/local/tmp/frida-server
adb shell 'chmod 755 /data/local/tmp/frida-server'
adb shell '/data/local/tmp/frida-server >/dev/null 2>&1 &'
frida-ps -U
frida-ps -Uai
frida -U -f com.example.app -l script.js
```

## Basic Java hook

```javascript
Java.perform(function () {
  const Target = Java.use('com.example.app.Target');

  Target.method.overload('java.lang.String').implementation = function (value) {
    console.log('method input: ' + value);
    const result = this.method(value);
    console.log('method output: ' + result);
    return result;
  };
});
```

## Discovery and tracing

```bash
frida-discover -U -f com.example.app -o discovered.txt
frida-trace -U -f com.example.app -j 'com.example.app!*'
frida-trace -U -f com.example.app -i 'open*'
```

Use overload-aware hooks, preserve original behavior unless the test case requires otherwise, and tie scripts to evidence items.
