# LecturePulse

Anonymous lecture quality survey — 7 branches, 10 parameters, Google Sheets backend.

## Setup

1. `cd backend && npm install`
2. Google Cloud Console pe jaao — Sheets API enable karo
3. Service account banao — JSON key download karo
4. JSON key → `config/google-credentials.json` mein save karo
5. Google Sheet banao — service account email ko Editor access do
6. Sheet ID → `.env` mein paste karo
7. `node server.js`
8. `frontend/index.html` browser mein open karo

## Google Sheets Column Order

| A | B | C | D | E | F–O |
|---|---|---|---|---|-----|
| Timestamp | Branch | Division | Subject | Teacher | Q1–Q10 |
```

---

## Sab files ho gayi! Ab karna kya hai:
```
1. Sab files paste karo apni jagah pe
2. cd backend
3. npm install
4. Google Cloud Console setup karo