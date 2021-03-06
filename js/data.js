// Oggi iniziamo a realizzare Boolzapp - a (not very) innovative messaging:
// Il compito è di implementare la MILESTONE 1:
// --> Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// -->  Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.
// Milestone 2
// --> Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione.
// --> Click sul contatto mostra la conversazione del contatto cliccato.
// Milestone 3
// --> Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde.
// --> Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// --> Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina).
dayjs.extend(window.dayjs_plugin_customParseFormat);

var app = new Vue(
    {
        el: `#root`,
        data: {
            newMessageInput : ``,
            search: ``,
            currentContact : 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            dropdownmenu: `false`,
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            dropdownmenu: `false`,
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            dropdownmenu: `false`,
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropdownmenu: `false`,
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            dropdownmenu: `false`,
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            dropdownmenu: `false`,
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            dropdownmenu: `false`,
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            dropdownmenu: `false`,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            dropdownmenu: `false`,
                        }
                    ],
                }
            ],

        },

        methods: {
            clickedItem : function(index) {
                this.currentContact = index;
            },

            addMessage : function(contacts ,currentContact) {
                if (this.newMessageInput !== "") {
                    this.contacts[currentContact].messages.push({message: this.newMessageInput, status: `sent`, date: this.getCurrentTime(), dropdownmenu: `false`,});
                    this.newMessageInput = ``;
                    this.generateMsg(contacts, currentContact);
                }
            },

            generateMsg(contacts, currentContact) {
                this.autoMessage = setTimeout( () => {
                    this.contacts[currentContact].messages.push({message: "Ok", status: `received`, date: this.getCurrentTime(), dropdownmenu: `false`,});
                }, 1000);
            },

            filterChat: function (contacts) {
                console.log(this.search);
                // Scorro l'array di contacts
                // Per ogni elmento
                // se il name contiene il search,
                // visible diventa true
                // altrimenti
                //visible diventa false
                this.contacts.forEach((contacts) => {
                  const formattedText = contacts.name.toLowerCase();
                  const formattedSearch = this.search.toLowerCase();
                  if (formattedText.includes(formattedSearch)) {
                    contacts.visible = true;
                  } else {
                    contacts.visible = false;
                  }
                });
            },

            getCurrentTime() {
                return dayjs().format('DD-MM-YYYY HH:mm:ss');
            },

            getTime(date) {
                console.log(dayjs(date));
                return dayjs(date, 'DD/MM/YYYY HH:mm:ss').format('HH:mm');
            },

            dropdownMenu(item) {
                if (item.dropdownmenu == `false`) {
                    item.dropdownmenu = `true`;
                } else item.dropdownmenu = `false`;
                console.log(item.dropdownmenu);
            },

            deleteMessage(index) {
                this.contacts[this.currentContact].messages.splice(index,1);
            },

        },

    }
);

