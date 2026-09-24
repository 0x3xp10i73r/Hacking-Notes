# 3. WebView Review

Flag these patterns for closer review:

```java
webView.getSettings().setJavaScriptEnabled(true);
webView.loadUrl(userControlledUrl);
webView.addJavascriptInterface(nativeBridge, "bridge");
settings.setAllowUniversalAccessFromFileURLs(true);
```

Check URL allowlists, navigation handling, JavaScript bridges, file access, mixed content, intent launches, and token exposure. The impact of `addJavascriptInterface` depends on API level, bridge annotations, and whether attacker-controlled content reaches the WebView.
