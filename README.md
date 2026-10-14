# reeldemiercoles.com

Meme landing for reeldemiercoles.com: fake login → fake "you got hacked" screen (5 s) → "bro, use the app I built for you".

Plain static HTML/CSS/JS, no build step.

- Login: `admin` / `pass` (client-side only, it's a joke)
- Apps live on subdomains, e.g. https://mixnmatchpadel.reeldemiercoles.com

## Deploy

cPanel pulls this repo and copies it to `public_html` (cron job), so a push to `main` goes live within a minute.

Run locally: open `index.html` in a browser.
