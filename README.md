# Cosa facciamo stasera?

App statica per due a Varese e dintorni, pubblicata con GitHub Pages.

## Funzioni

- 19 idee con piano, mappa, budget stimato e distanza indicativa dal centro di Varese.
- Filtri per atmosfera, budget per due, durata e meteo selezionato manualmente.
- Preferiti e viste Tutte, Da provare, Già fatto e Le vostre proposte.
- Creazione, modifica ed eliminazione delle proposte personali.
- Diario per ciascuna proposta con data, voto da 1 a 5 e ricordo scritto.
- Sorprendici sceglie tra le proposte filtrate, dando precedenza a quelle nuove.
- Esportazione JSON dei dati personali come copia di sicurezza (ripristino automatico non incluso).

## Avvio locale

Non servono installazione o compilazione. Dalla cartella del progetto:

```sh
python3 -m http.server 8000
```

Aprire http://localhost:8000.

## File

- `index.html`: struttura dell’app.
- `style.css`: grafica responsive.
- `app.js`: contenuti, filtri, salvataggi e interazioni.

GitHub Pages pubblica il branch `main`, cartella `/ (root)`.
Il file `hosting.json` è la configurazione storica di Sites, non usata da GitHub Pages.

## Dati personali

Preferiti, proposte e ricordi sono salvati nel localStorage di questo browser e di questo dominio. Non si sincronizzano tra telefoni e non vengono inviati a un server. Cancellare i dati del browser li elimina. Il pulsante di esportazione scarica una copia JSON da conservare. Nessuna migrazione automatica dal precedente dominio Sites.

## Verifiche

```sh
node --check app.js
```

I prezzi sono stime per due, trasporti esclusi; le distanze sono approssimative, solo andata dal centro di Varese. Verificare aperture, biglietti, accessibilità e meteo prima delle uscite. Non vengono interrogati servizi meteo o eventi in tempo reale. Google Fonts e le mappe richiedono una connessione.
