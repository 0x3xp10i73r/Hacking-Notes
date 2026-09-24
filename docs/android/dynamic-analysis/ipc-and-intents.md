# 4. IPC, Intents, and Deep Links

```bash
adb shell dumpsys package com.example.app | grep -Ei 'Activity|Service|Receiver|Provider|exported|permission'
adb shell am start -n com.example.app/.TestActivity
adb shell am broadcast -a com.example.app.TEST -e value test
adb shell content query --uri content://com.example.app.provider/items
adb shell am start -W -a android.intent.action.VIEW -d 'myapp://example.test/account?next=/dashboard'
```

Test exported activities, services, receivers, and providers for missing permissions, untrusted extras, authentication bypass, URI grants, path traversal, and intent redirection. Review `PendingIntent.getActivity`, `getService`, and `getBroadcast` for confused-deputy and mutability issues.
