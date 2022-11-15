import { DevLanguage } from './language';

/*export const DEVLANGUAGES: DevLanguage[] = [
  { id: 1,
    name: 'HTML-5',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png',
    color: 'darkorange',
    description: 'In informatica l'HyperText Markup Language (traduzione letterale: linguaggio a marcatori per ipertesti), comunemente noto con l'acronimo HTML, è un linguaggio di markup. Nato per la formattazione e impaginazione di documenti ipertestuali disponibili nel web 1.0, oggi è utilizzato principalmente per il disaccoppiamento della struttura logica di una pagina web (definita appunto dal markup) e la sua rappresentazione, gestita tramite gli stili CSS per adattarsi alle nuove esigenze di comunicazione e pubblicazione all'interno di Internet.',
    links: {
      docs: 'https://html.spec.whatwg.org/multipage/',
      video: 'https://www.youtube.com/watch?v=PpBdz1ehRFE',
    },
    exercises: {
      beginner: 'https://www.w3schools.com/html/html_exercises.asp',
      intermediate: 'https://www.w3schools.com/html/html_exercises.asp',
      advanced: 'https://www.w3schools.com/html/html_exercises.asp',
      expert: 'https://www.w3schools.com/html/html_exercises.asp',
    }
  },
  { id: 2,
    name: 'CSS-3',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
    color: 'lightblue',
    description: 'Il CSS (sigla di Cascading Style Sheets, in italiano fogli di stile a cascata), in informatica, è un linguaggio usato per definire la formattazione di documenti HTML, XHTML e XML, ad esempio i siti web e relative pagine web. Le regole per comporre il CSS sono contenute in un insieme di direttive (Recommendations) emanate a partire dal 1996 dal W3C.',
    links: {
      docs: 'https://www.w3.org/Style/CSS/Overview.en.html',
      video: 'https://www.youtube.com/watch?v=frtNKDcwYjk',
    },
    exercises: {
      beginner: 'https://www.w3schools.com/css/css_exercises.asp',
      intermediate: 'https://www.w3schools.com/css/css_exercises.asp',
      advanced: 'https://www.w3schools.com/css/css_exercises.asp',
      expert: 'https://www.w3schools.com/css/css_exercises.asp',
    }
  },
  { id: 3,
    name: 'JavaScript-ES6',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    color: '#fff685',
    description: 'In informatica JavaScript è un linguaggio di programmazione multi paradigma orientato agli eventi, comunemente utilizzato nella programmazione Web lato client (esteso poi anche al lato server) per la creazione, in siti web e applicazioni web, di effetti dinamici interattivi tramite funzioni di script invocate da eventi innescati a loro volta in vari modi dall'utente sulla pagina web in uso (mouse, tastiera, caricamento della pagina ecc...).',
    links: {
      docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=it',
      video: 'https://www.youtube.com/watch?v=84TYC44ezIU&list=PLP5MAKLy8lP9FUx06-avV66mS8LXz7_Bb',
    },
    exercises: {
      beginner: 'https://www.w3schools.com/js/js_exercises.asp',
      intermediate: 'https://www.w3schools.com/js/js_exercises.asp',
      advanced: 'https://www.w3schools.com/js/js_exercises.asp',
      expert: 'https://www.w3schools.com/js/js_exercises.asp',
    }
  },
  { id: 4,
    name: 'Boostrap-5',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
    color: 'darkorchid',
    description: 'Bootstrap è una raccolta di strumenti liberi per la creazione di siti e applicazioni per il Web. Essa contiene modelli di progettazione basati su HTML e CSS, sia per la tipografia, che per le varie componenti dell'interfaccia, come moduli, pulsanti e navigazione, così come alcune estensioni opzionali di JavaScript.',
    links: {
      docs: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/',
      video: 'https://www.youtube.com/watch?v=uGekVIC2tRc',
    },
    exercises: {
      beginner: 'https://www.w3schools.com/bootstrap5/bootstrap_exercises.php',
      intermediate: 'https://www.w3schools.com/bootstrap5/bootstrap_exercises.php',
      advanced: 'https://www.w3schools.com/bootstrap5/bootstrap_exercises.php',
      expert: 'https://www.w3schools.com/bootstrap5/bootstrap_exercises.php',
    }
  },
  { id: 5,
    name: 'PHP-7',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1422px-PHP-logo.svg.png?20180502235434',
    color: 'cornflowerblue',
    description: 'PHP (acronimo ricorsivo di "PHP: Hypertext Preprocessor", preprocessore di ipertesti; originariamente acronimo di "Personal Home Page") è un linguaggio di scripting interpretato, originariamente concepito per la programmazione di pagine web dinamiche. L'interprete PHP è un software libero distribuito sotto la PHP License.',
    links: {
      docs: 'http://it.phptherightway.com/',
      video: 'https://www.youtube.com/watch?v=xqLBNt5m_F0&list=PLP5MAKLy8lP_zqdyjNaPjh95NG40Op8he',
    },
    exercises: {
      beginner: 'https://www.w3schools.com/php/php_exercises.asp',
      intermediate: 'https://www.w3schools.com/php/php_exercises.asp',
      advanced: 'https://www.w3schools.com/php/php_exercises.asp',
      expert: 'https://www.w3schools.com/php/php_exercises.asp',
    }
  },
  { id: 6,
    name: 'Java',
    symbol: 'https://upload.wikimedia.org/wikipedia/it/thumb/2/2e/Java_Logo.svg/550px-Java_Logo.svg.png',
    color: '#ffdcef',
    description: 'In informatica Java è un linguaggio di programmazione ad alto livello, orientato agli oggetti e a tipizzazione statica, che si appoggia sull'omonima piattaforma software di esecuzione, specificamente progettato per essere il più possibile indipendente dalla piattaforma hardware di esecuzione (tramite compilazione in bytecode prima e interpretazione poi da parte di una JVM) (sebbene questa caratteristica comporti prestazioni in termini di computazione inferiori a quelle di linguaggi direttamente compilati come C e C++ ovvero dunque perfettamente adattati alla piattaforma hardware).',
    links: {
      docs: 'https://docs.oracle.com/en/java/',
      video: 'https://www.youtube.com/watch?v=WuXnbwEQd94',
    },
    exercises: {
      beginner: 'https://www.w3schools.com/java/java_exercises.asp',
      intermediate: 'https://www.w3schools.com/java/java_exercises.asp',
      advanced: 'https://www.w3schools.com/java/java_exercises.asp',
      expert: 'https://www.w3schools.com/java/java_exercises.asp',
    }
  },
  { id: 7,
    name: 'Angular-2',
    symbol: 'https://angular.io/assets/images/logos/angular/angular.png',
    color: '#ffac85',
    description: 'Angular 2+ (o semplicemente Angular) è un framework open source per lo sviluppo di applicazioni web con licenza MIT, evoluzione di AngularJS. Sviluppato principalmente da Google, la sua prima release è avvenuta il 14 settembre 2016.',
    links: {
      docs: 'https://angular.io/docs',
      video: 'https://www.youtube.com/watch?v=S1yszOtBW4w&list=PLP5MAKLy8lP-x-Ust2YGwspgt4wMJBFXJ',
    },
    exercises: {
      beginner: 'https://jcoop.io/angular-practice-exercises/',
      intermediate: 'https://jcoop.io/angular-practice-exercises/',
      advanced: 'https://jcoop.io/angular-practice-exercises/',
      expert: 'https://jcoop.io/angular-practice-exercises/',
    }
  },
  { id: 8,
    name: 'MySQL',
    symbol: 'https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png',
    color: '#cbe2e4',
    description: 'MySQL o Oracle MySQL (/maɪ ˌɛskjuːˈɛl/ "My S-Q-L") è un relational database management system (RDBMS) composto da un client a riga di comando e un server. Ambo i costituenti sono multipiattaforma e sono disponibili ufficialmente su tutte le distribuzioni conosciute, quali Debian, Ubuntu e CentOS[3], sebbene lo abbiano sostanzialmente sostituito con MariaDB a partire dal 2012.',
    links: {
      docs: 'https://dev.mysql.com/doc/',
      video: 'https://www.youtube.com/watch?v=SzCWJajCrhU',
    },
    exercises: {
      beginner: 'https://www.w3schools.com/sql/sql_exercises.asp',
      intermediate: 'https://www.w3schools.com/sql/sql_exercises.asp',
      advanced: 'https://www.w3schools.com/sql/sql_exercises.asp',
      expert: 'https://www.w3schools.com/sql/sql_exercises.asp',
    }
  },
  { id: 9,
    name: 'Python',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    color: '#9c27b0',
    description: 'Python è un linguaggio di programmazione di "alto livello", orientato a oggetti, adatto, tra gli altri usi, a sviluppare applicazioni distribuite, scripting, computazione numerica e system testing. Ideato da Guido van Rossum all'inizio degli anni novanta, è spesso paragonato a Ruby, Tcl, Perl, JavaScript, Visual Basic o Scheme. Il nome fu scelto per la passione dello stesso inventore verso i Monty Python e per la loro serie televisiva Monty Python's Flying Circus.',
    links: {
      docs: 'https://docs.python.org/3/',
      video: 'https://www.youtube.com/watch?v=8zlTWxga6F8',
    },
    exercises: {
      beginner: 'https://www.w3schools.com/python/python_exercises.asp',
      intermediate: 'https://www.w3schools.com/python/python_exercises.asp',
      advanced: 'https://www.w3schools.com/python/python_exercises.asp',
      expert: 'https://www.w3schools.com/python/python_exercises.asp',
    }
  },
  { id: 10,
    name: 'Vue-2',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
    color: '#4bf661',
    description: 'Vue.js (comunemente noto come Vue, pronunciato /vjuː/, come view) è un framework JavaScript open-source in configurazione Model–view–viewmodel per la creazione di interfacce utente e single-page applications. È stato creato da Evan You ed è gestito da lui stesso e i membri attivi del core team, provenienti da varie società come Netlify e Netguru.',
    links: {
      docs: 'https://vuejs.org/guide/introduction.html',
      video: 'https://www.youtube.com/watch?v=MdvBAgAeIZQ&list=PL0qAPtx8YtJdUH44fvkzVxy9waP23I_bE',
    },
    exercises: {
      beginner: 'https://www.w3schools.com/python/python_exercises.asp',
      intermediate: 'https://www.w3schools.com/python/python_exercises.asp',
      advanced: 'https://www.w3schools.com/python/python_exercises.asp',
      expert: 'https://www.w3schools.com/python/python_exercises.asp',
    }
  },
  { id: 11,
    name: 'Laravel-7',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png',
    color: '#ffffff',
    description: 'Laravel è un framework open source di tipo MVC scritto in PHP per lo sviluppo di applicazioni web, creato nel 2011 da Taylor Otwell come derivazione di Symfony. Distribuito con licenza MIT, mantiene tutto il codice disponibile su GitHub e viene indicato, in base al punteggio GitHub e StackOverflow, come il framework PHP più popolare[1], seguito da Symfony, CodeIgniter e altri; ad agosto 2014 risulta essere il progetto PHP più seguito su GitHub.',
    links: {
      docs: 'https://laravel.com/docs/7.x/installation',
      video: 'https://www.youtube.com/watch?v=3LNBGU-ob_4&list=PLl8lST6xZTJa8Ng3iMYOp-ngSa0Xm7Fe3',
    },
    exercises: {
      beginner: 'https://www.w3schools.com/python/python_exercises.asp',
      intermediate: 'https://www.w3schools.com/python/python_exercises.asp',
      advanced: 'https://www.w3schools.com/python/python_exercises.asp',
      expert: 'https://www.w3schools.com/python/python_exercises.asp',
    }
  },
  { id: 12,
    name: 'Docker',
    symbol: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
    color: '#ffc85b',
    description: 'Docker è un popolare software libero progettato per eseguire processi informatici in ambienti isolabili, minimali e facilmente distribuibili chiamati container Linux (o anche soltanto container), con l'obiettivo di semplificare i processi di deployment di applicazioni software. Fin dal suo rilascio nel 2013, Docker non si basa sui tradizionali metodi di virtualizzazione di un intero sistema operativo, bensì sulla OS-level virtualization fornita dal kernel Linux, ovvero un singolo sistema operativo basato su Linux si occupa di orchestrare l'isolamento e le limitazioni delle risorse.',
    links: {
      docs: 'https://docs.docker.com/desktop/',
      video: 'https://www.youtube.com/watch?v=aqJ460QKYUk',
    },
    exercises: {
      beginner: 'https://www.w3schools.com/python/python_exercises.asp',
      intermediate: 'https://www.w3schools.com/python/python_exercises.asp',
      advanced: 'https://www.w3schools.com/python/python_exercises.asp',
      expert: 'https://www.w3schools.com/python/python_exercises.asp',
    }
  },
];*/
