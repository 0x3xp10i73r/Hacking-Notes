# API Security

REST and GraphQL testing notes, mapped loosely to the OWASP API Security
Top 10.

## Topics to fill in

- BOLA / broken object level authorization
- Broken authentication
- Excessive data exposure
- Rate limiting & resource consumption
- Mass assignment
- GraphQL-specific abuse (introspection, batching, nested query DoS)

## Suggested tooling

- Burp Suite (with API-focused extensions)
- Postman / Insomnia for manual exploration
- `kiterunner` for API endpoint discovery
- `graphql-cop` for GraphQL misconfig scanning
