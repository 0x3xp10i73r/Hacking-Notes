---
description: Field notes on web, API, Android and network penetration testing - checklists, commands and write-ups for authorized security assessments.
---

<div class="page-header">
<img src="assets/header.jpg" alt="Hacking Notes header">
</div>

<div class="home-hero">

<div class="home-hero__copy">

<p class="home-kicker">~/notes $ cat README.md</p>

<h1>Hacking Notes</h1>

<p class="home-lead">Field notes on web, API, Android and network penetration testing: checklists, commands and write-ups for authorized assessments, kept short enough to find fast.</p>

<div class="home-cta">
<a class="home-btn home-btn--primary" href="android/">./start-with-android.sh</a>
<a class="home-btn" href="#popular-pages">./popular-pages.sh</a>
</div>

<p class="home-byline">by <a href="about/">Meghan Tashi</a> · <span>0x3xp10i73r</span></p>

</div>

<div class="home-term" role="note" aria-label="How to use these notes">
<div class="home-term__bar">bash — man notes</div>
<div class="home-term__body">
<p class="t-line"><span class="t-prompt">$</span> man notes</p>
<p class="t-head">USAGE</p>
<p class="t-row"><kbd>/</kbd><span>search every page</span></p>
<p class="t-row"><code>./area/</code><span>browse by area from the sidebar</span></p>
<p class="t-row"><code>[copy]</code><span>every command block is copy-paste ready</span></p>
<p class="t-head">SCOPE</p>
<p class="t-row"><code>authorized</code><span>targets only. no exceptions.</span></p>
<p class="t-line"><span class="t-prompt">$</span> <span class="t-cursor">_</span></p>
</div>
</div>

</div>

<section class="home-section" aria-labelledby="popular-pages">

<h2 id="popular-pages">Start here</h2>

<p class="home-note">New here? These pages follow the order an Android assessment runs.</p>

<ul class="home-jump">
<li><a href="android/setup/"><span class="path">android/setup</span><span class="desc">Install order for the JDK, emulator, ADB and tooling, plus device sanity checks.</span></a></li>
<li><a href="android/manifest/"><span class="path">android/manifest</span><span class="desc">Read AndroidManifest.xml first: permissions, exported components, backup and network policy.</span></a></li>
<li><a href="android/static-analysis/"><span class="path">android/static-analysis</span><span class="desc">Hardcoded secrets, weak cryptography, hybrid and native apps, obfuscation and integrity checks.</span></a></li>
<li><a href="android/network-interception/"><span class="path">android/network-interception</span><span class="desc">Proxy an app through ADB, and what to do when certificate pinning gets in the way.</span></a></li>
<li><a href="android/frida/"><span class="path">android/frida</span><span class="desc">Start frida-server, write a basic Java hook, then discover and trace methods.</span></a></li>
<li><a href="android/dynamic-analysis/"><span class="path">android/dynamic-analysis</span><span class="desc">Local storage, logging, WebViews, intents and deep links on a running app.</span></a></li>
<li><a href="android/pentesting-checklist/"><span class="path">android/pentesting-checklist</span><span class="desc">Grouped checks to record evidence against, build by build.</span></a></li>
<li><a href="android/reporting/"><span class="path">android/reporting</span><span class="desc">The fields to capture for every confirmed issue.</span></a></li>
</ul>

</section>

<section class="home-section" aria-labelledby="browse-areas">

<h2 id="browse-areas">Browse by area</h2>

<div class="home-areas">

<a class="home-area" href="android/">
<span class="home-area__top"><span class="home-area__dir">./android-mobile/</span><span class="home-area__badge home-area__badge--live">26 notes</span></span>
<span class="home-area__desc">APK anatomy, static and dynamic analysis, Frida, traffic interception, a checklist and a report template.</span>
</a>

<a class="home-area" href="web/">
<span class="home-area__top"><span class="home-area__dir">./web-app-security/</span><span class="home-area__badge home-area__badge--growing">1 write-up</span></span>
<span class="home-area__desc">Write-ups shaped like a client report: target, reproduction steps, impact and remediation.</span>
</a>

<a class="home-area" href="tools/">
<span class="home-area__top"><span class="home-area__dir">./tools-cheatsheets/</span><span class="home-area__badge home-area__badge--growing">growing</span></span>
<span class="home-area__desc">Recon and fuzzing one-liners, expanded as they get used.</span>
</a>

<a class="home-area" href="api/">
<span class="home-area__top"><span class="home-area__dir">./api-security/</span><span class="home-area__badge">planned</span></span>
<span class="home-area__desc">REST and GraphQL testing, mapped to the OWASP API Security Top 10.</span>
</a>

<a class="home-area" href="network/">
<span class="home-area__top"><span class="home-area__dir">./network-security/</span><span class="home-area__badge">planned</span></span>
<span class="home-area__desc">Enumeration through post-exploitation: SMB and NTLM, Active Directory, pivoting.</span>
</a>

<a class="home-area" href="bug-bounty/">
<span class="home-area__top"><span class="home-area__dir">./bug-bounty-writeups/</span><span class="home-area__badge">planned</span></span>
<span class="home-area__desc">Publicly disclosable findings, published only where the program allows it.</span>
</a>

</div>

</section>

<section class="home-section" aria-labelledby="ground-rules" markdown="1">

<h2 id="ground-rules">Ground rules</h2>

!!! warning "Authorized testing only"
    Everything here is for systems you own or have written permission to test. These are working notes, not gospel: verify before you rely on them.

</section>

<section class="profile-section" aria-labelledby="public-profiles-title">

<h2 id="public-profiles-title">Public profiles</h2>

<div class="profile-grid">

<a class="profile-card" href="https://app.hackthebox.com/" rel="noopener" target="_blank">
<img class="profile-logo-image" src="assets/hack-the-box-seeklogo.png" alt="Hack The Box logo" width="56" height="56" loading="lazy" decoding="async">
<span class="profile-card-copy">
<strong>Hack The Box</strong>
<small>Labs, challenges, and security practice</small>
</span>
<span class="profile-arrow" aria-hidden="true">-&gt;</span>
</a>

<a class="profile-card" href="https://tryhackme.com/" rel="noopener" target="_blank">
<img class="profile-logo-image" src="assets/thm.png" alt="TryHackMe logo" width="56" height="56" loading="lazy" decoding="async">
<span class="profile-card-copy">
<strong>TryHackMe</strong>
<small>Guided rooms and hands-on learning</small>
</span>
<span class="profile-arrow" aria-hidden="true">-&gt;</span>
</a>

</div>

</section>