# 1. Filesystem and Local Storage

The primary private data directory is usually `/data/data/<package>/`.

| Location | Typical contents |
| --- | --- |
| `databases/` | SQLite databases and journals |
| `shared_prefs/` | XML preferences, tokens, and flags |
| `files/` | App-created files and exports |
| `cache/` | Temporary data and downloaded content |
| `/sdcard/Android/data/<package>/` | External app data and caches |

```bash
adb shell 'su -c "find /data/data/com.example.app -maxdepth 2 -type f -print"'
adb pull /data/data/com.example.app/databases ./evidence/databases
sqlite3 ./evidence/databases/app.db '.tables'
```

Check plaintext credentials, tokens, backups, temporary files, and sensitive external storage data. Preserve evidence hashes.
