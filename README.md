# reeldemiercoles.com

Meme landing for reeldemiercoles.com: fake login → fake "you got hacked" screen (5 s) → "bro, use the app I built for you".

Plain static HTML/CSS/JS, no build step.

- Login: `admin` / `pass` (client-side only, it's a joke)
- Apps live on subdomains, e.g. https://mixnmatchpadel.reeldemiercoles.com

## Deploy

Every push to `main` uploads the repo to `public_html` via GitHub Actions (FTPS).

Repo secrets needed:

| Secret | Value |
| --- | --- |
| `FTP_SERVER` | `ftp.reeldemiercoles.com` |
| `FTP_USERNAME` | FTP account scoped to `public_html` |
| `FTP_PASSWORD` | its password |

Run locally: open `index.html` in a browser.
