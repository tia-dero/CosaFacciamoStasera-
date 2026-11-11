const ideas=[
{id:1,title:'Il lago all’ora dorata',place:'Schiranna · Varese',mood:['romantic','nature'],cost:25,time:2,weather:'sun',symbol:'☀',color:'#aec3b7',tag:'UN CLASSICO, MA INSIEME',desc:'Una passeggiata sul lungolago e un aperitivo quando il cielo cambia colore.',steps:['Controllate l’orario del tramonto e arrivate con un po’ di anticipo.','Passeggiate alla Schiranna e scegliete il vostro scorcio preferito.','Concludete con un aperitivo nei dintorni, verificando prima le aperture.'],map:'Schiranna Varese'},
{id:2,title:'Due passi, una cioccolata',place:'Giardini Estensi · Varese',mood:['romantic','food'],cost:15,time:2,weather:'sun',symbol:'☕',color:'#d6b397',tag:'PICCOLE COSE FELICI',desc:'Il verde dei Giardini Estensi, il centro e una pausa dolce da condividere.',steps:['Fate un giro ai Giardini Estensi durante l’orario di apertura.','Passeggiate in centro: ognuno sceglie una strada.','Entrate in un bar per una cioccolata o un dolce da dividere.'],map:'Giardini Estensi Varese'},
{id:3,title:'Un borgo sopra le nuvole',place:'Sacro Monte · Varese',mood:['nature','adventure','romantic'],cost:20,time:4,weather:'sun',symbol:'⌂',color:'#b9bda0',tag:'CAMBIAMO PROSPETTIVA',desc:'Vicoli, panorami e una pausa nel borgo: una piccola fuga sopra la città.',steps:['Scegliete se salire a piedi o raggiungere il borgo con i mezzi disponibili.','Esplorate Santa Maria del Monte con scarpe comode, finché c’è luce.','Fermatevi per una pausa e una foto insieme. Verificate trasporti e aperture.'],map:'Santa Maria del Monte Varese'},
{id:4,title:'La sfida dei 15 euro',place:'La vostra cucina',mood:['home','food'],cost:15,time:2,weather:'rain',symbol:'♨',color:'#e0bc88',tag:'LA CENA LA INVENTATE VOI',desc:'Un piccolo budget, una ricetta nuova e due chef decisamente improvvisati.',steps:['Scegliete una ricetta che nessuno dei due ha mai cucinato.','Fate la spesa con un tetto di 15 € complessivi.','Dividetevi i compiti e preparate una playlist con cinque brani a testa.'],map:null},
{id:5,title:'Cartoline da Castiglione',place:'Castiglione Olona',mood:['adventure','romantic'],cost:20,time:4,weather:'sun',symbol:'✉',color:'#c9afa1',tag:'UNA PICCOLA GITA',desc:'Vicoli da scoprire e una sfida: trovare lo scorcio più bello del borgo.',steps:['Raggiungete Castiglione Olona e passeggiate nel centro storico.','Scattate tre foto a testa: un dettaglio, un panorama, un ritratto.','Scegliete insieme la vostra cartolina della giornata e concedetevi una pausa.'],map:'Castiglione Olona centro storico'},
{id:6,title:'Cinema, ma a modo vostro',place:'Il vostro divano',mood:['home','romantic'],cost:10,time:4,weather:'rain',symbol:'▶',color:'#9cafa7',tag:'FUORI PIOVE, QUI SI STA BENE',desc:'Biglietti fatti a mano, popcorn e un film scelto con una regola diversa.',steps:['Ognuno propone due film disponibili sui servizi che già avete.','Sorteggiate il titolo e preparate popcorn e qualcosa da bere.','Telefoni da parte: a fine film ognuno dà un voto e sceglie la scena preferita.'],map:null},
{id:7,title:'La merenda alla cieca',place:'A casa, con un po’ di curiosità',mood:['home','food','adventure'],cost:15,time:2,weather:'rain',symbol:'◉',color:'#d7baa7',tag:'INDOVINA COSA STAI ASSAGGIANDO',desc:'Cioccolato, biscotti o formaggi: piccoli assaggi, grandi discussioni sui voti.',steps:['Scegliete una categoria e comprate quattro piccoli assaggi entro il budget.','Serviteli senza confezioni e provate a indovinare gusti e ingredienti.','Create la classifica della coppia. Tenete conto di allergie e intolleranze.'],map:null},
{id:8,title:'Una sera, due sorprese',place:'Centro · Varese',mood:['food','adventure','romantic'],cost:50,time:4,weather:'rain',symbol:'✦',color:'#bcc2cc',tag:'METÀ PIANO A TESTA',desc:'Tu scegli la cena, Giorgia il dopocena. Il programma si scopre strada facendo.',steps:['Dividete il budget complessivo: ad esempio 35 € per la cena e 15 € dopo.','Uno sceglie dove mangiare, l’altra organizza la seconda tappa al coperto.','Controllate menù e disponibilità prima di prenotare. Poi svelate solo il punto di incontro.'],map:'Varese centro'},
{id:9,title:'Il picnic senza fretta',place:'Lago di Comabbio · Ternate',mood:['nature','adventure'],cost:15,time:4,weather:'sun',symbol:'♧',color:'#b4c29c',tag:'UN PO’ DI VERDE PER NOI',desc:'Coperta, panini e un tratto di passeggiata sul lago. Il resto può aspettare.',steps:['Preparate due panini, acqua e una coperta.','Raggiungete Ternate e scegliete un tratto della passeggiata sul Lago di Comabbio.','Fermatevi per il picnic in un’area consentita. Ideale con clima mite e terreno asciutto.'],map:'Parco Berrini Ternate'}];
// Distanze indicative su strada dal centro di Varese, solo andata.
const distances = {1:6,2:0,3:10,4:0,5:15,6:0,7:0,8:0,9:22};
ideas.forEach(i => i.km = distances[i.id]);
ideas.push(
{id:10,title:'Un pomeriggio vista Angera',place:'Lungolago · Angera',km:30,mood:['romantic','nature'],cost:25,time:4,weather:'sun',symbol:'≈',color:'#afc6c5',tag:'IL LAGO MAGGIORE PER DUE',desc:'Passeggiata sul lungolago, una pausa in centro e il tempo per guardare l’altra sponda.',steps:['Raggiungete il lungolago di Angera e cercate parcheggio nelle aree consentite.','Passeggiate senza fretta e scegliete una panchina con vista.','Concludete con una merenda in centro: verificate prima i prezzi.'],map:'Lungolago Angera'},
{id:11,title:'Gavirate, tra acqua e dolcezza',place:'Lungolago · Gavirate',km:15,mood:['food','nature'],cost:20,time:2,weather:'sun',symbol:'☕',color:'#d8c39f',tag:'LA PAUSA CHE CI VOLEVA',desc:'Un tratto di lungolago e una sosta in pasticceria, magari per assaggiare i brutti e buoni.',steps:['Scegliete un tratto della passeggiata sul lago a Gavirate.','Fermatevi per una foto con il panorama alle spalle.','Cercate una pasticceria in centro e scegliete un piccolo assaggio da dividere.'],map:'Lungolago Gavirate'},
{id:12,title:'Laveno a passo lento',place:'Laveno-Mombello',km:28,mood:['romantic','adventure'],cost:25,time:4,weather:'sun',symbol:'⛵',color:'#acc0cb',tag:'UNA FUGA SULL’ACQUA',desc:'Il porto, le barche e una passeggiata sul Lago Maggiore, senza riempire la giornata di impegni.',steps:['Raggiungete il centro di Laveno e passeggiate verso il porto.','Esplorate il lungolago e scegliete il vostro scorcio preferito.','Fate una pausa in centro. Il piano non comprende traghetti o funivia.'],map:'Laveno Mombello lungolago'},
{id:13,title:'Il silenzio di Santa Caterina',place:'Leggiuno',km:30,mood:['romantic','adventure'],cost:30,time:4,weather:'sun',symbol:'⌂',color:'#c6bdac',tag:'UNA VISTA DA RICORDARE',desc:'Una visita all’Eremo di Santa Caterina del Sasso, sospeso sul Lago Maggiore.',steps:['Consultate il sito ufficiale dell’Eremo per aperture, biglietti e accessibilità.','Organizzate la visita tenendo conto di scale, eventuale ascensore e orario di chiusura.','Dopo la visita, concedetevi una pausa nei dintorni, restando nel vostro budget.'],map:'Eremo Santa Caterina del Sasso'},
{id:14,title:'Un libro scelto per te',place:'Centro · Varese',km:0,mood:['romantic','adventure'],cost:30,time:2,weather:'rain',symbol:'▤',color:'#ccb7a7',tag:'TI RACCONTO COSA MI PIACE DI TE',desc:'In libreria, ognuno sceglie un libro per l’altro e una dedica da scrivere a casa.',steps:['Entrate in una libreria del centro e fissate un tetto di 15 € a testa.','Cercate un libro che possa piacere all’altro; se supera il budget annotate il titolo.','Scambiatevi le scelte e spiegate perché avete pensato proprio a quel libro.'],map:'Libreria Varese centro'},
{id:15,title:'Villa e giardino a Casalzuigno',place:'Villa Della Porta Bozzolo',km:25,mood:['nature','adventure'],cost:40,time:4,weather:'sun',symbol:'♧',color:'#b9c5a4',tag:'UN POMERIGGIO FUORI DAL TEMPO',desc:'Una visita tra villa e giardini per cambiare scenario senza andare troppo lontano.',steps:['Verificate sul sito FAI le aperture stagionali, il prezzo e la prenotazione.','Se la visita rientra nel budget, esplorate villa e giardini con calma.','Scegliete ciascuno il dettaglio più bello e raccontatevi perché.'],map:'Villa Della Porta Bozzolo Casalzuigno'},
{id:16,title:'Una passeggiata a Porto Ceresio',place:'Porto Ceresio',km:20,mood:['nature','romantic'],cost:20,time:4,weather:'sun',symbol:'≈',color:'#a9c1b5',tag:'UN ALTRO LAGO, UN ALTRO RICORDO',desc:'Case sul lago, aria fresca e una pausa insieme sul versante italiano del Ceresio.',steps:['Raggiungete Porto Ceresio e cercate un parcheggio consentito.','Passeggiate sul lungolago e nel centro, restando sul lato italiano.','Concludete con un caffè o una merenda e una foto insieme.'],map:'Porto Ceresio lungolago'},
{id:17,title:'Una sera al cinema',place:'Varese e dintorni',km:0,mood:['romantic','adventure'],cost:35,time:4,weather:'rain',symbol:'▶',color:'#b7b4c6',tag:'IL BUIO, I TITOLI, NOI',desc:'Un film sul grande schermo e due chiacchiere dopo, per discutere il finale.',steps:['Controllate la programmazione dei cinema della zona e i prezzi effettivi.','Scegliete un titolo che incuriosisca entrambi e prenotate se necessario.','Dopo il film, date un voto e raccontatevi cosa vi è rimasto.'],map:'Cinema Varese'},
{id:18,title:'Il vostro album di viaggio',place:'A casa',km:0,mood:['home','romantic'],cost:0,time:2,weather:'rain',symbol:'♡',color:'#d7baa7',tag:'LE COSE BELLE LE ABBIAMO GIÀ',desc:'Riguardate le foto, scegliete i vostri dieci momenti e date un titolo a ogni ricordo.',steps:['Ognuno seleziona cinque foto dal proprio telefono.','Raccontate cosa ricordate di quel giorno, anche i dettagli buffi.','Create un album digitale condiviso usando gli strumenti che avete già.'],map:null},
{id:19,title:'Biscotti e playlist',place:'La vostra cucina',km:0,mood:['home','food'],cost:10,time:2,weather:'rain',symbol:'♨',color:'#dfc190',tag:'IL PROFUMO DELLA SERATA',desc:'Una teglia di biscotti e una colonna sonora scelta metà per uno.',steps:['Scegliete una ricetta semplice e controllate quali ingredienti avete già.','Preparate l’impasto insieme, rispettando eventuali allergie.','Mentre i biscotti cuociono, alternate le vostre canzoni preferite.'],map:null}
);
const $ = s => document.querySelector(s);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function read(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
let saved = read('cf-favorites', []);
if (!Array.isArray(saved)) saved = [];
let custom = read('cf-custom', []);
if (!Array.isArray(custom)) custom = [];
custom = custom.filter(i => i && typeof i.id === 'string' && i.id.startsWith('custom-') && typeof i.title === 'string' && Array.isArray(i.mood) && Array.isArray(i.steps) && Number.isFinite(i.cost) && Number.isFinite(i.time)).map(i => ({...i, color:'#d7c5b4',symbol:'♡',tag:'UN’IDEA TUTTA VOSTRA',km:null}));
let memories = read('cf-memories', {});
if (!memories || typeof memories !== 'object' || Array.isArray(memories)) memories = {};
let mood = 'all', view = 'all', onlySaved = false;
const allIdeas = () => [...ideas, ...custom];
const done = id => Object.hasOwn(memories, id);
function persist(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch { $('#notice').textContent = 'Il browser non riesce a salvare i dati. Libera spazio o abilita il salvataggio e riprova.'; return false; }
}
function filtered() {
  return allIdeas().filter(i => (mood === 'all' || i.mood.includes(mood)) && i.cost <= Number($('#budget').value) && i.time <= Number($('#time').value) && ($('#weather').value === 'all' || i.weather === $('#weather').value) && (!onlySaved || saved.includes(i.id)) && (view !== 'new' || !done(i.id)) && (view !== 'done' || done(i.id)) && (view !== 'custom' || typeof i.id === 'string'));
}
const duration = i => i.time <= 2 ? '1–2 ore' : 'Mezza giornata';
const distance = i => i.mood.includes('home') ? 'A casa' : i.km == null ? 'Distanza da verificare' : i.km === 0 ? 'In città' : `≈ ${i.km} km da Varese`;
function render() {
  const list = filtered();
  $('#count').textContent = saved.filter(id => allIdeas().some(i => i.id === id)).length;
  $('#saved').setAttribute('aria-pressed', onlySaved);
  $('[data-view="done"]').textContent = `✓ Già fatto (${allIdeas().filter(i => done(i.id)).length})`;
  $('#results').textContent = `${list.length} ${list.length === 1 ? 'idea' : 'idee'} ${onlySaved ? 'tra i vostri preferiti' : 'per voi due'}`;
  $('#cards').innerHTML = list.length ? list.map(i => `<article class="card"><div class="visual" style="--bg:${i.color}"><small>${esc(i.place)}</small><span class="symbol" aria-hidden="true">${i.symbol}</span><button class="heart" data-save="${esc(i.id)}" aria-label="${saved.includes(i.id) ? 'Rimuovi dai' : 'Aggiungi ai'} preferiti: ${esc(i.title)}" aria-pressed="${saved.includes(i.id)}">${saved.includes(i.id) ? '♥' : '♡'}</button></div><div class="body"><div class="tag">${esc(i.tag)}</div><h3>${esc(i.title)}</h3>${done(i.id) ? `<div class="donebadge">✓ Già fatto · ${Number(memories[i.id]?.rating) || '–'}/5</div>` : ''}<p>${esc(i.desc)}</p><div class="meta"><span>Entro ${i.cost} € in due</span><span>◷ ${duration(i)}</span></div><div class="distance">${distance(i)}</div><button class="cardlink" data-open="${esc(i.id)}">${done(i.id) ? 'Piano e ricordo' : 'Scopri il piano'} <span>↗</span></button></div></article>`).join('') : '<div class="empty"><h3>Qui c’è spazio per una nuova idea</h3><p>Modificate i filtri, aggiungete una proposta o segnate una serata come fatta.</p><button class="surprise" id="emptyreset">Mostra tutte le idee</button></div>';
  $('#emptyreset')?.addEventListener('click', reset);
}
function reset() {
  mood = 'all'; view = 'all'; onlySaved = false;
  $('#budget').value = 'Infinity'; $('#time').value = '10'; $('#weather').value = 'all';
  document.querySelectorAll('[data-mood], [data-view]').forEach(b => { const active = (b.dataset.mood ?? b.dataset.view) === 'all'; b.classList.toggle('active', active); b.setAttribute('aria-pressed', active); });
  render();
}
function show(content) { $('#detailbody').innerHTML = content; if (!$('#detail').open) $('#detail').showModal(); }
function openIdea(id) {
  const i = allIdeas().find(i => String(i.id) === String(id));
  if (!i) return;
  const m = memories[i.id] || {};
  show(`<div class="tag">${esc(i.place)}</div><h2>${esc(i.title)}</h2><p>${esc(i.desc)}</p><div class="meta"><span>Entro ${i.cost} € in due</span><span>${duration(i)}</span></div><p>${distance(i)}</p><h3>Il vostro piccolo piano</h3><ol>${i.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>${i.map ? `<a class="primary" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(i.map)}" target="_blank" rel="noopener noreferrer">Apri la mappa ↗</a>` : ''}<p class="localnote">Budget stimato, trasporti esclusi. Distanze indicative dal centro di Varese, solo andata. Verificate prezzi, aperture e disponibilità.</p><section class="memory"><h3>${done(i.id) ? 'Il vostro ricordo' : 'L’avete fatto? Conservate il ricordo.'}</h3><form id="memoryform"><label>Quando?<input id="memorydate" type="date" required value="${esc(m.date || new Date().toLocaleDateString('sv-SE'))}"></label><label>Quanto vi è piaciuto?<select id="rating" required>${[5,4,3,2,1].map(n => `<option value="${n}" ${Number(m.rating) === n ? 'selected' : ''}>${n}/5 ${n === 5 ? '· Da rifare!' : ''}</option>`).join('')}</select></label><label>Un ricordo della giornata<textarea id="memorynote" maxlength="2000" placeholder="Quel momento che non vogliamo dimenticare…">${esc(m.note || '')}</textarea></label><button class="surprise" type="submit">${done(i.id) ? 'Salva il ricordo' : '✓ Segna come fatto'}</button>${done(i.id) ? '<button type="button" id="undone" class="quiet">Rimetti tra le idee da provare</button>' : ''}<p id="formstatus" role="status"></p></form></section>${typeof i.id === 'string' ? '<div class="customactions"><button class="quiet" id="editidea">Modifica la vostra idea</button><button class="quiet" id="deleteidea">Elimina la vostra idea</button></div>' : ''}`);
  $('#memoryform').onsubmit = e => {
    e.preventDefault();
    const next = {...memories, [i.id]: {date: $('#memorydate').value, rating: Number($('#rating').value), note: $('#memorynote').value.trim()}};
    if (persist('cf-memories', next)) { memories = next; render(); $('#formstatus').textContent = 'Ricordo salvato su questo browser ♡'; }
    else $('#formstatus').textContent = 'Salvataggio non riuscito. I campi sono ancora qui: esportate o copiate il ricordo prima di chiudere.';
  };
  $('#undone')?.addEventListener('click', () => { const next = {...memories}; delete next[i.id]; if (persist('cf-memories', next)) { memories = next; render(); openIdea(i.id); } });
  $('#editidea')?.addEventListener('click', () => ideaForm(i));
  $('#deleteidea')?.addEventListener('click', () => {
    if (!confirm('Eliminare questa proposta personalizzata? Il suo ricordo verrà eliminato con lei.')) return;
    const next = custom.filter(x => x.id !== i.id);
    if (!persist('cf-custom', next)) return;
    custom = next; saved = saved.filter(id => id !== i.id); delete memories[i.id];
    persist('cf-favorites', saved); persist('cf-memories', memories); $('#detail').close(); render();
  });
}
function ideaForm(existing) {
  const i = existing || {title:'',place:'',desc:'',cost:15,time:2,weather:'sun',mood:['romantic'],map:'',steps:[]};
  show(`<div class="tag">IL VOSTRO PROSSIMO «ANDIAMO?»</div><h2>${existing ? 'Modifica la proposta' : 'Un’idea tutta vostra'}</h2><p>Un posto da provare o una serata inventata da voi. Resta su questo browser.</p><form id="ideaform"><label>Nome dell’idea<input id="ideatitle" required maxlength="100" value="${esc(i.title)}" placeholder="Quel ristorante che vogliamo provare"></label><label>Posto o zona<input id="ideaplace" required maxlength="120" value="${esc(i.place)}" placeholder="Varese, oppure a casa"></label><label>Perché vi va di farlo?<textarea id="ideadesc" maxlength="500" required>${esc(i.desc)}</textarea></label><div class="formgrid"><label>Budget totale per due (€)<input id="ideacost" type="number" min="0" max="10000" step="1" required value="${i.cost}"></label><label>Tempo<select id="ideatime"><option value="2">1–2 ore</option><option value="4" ${i.time === 4 ? 'selected' : ''}>Mezza giornata</option></select></label></div><div class="formgrid"><label>Atmosfera<select id="ideamood">${[['romantic','Romantico'],['nature','All’aria aperta'],['food','Qualcosa di buono'],['home','A casa'],['adventure','Fuori dai soliti giri']].map(([v,t]) => `<option value="${v}" ${i.mood.includes(v) ? 'selected' : ''}>${t}</option>`).join('')}</select></label><label>Meteo<select id="ideaweather"><option value="sun">Sole / all’aperto</option><option value="rain" ${i.weather === 'rain' ? 'selected' : ''}>Pioggia / al coperto</option></select></label></div><label>Luogo da cercare sulla mappa (facoltativo)<input id="ideamap" maxlength="200" value="${esc(i.map)}" placeholder="Nome del posto e città"></label><label>Il piano, una tappa per riga (facoltativo)<textarea id="ideasteps" maxlength="2000">${esc(i.steps.join('\n'))}</textarea></label><button type="submit" class="surprise">Salva la nostra idea</button><p id="formstatus" role="status"></p></form>`);
  $('#ideaform').onsubmit = e => {
    e.preventDefault();
    const item = {id: existing?.id || `custom-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,title:$('#ideatitle').value.trim(),place:$('#ideaplace').value.trim(),desc:$('#ideadesc').value.trim(),cost:Number($('#ideacost').value),time:Number($('#ideatime').value),mood:[$('#ideamood').value],weather:$('#ideaweather').value,map:$('#ideamap').value.trim() || null,steps:$('#ideasteps').value.split('\n').map(s => s.trim()).filter(Boolean),symbol:'♡',color:'#d7c5b4',tag:'UN’IDEA TUTTA VOSTRA',km:null};
    if (!item.title || !item.place || !item.desc || !Number.isFinite(item.cost) || item.cost < 0) { $('#formstatus').textContent = 'Inserite titolo, luogo, descrizione e un budget valido.'; return; }
    if (!item.steps.length) item.steps = ['Scegliete quando andare e verificate eventuali aperture e prenotazioni.','Concedetevi un po’ di tempo insieme.'];
    const next = existing ? custom.map(x => x.id === item.id ? item : x) : [...custom,item];
    if (!persist('cf-custom', next)) { $('#formstatus').textContent = 'Salvataggio non riuscito: controllate che il browser consenta di salvare i dati.'; return; }
    custom = next; reset(); $('#budget').value = 'Infinity'; render(); openIdea(item.id);
    $('#notice').textContent = 'La vostra idea è salvata. La trovate in “Le vostre proposte”.';
  };
}
document.querySelectorAll('[data-mood], [data-view]').forEach(b => {
  b.setAttribute('aria-pressed', b.classList.contains('active'));
  b.onclick = () => { const kind = b.dataset.mood !== undefined ? 'mood' : 'view'; if (kind === 'mood') mood = b.dataset.mood; else view = b.dataset.view; document.querySelectorAll(`[data-${kind}]`).forEach(x => { x.classList.toggle('active',x === b); x.setAttribute('aria-pressed',x === b); }); render(); };
});
['budget','time','weather'].forEach(id => $('#'+id).onchange = render);
$('#reset').onclick = reset;
$('#saved').onclick = () => { onlySaved = !onlySaved; render(); $('#explore').scrollIntoView({behavior:'smooth'}); };
$('#addidea').onclick = () => ideaForm();
$('#cards').onclick = e => {
  const save = e.target.closest('[data-save]'), open = e.target.closest('[data-open]');
  if (save) { const i = allIdeas().find(i => String(i.id) === save.dataset.save); if (!i) return; const next = saved.includes(i.id) ? saved.filter(x => x !== i.id) : [...saved,i.id]; if (persist('cf-favorites',next)) { saved = next; render(); } }
  if (open) openIdea(open.dataset.open);
};
$('#surprise').onclick = () => { const list = filtered(); const fresh = list.filter(i => !done(i.id)); const pool = fresh.length ? fresh : list; if (pool.length) openIdea(pool[Math.floor(Math.random()*pool.length)].id); else show('<h2>Facciamo spazio a una sorpresa?</h2><p>Nessuna idea corrisponde ai filtri. Provate ad ampliarli o aggiungete una proposta.</p>'); };
$('#close').onclick = () => $('#detail').close();
$('#detail').onclick = e => { if (e.target === $('#detail')) { const r = e.target.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.target.close(); } };
$('#exportdata').onclick = () => { const blob = new Blob([JSON.stringify({version:1,favorites:saved,custom,memories},null,2)],{type:'application/json'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'i-nostri-ricordi.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url),1000); $('#notice').textContent = 'Copia esportata: conservatela per avere idee e ricordi al sicuro.'; };
render();
