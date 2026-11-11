# Cosa facciamo stasera?

App per trovare idee da fare in due a Varese e dintorni.

## Funzioni

- Nove proposte con piano, budget indicativo e collegamenti alle mappe.
- Filtri per atmosfera, budget per due, tempo disponibile e meteo scelto manualmente.
- Selezione casuale con «Sorprendici».
- Preferiti salvati nel localStorage del browser, senza sincronizzazione tra dispositivi.
- Layout responsive, in italiano.

## Avvio locale

Non servono dipendenze né compilazione. Con Python 3:

```sh
python3 -m http.server 8000 --directory dist
```

Aprire http://localhost:8000.

## Struttura

- `dist/index.html`: pagina e struttura dell’app.
- `dist/style.css`: grafica e layout responsive.
- `dist/app.js`: idee, filtri, preferiti e finestre di dettaglio.
- `.openai/hosting.json`: configurazione dell’hosting Sites esistente.

Per aggiungere proposte, modificare l’array `ideas` in `dist/app.js`.

## Verifica

```sh
node --check dist/app.js
```

## Note

Budget stimati per due, trasporti esclusi. Aperture, disponibilità e meteo vanno verificati. Il meteo non è collegato a un servizio in tempo reale. I font sono caricati da Google Fonts; in assenza di rete si usano i font di sistema.

