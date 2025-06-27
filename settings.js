/* 

 * Created : Kyy
 * Base Ori : Eriza
 * NoWa : 6288286624778
 * Myt : @KyyXdz
 
 * Hargai Pengembang Dengan Cara Tidak Menghapue Credit Untuk Yang Upload Di Tambahan Tag Yt Atas Dan Rename Juga Untuk Menghargai Pengembang Dengan Cara Tidak Menghapus Credit

*/

const fs = require('fs')
const chalk = require('chalk')

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS OWNER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ \\
global.owner = ["6285703922866"] // Ganti No Owner Ada Di Database/owner.json
global.ownername = "Kyy"
global.fother = "Akame × Kyy"
global.website = "https://akameky.netlify.app/"
global.idch = ['120363335989645846@newsletter'] 
global.idch2 = ['120363419884279670@newsletter']
global.ceha = "https://whatsapp.com/channel/0029Vb45PnR17EmrPZpSop3T"
global.linkgc = "Gda"
global.yt = "https://www.youtube.com/@hiraazxd"
global.dana = "085692195658"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS BOT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
global.namabot = "Akame"
global.baileys = "@ᴡʜɪsᴋᴇʏsᴏᴄᴋᴇᴛs"
global.autoread = true
global.autotyping = true
global.nomorbot = "6288287134883"
global.version = "5.5.0"
global.packname = 'Stick By'
global.author = 'hira\nAkame'
global.foother = 'Created By xyzhiraa'
global.wlcm = []
global.wlcmm = []

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS LINODE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ \\
global.apilinode = ''
global.apiDigitalOcean = "-"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ \\
global.qriscode = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214526072661395590303UMI51440014ID.CO.QRIS.WWW0215ID20243611425300303UMI5204541153033605802ID5921LYLIA STORE OK20003006006BEKASI61051711162070703A016304B08B"
global.kyyapi = "KyuuuWoi"
global.merchan = "OK2000300"
global.keyorkut = "503037817337498462000300OKCTE710F6DB6C0525EF47135143AF15B565"

global.merchantIdOrderKuota = "OK2000300"
global.apiOrderKuota = "503037817337498462000300OKCTE710F6DB6C0525EF47135143AF15B565"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214526072661395590303UMI51440014ID.CO.QRIS.WWW0215ID20243611425300303UMI5204541153033605802ID5921LYLIA STORE OK20003006006BEKASI61051711162070703A016304B08B"

global.nekorin = "https://api.nekorinn.my.id"
global.velyn = "https://velyn.biz.id"
global.fastres = "https://fastrestapis.fasturl.cloud"
global.vreden = "https://api.vreden.web.id"


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS IMAGE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ \\
global.warn = "https://cloudkuimages.guru/uploads/images/6829f8a9a74ec.jpg"
global.qris = "https://files.catbox.moe/bb3hfw.jpg"
global.thumblist = "https://img1.pixhost.to/images/5640/596847853_ikyjs.jpg"
global.thumb = "https://img1.pixhost.to/images/5455/594473518_ikyjs.jpg"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS RPG ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ \\
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '📊',
limit: '🎫',
health: '❤️',
exp: '✨',
atm: '💳',
money: '💰',
bank: '🏦',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🛍️',
mythic: '🎁',
legendary: '🗃️',
superior: '💼',
pet: '🔖',
trash: '🗑',
armor: '🥼',
sword: '⚔️',
pickaxe: '⛏️',
fishingrod: '🎣',
wood: '🪵',
rock: '🪨',
string: '🕸️',
horse: '🐴',
cat: '🐱',
dog: '🐶',
fox: '🦊',
robo: '🤖',
petfood: '🍖',
iron: '⛓️',
gold: '🪙',
emerald: '❇️',
upgrader: '🧰',
bibitanggur: '🌱',
bibitjeruk: '🌿',
bibitapel: '☘️',
bibitmangga: '🍀',
bibitpisang: '🌴',
anggur: '🍇',
jeruk: '🍊',
apel: '🍎',
mangga: '🥭',
pisang: '🍌',
botol: '🍾',
kardus: '📦',
kaleng: '🏮',
plastik: '📜',
gelas: '🧋',
chip: '♋',
umpan: '🪱',
skata: '🧩'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS LIMITZ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ //
global.limitawal = {
    premium: "Infinity",
    free: 30
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS GAME ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ //
global.gamewaktu = 60 // Game waktu
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

global.mess = {
    success: 'sᴜᴄᴄᴇssғᴜʟʏ',
    admin: '[ !! ] *sʏsᴛᴇᴍ*\nᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',
    botAdmin: '[ !! ] *sʏsᴛᴇᴍ*\nᴀᴋᴀᴍᴇ ʙᴇʟᴜᴍ ᴊᴀᴅɪ ᴀᴅᴍɪɴ',
    creator: '[ !! ] *sʏsᴛᴇᴍ*\nғᴇᴀᴛᴜʀᴇ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ',
    group: '[ !! ] *sʏsᴛᴇᴍ*\nғᴇᴀᴛᴜʀᴇ ɪɴɪ ᴋʜᴜsᴜs ɢʀᴏᴜᴘ ᴀᴊᴀ',
    private: '[ !! ] *sʏsᴛᴇᴍ*\nғᴇᴀᴛᴜʀᴇ ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ ᴀᴋᴀᴍᴇ',
    wait: '[ !! ] *sʏsᴛᴇᴍ*\nᴡᴀɪᴛ ᴀᴋᴀᴍᴇ ᴘʀᴏsᴇs ᴅᴜʟᴜ',
    notregist: 'ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ ᴅɪ ᴅᴀᴛᴀʙᴀsᴇ ᴀᴋᴀᴍᴇ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ\n\n*[ ᴅᴀғᴛᴀʀ ᴍᴀɴᴜᴀʟ ]*\n.ᴅᴀғᴛᴀʀ ɴᴀᴍᴀ,ᴜᴍᴜʀ',
    premium: '[ !! ] *sʏsᴛᴇᴍ*\nғᴇᴀᴛᴜʀᴇ ᴋʜᴜsᴜs ᴘʀᴇᴍɪᴜᴍ ᴀᴋᴀᴍᴇ',
    endLimit: '[ !! ] *sʏsᴛᴇᴍ*\nʟɪᴍɪᴛ ᴀɴᴅᴀ ʜᴀʙɪs ,, ᴀᴋᴀɴ ᴅɪ ʀᴇsᴇᴛ sᴇᴛᴇʟᴀʜ sᴇʜᴀʀɪ',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})