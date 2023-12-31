/* Bonus
✅ 1)evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi

✅ 2) A) cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono. B) inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano

✅ 3)predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc

✅ 4)sotto al nome del contatto nella parte in alto a destra, cambiare l'indicazione dello stato: visualizzare il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantenere la scritta "online" per un paio di secondi e infine visualizzare "ultimo accesso alle xx:yy" con l'orario corretto

✅ 5)dare la possibilità all'utente di cancellare tutti i messaggi di un contatto o di cancellare l'intera chat con tutti i suoi dati: cliccando sull'icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci "Elimina messaggi" ed "Elimina chat"; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l'intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra)

✅ 6)dare la possibilità all'utente di aggiungere una nuova conversazione, inserendo in un popup il nome e il link all'icona del nuovo contatto

❌ 7)fare scroll in giù in automatico fino al messaggio più recente, quando viene aggiunto un nuovo messaggio alla conversazione (NB: potrebbe esserci bisogno di utilizzare nextTick: https://vuejs.org/api/general.html#nexttick)

❌ 8)manda un messaggio vocale



Grafica
✅ 9)visualizzare un messaggio di benvenuto che invita l'utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi, anziché attivare di default la prima conversazione

✅ 10)aggiungere una splash page visibile per 1s all'apertura dell'app

✅ 11) A) rendere l'app responsive e fruibile anche su mobile: di default si visualizza solo la lista dei contatti e cliccando su un contatto si vedono i messaggi di quel contatto. B) aggiungere quindi un'icona con una freccia verso sinistra per tornare indietro, dalla visualizzazione della chat alla visualizzazione di tutti i contatti

✅ 12)aggiungere un'icona per ingrandire o rimpicciolire il font: dovrebbe essere sufficiente aggiungere una classe al wrapper principale

✅ 13)aggiungere un'icona per cambiare la modalità light/dark: dovrebbe essere sufficiente aggiungere una classe al wrapper principale */

const { DateTime } = luxon
const { nextTick } = Vue //Da controllare
const { createApp } = Vue

createApp({
    data() {
        return {

            splashPage: false,

            contactActive: 0,

            userMessage: '',

            contactName: '',

            displayMic: true,

            nameNewChat: '',

            imgNewChat: '',

            contactSelected: false,

            contactList: true,

            chatContact: false,

            bigFont: false,

            darkMode: false,

            //FIXARE DATA PRENDENDOLA DA MESSAGES.DATE
            userStatus: 'Ultimo accesso alle:' + DateTime.fromISO(2023 - 9 - 17).toFormat('T'),

            messagesOutput: [
                'Ok!',
                'va bene.',
                'Ti richiamo più tardi',
                'Sto arrivando',
                'Grazie,a dopo.',
                'Scusa,ora non posso parlare'
            ],

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }

    },
    methods: {

        setContactActive(index) {

            this.contactActive = index;

            this.contactSelected = true;

            this.chatContact = true;

            this.contactList = false;

        },

        searchContact() {

            this.contacts.forEach((contact, index) => {

                if (this.contacts[index].name.toLowerCase().includes(this.contactName.toLowerCase())) {

                    this.contacts[index].visible = true

                } else {
                    this.contacts[index].visible = false
                }

            })
        },


        //VOLEVO USARE ASYNC/AWAIT PER fare scroll in giù in automatico fino al messaggio più recente quando viene aggiunto un nuovo messaggio alla conversazione ma non funziona/non so come fare
        async sentMessage() {

            this.userStatus = 'Sta scrivendo...'

            if (this.userMessage.trim() !== '') {

                this.contacts[this.contactActive].messages.push({

                    date: DateTime.now().toFormat('T'),
                    message: this.userMessage,
                    status: 'sent'

                })

                timeoutAutoMessage = setTimeout(this.messageAuto, 1000);
                statusContact = setTimeout(this.statusOnline, 3000)
            }

            this.userMessage = '';
            this.displayMic = true;

            await this.nextTick()

        },

        messageAuto() {

            this.contacts[this.contactActive].messages.push({

                date: DateTime.now().toFormat('T'),

                message: this.messagesOutput[Math.floor(Math.random() * this.messagesOutput.length)],

                status: 'received'

            });

            this.userStatus = 'Online'

        },

        statusOnline() {
            //FIXARE DATA PRENDENDOLA DA MESSAGES.DATE
            this.userStatus = 'Ultimo accesso alle:' + DateTime.fromISO(2023 - 9 - 17).toFormat('T')
        },



        deleteThisMessage(message, index) {
            console.log(message, index);

            this.contacts[this.contactActive].messages.splice(index, 1)

        },

        deleteAllMessages() {

            this.contacts[this.contactActive].messages.splice(0)

        },

        deleteChat() {

            this.contacts.splice([this.contactActive], 1)

        },

        newChat() {

            if (this.nameNewChat.trim() !== '') {

                this.contacts.unshift({

                    name: this.nameNewChat,
                    avatar: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100) + 1}`,
                    visible: true,
                    messages: []

                })

            }

            this.nameNewChat = '';
            this.imgNewChat = '';

        },

        displayMicOrSend() {



            if (this.userMessage.trim() !== '') {

                this.displayMic = false;

            }

        },

        closeSplashPage() {
            setTimeout(() => {
                this.splashPage = true;
            }, 1000)
        },

        backToChatList() {

            this.chatContact = false;

            this.contactList = true;

        },

        toggleFontSize() {

            if (this.bigFont === false) {

                this.bigFont = true;

            } else {

                this.bigFont = false;

            }

        },

        toggleDarkMode() {

            if (this.darkMode === false) {

                this.darkMode = true;

            } else {

                this.darkMode = false;

            }

        }

    },

    created() {
        this.closeSplashPage()
    }


}).mount('#app')