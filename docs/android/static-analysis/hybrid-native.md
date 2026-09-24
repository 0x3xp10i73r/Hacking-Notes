# 3. Reversing Hybrid and Native Apps

Inspect common hybrid and native locations:

```text
assets/index.android.bundle
assets/flutter_assets/
lib/*/*.so
```

```bash
js-beautify app-decoded/assets/index.android.bundle -o bundle.js
find app-decoded/lib -type f -name '*.so' -exec strings {} \; > native-strings.txt
grep -Ei 'https?://|token|secret|firebase|password' native-strings.txt
```

Hermes bundles may require a Hermes-compatible decompiler. Treat decompiled output as an aid and validate important behavior at runtime.
