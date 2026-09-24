# Tools & Cheatsheets

Quick-reference commands, one-liners, and workflow notes for the tools you
use most.

## Recon

```bash
subfinder -d target.tld -silent | httpx -silent | tee alive.txt
naabu -l alive.txt -top-ports 1000 -o ports.txt
```

## Fuzzing

```bash
ffuf -u https://target.tld/FUZZ -w wordlist.txt -mc 200,301,302,403
```

*(Keep expanding this page — it's the fastest one to build out since it's
mostly commands you already run.)*
