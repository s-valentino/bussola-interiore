const themes={
A:{name:'Abbandono',subtitle:'Quando la distanza diventa allarme',text:'In alcune risposte, un momento di distanza sembra accompagnarsi alla paura che il legame si interrompa. Nel libro questo tema è esplorato nella sezione sull’abbandono.',phrases:['Un silenzio non mi dice, da solo, come sta la relazione.','Posso chiedere chiarezza senza dovermi rendere indispensabile.','Posso osservare ciò che so, prima di seguire ciò che temo.'],action:'In una situazione di distanza, scrivi separatamente un fatto osservabile e l’interpretazione che ti viene spontanea.'},
R:{name:'Rifiuto',subtitle:'Quando il proprio posto sembra da meritare',text:'Alcune risposte raccontano fatica a ricevere apprezzamento o a sentirti accolta senza dover dimostrare il tuo valore. È il tema che il libro esplora nella sezione sul rifiuto.',phrases:['Posso ricevere un complimento senza cancellarlo.','Un’opinione diversa non decide il mio valore.','Non devo guadagnarmi ogni momento di riposo.'],action:'Al prossimo complimento, prova a rispondere soltanto “Grazie”. Nota cosa senti, senza obbligarti a sentirti diversa.'},
E:{name:'Abbandono emotivo',subtitle:'Quando appoggiarsi sembra difficile',text:'Nelle risposte compare la tendenza a tenere per te ciò che senti o ad affrontare tutto da sola, anche con persone disponibili. Il libro ne parla come abbandono emotivo.',phrases:['Posso scegliere a chi chiedere ascolto.','Chiedere supporto non cancella la mia autonomia.','Posso lasciare entrare un aiuto piccolo, alla mia misura.'],action:'Con una persona che si è mostrata affidabile, formula una richiesta circoscritta: “Puoi ascoltarmi per dieci minuti?”'},
U:{name:'Umiliazione',subtitle:'Quando un bisogno sembra troppo',text:'Alcune risposte indicano imbarazzo nel chiedere o il bisogno di scusarti per ciò che desideri. Sono reazioni che il libro raccoglie nella sezione sull’umiliazione.',phrases:['Un bisogno può essere espresso senza una scusa.','Posso essere gentile senza sminuirmi.','Chiedere non obbliga l’altra persona a dire sì.'],action:'Scrivi una richiesta concreta in una frase. Rileggila e togli le scuse che non riguardano un torto reale.'},
I:{name:'Ingiustizia',subtitle:'Quando l’errore lascia poco margine',text:'Nelle risposte emerge una certa fatica a concederti imperfezione, riposo o un modo diverso dal tuo. Nel libro questi aspetti sono esplorati nella sezione sull’ingiustizia.',phrases:['Posso correggere un errore senza punirmi.','Abbastanza bene può essere davvero sufficiente.','Il riposo ha un posto anche in una giornata incompleta.'],action:'Scegli un compito a basso rischio e definisci prima che cosa significa “sufficiente”. Fermati quando lo raggiungi.'},
T:{name:'Tradimento',subtitle:'Quando la fiducia richiede controllo',text:'Alcune risposte raccontano il bisogno di verificare e restare in guardia anche con chi si è mostrato affidabile. Il libro affronta questo tema nella sezione sul tradimento.',phrases:['Posso valutare la fiducia attraverso i fatti.','Posso chiedere un accordo chiaro, invece di controllare in silenzio.','Un limite mi protegge senza chiedermi vigilanza continua.'],action:'Per una piccola responsabilità condivisa, concorda un risultato e un momento di aggiornamento. Osserva l’impulso a verificare prima.'},
N:{name:'Non essere vista',subtitle:'Quando la propria voce si riduce',text:'In alcune risposte la tua preferenza o la tua opinione tende a sparire per lasciare spazio agli altri. Il libro esplora questa esperienza nella sezione sul non essere vista.',phrases:['La mia preferenza può avere spazio nella conversazione.','Posso esprimere un’opinione senza renderla irriconoscibile.','Posso ascoltare gli altri e continuare ad ascoltare me.'],action:'In una scelta quotidiana piccola, nota prima la tua preferenza. Poi dilla con una frase semplice: “Io preferirei…”'},
V:{name:'Vergogna',subtitle:'Quando il giudizio riguarda tutta te stessa',text:'Alcune risposte spostano l’attenzione da un episodio al tuo valore come persona, oppure raccontano la paura di mostrarti in una relazione sicura. Il libro ne parla nella sezione sulla vergogna.',phrases:['Quello che ho fatto non esaurisce chi sono.','Posso scegliere quanto condividere e con chi.','Una parte vulnerabile di me merita rispetto.'],action:'Se ti accorgi di pensare “sono sbagliata”, torna all’episodio: cosa è successo, precisamente? Che cosa si può chiarire o riparare?'}
};

const resource=(text)=>({text,kind:'resource'});
const ordinary=(text)=>({text,kind:'ordinary'});
const pattern=(text,theme,reason)=>({text,kind:'pattern',theme,reason});
const unclear=(text,observation)=>({text,kind:'unclear',observation});
const skip=()=>({text:'Nessuna di queste risposte mi rappresenta, oppure mi manca il contesto per scegliere.',kind:'skip'});
const questions=[
{title:'Una persona ti fa un complimento sul lavoro che hai svolto. Come lo ricevi?',note:'Pensa a un episodio recente, senza decidere in anticipo che cosa dovrebbe significare.',options:[
resource('Mi fa piacere e ringrazio.'),
ordinary('Mi imbarazza essere al centro dell’attenzione, ma credo al complimento.'),
pattern('Penso che il risultato non sia abbastanza buono per meritare quell’apprezzamento.','R','La fatica a riconoscere un apprezzamento è uno dei temi della sezione sul rifiuto.'),
unclear('Mi chiedo se sia sincero o se voglia ottenere qualcosa.','Il dubbio sulla sincerità può dipendere dalla persona, dalla situazione o da esperienze diverse. Da solo non lo colleghiamo a una ferita.'),
pattern('Mi fa piacere, ma sento subito la pressione di dover mantenere quel livello.','I','Qui conta la pressione legata alla prestazione, trattata nella sezione sull’ingiustizia.'),
ordinary('Il complimento riguarda qualcosa che per me conta poco: lo accolgo senza particolare coinvolgimento.'),skip()]},
{title:'Una persona cara tarda a rispondere a un messaggio. Quale reazione riconosci?',note:'Considera una situazione senza urgenze e senza altri segnali concreti di rottura.',options:[
resource('Continuo con la mia giornata; posso aspettare o riscrivere se serve.'),
ordinary('Mi infastidisce aspettare, ma non penso che il nostro rapporto sia in pericolo.'),
pattern('Temo che si stia allontanando da me, anche se non ho altri elementi.','A','La paura che un silenzio anticipi un allontanamento è descritta nella sezione sull’abbandono.'),
pattern('Penso di avere detto qualcosa di sbagliato e rileggo il messaggio per capire come rimediare.','R','La preoccupazione di non essere più gradita richiama il tema del rifiuto.'),
ordinary('Mi domando se stia bene, soprattutto se il ritardo è insolito.'),
unclear('Controllo l’ultimo accesso o le notifiche quasi automaticamente.','Controllare il telefono può essere un’abitudine o avere motivazioni differenti. Questo comportamento, da solo, non indica una ferita.'),skip()]},
{title:'Qualcuno si offre di ascoltarti dopo una giornata difficile. Che cosa fai?',note:'La persona ha già rispettato le tue confidenze. Puoi scegliere quanto raccontare.',options:[
resource('Accetto e dico che cosa mi sarebbe utile: ascolto, un consiglio o semplice compagnia.'),
ordinary('Preferisco prima stare sola per capire come mi sento; potrei parlarne più tardi.'),
pattern('Evito di parlarne: mi aspetto di non essere capita, anche da questa persona.','E','Aspettarsi poca disponibilità emotiva anche dove sarebbe possibile riceverla richiama l’abbandono emotivo.'),
pattern('Vorrei raccontare, ma riduco quello che provo perché mi sembra di pesare troppo.','U','Il bisogno vissuto come eccessivo richiama il tema dell’umiliazione.'),
pattern('Ho paura che conoscere questa parte di me le faccia cambiare opinione su chi sono.','V','Il timore di essere svalutata come persona quando ci si mostra richiama la vergogna.'),
unclear('Fatico a trovare le parole per descrivere quello che sento.','Non trovare parole può dipendere dalla stanchezza o da molte altre condizioni. Serve un episodio più preciso prima di fare collegamenti.'),skip()]},
{title:'In un gruppo hai un’opinione diversa. Come partecipi alla conversazione?',note:'La discussione è rispettosa: nessuno ti minaccia o ti mette in pericolo.',options:[
resource('Dico quello che penso e ascolto gli altri, senza doverli convincere.'),
ordinary('Scelgo di non intervenire: l’argomento mi interessa poco o non conosco abbastanza i fatti.'),
pattern('Cambio o nascondo la mia opinione per evitare di essere meno gradita.','R','Qui il collegamento riguarda la paura del rifiuto, non il semplice silenzio.'),
pattern('Mi accorgo che adatto così tanto quello che penso da perdere la mia posizione.','N','La perdita della propria voce richiama la sezione sul non essere vista.'),
pattern('Vorrei parlare, ma temo di apparire ridicola e di essere derisa.','U','La paura di derisione e umiliazione è diversa dal timore generico di disaccordo.'),
unclear('Parlo con molta decisione e mi irrito se non mi ascoltano.','L’irritazione può avere ragioni diverse, compreso un problema reale nella conversazione. Non la attribuiamo automaticamente a una ferita.'),skip()]},
{title:'Hai commesso un piccolo errore che puoi correggere. Che cosa ti dici?',note:'Non ha causato un danno grave. Considera il dialogo con te stessa, non solo quello che mostri.',options:[
resource('Mi dispiace: correggo quello che posso e cerco di capire come evitare di ripeterlo.'),
ordinary('Mi sento un po’ in imbarazzo, ma dopo la correzione riesco ad andare oltre.'),
pattern('Non avrei dovuto sbagliare: continuo a rimproverarmi anche dopo avere risolto.','I','La durezza verso l’errore richiama il tema dell’ingiustizia.'),
pattern('Passo da “ho sbagliato” a “sono incapace” o “sono sbagliata”.','V','Il giudizio globale su di sé, distinto dal comportamento, è centrale nella sezione sulla vergogna.'),
pattern('La mia prima preoccupazione è che gli altri non mi stimino più.','R','Qui la sensibilità riguarda il timore di perdere accettazione e stima.'),
unclear('Cerco subito di spiegare perché è successo.','Spiegare può servire a chiarire, a proteggersi o a evitare responsabilità: senza contesto non scegliamo una spiegazione.'),skip()]},
{title:'Ti serve un aiuto pratico. Come ti muovi?',note:'La richiesta è ragionevole e c’è qualcuno che potrebbe aiutarti, libero di dire sì o no.',options:[
resource('Chiedo in modo concreto e posso accettare un no senza svalutarmi.'),
ordinary('Preferisco farlo da sola perché mi piace o perché è più semplice, non perché chiedere mi preoccupi.'),
pattern('Mi scuso molto o rinuncio: sento la richiesta come un peso eccessivo per l’altro.','U','Il bisogno vissuto come “troppo” richiama la sezione sull’umiliazione.'),
pattern('Anche quando qualcuno sarebbe disponibile, penso che sui miei bisogni devo contare soltanto su me stessa.','E','La convinzione di non poter ricevere supporto richiama l’abbandono emotivo.'),
pattern('Non chiedo perché temo che, rifiutando la richiesta, rifiuterebbe anche me.','R','Qui il no viene vissuto come giudizio sul proprio valore: è il tema del rifiuto.'),
pattern('Vorrei chiedere, ma continuo a pensare che nessuno lo farà abbastanza bene.','I','Il margine ridotto per metodi e risultati diversi richiama il tema dell’ingiustizia.'),skip()]},
{title:'Una persona cara desidera una serata per sé. Come vivi questa scelta?',note:'Il rapporto è rispettoso e non ci sono segnali concreti di rottura.',options:[
resource('Rispetto il suo spazio e posso dedicarmi a qualcosa che desidero io.'),
ordinary('Mi dispiace perché avevo voglia di stare insieme, ma posso dirlo senza allarmarmi.'),
pattern('Temo che abbia meno bisogno di me e che prima o poi mi lasci.','A','La paura di perdere il legame richiama la sezione sull’abbandono.'),
pattern('Pur senza motivi concreti, mi viene il dubbio che non mi dica tutto su dove andrà o con chi.','T','Il sospetto che nasce senza fatti nuovi richiama il tema del tradimento.'),
unclear('Mi chiedo se questa scelta sia equilibrata rispetto a quanto tempo abbiamo insieme.','Una richiesta di reciprocità può essere appropriata. Non la consideriamo, da sola, un segnale di ferita.'),
unclear('Chiedo che cosa farà o con chi sarà.','La stessa domanda può nascere da curiosità, accordi condivisi o controllo. Il solo gesto non chiarisce il motivo.'),skip()]},
{title:'Dovete scegliere come trascorrere del tempo insieme. Che cosa succede alla tua preferenza?',note:'Si tratta di una scelta quotidiana con persone che possono ascoltarti.',options:[
resource('So cosa mi piacerebbe e lo propongo, lasciando spazio a un accordo.'),
ordinary('Le alternative mi vanno davvero tutte bene: lascio scegliere volentieri.'),
ordinary('Scelgo di venire incontro all’altro questa volta, pur sapendo che cosa preferisco io.'),
pattern('Mi concentro sugli altri così tanto che non riesco più a capire cosa desidero io.','N','Il proprio desiderio che scompare richiama la sezione sul non essere vista.'),
pattern('So cosa desidero, ma mi sembra egoista anche solo proporlo.','U','Il disagio nel dare spazio al proprio bisogno richiama il tema dell’umiliazione.'),
pattern('Accetto quello che vuole l’altro per paura che un disaccordo lo allontani.','A','Il collegamento riguarda il timore di perdere il legame, non il compromesso in sé.'),skip()]},
{title:'Affidi un compito a una persona che finora è stata affidabile. Come vivi l’attesa?',note:'Gli accordi sono chiari, il compito è semplice e un eventuale errore sarebbe riparabile.',options:[
resource('Aspetto l’aggiornamento concordato, accettando che possa usare un metodo diverso dal mio.'),
ordinary('Mi informo quando serve per coordinare il mio lavoro con il suo.'),
pattern('Intervengo di continuo perché temo un risultato non abbastanza preciso.','I','Il controllo centrato sull’imperfezione richiama il tema dell’ingiustizia.'),
pattern('Pur senza segnali nuovi, temo che non manterrà la parola e cerco prove che mi stia dicendo la verità.','T','Qui il tema è la fiducia nell’accordo, distinta dalla precisione del risultato.'),
ordinary('Ho poca esperienza nel delegare: concordo un primo controllo per orientarmi.'),
unclear('Riprendo il compito e lo faccio io, ma non saprei spiegare bene che cosa mi spinge.','Lo stesso comportamento può avere motivi diversi. Prima di collegarlo a un tema serve capire che cosa stai cercando di evitare.'),skip()]},
{title:'Una persona fidata ti chiede qualcosa di personale. Come scegli quanto mostrarti?',note:'Rispetta i tuoi limiti e non hai obblighi di confidenza.',options:[
resource('Condivido quello che desidero, senza sentirmi obbligata a raccontare tutto.'),
ordinary('Preferisco tenere questa cosa privata, senza sentirmi sbagliata per questo.'),
pattern('Vorrei raccontarla, ma temo che riveli qualcosa di inaccettabile in me.','V','Il timore riguarda chi sei, non il semplice diritto alla riservatezza: è il tema della vergogna.'),
pattern('Evito perché penso che, anche se ascolta, non capirebbe davvero ciò che provo.','E','Aspettarsi un ascolto emotivamente insufficiente richiama l’abbandono emotivo.'),
pattern('Temo che quello che racconto venga riferito ad altri o usato contro di me, anche se finora è stata discreta.','T','La paura che la fiducia venga tradita, anche senza segnali, richiama il tema del tradimento.'),
unclear('Cambio argomento quasi automaticamente, senza avere chiaro il motivo.','Questo gesto, da solo, non distingue privacy, abitudine, imbarazzo o timore. Non gli assegniamo una ferita.'),skip()]},
{title:'Hai tempo per riposare, ma resta qualcosa da fare. Come vivi la pausa?',note:'Gli impegni essenziali sono coperti e ciò che resta può aspettare.',options:[
resource('Mi concedo la pausa: non devo finire ogni cosa per potermi fermare.'),
ordinary('Preferisco finire una piccola cosa e poi riposare, senza trasformarla in un obbligo infinito.'),
pattern('Non riesco a fermarmi finché non è tutto fatto come si deve.','I','L’impossibilità di concedersi imperfezione e riposo richiama il tema dell’ingiustizia.'),
pattern('Se non sono utile o produttiva, mi sembra di valere meno.','R','Il valore personale legato a ciò che si offre richiama la sezione sul rifiuto.'),
unclear('Quando mi fermo, pensieri e preoccupazioni diventano più forti.','Le preoccupazioni possono riguardare molte cose. La risposta segnala un’esperienza da osservare, non una specifica ferita.'),
ordinary('Ho voglia di continuare perché mi piace quello che sto facendo, ma potrei fermarmi.'),skip()]},
{title:'Una persona non rispetta un accordo con te. Come reagisci?',note:'Non è una situazione di pericolo. Considera sia ciò che senti sia quello che succede al rapporto.',options:[
resource('Dico che cosa non ha funzionato e valuto come riparare, tenendo conto della gravità e dei precedenti.'),
ordinary('Sono delusa o arrabbiata: l’accordo per me contava. Questo non mi fa pensare che tutti siano inaffidabili.'),
pattern('Anche dopo un singolo episodio riparabile, penso che non ci si possa fidare di nessuno.','T','La sfiducia che si estende oltre l’episodio richiama il tema del tradimento.'),
pattern('Evito di dire quanto mi ha ferita perché temo che il confronto faccia finire il rapporto.','A','Qui la paura riguarda la perdita del legame, descritta nella sezione sull’abbandono.'),
pattern('Mi convinco che i miei bisogni contino poco e riduco quello che chiedo nel rapporto.','N','Il ridimensionamento della propria presenza richiama il tema del non essere vista.'),
ordinary('Se è un comportamento ripetuto, riduco la fiducia o pongo un limite più netto.'),skip()]}
];
function normalizeSelection(selection,i){const a=Array.isArray(selection)?selection:[selection];if(a.length<1||a.length>2||new Set(a).size!==a.length||a.some(n=>!Number.isInteger(n)||!questions[i].options[n]))throw Error('Selezione non valida');if(a.length>1&&a.some(n=>questions[i].options[n].kind==='skip'))throw Error('La risposta di contesto è esclusiva');return a;}
function summarize(answers){if(answers.length!==questions.length)throw Error('Questionario incompleto');const occurrences=Object.fromEntries(Object.keys(themes).map(k=>[k,[]]));const resourceScenes=[],ordinaryScenes=[],unclearScenes=[],skipScenes=[],sensitivityScenes=[],mixedScenes=[];let selected=[];answers.forEach((a,i)=>{const choices=normalizeSelection(a,i).map(n=>questions[i].options[n]);choices.forEach(o=>selected.push({question:i,option:o}));const unique=new Set(choices.filter(o=>o.kind==='pattern').map(o=>o.theme));unique.forEach(k=>occurrences[k].push(i));if(unique.size)sensitivityScenes.push(i);if(choices.some(o=>o.kind==='resource'))resourceScenes.push(i);if(choices.some(o=>o.kind==='ordinary'))ordinaryScenes.push(i);if(choices.some(o=>o.kind==='unclear'))unclearScenes.push(i);if(choices.some(o=>o.kind==='skip'))skipScenes.push(i);if(unique.size&&choices.some(o=>o.kind==='resource'||o.kind==='ordinary'))mixedScenes.push(i);});const recurring=Object.keys(occurrences).filter(k=>occurrences[k].length>=2),isolated=Object.keys(occurrences).filter(k=>occurrences[k].length===1);return{occurrences,recurring,isolated,resourceScenes,ordinaryScenes,unclearScenes,skipScenes,sensitivityScenes,mixedScenes,selected,status:skipScenes.length===12?'insufficient':recurring.length?'recurring':isolated.length?'isolated':unclearScenes.length?'context':'steady'};}
if(typeof module!=='undefined')module.exports={themes,questions,summarize,normalizeSelection};
