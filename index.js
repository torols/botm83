const { WAConnection: _WAConnection, WAMessageProto, MessageOptions,	WAFlag, WANode,	WAMetric,	ChatModification, DisconectReason, MessageTypeProto, WALocationMessage,ReconnectMode, WAContextInfo, proto,	ProxyAgent,	waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo,  URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime,	Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage,	Browsers, GroupSettingChange } = require('@adiwajshing/baileys')
 //===========NODES-MODULOS===========\\
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const { version, bugs } = require('./package.json')
const fs = require('fs')
const util = require('util')
const path = require('path')
const cheerio = require('cheerio')
const hx = require('hxz-api')
const encodeUrl = require('encodeurl')
const axios = require('axios')
const linkfy = require('linkifyjs')
const toMs = require('ms')
const crypto = require('crypto')
const dateformat = require('dateformat')
const ms = require('parse-ms')
const yts = require('yt-search')
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const cd = 4.32e+7;
const CFonts = require('cfonts')
const FormData = require('form-data')
const chalk = require('chalk')
const imgbb = require('imgbb-uploader')
const imageToBase64 = require('image-to-base64')
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
//====================================\\
 
const { jrb } = require('./database/ltk')
const { fbDown } = require("./lib/js/fb.js")
const { jrpl } = require('./database/data/jrp')
const sayoapi = require('./lib/sayo-api')
const { color, bgcolor } = require('./lib/js/color')
const { webp2gifFile } = require("./lib/gif.js")
const { msgFilter, isUrl } = require('./utils')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { y2mateV, y2mateA, wikiSearch, jagoKata } = require('./lib/y2mate')
const { yta, ytv, igdl, upload, uploadImages } = require('./lib/ytdl')
const { mediafireDl } = require('./lib/js/mediafire.js')
const { isFiltered, addFilter } = require('./lib/js/antispam')
const { addLimit, getLimit } = require('./lib/js/limit.js')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./lib/js/banned.js")
const { removeBackgroundFromImageFile } = require('remove.bg')
const { uploadimg } = require('./lib/js/uploadimg')
const { validmove, setGame } = require('./src/tictactoe'); 
const { tiktokDown } = require("./lib/js/tiktok")

const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, banner2, banner3, start, info, success, close, temporizador, cmdadd, addMetadata} = require('./lib/functions');

//LOGOS-SEM-API\\
const { pSmoky, pOuro, pSemi, pFogo, pShadow, pRomantic, pSmoke, pBurnPapper, pNaruto, pLoveMsg,pMsgGrass, pDoubleHeart, pCoffeCup, pCoffe2, pLoveText, pHarryPotter, pAwolfMetal, pCup, pCaptain, pButterfly, pGlitch, pGooglesg, pNeon2, p8Bit, pMadeira, pWooden, pGold } = require('./lib/photooxy')

const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js') // JOGO DA VELHA

const { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, cekafk, isAfk, runtime, addafk, getpc } = require('./lib/js/consts.js')

const { getMsgId, getMsgMessage, messageContage, addMsgId } = require('./lib/js/contageMsg.js')

//==========(BLOCK-DE-COMANDOS)========\\
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./lib/js/addcmd')
//=====================================\\


//============(Jogo-Da-Velha)==========\\
const { WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC } = require('./tttexp.js')
//=======================================\\

const { recognize } = require('./lib/js/ocr')

//===============(MENUS)==============\\
const { menu } = require('./menus/menu')
const { dono } = require('./menus/dono')
const { adms } = require('./menus/adms')
const { owner } = require('./menus/owner')
const { menumontagem } = require('./menus/menumontagem')
const { menulogos } = require('./menus/menulogos')
const { menuprem } = require('./menus/menuprem')
const { menulite } = require('./menus/menulite')
const { menuanime } = require('./menus/menuanime.js')
const { fotosanimais } = require('./menus/fotosanimais.js')
const { menumusic } = require('./menus/menumusic')
//======================================\\

const { tabela } = require('./dono/tabela')
const { lista } = require('./dono/lista')
const { dlist } = require('./src/dlist')
const { exec } = require('child_process')
const { gitdobot } = require('./dono/gitdobot')
const { palavras } = require('./src/conselhos.js');
const { destrava } = require('./src/destrava')
const { destrava2 } = require('./src/destrava')

//=======================================\\

const { conselhob } = require('./lib/js/conselhob.js');

var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)] 

//=================(ANTIS)===============\\

const antiimg = JSON.parse(fs.readFileSync('./database/json/antiimg.json'))
const antisticker = JSON.parse(fs.readFileSync('./database/json/antisticker.json'))
const antivid = JSON.parse(fs.readFileSync('./database/json/antivid.json'))
const antiaudio = JSON.parse(fs.readFileSync('./database/json/antiaudio.json'))
const anticatalogo = JSON.parse(fs.readFileSync('./database/json/anticatalogo.json'));
const antiloc = JSON.parse(fs.readFileSync('./database/json/antiloc.json'))
const anticontato = JSON.parse(fs.readFileSync('./database/json/anticontato.json'))
const antidoc = JSON.parse(fs.readFileSync('./database/json/antidoc.json'))
const antipv = JSON.parse(fs.readFileSync('./database/json/antipv.json'))
const anticall = JSON.parse(fs.readFileSync('./database/json/anticall.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const antifake = JSON.parse(fs.readFileSync('./database/json/antifake.json'))

//=======================================\\

const comandos = JSON.parse(fs.readFileSync('./dono/media/comandos.json'));
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const palavra = JSON.parse(fs.readFileSync('./database/palavras.json'))
const palavrão = JSON.parse(fs.readFileSync('./database/palavrão.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const sotoy = JSON.parse(fs.readFileSync('./lib/sotoy.json'))
const videonye = JSON.parse(fs.readFileSync('./lib/media/video.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
let autofigu = JSON.parse(fs.readFileSync('./database/group/autofigu.json'))
let bancht = JSON.parse(fs.readFileSync('./database/bot/banchat.json'))
const setting = JSON.parse(fs.readFileSync('./dono/settings.json'))
const fundo = JSON.parse(fs.readFileSync('./dono/fundobemvindo.json'))
const suprer = JSON.parse(fs.readFileSync('./audios/wxp.json'))
const list = JSON.parse(fs.readFileSync('./dono/list.json'))
const legendabv = JSON.parse(fs.readFileSync('./dono/legendabv.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'));
const totalcmd = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))[0].totalcmd
const infos = JSON.parse(fs.readFileSync('./dono/settings.json'))
const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const _registered = JSON.parse(fs.readFileSync('./database/json/registered.json'))
const { addVote, delVote } = require('./lib/js/vote')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
const supre = JSON.parse(fs.readFileSync('./database/bot/supre.json'));
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const ban = JSON.parse(fs.readFileSync('./database/json/banned.json'))
const daily = JSON.parse(fs.readFileSync('./database/user/diario.json'))
let videonyer = JSON.parse(fs.readFileSync('./lib/media/video.json'))
const adeuscara = JSON.parse(fs.readFileSync('./src/json/adeuscara.json'))

 //=====================================\\

//NÃO APAGUE NADA DAQUI.
prefix = setting.prefix
memberlimit = setting.memberlimit
crtt = nescessario.crtt 
cdd = nescessario.cdd
limitawal = setting.limitawal
NamaBot = setting.NamaBot
NamaOwner = setting.NamaOwner
ownerNumber = setting.ownerNumber
NumeroDono = setting.NumeroDono
NumberOwner = setting.NumberOwner
cr = setting.cr
suprem = suprer.suprem
ytb = setting.ytb
instagram = setting.instagram
banChats = nescessario.banChats
fundo1 = fundo.fundo1
fundo2 = fundo.fundo2
dono2 = nescessario.dono2
dono3 = nescessario.dono3
dono4 = nescessario.dono4
dono5 = nescessario.dono5
bvlg = legendabv.bvlg
OFF = setting.OFF
saiulg = legendabv.saiulg
linklogos = nescessario.linklogos
linkmusic = nescessario.linkmusic
imgnazista = nescessario.imgnazista
imggay = nescessario.imggay
imgcorno = nescessario.imgcorno
imggostosa = nescessario.imggostosa
imggostoso = nescessario.imggostoso
imgfeio = nescessario.imgfeio
imggado = nescessario.imggado

A = list.A
B = list.B
C = list.C
D = list.D
E = list.E
F = list.F
G = list.G
H = list.H
I = list.I
J = list.J
K = list.K
L = list.L
M = list.M 
N = list.N
O = list.O
P = list.P
Q = list.Q
R = list.R 
S = list.S
T = list.T
U = list.U
V = list.V
W = list.W
X = list.X
Y = list.Y

//======================================\\
offline = false
numbernye = '0'
blocked = []   
hitt = []
//======================================\\


//_TIC-TAC-TOE By: Resen
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');

const { tttme } = require('./database/ttt/TTTconfig/tttme');

var tttset = require('./database/ttt/TTTconfig/tttset.json');

var esp = require('./database/ttt/TTTconfig/tttframe.json');
///_ END TIC-TAC-TOE CONFIG by: Resen
/********** FUNCTION ***************/



function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

//==========(CONEXÃO-DO-BOT)=========\\

const starts = async (client = new WAConnection()) => {
client._maxListeners = 200;
client.browserDescription = ["ALEATORY-BOT", "By: ALEATORY", "0.14.1"];
client.browserDescription.push('ALEATORY-BOT','Baileys','Opera');
client.autoReconnect = ReconnectMode.onConnectionLost || 2
client.logger.level = 'warn'
console.log(banner3.string)
client.connectOptions.maxRetries = 99999
client.on('qr', () => {
console.log(color(''), color(' Escanear o c\u00F3digo acima para iniciar o ALEATORY-BOT!'))
})
fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
client.on('connecting', () => {
 start('2', 'Conectando o ALEATORY-BOT...')
})
client.on('open', () => {

success('2', 'ALEATORY-BOT conectado!!!')

console.log(chalk.magenta(""), chalk.keyword("orange")("[ INFO ]"), chalk.magenta("WA: " + client.user.phone.wa_version))

console.log(chalk.magenta(""), chalk.keyword("orange")("[ INFO ]"), chalk.magenta("OS: " + client.user.phone.os_version))

console.log(chalk.magenta(""), chalk.keyword("orange")("[ INFO ]"), chalk.magenta("Aparelho: " + client.user.phone.device_manufacturer))

console.log(chalk.magenta(""), chalk.keyword("orange")("[ INFO ]"), chalk.magenta("Modelo: " + client.user.phone.device_model))

console.log(chalk.magenta(""), chalk.keyword("orange")("[ INFO ]"), chalk.magenta("Build: " + client.user.phone.os_build_number))

console.log(chalk.magenta(""), chalk.keyword("orange")("[ INFO ]"), chalk.magenta('Boa sorte\n\n'))
}) 

await client.connect({
timeoutMs: 30 * 1000
})

fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
client.on('close', () => {
rc = 'A conex\u00E3o caiu...'
console.log(color(rc,'red'))
})
//=============(FIM-CONEXÃO)===========\\



//=========(INÍCIO BEM-VINDO)==========\\
client.on('group-participants-update', async (anu) => {
const mdata = await client.groupMetadata(anu.jid)  
const adeuscara = JSON.parse(fs.readFileSync('./src/json/adeuscara.json'))
const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(anu)
if(dbackid.indexOf(anu.jid) >= 0) {
if (anu.action == 'add'){ 
num = anu.participants[0]
var ind = dbackid.indexOf(anu.jid)
if(adeuscara[ind].actived && adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await client.sendMessage(mdata.id, '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*', MessageType.text)
client.groupRemove(mdata.id, [num])
return
}
}
}
if(antifake.includes(anu.jid)) {
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {
client.sendMessage(mdata.id, ' ⛹️⛹️Bye Bye Estrangeiro...👋🏌️', MessageType.text)
setTimeout(async function () {
client.groupRemove(mdata.id, [num])
}, 1000)
}
}
}
if (!welkom.includes(anu.jid)) return
try {
const mdata = await client.groupMetadata(anu.jid)
num = anu.participants[0]
console.log(anu)
ini_user = client.contacts[num]
namaewa = ini_user.notify
member = mdata.participants.length
try {
var ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
var ppgc = await client.getProfilePicture(anu.jid)
} catch {
var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)

const wel = { key: { participant: `0@s.whatsapp.net`, ...{}}, message: { "orderGroup": { message: `⊳ GRUPO : ${mdata.subject}`}}}
       
if (anu.action == 'add') {
img = await getBuffer(`https://api-gdr2.herokuapp.com/api/canvas/menu?titulo=BEM VINDO(A)&nome=${num.split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=SEJA BEM VINDO AO GRUPO ${encodeUrl(mdata.subject)}&numero=${mdata.participants.length}&membroConta=2021`)
teks = `${legendabv.bvlg}`
client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, quoted: wel, contextInfo: {'mentionedJid': [num]} })
} else if (anu.action == 'remove') {
img = await getBuffer(`https://api-gdr2.herokuapp.com/api/canvas/menu?titulo=ADEUS&nome=${num.split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo2}&grupo=SAIU DE ${encodeUrl(mdata.subject)}&numero=${mdata.participants.length}&membroConta=2021`)
teks = `${legendabv.saiulg}`
client.sendMessage(mdata.id, img, MessageType.image, {caption: teks,quoted: wel, contextInfo: {'mentionedJid': [num]}})
}
} catch (e) {
console.log('Erro : %s', color(e, 'red'))
}})

  
client.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})

//=============(BATERIA)==============\\

client.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
battre = batterylevel 
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(json[2][0][1])
console.log(color('Carga da bateria: ' + batterylevel+'%', "pink"))
})
//==================================\\  

//////_fim do group participantes_/////

//=======(UPDATE-CONVERSA-DO-BOT)=====\\
client.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (!mek.message) return
m = simple.smsg(client, mek)

global.prefix
global.blocked

const content = JSON.stringify(mek.message)
const speed = require('performance-now');
const from = mek.key.remoteJid
const { MessageType, WAMessageProto } = require('@adiwajshing/baileys')
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, contacsArray, location, liveLocation, image, video, sticker, document, audio, product } = MessageType


//=============(DATA/HORA/TEMPO)========\\
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')

const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')

const jam = moment.tz('America/Sao_Paulo').format('HH:mm')

const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')

const hour_now = moment().format('HH:mm:ss')

//================(BODY)===============\\
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')) : ""	
//========================================\\


//===========(BUDY)=================\\
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
//==================================\\

button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''

button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

listMessage = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

const listRM = (type === 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ""

const listmsg = (from, title, desc, list) => { 
po = client.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "Selecione","listType": 1,"sections": list}}, {})
return client.relayWAMessage(po, {waitForAck: true})
}

listmes = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

//==============(VAR PES)==============\\
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

//======================================\\

const cmdstk = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('base64') : ""

//================(BADY)================\\
bady = (type === 'conversation') ? mek.message.conversation : (type == 'imageMessage') ? mek.message.imageMessage.caption : (type == 'videoMessage') ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//=======================================\\
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = body.substring(body.indexOf(' ') + 1)
//========================================\\

const argss = body.split(/ +/g)
const smprefix = body
const isCmd = body.startsWith(prefix)
const isGroup = from.endsWith('@g.us')
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(' ')
const botNumber = client.user.jid
const sender = isGroup ? mek.participant : mek.key.remoteJid
let senderr = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid

//======================================\\


//=======(CONST-DE-PUXAR-NICK)========\\
pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
//=====================================\\


//============(CONSTS DE GRUPO)=========\\
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''

const groupName = isGroup ? groupMetadata.subject : ''

const groupId = isGroup ? groupMetadata.jid : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const isVote = isGroup ? voting.includes(from) : false
	
//=============(ENVIAR-ESPERE)===========\\

const { mensagens } = require('./lib/js/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 

//=======================================\\
			
enviar = {
espere: `${enviarmen}`,
success: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: '𝗠𝗮𝗮𝗳 𝗹𝗶𝗻𝗸 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱☹️'
},
msg: {
group: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NamaOwner}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
ownerG: '[❗] Este é um recurso especial para o proprietário ❌',
ownerB: '[❗] Este é um recurso especial para o proprietário ❌',
userB: `──「 LISTA 」──\nOlá Kak !\nDesculpe, irmã. Você não está registrado como amigo de ${setting.NamaOwner} Registre-se para fazer amizade com o ${setting.NamaOwner} por meio, \n\nCommand : ${prefix}daftar nama|idade\nExemplo : ${prefix}daftar bot|17\n\n──「 ${setting.NamaOwner} 」──`,
admin: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}

//=======(DONO/MODS/OWNERNUMBER)========\\

const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`,`${nescessario.dono5}@s.whatsapp.net`]
			
const mod = [`${setting.ownerNumber}@s.whatsapp.net`]
			
const adminbotnumber = [`${setting.ownerNumber}@s.whatsapp.net`]
		
const frendsowner = [`${setting.ownerNumber}@s.whatsapp.net`]	

//=======================================\\

		   //CONSTS IS//
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	
const isGroupAdmins = groupAdmins.includes(sender) || false
	
const isBanchat = isGroup ? bancht.includes(from) : false	

//===========(CONSTS-ANTI-)============\\
	
const isAntifake = isGroup ? antifake.includes(from) : false
	
const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	
	
const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false	
	
const isPalavrão = isGroup ? palavrão.includes(from) : false	

const Antidoc = isGroup ? antidoc.includes(from) : false
  
const Anticontato = isGroup ? anticontato.includes(from) : false	
   
const isAntiCatalogo = isGroup ? anticatalogo.includes(from) : false   
   
const Antiloc = isGroup ? antiloc.includes(from) : false	
  
const isAntiLink = isGroup ? antilink.includes(from) : true
	 
//====================================\\

const isAutofigu = isGroup ? autofigu.includes(from) : false		
	 
const isBanned = ban.includes(sender)
		
const isLevelingOn = isGroup ? _leveling.includes(from) : false
	
const isWelkom = isGroup ? welkom.includes(from) : false
		
const isNsfw =  isGroup ? nsfw.includes(sender) : true
	 
const isSimi = isGroup ? samih.includes(from) : false

const isOwner = ownerNumber.includes(sender)
	
const isPremium = premium.includes(sender)
			
const issupre = supre.includes(sender)
		
const ismod = mod.includes(sender)
			
const errorurl2 = 'https://i.ibb.co/dttZMb/59153010aad.png'
		
const isAdminbot = adminbotnumber.includes(sender)
		
const isfrendsowner = frendsowner.includes(sender)

const countMessage = JSON.parse(fs.readFileSync('./src/json/countmsg.json'))


//======(ANTI-STICKERS)========\\
if(isAntiSticker && isBotGroupAdmins && type == MessageType.sticker) {
if(isGroupAdmins) return client.sendMessage(from,'*mensagem proibida detectada, porém é admin logo a punição será anulada*', MessageType.text, {quoted: mek})
await client.sendMessage(from, '*mensagem proibida detectada, banindo...*',  MessageType.text, {quoted: mek})
setTimeout(async function () {
client.groupRemove(from, [sender])
}, 1000)
}

//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == MessageType.image) {
if(isGroupAdmins) return client.sendMessage(from,'*mensagem proibida detectada, porém é admin logo a punição será anulada*', MessageType.text, {quoted: mek})
await client.sendMessage(from, '*mensagem proibida detectada, banindo...*',  MessageType.text, {quoted: mek})
setTimeout(async function () {
client.groupRemove(from, [sender])
}, 1000)
}

//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == MessageType.video) {
if(isGroupAdmins) return client.sendMessage(from,'*mensagem proibida detectada, porém é admin logo a punição será anulada*', MessageType.text, {quoted: mek})
await client.sendMessage(from, '*mensagem proibida detectada, banindo...*', MessageType.text, {quoted: mek})
setTimeout(async function () {
client.groupRemove(from, [sender])
}, 1000)
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == MessageType.audio) {
if(isGroupAdmins) return client.sendMessage(from,'*mensagem proibida detectada, porém é admin logo a punição será anulada*', MessageType.text, {quoted: mek})
await client.sendMessage(from, '*mensagem proibida detectada, banindo...*', MessageType.text, {quoted: mek})
setTimeout(async function () {
client.groupRemove(from, [sender])
}, 1000)
}
//=======================================\\


const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 < "05:00:00"){
var ucapanWaktu = 'Bom Dia'
                                        }
if(time2 < "04:59:00"){
var ucapanWaktu = 'Boa Madruga'
                                        }
if(time2 < "00:00:00"){
var ucapanWaktu = 'Boa Madruga'
                                        } 
if(time2 < "23:59:00"){
var ucapanWaktu = 'Boa noite'
                                        }
if(time2 < "22:00:00"){
var ucapanWaktu = 'Boa noite'  
                                        }   
if(time2 < "20:00:00"){
var ucapanWaktu = 'Boa noite'  
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Boa noite'
                                         }
if(time2 < "1:00:10"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "1:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "17:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "16:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "12:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Bom dia'
                                         }
if(time2 < "09:00:00"){
var ucapanWaktu = 'Bom dia'
                                         } 
if(time2 < "07:00:00"){
var ucapanWaktu = 'Bom dia'
                                         }  
if(time2 < "05:00:00"){
var ucapanWaktu = 'Bom dia'
                                         }

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
await client.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
client.sendMessage(from, hasil, type, options).catch(e => {
client.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Erro ao baixar e enviar mídia_')
console.log(e)
})
})
})
})
}


const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}  

//==========(VERIFICADO-MENU)=============\\

const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${setting.NamaBot}`,"title": "hmm" }}}

//=======================================\\

const fakegroup = (teks) => {
client.sendMessage(from, teks, text, {
quoted: {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "551992360-1621790113@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": `${ucapanWaktu} ${pushname}`, 
"caption": `${ucapanWaktu} ${pushname}`, 
"jpegThumbnail": getBuffer(`${linklogos}`)
}
}
}
})
}

const fakestatus = (teks) => {
client.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
 },
 message: {
 "locationMessage": {
 //"mimetype": "image/jpeg",
 "name": `${ucapanWaktu} ${pushname}`,
"jpegThumbnail": getBuffer(`${linklogos}`)
}
}
}
})
} 

const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": await getBuffer(`${linklogos}`)
},
"title": `${ucapanWaktu} ${pushname}`,
"description": "ngab",
"currencyCode": "IDR",
"priceAmount1000": "50.000",
"retailerId": "Self Bot",
"productImageCount": 0
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

//======(INTELIGENCIA-ARTIFICIAL)========\\

const simih = async (text) => {
	try {
const sami = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=pt`, {method: 'GET'})
const res = await sami.json()
return res.success
} catch {
return 'Eu não identifico emojis nem acentos, desculpe.'
}
}
 //======================================\\


const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await client.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
	
const reply = (ytb) => {
client.sendMessage(from, ytb, text, {quoted: mek})
}

const sendImage = (ytb) => {
client.sendMessage(from, ytb, image, {quoted: mek})
}

const sendMess = (hehe, ytb) => {
client.sendMessage(hehe, ytb, text)
}

const mentions = (ytb, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, ytb.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, ytb.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
	}
	
const costum = (pesan, tipe, target, target2) => {
client.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}


const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
  
const sendPtt = (teks) => {
client.sendMessage(from, audio, mp3, {quoted: mek})
}
		    
const sendGif = (from, gif) => {
client.sendMessage(from, gif, MessageType.video, {mimetype: "video/gif"})
}


 //=========[--ANTI PALAVRÃO --]==========\\
 if (isGroup && isPalavrão) { //CREDITOS TIAGO
 if (palavra.includes(messagesC)) {
 if (!isGroupAdmins) {
 try { 
 client.sendMessage(from, `SEM PALAVRÃO!! 😠!!`, text , {quoted : mek})       
setTimeout( () => {
client.groupRemove(from, [sender])
}, 2000)
reply("2")
setTimeout( () => {
client.updatePresence(from, Presence.composing)
reply("1")
}, 1000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
client.sendMessage(from, `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`, text , {quoted : mek})           							
}, 0)
} catch { client.sendMessage(from, `InFelizmente, não sou um administrador, entt não posso te banir!!`, text , {quoted : mek}) }
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}
//=======================================\\


//==============(FUNÇÃO-AFK)=============\\
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
if (!mek.key.fromMe){
if (isAfk(mek.key.remoteJid)) return
addafk(mek.key.remoteJid)
heheh = ms(Date.now() - waktuafk) 
client.sendMessage(mek.key.remoteJid,`*Com licença @${setting.NumeroDono} Atualmente offline!*\n\n*Razão :* ${alasanafk}\n*Desde as :* ${heheh.hours} Hora, ${heheh.minutes} Minuto, ${heheh.seconds} Segundos atrás\n\nPor favor ligue novamente mais tarde`, MessageType.text,{quoted: mek, contextInfo:{ mentionedJid: [`${setting.NumeroDono}@s.whatsapp.net`]}})
 }
 } 
 
 if (mek.key.remoteJid.endsWith('@g.us') && offline) {
 if (!mek.key.fromMe){
 if (mek.message.extendedTextMessage != undefined){
 if (mek.message.extendedTextMessage.contextInfo != undefined){
 if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
 for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
 if (ment === `${setting.NumeroDono}@s.whatsapp.net`){
 if (isAfk(mek.key.remoteJid)) return
 addafk(mek.key.remoteJid)
 heheh = ms(Date.now() - waktuafk)
 client.sendMessage(mek.key.remoteJid,`*Com licença @${setting.NumeroDono} Atualmente offline!*\n\n*Razão :* ${alasanafk}\n*Desde as :* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos atrás\n\nPor favor ligue novamente mais tarde`, MessageType.text,{quoted: mek,contextInfo:{ mentionedJid: [`${setting.NumeroDono}@s.whatsapp.net`]}})
 }
 }
 }
 }
 }
 }
 }
 
//========================================\\
 
 
 
let userAgent = () => {

os = [

'Macintosh; Intel Mac OS X 10_15_7',

'Macintosh; Intel Mac OS X 10_15_5',

'Macintosh; Intel Mac OS X 10_11_6',

'Macintosh; Intel Mac OS X 10_6_6',

'Macintosh; Intel Mac OS X 10_9_5',

'Macintosh; Intel Mac OS X 10_10_5',

'Macintosh; Intel Mac OS X 10_7_5',

'Macintosh; Intel Mac OS X 10_11_3',

'Macintosh; Intel Mac OS X 10_10_3',

'Macintosh; Intel Mac OS X 10_6_',

'Macintosh; Intel Mac OS X 10_10_2',

'Macintosh; Intel Mac OS X 10_10_3',

'Macintosh; Intel Mac OS X 10_11_5',

'Windows NT 10.0; Win64; x64',

'Windows NT 10.0; WOW64',

'Windows NT 10.0',

];

return `Mozilla/5.0 (${os[Math.floor(Math.random() * os.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(

Math.random() * 3,

) + 7}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;

}


function ttaudio(url) {
return new Promise(async (resolve, reject) => {
getDataFirst = await axios.get('https://www.tiktok.com')
newCookie = getDataFirst.headers['set-cookie'].join('')
axios.get(url, {
headers: {
'user-agent': userAgent(),
'Cookie': newCookie
}
})
.then(({ data }) => {
$ = cheerio.load(data)
ttdata = JSON.parse($('script#__NEXT_DATA__').get()[0].children[0].data)
meta = ttdata.props.pageProps.itemInfo.itemStruct
resolve({
status: true,
message: success,
result: {
description: meta.desc,
duration: meta.video.duration,
resolution: meta.video.width + 'x' + meta.video.height,
jpeg_thumb: meta.video.originCover,
gif_thumb: meta.video.dynamicCover,
audio: meta.music.playUrl,
}
})
})
.catch((response) => {
reject({ status: false, message: response })
})
})
}

//BAN CHATS/GRUPOS
if (isBanchat){
if (!isGroupAdmins && !isOwner) return
if (budy.toLowerCase().startsWith('unbangp')){
if (!isBanchat) return reply(`Este grupo esta banido, ou seja não estou ouvindo niguem`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./database/bot/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
//========================================\\



//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
await reply(`            ◪ LEVEL UP ◪\n\n├─ ❏ NÚMERO: ${sender.split("@")[0]}.                                                                                       ├─ ❏ *PATENTE*: ${patt}\n├─ ❏ XP: ${getLevelingXp(sender)}\n└─ ❏ LEVEL: ${getLevel} -> ${getLevelingLevel(sender)}`)
}
} catch (err) {
console.error(err)
}
}
//=======================================\\


 //function check limit
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return client.sendMessage(from,`[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${prefix}buylimit* ou suba de nível...`, text,{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: mek})
client.sendMessage(from, jrpl.limitcount(limitCounts), text, { quoted : mek})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
client.sendMessage(from, jrpl.limitcount(limitCounts), text, { quoted : mek})
}
} 
							
	//funtion limitado
const isLimit = (sender) =>{ 
if (issupre) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal ) {
position = true
client.sendMessage(from, jrpl.limitend(pushname), text, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: mek})
return true
} else {
_limit
position = true
return false
}
}
}
if (position === false) {
const obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
return false
}
}

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('pronto');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
let media = fs.readFileSync(asw)
client.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}  


//===========(ÁREA SEM PREFIXO)==========\\

switch(smprefix) {
}

if (budy.includes("bot corno")){
client.updatePresence(from, Presence.composing)
reply("vsfd seu merda")
}


if (budy.includes("bot lixo")){
client.updatePresence(from, Presence.composing)
reply("lixo é tu, aborto da natureza")
}

if (messagesC.includes("cadebot")){
client.updatePresence(from, Presence.composing)
reply("olha eu aqui carai")
}

if (messagesC.includes("viado")){
client.updatePresence(from, Presence.composing)
reply("teu pai aquele corno")
}

if (budy.includes("adivinha meu celular") || (budy.includes("Adivinha meu celular") || (budy.includes("Adivinha Meu celular") || (budy.includes("Adivinha Meu Celular") || (budy.includes("bot qual meu celular")))) )){
adivinha = mek.key.id.length > 21 ? 'Android 🤣' : mek.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅';
client.sendMessage(from, adivinha, text, {quoted: mek})
}

if (budy.includes("Geovanna") || (budy.includes("geovanna") || (budy.includes("Genna") || (budy.includes("genna"))))){
if (!isGroup) return
client.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/web.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

if (messagesC.includes("corno") || (messagesC.includes("Corno") || (messagesC.includes("CORNO")))){
client.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/corno.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

if (budy.includes("O cafin é gay") || (budy.includes("o cafin e gay") || (budy.includes("O cafin e gay") || (budy.includes("o cafin é gay") || (budy.includes("cafin é gay") || (budy.includes("cafin e gay"))))))){
if (!isGroup) return
client.updatePresence(from, Presence.composing)
tujuh = fs.readFileSync('./audios/cafin.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}

//=========(FIM-DOS-[SEM-PREFIXO])========\\



//========(PALAVRAS-DO-ANAGRAMA)=========\\

let palavrasANA = [
{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
},
{
original: 'ESCADA',
embaralhada: 'CAESDA',
dica: 'OBJETO'
},
{
original: 'AKAME',
embaralhada: 'MEAKA',
dica: 'PERSONAGEM'
},
{
original: 'NAGATORO',
embaralhada: 'GATONARO',
dica: 'PERSONAGEM'
},
{
original: 'SASUKE',
embaralhada: 'KESUSA',
dica: 'PERSONAGEM'
},
{
original: 'GAY',
embaralhada: 'YAG',
dica: 'VOCÊ'
},
{
original: 'CIMENTO',
embaralhada: 'OMCNITE',
dica: 'CONSTRUÇÕES'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},
		
{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'HRROAOCC',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
original: 'ALEATORY',
embaralhada: 'YRTALOEA',
dica: 'NOME'
},
{  
original: 'CAFIN',
embaralhada: 'NFCIA',
dica: 'TIPO DE GAY'
},
{    
original: 'KONEKO',
embaralhada: 'NOEKKO',
dica: 'NOME'
},
{
original: 'RAPOSA',
embaralhada: 'APRSAO',
dica: 'ANIMAL'
},
{
original: 'INFERNO',
embaralhada: 'RNOFNIE',
dica: 'LUGAR'
},
{   
original: 'RINOCERONTE',
embaralhada: 'NTERRECNIOO',
dica: 'ANIMAL'
},
{ 
original: 'PASTOR',
embaralhada: 'STRPAO',
dica: 'BATIZADO'
},
{
original: 'BONITO',
embaralhada: 'NTBIOO',
dica: 'COMENTÁRIO'
},
{       
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
}
]		

		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./src/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { client.sendMessage(from, `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./src/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
client.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`, MessageType.text) 
}, 5000)
}}

//========================================\\


//COLORS//AQUI			
colors = ['red','white','black','blue','yellow','green']

const {
wa_version,
mcc,
mnc,
os_version,
device_manufacturer,
device_model
} = client.user.phone

//_VISUALIZA AS MENSAGENS 
client.chatRead(from)

//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
            
if (isBanned) return
BannedExpired(ban)

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             
const downloadM = async(save) => {
encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
encmediaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
encmediaa = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
encmediaa = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
if (save) return await client.downloadAndSaveMediaMessage(encmediaa)
return await client.downloadMediaMessage(encmediaa)
}
             
    
 //==CREDITOS TIRINGA-BOT| ASS: [-JR]==\\
//========(ANTISPAM-DE-COMANDOS)========\\
if (isCmd && isFiltered(from) && !isGroup) {
console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
contextInfo: {
mentionedJid: [sender]
} 
return console.log('SPAM DO CARA AI.')}
     
if (isCmd && isFiltered(from) && isGroup) {
console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
contextInfo: {
mentionedJid: [sender]
} 
return console.log('SPAM DO CARA AI.')}   
  
 
//=========(BLOCK-DE-COMANDOS)=========\\
//=========(CREDITOS: KAUAN GAY)=======\\

if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && getComandoBlock(from).includes(command))return reply('Comando blockeado')

//============FIMMMMMMMMM================\\ 
 
 
//=======(NOMES-MOSTRADOS NO TERMUX)=====\\     
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]))

if (!isGroup && !isCmd && !mek.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMENSAGEM\x1b[1;37m]', 'do ', color(sender.split('@')[0]))

if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))

if (!isCmd && isGroup && !mek.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMENSAGEM\x1b[1;37m]',  'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))

//========================================\\
 

//======[RESPOSTAS AUTOMATICAS]=========\\
if (isMedia && !mek.message.videoMessage) {
if (!isAutofigu) return
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
})
.on('end', function() {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(`${NamaBot}`, `${NamaOwner}`)} ${ran} -o ${ran}`, async(error) => {
client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
 .toFormat('webp')
.save(ran)
 } 
if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'Sim') {
if (gelutSkuy.status) return reply(`O jogo já começou!`)
gelutSkuy.status = true
rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
winR = rand0m[Math.floor(Math.random() * rand0m.length)]
fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Jogo de luta 🤙🏻 
Entre @${gelutSkuy.Z} & @${gelutSkuy.Y}
• O vencedor é [ @${winR} ] `
client.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
fs.unlinkSync("./media/" + from + ".json");
} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'Não') {
client.sendMessage(from, `👑 Jogo de luta rejeitado 🤙🏻
• @${gelutSkuy.Y} Rejeitar🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
fs.unlinkSync("./media/" + from + ".json");
}
}  
//=======================================\\


//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(isCmd && !isGroup && !isOwner && banChats === true) return reply(`Somente pode ser utilizado em Grupo`)
const atibot = mek.isBaileys
if (atibot === true) return 

//=======================================\\


//========(ANTI-PV-QUE-BLOQUEIA)======\\

if(isAntiPv && !isOwner && isCmd && !isGroup){ 
	reply('*Antipv ativado, você será bloqueado!*\n*Contate o criador*')
	client.blockUser(sender, 'add') 
	return
}
//======================================\\



//==========(ANTI-LIGAÇÃO)===========\\
if(isAnticall){ 
client.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;  
console.log('bloqueando o '+ callerId)
client.sendMessage(callerId, '「 ❗ 」Sistema de Antiligação ativado, não gosto que me ligue!!', MessageType.text)
client.blockUser(callerId, 'add') 
	return
});	
}
//====================================\\



//==SISTEMA DE VOTAÇÃO: CRÉDITOS: KAUAN==\\
if(isGroup) {
if (budy.toLowerCase() === 'voto'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel votar duas vezes', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
        }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devoto'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel anular um voto', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Vote\n*duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
//======================================\\


//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======================================\\


//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./src/json/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
jid: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./src/json/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
}
else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
jid: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./src/json/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
//======================================\\


//============(EVAL-EXECUÇÕES)===========\\

if (budy.startsWith('>')){
if(!isOwner && !issupre) return
console.log('[', color('EVAL', 'silver'),']', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !issupre) return reply('somente meu criador')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}
if (body.startsWith('$')) {
if (!q && !isOwner) return reply('somente meu criador')
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
//======================================\\
//===(ANTISPAM)====\\
if (isCmd && !isOwner) addFilter(sender)

switch(command) { 
  
//=============(LOGOS)=============\\
//[API-DAPUHY]\\
//(Folhas-1-6)\\
case 'folha':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice(7))
reply(enviar.espere)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nulis?text=${txt}&apikey=aJz0YYjyrC7nM0s`)
await client.sendMessage(from, anu, image, {quoted: mek})
break	

case 'folha2':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(enviar.espere)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskanan?text=${txt}&apikey=aJz0YYjyrC7nM0s`)
await client.sendMessage(from, anu, image, {quoted: mek})
break	

case 'folha3':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(enviar.espere)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskiri?text=${txt}&apikey=aJz0YYjyrC7nM0s`)
await client.sendMessage(from, anu, image, {quoted: mek})
break	

case 'folha4':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(enviar.espere)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokanan?text=${txt}&apikey=aJz0YYjyrC7nM0s`)
await client.sendMessage(from, anu, image, {quoted: mek})
break	

case 'folha5':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(enviar.espere)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokiri?text=${txt}&apikey=aJz0YYjyrC7nM0s`)
await client.sendMessage(from, anu, image, {quoted: mek})
break
//========================================\\

case 'neondevil':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
sd = args.join(" ")
reply(enviar.espere)
sad = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/neondevil?text=${sd}&apikey=aJz0YYjyrC7nM0s`)
await client.sendMessage(from, sad, image, {quoted: mek})
break 

case 'show':
txt = body.slice(6)
jro = txt.split("/")[0];
jru = txt.split("/")[1];
jrp = txt.split("/")[2];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais/tenso`)
reply(enviar.espere)
tyd = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/retrowave?text1=${jro}&text2=${jru}&text3=${jrp}&apikey=aJz0YYjyrC7nM0s`, {method: 'get'})
await client.sendMessage(from, tyd, image, {quoted: mek})
break 

case 'bracelet':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
lvc = body.slice(10)
reply(enviar.espere)
lop = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/bracelet?text=${lvc}&apikey=aJz0YYjyrC7nM0s`, {method: 'get'})
await client.sendMessage(from, lop, image, {quoted: mek})
break
//==========(FIM-DAPUHY-LOGOS)==========\\


//=========(API-Team-Of-LOGOS)==========\\
case 'thunder':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
vd = body.slice(9)
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunder?apikey=apiteam&texto=${vd}`)
buffer = await getBuffer(anu.resultado)
await client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break

case 'thunderv2':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
teks = body.slice(11)
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunderv2?apikey=apiteam&texto=${teks}`)
buffer = await getBuffer(anu.resultado)
await client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break

case 'transformer':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
tv = body.slice(13)
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/transformer?apikey=apiteam&texto=${tv}`)
buffer = await getBuffer(anu.resultado)
await client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break

case 'grafity':
txt = body.slice(9)
teks1 = txt.split("/")[0];
teks2 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/graffiti?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
buffer = await getBuffer(anu.resultado)
await client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break

case 'toxic':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
teks = body.slice(7)
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/toxic?apikey=apiteam&texto=${teks}`)
buffer = await getBuffer(anu.resultado)
await client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break

case 'demongreen':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
tdt = args.join(" ")
reply(enviar.espere)
hgf = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/demon?apikey=apiteam&texto=${tdt}`) 
dtd = await getBuffer(hgf.resultado)
await client.sendMessage(from, dtd, image, {quoted: mek})
break
//========(FIM-Team-Of-LOGOS)==========\\


//=======(API-LEYSCODERS-LOGOS)========\\
case 'crossfire': 
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
jdf = args.join(" ")
reply(enviar.espere)
jr = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/crossfire?q=${jdf}&apikey=dappakntlll`)
int = await getBuffer(jr.result.url)
await client.sendMessage(from, int, image, {quoted: mek})
break
//=======(FIM-LEYSCODERS-LOGOS)========\\


//========(API-DOCS-JOJO-LOGOS)=========\\
case 'logogame':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
game = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(10)}`)
await client.sendMessage(from, game, image, {quoted: mek})
break

case 'neon3': 
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = args.join(" ")
reply(enviar.espere)
buffer = await getBuffer(`http://docs-jojo.herokuapp.com/api/neon_light?text=${txt}`)
await client.sendMessage(from, buffer, image, {caption: 'está ai', quoted: mek})
break 
//========(FIM-DOCS-JOJO-LOGOS)=========\\


//==========(API-H4CK3RS-LOGOS)==========\\
case 'goldplay':
case 'silverplay':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
txt = args.join(" ")
reply(enviar.espere)
buffer = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/${command}?text=${txt}&apikey=404Api`)
await client.sendMessage(from, buffer, image, {caption: 'Está ai', quoted: mek})
break 
//===========(FIM-H4CK3RS-LOGOS)==========\\


//========(API-PENCARIKODE-LOGOS)=========\\
case 'jokerlogo':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
jkr = body.slice(11)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/joker?text=${jkr}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'space':
txt = body.slice(7)
ytb = txt.split("/")[0];
ytbs = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
spc = await getBuffer(`https://pencarikode.xyz/api/textpro/space-3d?text=${ytb}&text2=${ytbs}&apikey=pais`)
await client.sendMessage(from, spc, image, {quoted: mek})
break

case 'neve':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
ldw = body.slice(6)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/xmas?text=${ldw}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'neon':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = args.join(" ")
reply(enviar.espere)
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/neon-light?text=${txt}&apikey=pais`)
await client.sendMessage(from, buffer, image, {quoted: mek})
break 

case 'horror':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = args.join(" ")
reply(enviar.espere)
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/horror?text=${txt}&apikey=pais`)
await client.sendMessage(from, buffer, image, {caption: 'está ai', quoted: mek})
break

case 'stone':
txt = body.slice(7)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/stone-text?text=${jrr}&text2=${jrr1}&apikey=pais`)
await client.sendMessage(from, buffer, image, {quoted: mek})
break 

case 'break':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = args.join(" ")
reply(enviar.espere)
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/break-wall?text=${txt}&apikey=pais`)
await client.sendMessage(from, buffer, image, {caption: 'está ai', quoted: mek})
break 

case 'halloween':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = args.join(" ")
reply(enviar.espere)
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/halloween?text=${txt}&apikey=pais`)
await client.sendMessage(from, buffer, image, {caption: 'está ai', quoted: mek})
break 

case 'vidro':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
lpr = body.slice(7)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/dropwater?text=${lpr}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break 

case 'carbon': 
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
sda = body.slice(8)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/glossy-carbon?text=${sda}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'metalblue':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
dki = body.slice(10)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/glossy-blue?text=${dki}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'pink':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
erl = body.slice(6)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/holographic-3d?text=${erl}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break 

case 'colaq':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
dfk = body.slice(7)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/glue-text?text=${dfk}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'ossos':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
loi = body.slice(7)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/skeleton?text=${loi}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'blood':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
dps = body.slice(7)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/blood?text=${dps}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'areia':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
sdp = body.slice(7)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/sand-engraved?text=${sdp}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'natal':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
lkl = body.slice(7)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/christmas?text=${lkl}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'style':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
oip = body.slice(7)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/1917-style?text=${oip}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'pornhub': 
txt = body.slice(9)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/phub?text=${jrr}&text2=${jrr1}&apikey=pais`)
await client.sendMessage(from, buffer, image, {quoted: mek})
break 

case 'larva':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
qui = body.slice(7)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/lava?text=${qui}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'luxury':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
lx = body.slice(8)
reply(enviar.espere)
jr = await getBuffer(`https://pencarikode.xyz/api/textpro/luxury?text=${lx}&apikey=pais`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'steel':
txt = body.slice(7)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/steel?text=${jrr}&text2=${jrr1}&apikey=pais`)
await client.sendMessage(from, buffer, image, {quoted: mek})
break
//========(FIM-PENCARIKODE-LOGOS)======\\

//============(API-GDR2-LOGOS)===========\\

case 'placa': 
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
jld = body.slice(7)
reply(enviar.espere)
jr = await getBuffer(`https://api-gdr2.herokuapp.com/api/mudeminhaopiniao?text=${jld}`)
await client.sendMessage(from, jr, image, {quoted: mek})
break

case 'comentariol': 
case 'comentáriol':
txt = body.slice(13)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
buffer = await getBuffer(`https://api-gdr2.herokuapp.com/api/youtubecomment?user=${jrr}&text=${jrr1}&avatar=https://i.ibb.co/BGF5ddc/8a1b991f4918.jpg`)
await client.sendMessage(from, buffer, image, {quoted: mek})
break 

case 'comporn':
txt = body.slice(9)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
buffer = await getBuffer(`https://api-gdr2.herokuapp.com/api/phubtext?user=${jrr}&texto=${jrr1}&img=https://i.ibb.co/BGF5ddc/8a1b991f4918.jpg`)
await client.sendMessage(from, buffer, image, {quoted: mek})
break 

case 'flower':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
txt = body.slice(8)
reply(enviar.espere)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/alam?text=${txt}&theme=flower`)
send = await getBuffer(post.result.url)
await client.sendMessage(from, send, image, {quoted: mek})
break

case 'batle':
txt = body.slice(7)
teks = txt.split("/")[0];
teks2 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/game?text=${teks}&text2=${teks2}&theme=battlefield`)
send = await getBuffer(post.result.url)
await client.sendMessage(from, send, image, {quoted: mek})
break

case 'pubg':
txt = body.slice(6)
teks = txt.split("/")[0];
teks2 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/game?text=${teks}&text2=${teks2}&theme=pubg`)
send = await getBuffer(post.result.url)
await client.sendMessage(from, send, image, {quoted: mek})
break
//=============(FIM-GDR2-LOGOS)===========\\


//==========(PLAQUINHAS-LOGOS)===========\\

case 'plaq':
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/fotobundatop.jpg?text.0.text=${teks}&text.0.position.x=-61%25&text.0.position.y=-%25&text.0.size=1&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700`) //api
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, caption: ' *Plaquinha feita ✓* '})
break

case 'plaq2':
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=1&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`) //api
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, caption: ' *Plaquinha feita ✓* '})
break

case 'plaq3':
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/bunda3.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`)
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, caption: ' *Plaquinha feita ✓* '})
break

case 'plaq4':
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, caption: ' *Plaquinha feita ✓* '})
break

case 'plaq5':
if (args.length < 1) return reply(`${prefix}plaq5 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/9152e7a9-7d49-4ef-bac-2e6149fda0b2.jpg?text.0.text=${teks}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`)
plaq = ` *Plaquinha feita ✓* `
client.sendMessage(from, buffer, image, {caption: plaq, quoted: selo, sendEphemeral:true, contextInfo : {forwardingScore: 500, isForwarded:true}})
break

case 'plaq6':
if (args.length < 1) return reply(`${prefix}plaq6 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://clutamac.sirv.com/1011b71-bab1-49e3-9db-ee2c0646fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`) //api
client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selo, caption: ' *Plaquinha feita ✓* '})
break

case 'plaq7':
teks1 = body.slice(5) 
if (teks1.length < 1) return reply('Use no mínimo 1 Letras!')
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
client.sendMessage(from, buffer, image, {caption: plaq, quoted: selo, sendEphemeral:true})
break

case 'placaloli':
if (!q) return reply(enviar.wrongFormat)
reply('Aguarde..')
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
await limitAdd(sender)
break 

//========================================\\


//============(LOGOS-SEM-API)===========\\
case 'gold':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pGold(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'romantic':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pRomantic(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'wooden':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pWooden(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'madeira':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pMadeira(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'coffe2':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pCoffe2(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'neon2':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pNeon2(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case '8bit':
if (args.length < 1) return reply('onde está o texto?')
tdp = body.slice(6)
if(tdp.length < 5) return reply(`Utilize assim ${prefix + command} sad/sad`) 
p8Bit(args.join(' ').split('/')[0], args.join(' ').split('/')[1])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'love':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pLoveMsg(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'coffe':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pCoffeCup(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'romantic':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pRomantic(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'coffe2':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pCoffe2(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'gold':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pGold(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'madeira':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pMadeira(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'wooden':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pWooden(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'neon2':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pNeon2(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case '8bit':
tdp = body.slice(6)
if(tdp.length < 5) return reply(`Utilize assim ${prefix + command} sad/sad`) 
p8Bit(args.join(' ').split('/')[0], args.join(' ').split('/')[1])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'copo':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pCup(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'america':
case 'escudo':  
if(args.length < 1) return reply(`Utilize assim ${prefix + command} sad/sad`) 
pCaptain(args.join(' ').split('/')[0], args.join(' ').split('/')[1])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'glitch':
tdp = body.slice(8)
if(tdp.length < 5) return reply(`Utilize assim ${prefix + command} sad/sad`) 
pGlitch(args.join(' ').split('/')[0], args.join(' ').split('/')[1])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'googlesg':
case 'googlelogo': 
tdt = args.join(" ")
if(tdt.length < 7) return reply(`Utilize assim ${prefix + command} sad/sad/sad`) 
pGooglesg(args.join(' ').split('/')[0], args.join(' ').split('/')[1], args.join(' ').split('/')[2])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'butterfly':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pButterfly(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'fire':
frp = body.slice(6)
if (frp.length < 3) return reply(`onde está o texto?, Exemplo: ${prefix + command} sad`)
reply(enviar.espere)
pFogo(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'shadow':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pShadow(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'grass':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pMsgGrass(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'narutologo':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pNaruto(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break

case 'metalgold':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pOuro(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'cemiterio':
case 'cemitério': 
if (!q) return reply('onde está o texto?')
pSemi(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'papel':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pBurnPapper(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'lobometal':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pAwolfMetal(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'harryp':
if (args.length < 1) return reply('onde está o texto?')
reply(enviar.espere)
pHarryPotter(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 
//=====================================\\ 
 

//============(STICKERS)===============\\

case 'st':
case 'sticker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(enviar.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(enviar.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break  

case 'fstiker': 
case 'fsticker':
case 'f':
case 'fs':
await limitAdd(sender)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 10 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(enviar.espere) 
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
break 

case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break

case 'rename':
if (!isQuotedSticker) return reply('Marque uma figurinha...')  
var namaPackss = q.substring(0, q.indexOf('/') - 0)
var authorPackss = q.substring(q.lastIndexOf('/') + 1)
texto = body.slice(7)
if (isDoubleByte(texto)) return reply('[ !  ] Não é permitido letras modificadas nem emojis!!')
reply(enviar.espere)
stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await client.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
client.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: mek})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
break
//======================================\\


//=============(ANTIS-CMD)===============\\

case 'antipalavrão':
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if (args[0] === '1') {
if (isPalavrão) return reply('*Já esta ativado...*')
palavrão.push(from)
fs.writeFileSync('./database/palavrão.json', JSON.stringify(palavrão))
reply(`[❗] anti palavrão ativado`)
} else if (args[0] === '0') {
palavrão.splice(from, 1)
fs.writeFileSync('./database/palavrão.json', JSON.stringify(palavrão))
reply(`[❗] anti palavrão desativado...`)
} else {
reply(`[❗] 1 / 0, Exemplo ${prefix + command} 0`)
}
await limitAdd(sender)
break

case 'antilink':
if (!isGroup) return reply(enviar.msg.admin)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar. msg.Badmin)
if (args.length < 1) return reply(`Digite ${prefix}antilink 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('🌀 O recurso ANTILINK já está ativo no grupo 🌀')
antilink.push(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
reply('✔️ O recurso ANTILINK foi ativado nesse grupo📝')
} else if (Number(args[0]) === 0) {
 if (!isAntiLink) return reply('✔️ O recurso ANTILINK não está ativado no grupo 📝')
let position = false
Object.keys(antilink).forEach((i) => {
if (antilink[i] === from) {
position = i
}
})
if (position !== false) {
antilink.splice(position, 1)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
}
reply('O recurso ANTILINK foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix}antlink 1 para ativar, 0 para desativar o recurso`)
}
break

case 'anticontato':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 PRA ATIVAR, 0 PRA DESATIVAR. ')
if (Number(args[0]) === 1) {
anticontato.push(from)
fs.writeFileSync('./database/json/anticontato.json', JSON.stringify(anticontato))
reply('Ativou com sucesso o recurso de anti contato neste grupo✔️')
} else if (Number(args[0]) === 0) {
anticontato.splice(from, 1)
fs.writeFileSync('./database/json/anticontato.json', JSON.stringify(anticontato))
reply('Desativou com sucesso o recurso de anti contato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antiligar':
try {
if (!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./database/json/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
fs.writeFileSync('./database/json/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antiimg':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Ja esta ativo')
antiimg.push(from)
fs.writeFileSync('./database/json/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
antiimg.splice(from, 1)
fs.writeFileSync('./database/json/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Ja esta ativo')
antisticker.push(from)
fs.writeFileSync('./database/json/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
antisticker.splice(from, 1)
fs.writeFileSync('./database/json/antisticker.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antipv':
try {
if (!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('Ja esta ativo')
antipv.push('Ativado')
fs.writeFileSync('./database/json/antipv.json', JSON.stringify(antipv))
reply('Ativou com sucesso o recurso de antipv no bot✔️')
} else if (Number(args[0]) === 0) {
fs.writeFileSync('./database/json/antipv.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antipv no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antiloc.push(from)
fs.writeFileSync('./database/json/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
antiloc.splice(from, 1)
fs.writeFileSync('./database/json/antiloc.json', JSON.stringify(antiloc))
rpely('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antidoc.push(from)
fs.writeFileSync('./database/json/antidoc.json', JSON.stringify(antidoc))
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
antidoc.splice(from, 1)
fs.writeFileSync('./database/json/antidoc.json', JSON.stringify(antidoc))
reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 } else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antivideo':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./database/json/antivid.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
antivid.splice(from, 1)
fs.writeFileSync('./database/json/antivid.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./database/json/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
antiaudio.splice(from, 1)
fs.writeFileSync('./database/json/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

//======================================\\


//=====[COMANDOS-DE-DONO-PRINCIPAIS]====\\

case 'execut':
if (!isOwner) return reply(enviar.msg.ownerB)
return eval(`${args.join(' ')}`)
break

case 'setprefix':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'blockcmd':
if(!isOwner) return reply(enviar.msg.ownerB)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!isOwner) return reply(enviar.msg.ownerB)
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos': case 'listblockcmd':
case 'listablockcmd':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *LAYLA BOT* 」*────`
client.sendMessage(from, tkks.trim(), extendedText, {quoted: selo})
break

case 'serpremium':
case 'serprem':  
if (!isOwner) return reply(enviar.msg.ownerB)
premium.push(`${setting.ownerNumber}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
reply(`Pronto ${setting.ownerNumber} você já está na lista premium.`)
await limitAdd(sender)
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.group)
if (!isOwner) return  reply(enviar.msg.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.group)
if (!isOwner) return  reply(enviar.msg.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.splice(`${mentioned}`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break 

case 'addautorm':
case 'addautoban':
if (!isGroup) return reply(enviar.msg.admin)
if (!isOwner) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(args[0])
} else {
adeuscara.push({
groupId: from,
actived: false,
number: [args[0]]
})
}
fs.writeFileSync('./src/json/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban':  
if (!isGroup) return reply(enviar.msg.admin)
if (!isOwner) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./src/json/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'banativos':
if(!isOwner) return reply(enviar.msg.ownerB)
if(!isGroup) return reply(enviar.msg.group)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) { 
var indnum = numbersIds.indexOf(obj.jid)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
client.groupRemove(from, [obj.jid])
}
}
} else {
if(groupAdmins.includes(obj.jid)) {
mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
} else {
client.groupRemove(from, [obj.jid])
}
}
}
}
break

case 'block':
if (!isGroup) return reply(enviar.msg.group)
if (!isOwner) return  reply(enviar.msg.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unblock':
if (!isGroup) return reply(enviar.msg.group)
if (!isOwner) return  reply(enviar.msg.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

case 'blocklist':
client.updatePresence(from, Presence.composing) 
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
client.sendMessage(from, jrc.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
break

case 'bangp':
if (!isGroup) return reply(enviar.msg.group)
if (!isOwner) return reply(enviar.msg.ownerB)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./database/bot/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'unbangp':
if (!isGroup) return reply(enviar.msg.group)
if (!isOwner) return reply(enviar.msg.ownerB)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./database/bot/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'addpalavra':
if (!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./database/palavras.json', JSON.stringify(palavra))
reply('Palavrão adicionado com sucesso!')
await limitAdd(sender)
break

case 'delpalavra':
if (!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
let dbw = body.slice(12)
palavra.splice(dbw)
fs.writeFileSync('./database/palavras.json', JSON.stringify(palavra))
reply('Palavrão removida da lista com sucesso!')
await limitAdd(sender)
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
for (let i of palavra) {
lbw += `➸ ${i.replace(palavra)}\n`
}
await reply(lbw)
await limitAdd(sender)
break 

case 'bcgp':
case 'bcgc':  
if (!isOwner) return reply(enviar.msg.ownerB)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = mek.participant
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of fgp) {
client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nmek : ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.jid, `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nmek : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break

case 'bc':
if (!isOwner) return reply('Quem é Você, você não é meu dono 😂?')
if (args.length < 1) return reply('.......')
dfg = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of dfg) {
client.sendMessage(_.jid, buff, image, {caption: `[ TRANSMIÇÃO DE AVISO ]\n\n${body.slice(4)}`})
}
reply('Transmissão enviada com sucesso')
} else {
for (let _ of dfg) {
sendMess(_.jid, `[ TRANSMISSÃO DE AVISO ]\n\n${body.slice(4)}`)
}
reply('Transmissão enviada com sucesso')
}
break

case 'bcimagem':
if (!isOwner) return reply('Quem é Você?')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, image, {caption: `[ TRANSMISSÃO ]\n\n${body.slice(10)}`})
}
reply('Transmissao enviada')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(10)}`)
}
reply('Transmissão enviada')
}
break

case 'bcaudio':
if (!isOwner) return reply('Quem é Você?')
anu = await client.chats.all()
if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
encmediaa = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
buff = await client.downloadMediaMessage(encmediaa)
for (let _ of anu) {
client.sendMessage(_.jid, buff, audio, {caption: `[ TRANSMISSÃO DE AUDIO ]\n\n${body.slice(9)}`})
}
reply('Transmissao enviada')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ ATENÇÃO: TM ]\n\n${body.slice(9)}`)
}
reply('Transmissão enviada')
}
break

case 'bcsticker':
if (!isOwner) return reply('Quem é Você?')
anu = await client.chats.all()
if (isMedia && !mek.message.stickerMessage || isQuotedSticker) {
encmediaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
buff = await client.downloadMediaMessage(encmediaa)
for (let _ of anu) {
client.sendMessage(_.jid, buff, audio, {caption: `[ TRANSMISSÃO DE AUDIO ]\n\n${body.slice(11)}`})
}
reply('Transmissao enviada')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ ATENÇÃO: TM ]\n\n${body.slice(11)}`)
}
reply('Transmissão enviada')
}
break

case 'bcvideo':
if (!isOwner) return reply('Quem é Você?')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
encmediaa = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
buff = await client.downloadMediaMessage(encmediaa)
for (let _ of anu) {
client.sendMessage(_.jid, buff, video, {caption: `[ TRANSMISSÃO DE VIDEO ]\n\n${body.slice(9)}`})
}
reply('Transmissao enviada')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ ATENÇÃO: TM ]\n\n${body.slice(9)}`)
}
reply('Transmissão enviada')
}
break

case 'notif':
if (!isOwner) return reply(enviar.msg.ownerB)
if (!isGroup) return reply('Só em grupo')
teks = `Notificação de @${sender.split("@")[0]}\n*mek : ${body.slice(7)}*`
group = await client.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: teks,
contextInfo: {
mentionedJid: jids
},
quoted: selo
}
await client.sendMessage(from, options, text)
break

case 'acess':
if (!isOwner) return reply(enviar.msg.ownerB)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return client.sendMessage(from, `root@ALEOFC-BOT:~ ${err}`, text, { quoted: mek })
if (stdout) {
client.sendMessage(from, stdout, text)
}
})
break

case 'autoban':
if (!isGroup) return reply(enviar.msg.admin)
if (!isOwner) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./src/json/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
var ind = dbids.indexOf(from)						
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./src/json/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'reiniciar2':
if (!isOwner) return reply(enviar.msg.ownerB)
const dcd = body.slice(11)
console.log("Bot ON novamente")
reply('Reiniciando o bot em alguns segundos...')    
exec(dcd, (err, stdout) => {
if(err) return client.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
client.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break	

case 'addlevel'://case feita by: Bielzinho
if (!isOwner) return reply(enviar.msg.ownerB)
if (!isGroup) return reply(enviar.msg.group)
if (args.length < 2) return reply(`Use ${prefix}addlevel @marque 50\nOu a quantidade que desejar dá de level.`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
biel = `Foi adicionado ${args[1]} em level para @${mentioned[0].split('@')[0]}`
mentions(`${biel}`, mentioned, true)
addLevelingLevel((mentioned[0]), Number(args[1]))
break

case 'antipvon':
if (!isOwner ) return await reply('Apenas Meu Dono')
if (banChats) return await reply('já está ativo o modo antipv')
banChats = true
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await client.sendMessage(from, "*Sucesso alterado para modo antipv, pv não poderá ser utilizado" , text)
break

case 'antipvoff':
if (!isOwner) return await reply('Apenas meu dono o owner')
if (!banChats) return await reply('Nao estava ativado ainda')
banChats = false
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await client.sendMessage(from, "*Sucesso modo antipv desligado, pv liberado.", text)
break

case 'listabt'://case by: Bielzinho-Bot
if (!isOwner) return reply('```SOMENTE MEU DONO LINDÃO```')
tdtpt = await client.chats.all()
dpy = await getpc(tdtpt)
sdpt = `*L I S T A  D E  B A T E - P A P O S*\n*Total de Chats* : ${dpy.length}\n\n`
for(let i=0; i<dpy.length; i++){
conts = mek.key.fromMe ? mek.user.jid : client.contacts[dpy[i]] || {notify: jid.replace(/@.+/, '')}
nomes = client.contacts[dpy[i]] != undefined ? client.contacts[dpy[i]].vname || client.contacts[dpy[i]].notify : undefined
sdpt += `• *Nome* : ${nomes}\n• *Tag* : @${dpy[i].split("@")[0]}\n• *Wame* : wa.me//${dpy[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions( sdpt, dpy, true)
break 

case 'listagp': //case by: Bielzinho-Bot
if (!isOwner) return reply('```SOMENTE MEU DONO LINDÃO```')
tdufg = await client.chats.all()
ingfoo = await getGroup(tdufg)
teks1 = `*L I S T A  D E  G R U P O S*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'ausente': 
if (!isOwner) return reply(`Você não e o wa.me/${setting.NumeroDono} so ele pode usar esse comando kkkk`)
offline = true
waktuafk = Date.now()
anuu = args.join(" ") ? args.join(" ") : 'ativar'
alasanafk = anuu
anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B2673620DD5947E63E3ABE663F263", 'participant': `${setting.NumeroDono}@s.whatsapp.net`, 'remoteJid': `${from}`, 'quotedMessage': {"imageMessage": {"caption": `OFFLINE`, 'jpegThumbnail': await getBuffer(`${linklogos}`)}}}}
client.sendMessage(from, `[❗] AGORA EU ESTOU OFFLINE`,MessageType.text,anu)
await limitAdd(sender)
break 

case 'ativo':
if (!isOwner) return reply(`Você não e o wa.me/${setting.NumeroDono} so ele pode usar esse comando kkkk`)
offline = false
anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B2673620DD5947E63E3ABE663F263", 'participant': `${setting.NumeroDono}@s.whatsapp.net`, 'remoteJid': `${from}`, 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': await getBuffer(`${linklogos}`)}}}}
client.sendMessage(from, `[❗] AGORA ESTOU ONLINE`,MessageType.text,anu)
await limitAdd(sender)
break   

case 'legendabv':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
bvlg = args.join(" ")
legendabv.bvlg = bvlg
fs.writeFileSync('./dono/legendabv.json', JSON.stringify(legendabv, null, '\t'))
reply(`A legenda do bem vindo foi alterada com sucesso para: ${bvlg}`)
break

case 'legendasaiu':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
saiulg = args.join(" ")
legendabv.saiulg = saiulg
fs.writeFileSync('./dono/legendabv.json', JSON.stringify(legendabv, null, '\t'))
reply(`A legenda do saiu foi alterada com sucesso para: ${saiulg}`)
break

case 'dono2':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
dono2 = body.slice(8)
nescessario.dono2 = dono2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
dono3 = body.slice(8)
nescessario.dono3 = dono3
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
dono4 = body.slice(8)
nescessario.dono4 = dono4
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
dono5 = body.slice(8)
nescessario.dono5 = dono5
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'fundobemvindo':
case 'fundobv':  
if (!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply(`Marque alguma imagem com o comando ${prefix}imgpralink e copie o link e digite\n${prefix}fundobemvindo o link aqui.\nE ${prefix}fundosaiu o link aqui.`)
fundo1 = args[0]
if(budy.includes("  ")) return reply(`Não pode espaço, senão vai bugar, e é link da imagem, marca uma foto com o comando ${prefix}imgpralink, não é texto`)
fundo.fundo1 = fundo1
fs.writeFileSync('./dono/fundobemvindo.json', JSON.stringify(fundo, null, '\t'))
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
break

case 'fundosaiu':
if (!isOwner) return reply(enviar.msg.ownerB)
if (args.length < 1) return reply(`Marque alguma imagem com o comando ${prefix}imgpralink e copie o link e digite\n${prefix}fundosaiu o link aqui.\nE ${prefix}fundobemvindo o link aqui.`)
fundo2 = args[0]
if(budy.includes("  ")) return reply(`Não pode espaço, senão vai bugar, e é link da imagem, marca uma foto com o comando ${prefix}imgpralink, não é texto`)
fundo.fundo2 = fundo2
fs.writeFileSync('./dono/fundobemvindo.json', JSON.stringify(fundo, null, '\t'))
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
break

//======================================\\
case 'jogodavelha':
if(!isGroup) return reply('comando apenas para grupos')
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
client.sendMessage(from, chatMove, MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『aceitar』* para aceitar ou *『recusar』* para não aceitar, lembrando é sem o prefixo...._
     `;
client.sendMessage(from, strChat, MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break 

case 'tagme':
const tagme = {
text: `@${sender.split("@")[0]} 🧙‍♂️`, contextInfo: {mentionedJid: [sender]}
}
client.sendMessage(from, tagme, text)
break

case 'listban':
if (!isGroup) return reply(enviar.msg.admin)
if (!isGroupAdmins) return reply(enviar.msg.admin)
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break  
case 'autofigu':
if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
if (args.length < 1) return reply('1 para ativar ou 0 para desativar')
if (Number(args[0]) === 1) {
if (isAutofigu) return reply('*[❗] ja esta ativado* !!!')
autofigu.push(from)
fs.writeFileSync('./database/group/autofigu.json', JSON.stringify(autofigu))
reply('*❬ ✅ ❭ auto-figu ativado com sucesso neste grupo...*')
reply('*Atencao a todos os membros ativos deste grupo o auto-figu esta ativado se você enviar alguma foto ou video, o bot ira fazer automaticamente uma figurinha*')
} else if (Number(args[0]) === 0) {
autofigu.splice(from, 1)
fs.writeFileSync('./database/group/autofigu.json', JSON.stringify(autofigu))
reply('*❬ ❌ ❭ modo auto-figurinha desativado com sucesso neste grupo...*')
} else {
reply(`*Use assim : 1 para ativar ou 0 para desativar*`)
}
break

case 'p1':
case '??':
const timestampp = speed();
const latensii = speed() - timestampp
run = process.uptime() 
teks = `${kyun(run)}`
gambur = 'https://i.ibb.co/GWB6j6K/e8e22a72f5fe.jpg'
gambar = await getBuffer(gambur)
mhan = await client.prepareMessage(from, gambar, image, {thumbnail: gambar})
gbutsan = [
  {buttonId:`${prefix}menulogos`, buttonText: {displayText: '🎉 menu de logos'}, type: 1},
 
  {buttonId: `${prefix}menudono`, buttonText: {displayText:'✔️ menu de dono'}, type: 1},
 
  {buttonId: `${prefix}menumontagem`, buttonText: {displayText: '🌀 menu montagem e efeitos'}, type:1},
]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
contentText: menu(prefix),
footerText: `Speed    : ${latensii.toFixed(4)} Second\ntempo on : ${teks}\n\n_*© ${setting.NamaBot}`,
buttons: gbutsan,
headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./logos/logo.jpg'),
caption: help(prefix, mek),
contentText: {
'mentionedJid': [sender]},
quoted: mek})
break

case 'help':
case 'menu':
pushpp = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
const mnt = fs.readFileSync('audios/menucmd.mp3')
const horario = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(horario < "05:00:00"){
var ucapanWaktu = 'Bom dia 🌹'
                                        }
if(horario < "04:59:99"){
var ucapanWaktu = 'Boa Madrugada 🦇'
                                        }
if(horario < "00:00:00"){
var ucapanWaktu = 'Boa Madrugada 🦇'
                                        }
if(horario < "23:59:00"){
var ucapanWaktu = 'Boa noite 🌆'
                                        }
if(horario < "19:00:00"){
var ucapanWaktu = 'Boa noite 🌃'
                                         }
if(horario < "1:00:00"){
var ucapanWaktu = 'Boa noite 🌃'
                                         } 
if(horario < "17:59:99"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(horario < "15:00:00"){
var ucapanWaktu = 'Boa tarde'
                                         }
if(horario < "11:00:00"){
var ucapanWaktu = 'Boa noite 🌃'
                                         }
if(horario < "06:00:00"){
var ucapanWaktu = 'Bom dia 🌻'
                                         }
wew = fs.readFileSync('./logos/logo.mp4') 
await client.sendMessage(from, mnt, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await client.sendMessage(from, wew, video,{mimetype: 'video/gif', quoted: selo, caption: menu(prefix, pushpp, sender, time, patt, ucapanWaktu, horario)})
break
const comandost = totalcmd
const useTime = getRegisterTime(sender) 
const users = `${_level.length}`
const chatss = `${totalchat.length}`
break 

case 'pinterest': 
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} azul`)
reply('*「 ❗ 」 Aguarde um pouco amigo, a procura da sua imagem...*')
pin = await hx.pinterest(q)
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
await client.sendMessage(from, buffer, image, {quoted: mek})
break

case 'anime':
reply(enviar.espere)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
client.sendMessage(from,media,image,{quoted: mek})})
.catch((error) => {
console.log(error); 
})});
break

case 'wallpaper': case 'avatar':
reply(enviar.espere)
wanime = await axios.get(`https://nekos.life/api/v2/img/${command}`)
bufwanime = await getBuffer(wanime.data.url)
client.sendMessage(from, bufwanime, image, { quoted: mek })
break

case 'waifus': case 'uwu':
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/${command}`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 

case 'loli':
reply(enviar.espere)
anu = await axios.get('https://nekos.life/api/v2/img/neko')
loliz = await getBuffer(anu.data.url)
client.sendMessage(from, loliz, image, {quoted: mek})
break
case 'loli2':
reply(enviar.espere)
anu = await axios.get('https://nekos.life/api/v2/img/fox_girl')
loliz = await getBuffer(anu.data.url)
client.sendMessage(from, loliz, image, {quoted: mek})
break
case 'ytsrc':
teks = body.slice(7)  
anu = await fetchJson(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
const objsp = []
for(i=0;i< anu.resultados.length; ++i) {
let data = {
rowId: `${prefix}play `+ anu.resultados[i].title,
title: `${prefix}play `+ anu.resultados[i].title
}
objsp.push(data)
}
payload = {
listMessage: {
title: "✅ Músicas encotradas ✅",
buttonText: "Mostra lista de músicas",
description: `Palavra chave: ${teks}`,
listType: 1,
sections: [
{
title: "Músicas relacionadas",
rows: objsp
}
]
}
}
let preparedP = await client.prepareMessageFromContent(from, payload,{});
await client.relayWAMessage(preparedP, {waitForAck: true})
break
case 'ranklevel':
case 'rl':
case 'rank':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🌖 ${setting.NamaBot} 🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${_level[i].jid.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`

}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
client.sendMessage(from, leaderboardlvl, text, {sendEphemeral: true, quoted: selo})
} catch (err) {
console.error(err)
await reply(`10 Pessoas No grupo!`)
}
break
case 'bateria':
reply('《 Aguarde, esta informação é apenas para saber a porcentagem da bateria do celular do Bot 》')
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/textmaker/game?text=Bateria&text2=${battre}%&theme=battlefield`)
send = await getBuffer(post.result.url)
client.sendMessage(from, send, image,  {quoted: { key: { participant: `0@s.whatsapp.net`, ...{}}, message: { "imageMessage": { "caption": `${battre}%🔋`,}}}})
break

case 'addsuprem':
if (!isGroup) return reply(enviar.msg.group)
if (!issupre) return 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
supre.push(`${mentioned}`)
fs.writeFileSync('./src/@jimp/supre.json', JSON.stringify(supre))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de super suprem com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break 
case 'delsuprem':
if (!isGroup) return reply(enviar.msg.group)
if (!issupre) return 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
supre.splice(`${mentioned}`)
fs.writeFileSync('./src/@jimp/supre.json', JSON.stringify(supre))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários super suprem✖`
mentions(`${susp}`, mentioned, true)   
break 
case 'unblocksp':
if (!isGroup) return reply(enviar.msg.group)
if (!issupre) return 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break
case 'online':
case 'listonline': 
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
client.sendMessage(from, '𝒍𝒊𝒔𝒕𝒂 𝒅𝒆 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝒐𝒏𝒍𝒊𝒏𝒆𝒔:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
 quoted: mek,
 contextInfo: {
 mentionedJid: online
}
})
break
case 'getquoted':
reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
break
case 'menudono':
case 'menuowner':
wew = fs.readFileSync('./logos/logo.mp4') 
await client.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: selo, caption: dono(prefix, time)})
break 
case 'menuanime':
case 'menuanimes':  
wew = fs.readFileSync('./logos/logo.mp4') 
await client.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: selo, caption: menuanime(prefix)})
break 
case 'menumontagem':
case 'menuefeitos': 
wew = fs.readFileSync('./logos/logo.mp4') 
await client.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: selo, caption: menumontagem(prefix, time)})
break 
case 'menulogos':
case 'menulogo':
wew = fs.readFileSync('./logos/logo.mp4') 
await client.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: selo, caption: menulogos(prefix)})
break 
case 'lista':
wew = await getBuffer(`https://i.ibb.co/J56vK4h/4f279e19ece5.jpg`) 
client.sendMessage(from, wew, image, {quoted: selo, caption: lista(prefix, time, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, W, X, Y)})
break
case 'legenda': 
gh = body.slice(9)           
var top = gh.split('/')[0]
var bottom = gh.split('/')[1]
if(!gh.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Sad/Demais`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("797283ed983e9bda9c0b7a1700771af4", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Use fotos/adesivos!')
}
await limitAdd(sender)
break
case 'getsticker':
reply(enviar.espere)
gtr = body.slice(12)
lur = await fetchJson(`http://docs-jojo.herokuapp.com/api/getsticker?q=${gtr}`)  
const ti =['0','1','2','3','4','5','6','7','','9','10','11','12','13']
const kl = ti[Math.floor(Math.random() * ti.length)]
send = await getBuffer(lur.result.sticker[kl])
client.sendMessage(from, send, MessageType.image, {quoted: mek})
break
case 'dlist':
if (!isPremium) return reply(`Este comando é apenas para o Tipo Premium apenas ${prefix}owner Para comprar premium`)
 client.sendMessage(from, dlist(prefix), text, { quoted: mek })
break
case 'gitdobot':
case 'git':
 client.sendMessage(from, gitdobot(prefix), text, { quoted: selo})
break
case 'fotoanimais':
case 'fotosanimais':
 client.sendMessage(from, fotosanimais(prefix), text, {quoted: selo})
break
case 'menupremium':
case 'menuprem':
if (!isPremium) return reply(enviar.msg.Premium)
await client.sendMessage(from, menuprem(prefix), text, {quoted: selo })
break 
case 'destrava':
if (!isPremium) return reply(`Este comando é apenas para o Tipo Premium apenas ${prefix}owner Para comprar premium`)
client.sendMessage(from, destrava(prefix), text, { quoted: mek })
break 
case 'ytsearch':
if (args.length < 1) return reply('Cade o txt?')
const srch = args[0];
try {
var aramas = await yts(srch);
} catch {
return await client.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Titulo: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
});
ytresult += `${setting.NamaBot}`
await client.sendMessage(from, tbuff, image, {thumbnail: await getBuffer(`${linklogos}`),quoted: mek, caption: ytresult})
await limitAdd(sender)
break 
case 'delvote':
if(!mek.key.remoteJid) return
delVote(from)
reply('votação deletada com sucesso')
break
case 'votar':
case 'votacao': 
case 'votação': 
if(!isGroup) return reply(enviar.msg.group)
if(!q) return reply('*Votação*\n\n'+ prefix+ 'votar @tag marcar | pergunta  | 1 (1 = 1 Minuto)')
if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('/')
if(!Number(split[2])) return reply('cade os minutos eim?\n\n1 = 1 Minuto')
await mentions('Vote ' +'@'+ id.split('@')[0]+' para' +'\n\n' + `voto = ✅\ndevoto = ❌\n\npergunta: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break
case 'ytmp4':
addFilter(from)   
if (!q) return reply('Use o comando juntamente com um link do youtube')
if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(`O seguinte link: "${body.slice(command + 2)}" não é um link válido do youtube`)
reply('*「 ❗ 」 Aguarde um pouco, baixando seu vídeo...*')
ase = await y2mateV(q).catch(e => {
reply('Erro,tente novamente😔')
})
vidionye = await getBuffer(ase[0].link)
client.sendMessage(from, vidionye, video, {mimetype: 'video/mp4', filename: `${ase[0].output}`, quoted: mek
})
break
case 'ytmp4':
if (args.length < 1) return reply('Cadê o url vey?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(enviar.error.Iv)
qwe = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${args[0]}&APIKEY=HIRO`, {method: 'get'})
if (qwe.error) return reply(qwe.error)
teks = `*Titulo* : ${qwe.judul}`
thumb = await getBuffer(qwe.thumbnail)
client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
buffer = await getBuffer(qwe.url)
client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${qwe.judul}.mp4`, quoted: mek})
break
case 'videourl':
case 'videopralink':
reply(enviar.espere)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await client.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('Marque um vídeo')
}
break

case 'imgpralink': case 'tourl': 
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var jnckk = await  client.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('77ef5c2b86b834656e4503dace1c9bcd', jnckk)
.then(data => {
var caps = `╭─「 IMAGEM PARA LINK 」\n│\n│• ID : ${data.id}\n│• Tipo : ${data.image.mime}\n│• Extensão : ${data.image.extension}\n│\n│• LINK : ${data.display_url}\n╰─────────────────────`
ibb = fs.readFileSync(jnckk)
client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
})
.catch(err => {
throw err 
})
await limitAdd(sender)
break

case 'adivinha':
adivinha = mek.key.id.length > 21 ? 'Android 🤣' : mek.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅';
client.sendMessage(from, adivinha, text, {quoted: mek})
break

case 'playmp4':
addFilter(from)
if (args.length === 0) return reply(`Use assim : *${prefix + command}* _O título da música_`) 
const uangsaku = Math.floor(Math.random() * 1) + 0.3
reply(enviar.espere)
aramas = await yts(q);
aramat = aramas.all 
mulaikah = aramat[0].url      
console.log(color('[YT PLAY VÍDEO]', 'magenta'), color(`PROCURANDO O VÍDEO NO YT`, 'yellow'))       
try {
ytv(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP3\n*Tamanho do arquivo* : ${filesizeF}\n*Link* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP4\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(enviar.error.api)
}
await limitAdd(sender)
break 
case 'facebook':
case 'facemp4':  
case 'fb':
if (!q) return reply(enviar.wrongFormat)
if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply(enviar.error.Iv)
teks = args[0]
reply(enviar.espere)
res = await fbDown(teks).catch(e => {
reply(`${e}`)
})
a = res[0]
result = `「 *Facebook Downloader* 」
• *Título:* ${a.judul}
• *Fonte :* ${a.source}
• *Tamanho :* ${a.size}
• *Qualidade :* ${a.quality}
• *Modelo :* ${a.type}
• *Nome do arquivo :* ${a.judul}.${a.type}`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: mek})
sendFileFromUrl(a.link, video, {mimetype: 'video/mp4',quoted: mek})
await limitAdd(sender)
break
case 'ytmp3':
if (args.length === 0) return reply(`Use assim :  *${prefix + command} [linkYt]*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(enviar.error.Iv)
try {
reply(enviar.espere)
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesizeF) >= 30000) return sendMediaURL(from, thumb, `*Dados obtidos com sucesso!*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link* : ${a.data}\n\n_Para tamanhos superiores a 30 MB, é apresentado na forma de um link_`)
captions = `*「 YOUTUBE MP3 」*\n\n*Titulo* : ${title}\n*Ext* : mp3\n*Tamanho* : ${filesizeF}\n\n_Enviando o áudio..._`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(enviar.error.api))
})
})
} catch (err) {
reply(enviar.error.api)
}
await limitAdd(sender)
break 

case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins) return reply(enviar.msg.admin)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = ` ⋆⃟ۣۜ᭪➣ Atividade dos membros do grupo:\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) {
var indnum = numbersIds.indexOf(obj.jid)
teks += ` ⋆⃟ۣۜ᭪➣ @${countMessage[ind].numbers[indnum].jid.split('@')[0]}\n ⋆⃟ۣۜ᭪➣ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n ⋆⃟ۣۜ᭪➣ Comandos: ${countMessage[ind].numbers[indnum].cmd_messages}*\n`
} else {
teks += ` ⋆⃟ۣۜ᭪➣ @${obj.jid.split('@')[0]}\n ⋆⃟ۣۜ᭪➣ Mensagens: 0\n ⋆⃟ۣۜ᭪➣ Comandos: 0\n`
}
mem.push(obj.jid)
}
client.sendMessage(from, teks, extendedText, {quoted: mek, contextInfo:{mentionedJid: mem}})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break
case 'checkativo':
 
if (!isGroup) return reply(enviar.msg.group)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break
case 'rankativo':
case 'rankativos':  
if (!isGroup) return reply(enviar.msg.group)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 5; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
				
mentioned_jid.push(countMessage[ind].numbers[i].jid)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await client.sendMessage(from, `É necessário 3 jogadores para se construir um ranking`, text, {quoted: mek})
}
break
case 'play': 
addFilter(from)
if (args.length === 0) return reply(`Use assim *${prefix + command}* _O título da música a ser pesquisada_`)
reply(enviar.espere)
aramas = await yts(q);
aramat = aramas.all 
var mulaikah = aramat[0].url							
console.log(color('[YT PLAY MÚSICA]', 'magenta'), color(`PROCURANDO A MÚSICA NO YT`, 'yellow')) 
 try {
 yta(mulaikah)
 .then((res) => {
 const { dl_link, thumb, title, filesizeF, filesize } = res
 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
 .then(async (a) => {
 if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho do arquivo* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(err)
}
await limitAdd(sender)
break 
case 'spotifyy':
addFilter(sender)  
if (args.length == 0) return 
reply(`Exemplo: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
url = args[0]
get_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/spotifyurl?url=${url}`)
get_result = get_result.result
ini_txt = `Titulo : ${get_result.title}\n`
ini_txt += `Duração : ${get_result.duration}\n`
thumbnail = await getBuffer(get_result.image)
await client.sendMessage(from, image, image, {quoted: mek, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
break 
case 'metadinha':
reply(enviar.espere)
tdt = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`) 
cowo = await getBuffer(tdt.result.male)
client.sendMessage(from, cowo, image, {quoted: mek})
cewe = await getBuffer(tdt.result.female)
client.sendMessage(from, cewe, image, {quoted: mek})
break

case 'spotifysrc':
addFilter(sender)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica sad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=genbotkey&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Titulo : ${x.title}\n`
ini_txt += `Artista : ${x.artists}\n`
ini_txt += `Duração : ${x.duration}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Previas : ${x.preview_url}\n\n\n`
}
reply(ini_txt)
break
case 'arma':
case 'figuarma':
addFilter(sender)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')       
owgi = await client.downloadAndSaveMediaMessage(ger)
lfy = await imgbb("968d228a0c2afef73ec6f3e23d565df1", owgi)
imgtrg = `${lfy.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')  
owgi = await client.downloadAndSaveMediaMessage(ger)
qkl = await imgbb("bff534ea6eb6f5583aca913c5fd74a0d", owgi)
imgtrg = `${qkl.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/wanted?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'calunia':
k = `${body.slice(10)}`
txt1 = k.split("/")[0];
txt2 = k.split("/")[1];
txt3 = k.split("/")[2];
if(!k.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} @marca-a-pessoa/Fala algo como fosse ele/Reação : nossaa..`)
 client.sendMessage(from, `${txt3}`,text,{quoted:{    key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`,},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}})
 break
case 'triggered':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')       
owgi = await client.downloadAndSaveMediaMessage(ger)
dsr = await imgbb("bff534ea6eb6f5583aca913c5fd74a0d", owgi)
imgtrg = `${dsr.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/triggered?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'rip':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')    
owgi = await client.downloadAndSaveMediaMessage(ger)
qhy = await imgbb("797283ed983e9bda9c0b7a1700771af4", owgi)
imgtrg = `${qhy.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/rip?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 
case 'trash':
case 'lixo':  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
der = await imgbb("797283ed983e9bda9c0b7a1700771af4", owgi)
imgtrg = `${der.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/trash?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'preso':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')      
owgi = await client.downloadAndSaveMediaMessage(ger)
lder = await imgbb("797283ed983e9bda9c0b7a1700771af4", owgi)
imgtrg = `${lder.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/jail?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'bandeira':
if (!isGroup)return reply(enviar.msg.group)
if (!q) return reply(`Você deve usar: ${prefix}tiro 1~6\nExemplo: ${prefix}tiro 3`)
if ((Number(args[0]) === 1 ) || (Number(args[0]) === 2 ) || (Number(args[0]) === 3 ) || (Number(args[0]) === 4 ) || (Number(args[0]) === 5 ) || (Number(args[0]) === 6 )) {
slot2 = ['🇧🇷⚪⚪⚪⚪⚪','⚪🏳️‍🌈⚪⚪⚪⚪','⚪⚪🇨🇦⚪⚪⚪','⚪⚪⚪🇦🇺⚪⚪','⚪⚪⚪⚪🇦🇷⚪','⚪⚪⚪⚪⚪🇺🇸','⚪⚪⚪⚪⚪⚪']
bandeira1 = slot2[Math.floor(Math.random() * slot2.length)]
if (bandeira1 === '🇧🇷⚪⚪⚪⚪⚪') {
pp2 = "1"
} else if (bandeira1 === '⚪🏳️‍🌈⚪⚪⚪⚪') {
pp2 = "2"
} else if (bandeira1 === '⚪⚪🇨🇦⚪⚪⚪') {
pp2 = "3"
} else if (bandeira1 === '⚪⚪⚪🇦🇺⚪⚪') {
pp2 = "4"
} else if (bandeira1 === '⚪⚪⚪⚪🇦🇷⚪') {
pp2 = "5"
} else if (bandeira1 === '⚪⚪⚪⚪⚪🇺🇸') {
pp2 = "6"
} else {
pp2 = "0"
}
if (Number(args[0]) == pp2) {
const abt = Math.ceil(Math.random() + 500)
addLevelingXp(sender, abt)
pb = `Alvo Acertado ✅\n Você Ganhou ${abt}xᴘ`
} else {
pb = "Errou o País🤡" 
}
const sy =[`${prefix}bandeira 1`,`${prefix}bandeira 2`,`${prefix}bandeira 3`,`${prefix}bandeira 4`,`${prefix}bandeira 5`,`${prefix}bandeira 6`]
const dreps = sy[Math.floor(Math.random() * sy.length)]
buttons = [{buttonId:`${dreps}`,buttonText:{displayText: "● PEGAR BANDEIRA ●"},type:1}]
buttonsMessage = {
contentText: `${bandeira1}`,
footerText: `● Vᴏᴄᴇ ᴘᴇɢᴏᴜ ᴀ ʙᴀɴᴅᴇɪʀᴀ: ${(args[0])}.\n Mᴀs ᴀ ʙᴀɴᴅᴇɪʀᴀ ᴄᴏʀʀᴇᴛᴀ ᴇʀᴀ ᴀ: ${pp2}`,
buttons: buttons,
headerType: 1 
}
prep50 = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: selo})
client.relayWAMessage(prep50)
reply(pb)
} else {
reply(`Você deve usar: ${prefix}bandeira 1~6\nExemplo: ${prefix}bandeira 3`)
}
break
case 'emoji':
case 'semoji':
if(!q) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){
idemot = 0
}
else if(jemot == 'google'){
idemot = 1
}
else if(jemot == 'samsung'){
idemot = 2
}
else if(jemot == 'microsoft'){
idemot = 3
}
else if(jemot == 'whatsapp'){
idemot = 4
}
else if(jemot == 'twitter'){
idemot = 5
}
else if(jemot == 'facebook'){
idemot = 6
}
else if(jemot == 'joypixels'){
idemot = 7
}
else if(jemot == 'openmoji'){
idemot = 8
}
else if(jemot == 'emojidex'){
idemot = 9
}
else if(jemot == 'lg'){
idemot = 10
}
else if(jemot == 'htc'){
idemot = 11
}
else if(!jemot){
idemot = 4
}
else{
return reply(`Exemplo: ${prefix}emoji ☹️|whatsapp`)
}
reply(enviar.espere)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
console.log(emoji.images[idemot]);
sendStickerFromUrl(from,emoji.images[idemot].url, selo)
})
break
case 'hitler':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')       
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("797283ed983e9bda9c0b7a1700771af4", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/hitler?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, image, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'deletef':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')       
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("797283ed983e9bda9c0b7a1700771af4", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/deletarCanvas?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, image, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'petmak':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("797283ed983e9bda9c0b7a1700771af4", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 
case 'heroiimg':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("bff534ea6eb6f5583aca913c5fd74a0d", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://dapuhy-api.herokuapp.com/api/canvas/crush?img=${imgtrg}&apikey=aJz0YYjyrC7nM0s`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 
case 'tapa':
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um tapa na raba da😏 @${mentioned[0].split('@')[0]} 🔥` 
const jrq = fs.readFileSync('./logos/tapa.mp4')
client.sendMessage(from, jrq,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break
case 'chute':
if (!isGroup) return reply('so em gp burro')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um chute')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um chute em @${mentioned[0].split('@')[0]} 🤡` 
const jry = fs.readFileSync('./logos/chute.mp4')
client.sendMessage(from, jry,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break 
case 'matar':
case 'mata':  
if (!isGroup) return reply(enviar.msg.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
const jrpp = fs.readFileSync('./logos/matar.mp4')
client.sendMessage(from, jrpp,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break 
case 'rankcornos':
if (!isGroup) return reply(`Esse comando so pode ser usado em grupos parsa`)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
Esses são os cornos do grupo ${groupName}\n@${cornos1.jid.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.jid.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.jid.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.jid.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.jid.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n⚡ ${setting.NamaBot} ⚡`
membr.push(cornos1.jid)
membr.push(cornos2.jid)
membr.push(cornos3.jid)
membr.push(cornos4.jid)
membr.push(cornos5.jid)
mentions(ytb, membr, true)
break
case 'rankotakus':
if (!isGroup) return reply(`Comando so pode ser utiizado em grupos parsa`)
membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.jid.split('@')[0]}\n@${otakus2.jid.split('@')[0]}\n@${otakus3.jid.split('@')[0]}\n@${otakus4.jid.split('@')[0]}\n@${otakus5.jid.split('@')[0]}\n@${otakus6.jid.split('@')[0]}\n@${otakus7.jid.split('@')[0]}\n@${otakus.jid.split('@')[0]}\n@${otakus9.jid.split('@')[0]}\n@${otakus10.jid.split('@')[0]}\n\n⚡ ${setting.NamaBot} ⚡`
membr.push(otakus1.jid)
membr.push(otakus2.jid)
membr.push(otakus3.jid)
membr.push(otakus4.jid)
membr.push(otakus5.jid)
membr.push(otakus6.jid)
membr.push(otakus7.jid)
membr.push(otakus.jid)
membr.push(otakus9.jid)
membr.push(otakus10.jid)
mentions(ytb, membr, true)
break
case 'rankpau':
if (!isGroup) return reply(enviar.msg.group)
membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.jid.split('@')[0]}\n${pc1}\n@${paus2.jid.split('@')[0]}\n${pc2}\n@${paus3.jid.split('@')[0]}\n${pc3}\n@${paus4.jid.split('@')[0]}\n${pc4}\n@${paus5.jid.split('@')[0]}\n${pc5}\n\n ${setting.NamaBot}`
membr.push(paus1.jid)
membr.push(paus2.jid)
membr.push(paus3.jid)
membr.push(paus4.jid)
membr.push(paus5.jid)
mentions(pdr, membr, true)
break 
case 'mediafire':
if (args.length < 1) return reply('Digite o link do arquivo que deseja buscar no Mediafire')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link invalido')
reply('*「 ❗ 」 Aguarde um pouco, baixando seu jogo/app...*')
teks = args.join(' ')
const resm = await mediafireDl(teks)
result = `*「  MEDIAFIRE DOWNLOAD  」*

*Nome :* ${resm[0].nama}
*Tamanho :* ${resm[0].size}
*Link :* ${resm[0].link}`
reply(result)
sendFileFromUrl(resm[0].link, document, {mimetype: resm[0].mime, filename: resm[0].nama, quoted: mek})
break
case 'gtav':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("bff534ea6eb6f5583aca913c5fd74a0d", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/gtav?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'zombie':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("bff534ea6eb6f5583aca913c5fd74a0d", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://jonaz-api-v2.herokuapp.com/zombie?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'firef':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("bff534ea6eb6f5583aca913c5fd74a0d", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/fireAnimation?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'vidroqb':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3264f689f3acf82c9bafec6fe7ac453d", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/brokemirror?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'arteft':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3264f689f3acf82c9bafec6fe7ac453d", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/artePhoto?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case '2arma':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3264f689f3acf82c9bafec6fe7ac453d", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/crossgun?apikey=brizaloka&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'armast':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3264f689f3acf82c9bafec6fe7ac453d", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/gunscircle?apikey=brizaloka&text=Bandido(a)&text2=da área&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {quoted: mek})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'effect':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("968d228a0c2afef73ec6f3e23d565df1", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://leyscoders-api.herokuapp.com/api/imgmaker/firework?url=${imgtrg}&apikey=dappakntlll`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, video, {quoted: mek, mimetype: 'video/mp4'})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'paisagem':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("968d228a0c2afef73ec6f3e23d565df1", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/mixGalaxy?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'cubof':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("968d228a0c2afef73ec6f3e23d565df1", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/cuboFoto1?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'wallimg':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("968d228a0c2afef73ec6f3e23d565df1", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/phonewallpaper?apikey=brizaloka&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'qbcabeca':
case 'qbcabeça':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("968d228a0c2afef73ec6f3e23d565df1", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/puzzle?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case "ppt":
if (args.length < 1) return reply(jrb.tterro())
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(jrb.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota") {
var tes = "A vitória é do BOT"
}
if (vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NamaBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break
case 'abracar':
reply(enviar.espere)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/anime/abracar`, {method: 'get'})
buff = await getBuffer(anu.Resultado)
client.sendMessage(from, buff, sticker, {quoted: mek})
break  
case 'ttm2':
if (args.length < 1) return reply('Cadê o  txt mano?')
reply(enviar.espere)
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${args[0]}&cor=ff0&fonte=7`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek})
break  
case 'ttm':
if (args.length < 1) return reply('Cadê o  txt mano?')
reply(enviar.espere)
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${args[0]}&cor=f0f&fonte=1`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek})
break  
case 'ttm3':
if (args.length < 1) return reply('Cadê o  txt mano?')
reply(enviar.espere)
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${args[0]}&cor=0ff&fonte=3`, {method: 'get'})
 client.sendMessage(from, anu, image, {quoted: mek})
break  
case 'ttm4':
if (args.length < 1) return reply('Cadê o  txt mano?')
reply(enviar.espere)
anu = await getBuffer(`https://api-gdr2.herokuapp.com/api/ttpmaker?texto=${args[0]}&cor=0ff&fonte=6`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek})
break  
case 'wallpaper':
if (args.length < 1) return reply(`Digite uma catégoria\nExemplo: ${prefix + command} anime`)
teks = body.slice(11)
client.updatePresence(from, Presence.composing)
reply('Pesquisando Aguarde..')
anu = await fetchJson (`https://api-gdr2.herokuapp.com/api/search/gimage?q=${teks}`)
buffer = await getBuffer(anu.result)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
break
case 'modonsfw':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (args.length < 1) return reply('Hmmmm')
if ((args[0]) === 'on') {
if (isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw no grupo\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
nsfw.splice(from, 1)
fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo nsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('On para ativar, Off para desligar')
}
break 
case 'dogzin':
reply(enviar.espere)
fetch('https://raw.githubusercontent.com/rashidsiregar2/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
await limitAdd(sender)
break
case 'patrik':
reply(enviar.espere)
fetch('https://raw.githubusercontent.com/rashidsiregar2/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
sendMediaURL(from,media,enviar.success)
}
)
.catch((error) => {
console.log(error); 
}
)
});
await limitAdd(sender)
break
case 'gerarnick': 
teks = body.slice(10)
send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${teks}`)
teks = ` 🧙🏻‍♂️NICKS GERADOS COM SUCESSO!🧙🏻‍♂️
🍙Primeiro ${send.random_1} 
🍙Segundo ${send.random_2} 
🍙Térceiro ${send.random_3} 
🍙Quarto ${send.random_4} 
🍙Quinto ${send.random_5}
 
   👾EXTRAS👾
 👾${send.squares}
 👾${send.inverted_squares}
 👾${send.italic}
 👾${send.bold}
 👾${send.future_alien}
 👾${send.asian_1}
 👾${send.asian_2}
 👾${send.squiggle}
 👾${send.squiggle_2}
 👾${send.squiggle_3}
 👾${send.squiggle_4}
 👾${send.neon}
 
 
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
    
    © ${setting.NamaBot}
 `
client.sendMessage(from, teks, text, {quoted: mek})
break
case 'print':
reply(enviar.espere)
send = await getBuffer(`https://nurutomo.herokuapp.com/api/ssweb?url=https://${body.slice(7)}`)
client.sendMessage(from, send, image)
break

case 'gokublack':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `gokublack Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'naruto':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `naruto Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'nagaroto':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `nagaroto Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'shikamaru':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `shikamaru Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break 
case 'vegeta':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `vegeta Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'kakashi':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `kakashi Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'sasuke':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `sasuke Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'minato':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `minato Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'luffy':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `luffy Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
jr = `${ucapanWaktu} ${pushname} 

conselho Bíblicos para você: 

- ${conselhosb} 

> Bot: ${NamaBot}
> Grupo: ${groupName}`
reply(jr)
client.sendMessage(from, text, {quoted:mek})
break

case 'perfil':
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const asLvl = getLevelingLevel(sender)
const ssXp = getLevelingXp(sender)
const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${mek.key.id.length > 21 ? 'Android 🤣' : mek.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}`
daftarimg = await getBuffer(ppimg)
client.sendMessage(from, daftarimg , MessageType.image, {caption: dptr, quoted: selo})
break
case 'zoro':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `Zoro Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'nami':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `Nami Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'nanami':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `nanami Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'sukuna':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `sukuna Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'sakura':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `sakura Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'enel':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `enel Personagem icon`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'antifake':
try {
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (args.length < 1) return reply(' 1 Para ativar/ 0 para desativar')
if (Number(args[0]) === 1) {
antifake.push(from)
fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
} else if (Number(args[0]) === 0) {
antifake.splice(from, 1)
fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
if(isAntifake == 0) return reply('Já está Desativado.')
reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break
case 'menuadms':
case 'menuadm':
wew = fs.readFileSync('./logos/logo.mp4') 
await client.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: selo, caption: adms(prefix, time)})
break 
case 'menulite':
wew = await getBuffer(`${linklogos}`) 
client.sendMessage(from, wew, image, {quoted: selo, caption: menulite(prefix, time)})
break 
case 'tabela':
client.sendMessage(from, tabela(prefix), text, {quoted: selo})
break 
case 'menumusic':			 
case 'menumusica':
case 'musicas':
wew = await getBuffer(`${linkmusic}`) 
await client.sendMessage(from, wew, image, {quoted: selo, caption: menumusic(prefix, time)})
break
case 'premiumlist':
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${setting.NamaBot}* 」*────`
client.sendMessage(from, tkks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
break
case 'qrcode':
const tex = encodeURIComponent(body.slice(8))
if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
client.sendMessage(from, bufferr, image, {quoted: mek})
break
case 'wa.me':
case 'wame':
client.updatePresence(from, Presence.composing) 
options = {
text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}\n\n`,
contextInfo: { mentionedJid: [sender] }
}
client.sendMessage(from, options, text, 
{ quoted: mek } )
break
case 'playstore':
addFilter(sender)  
if (args.length == 0) return
reply(`Exemplo: ${prefix + command} telegram`)
query = args.join(" ")
get_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/googleplay?q=${query}`)
get_result = get_result.result
ini_mn1k = 'Play Store Pesquisa : \n'
for (var x of get_result) {
ini_mn1k += `Nome : ${x.title}\n`
ini_mn1k += `ID : ${x.appId}\n`
ini_mn1k += `Desenvolvedor : ${x.developer}\n`
ini_mn1k += `Link : ${x.url}\n`
ini_mn1k += `Preço : ${x.priceText}\n`
ini_mn1k += `Preço : ${x.price}\n\n`
}
reply(ini_mn1k)
break
case 'setdesc':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
client.groupUpdateDescription(from, `${body.slice(9)}`)
client.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: mek})
break
case 'speed':
case 'ping':
const timestamp = speed();
const latensi = speed() - timestamp
client.updatePresence(from, Presence.composing) 
uptime = process.uptime()
client.sendMessage(from, 
`SPEED: *${latensi.toFixed(4)} _SEGUNDO_*
TIPO DO BOT: *TERMUX*
*O BOT ESTEVE ATIVO POR*
*${kyun(uptime)}*`, text, { quoted: mek})
break

case 'delete':
case 'del':
case 'd':  
if (!isPremium && !isOwner && !isGroupAdmins) return reply('Só premium')
if (!isGroup)return reply(enviar.msg.group)
try {
client.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
} catch {
reply('Só é possível deletar mensagens minhas')
}
break

case 'play3':
addFilter(from) 
reply(enviar.espere)
query = args.join(" ")
url = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${query}&apikey=apiteam`)
resu = `Titulo: ${url.titulo}\n*Musica encontrada!*`
imagem = await getBuffer (url.thumb)
audioa = await getBuffer (url.url)
client.sendMessage(from, imagem, image, {quoted: mek, caption: resu})
client.sendMessage(from, audioa, audio, {quoted: mek, mimetype: 'audio/mp4'})
break 
case 'nicks':
addFilter(sender)
client.updatePresence(from, Presence.composing)
data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=AriaGanzTzy`, {method: 'get'})
teks = '=================\n'
for (let i of data.result) {
teks += `Nick: ${i}\n=================\n`
}
reply(teks.trim())
break
case 'play2':  
addFilter(from)  
play2 = body.slice(7)
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play2}&apikey=AriaGanzTzy`)
if (anu.error) return reply(anu.error) 
client.sendMessage(from, 'Enviando sua música, aguarde 🎬',MessageType.text, { quoted: mek} )
infomp3 = `*Título:* ${anu.result.title}\n*Fonte:* ${anu.result.source}\n*Tamanho:* ${anu.result.size}`
buffer = await getBuffer(anu.result.thumbnail) 
lagu = await getBuffer(anu.result.url_audio)
client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
break

case 'status':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
statuszada =
`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
│
│➱ antiaudio: ${isAntiAudio? '✓' : '✕'}
│➱ anticatalogo: ${isAntiCatalogo ? '✓':'✕'}
│➱ anticontato: ${Anticontato ? '✓' : '✕'}
│➱ antidocumento: ${Antidoc ? '✓' : '✕'}
│➱ antifake: ${isAntifake ? '✓' : '✕'}
│➱ antiimg: ${isAntiImg? '✓' : '✕'}
│➱ antilink: ${isAntiLink ? '✓' : '✕'}
│➱ antiloc: ${Antidoc ? '✓':'✕'}
│➱ antisticker: ${isAntiSticker ? '✓' : '✕'}
│➱ antivideo: ${isAntiVid ? '✓' : '✕'}
│➱ bemvindo: ${isWelkom ? '✓' : '✕'}
│➱ leveling: ${isLevelingOn ? '✓' : '✕'}
│➱ simih: ${isSimi ? '✓' : '✕'}
│
╰╼╾❲ ${NamaBot} ❳╼╾╯`,
reply(`${statuszada}`)
break

case 'play5':
addFilter(from)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica Sad`)
reply(enviar.espere)
query = args.join(" ")
get_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${query}`)
get_result = get_result.result
ini_buffer = await getBuffer(get_result.thumb)
client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
get_audio = await getBuffer(get_result.url)
client.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek})
break
case 'jooxplay':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica Sad`)
query = args.join(" ")
reply(enviar.espere)
get_result = await fetchJson(`FALTANDO A API${query}`)
get_result = get_result.result
ini_mn1k = `Titulo : ${get_result.info.song}\n`
ini_mn1k += `Duração : ${get_result.info.duration}\n`
thumbnail = await getBuffer(get_result.image)
client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_mn1k })
get_audio = await getBuffer(get_result.audio[0].link)
client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek})
break
case 'pinterest2':
 
reply(enviar.espere)
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
get_result = await fetchJson(`API AQUI, FALTANDO${query}`)
get_result = get_result.result
for (var x = 0; x <= 1; x++) {
var ini_buffer = await getBuffer(get_result[x])
await client.sendMessage(from, ini_buffer, image)
}
break
case 'rankgay':
 
addFilter(sender)  
if(!isGroup) return reply(enviar.msg.group)
try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgostosas':
addFilter(sender) 
 
if (!isGroup) return reply(enviar.msg.group)
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(luy, member, true)
break
case  'casal':
 
if (!isGroup) return reply(enviar.msg.group)
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.jid)
membr.push(teupai21.jid)
mentions(jet, membr, true)
break

case 'ocr':
case 'textodafoto':
 
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Marque uma foto, e digite o comando, como se estivesse respondendo ela')
}
break
case 'simi':
if(isSimi) return reply('Desativado')
sduy = args.join(" ")
data = await fetchJson(`https://api.simsimi.net/v2/?text=${sduy}&lc=pt`, {method: 'get'})
simi = `${data.success}`  
reply(simi)
break
case 'ytsearch2':
 
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica sad`)
query = args.join(" ")
get_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/yt/search?q=${query}`)
get_result.url = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Título : ${x.title}\n`
ini_txt += `Duração: ${x.duration}\n`
ini_txt += `thumb : ${x.thumbnail}\n`
ini_txt += `Link : ${x.url}\n`
}
reply(ini_txt)
break

case 'figuc':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)                     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("968d228a0c2afef73ec6f3e23d565df1", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = (`https://api-exteam.herokuapp.com/api/circle?img=${teks}`)
abc = await getBuffer(anu)
client.sendMessage(from, abc, image, {
quoted: mek
})
} else {
reply('É necessário usar uma imagem')
}
break 
case 'sc':
case 'stcirculo':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(enviar.espere)
owgi = await client.downloadAndSaveMediaMessage(ger)
fgh = await imgbb("220519c5c11d04f12a1e039bf4304b", owgi)
imgtrg = `${fgh.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek
})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
await limitAdd(sender)
break
case 'alerta':
data = fs.readFileSync('./src/alerta.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
sendImage(hasil, mek, '*alerta :V*')
break
case 'moddroid':
data = await fetchJson(`https://serpapi.com/search.json?device=&q=${body.slice(9)}`)
hepi = data.result[0] 
jry = `*Nome*: ${data.result[0].title}\n*editor*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*Tamanho*: ${hepi.size}\n*última versão*: ${hepi.latest_version}\n*gênero*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
buffer = await getBuffer(hepi.image)
client.sendMessage(from, buffer, image, 
{quoted: mek, caption: `${jry}`})
await limitAdd(sender)
break
case 'conscep':
 
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${query}`)
x = get_result.resultado
k = `CEP : ${x.cep}
LOGRADOURO: ${x.logradouro}
BAIRRO : ${x.bairro}
LOCALIDADE : ${x.localidade}
UF : ${x.uf}
IBGE : ${x.ibge}
GIA : ${x.gia}
DDD : ${x.ddd}
SIAFI : ${x.siafi}`
reply(k)
break 
case 'ban':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar. msg.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return reply('Marque uma mek de random')
if (mek.message.extendedTextMessage.contextInfo.participant == ownerNumber) return reply('Não posso remover meu dono.')
if (mek.message.extendedTextMessage.contextInfo.participant == frendsowner) return reply('Não posso remover o mais brabo do grupo')
setTimeout(function() {}, 2000);
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
break
case 'bansp':
if (!isGroup) return reply(enviar.msg.group)
if (!issupre) return 
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você deseja chutar!')
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
break
case 'wallpaperanime':
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = `wallpaper anime celular hd`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: getBuffer(`${linklogos}`)})
}
}
await limitAdd(sender)
break
case 'lamber':

reply(enviar.espere)
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `https://www.luc4rio-rest-api.tk/api/anime/lamber`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
client.sendMessage(from, buff, sticker, { quoted: mek})
fs.unlinkSync(rano)
})
break  
case 'fdp':
addFilter(sender)  
tujuh = fs.readFileSync('./audios/fdp.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'rankgays':
addFilter(sender)  
if (!isGroup) return reply(`Esse comando so pode ser usadoem grupos parsa`)
membr = []
const gay1 = groupMembers
const gay2 = groupMembers
const gay3 = groupMembers
const gay4 = groupMembers
const gay5 = groupMembers
const gays1 = gay1[Math.floor(Math.random() * gay1.length)]
const gays2 = gay2[Math.floor(Math.random() * gay2.length)]
const gays3 = gay3[Math.floor(Math.random() * gay3.length)]
const gays4 = gay4[Math.floor(Math.random() * gay4.length)]
const gays5 = gay5[Math.floor(Math.random() * gay5.length)]
var porcentagemgay = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const porcentagemd = porcentagemgay[Math.floor(Math.random() * porcentagemgay.length)]
const porc = porcentagemgay[Math.floor(Math.random() * porcentagemgay.length)]
const porce = porcentagemgay[Math.floor(Math.random() * porcentagemgay.length)]
const pore = porcentagemgay[Math.floor(Math.random() * porcentagemgay.length)]
const porp = porcentagemgay[Math.floor(Math.random() * porcentagemgay.length)]
bdc = ` 
Esses são os mais SuperGays do grupo:
${groupName}\n@${gays1.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagemd}\n@${gays2.jid.split('@')[0]}\nCom uma porcentagem de ${porc}\n@${gays3.jid.split('@')[0]}\nCom uma porcentagem de ${porce}\n@${gays4.jid.split('@')[0]}\nCom uma porcentagem de ${pore}\n@${gays5.jid.split('@')[0]}\nCom uma porcentagem de ${porp}\n\n⚡ ${setting.NamaBot} ⚡`
membr.push(gays1.jid)
membr.push(gays2.jid)
membr.push(gays3.jid)
membr.push(gays4.jid)
membr.push(gays5.jid)
mentions(bdc, membr, true)
break
case 'kiss':
reply(enviar.espere)
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `https://h4ck3rs404-api.herokuapp.com/api/nsfw/kiss?apikey=404Api`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
client.sendMessage(from, buff, sticker, { quoted: mek})
fs.unlinkSync(rano)
})
break 
case 'happymod':
addFilter(sender)  
if (args.length < 1) return reply('Digite o nome do apk que deseja buscar')
asd = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=AriaGanzTzy&q=${body.slice(10)}`, {method: 'get'})
teks = '𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of asd.result) {
teks += `Nome do apk: ${i.title}
Avaliação: ${i.rating}
link: ${i.url}\n\n
`
}
reply(teks.trim())                   
break
case 'searchmsg':
case 'srcmensagem':
if (!q) return reply(enviar.wrongFormat)
reply(enviar.espere)
xtext = args.join(' ')
cond = xtext.split(" ")
a = await client.searchMessages(xtext, from, 10, 1)// count 10 
fox = '*「 Pesquisa de msg do grupo 」*\n\n'
num = 0
for (j of a.messages){
num += 1
if (j.message.conversation) {
if (j.key.fromMe){ 
fox += num+'. Quem envio: '+client.user.jid+'\n    Msg: '+j.message.conversation+'\n    ID: '+j.key.id+'\n    Tipo: conversation\n\n'
 } else {
 fox += num+'. Quem envio: '+j.key.participant+'\n    Msg: '+j.message.conversation+'\n    ID: '+j.key.id+'\n    Tipo: conversation\n\n'
} 
}
else if (j.message.extendedTextMessage){
if (j.key.fromMe){ 
fox += num+'. Quem envio: '+client.user.jid+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    ID: '+j.key.id+'\n    Tipo: extendedTextMessage\n\n'
}else{
fox += num+'. Quem envio: '+j.key.participant+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    ID: '+j.key.id+'\n    Tipo: extendedTextMessage\n\n'
} 
}
}
reply(fox)
await limitAdd(sender)
break

case 'ttp':
if (args.length < 1) return reply(`cadê o texto mano?\nexemplo ${prefix + command} sad`)
reply(enviar.espere)
const cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
const fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
sayo = cor[Math.floor(Math.random() * (cor.length))]	 				 
sayo2 = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sayo = `https://huratera.sirv.com/PicsArt_0-01-10.00.42.png?profile=Example-Text&text.0.text=${encodeUrl(body.slice(5))}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${sayo}&text.0.font.family=${sayo2}&text.0.background.color=ff0000` 
sendStickerFromUrl(from, sayo)
await limitAdd(sender)
break
case 'attp':
reply(enviar.espere)
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Sad`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
client.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
url = await getBuffer(`http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${encodeURI(q)}`)
client.sendMessage(from, url, sticker, {quoted: mek})
break	
case 'meme':
case 'memes':
if (args.length < 0) return reply('Cadê o texto, hum?')
reply(enviar.espere)
fdy = await getBuffer(`https://bot-apis.herokuapp.com/fillipe/meme`)
client.sendMessage( from, fdy, image, {quoted: mek})
break	
case 'sersuprem':
if (!isGroup) return reply(enviar.msg.group)
pru = '.\n'
for (let _ of suprer.suprem) {
pru += `@${_.split('@')[0]}\n`
}
supre.push(`${suprer.suprem}`)
fs.writeFileSync('./database/bot/supre.json', JSON.stringify(supre))
susp = `👑@${suprer.suprem[0].split('@')[0]} Pronto, você é o dono, tem total direito de ser supremo, parabéns 👑`
mentions(`${susp}`, suprer.suprem, true)   
break
case 'level':
if (!isLevelingOn) return reply(enviar.levelnoton)
if (!isGroup) return reply(enviar.msg.group)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
                resul = `     
            ◪ *REGISTRO* ◪                                                                  
            
  ├─ ❏ *NICK* : ${pushname}
  ├─ ❏ *NÚMERO* : ${sender.split("@")[0]}
  ├─ ❏ *PATENTE* : ${patt}               
  ├─ ❏ *XP* : ${userXp}
  └─ ❏ *LEVEL* : ${userLevel}`
client.sendMessage(from, resul, text, { quoted: mek})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break
case 'yandex':
reply(enviar.espere)
bdc = body.slice(9)
site = await fetchJson (`https://dapuhy-api.herokuapp.com/api/search/yandeximage?query=${bdc}&apikey=aJz0YYjyrC7nM0s`)
imagem = await getBuffer (site.result)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'nekonime':
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/neko`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'loli': //by Ꮥꪖꪗꪮ </>
var cmd = `${command}`
var apikey = `akame`
hentanime = await getBuffer(`https://akamer.herokuapp.com/api/loli?apikey=${apikey}`)
client.sendMessage(from, hentanime, image,{caption: cmd, quoted: mek})
break
case 'stickersrc':
reply(enviar.espere)
nrt = args.join(" ")
site = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/searchsticker?query=${nrt}&apikey=aJz0YYjyrC7nM0s`)
buff = await getBuffer(sticker)
client.sendMessage(from, buff, site, sticker, {quoted: mek})
break 
case 'mp3':
if (!q) return reply(enviar.wrongFormat)
if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(enviar.error.Iv)
teks = args.join(" ")
reply(enviar.espere)
res = await y2mateA(teks).catch(e => {
reply(`${e}`)
})
result = `「 *YouTube Mp3* 」

• *Título:* ${res[0].judul}
• *Tamanho:* ${res[0].size}
• *Qualidade:* ${res[0].quality}kbps
• *Nome do arquivo:* ${res[0].output}
• *Modelo:* ${res[0].tipe}

_*Aguarde o processo do upload.....*_`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
await limitAdd(sender)
break
case 'megumin':
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/megumin`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'menu10': 
let pi = client.prepareMessageFromContent(from, {
"listMessage": {
"title": "⌜ MENU 2 ⌟",
//"description": `${tampilHari} ${pushname}`,
"description": `𝐁𝐈𝐄𝐋𝐙𝐈𝐍𝐇𝐎 𝐁𝐎𝐓`,
"buttonText": "Clique Aqui ⌕",
"listType": "SELECIONE",
"sections": [
{
"title": "Escolha um Irmão",
"rows": [
{
"title": "fast menu",
"rowId": "colong aja kak"
},
{
"title": "maker menu",
"rowId": "colong aja kak"
},
{
"title": "owner menu",
"rowId": "colong aja kak"
},
{
"title": "spesial menu",
"rowId": "colong aja kak"
},
{
"title": "sertifikat",
"rowId": "colong aja kak"
},
{
"title": "stick menu",
"rowId": "colong aja kak"
},
{
"title": "randomtext",
"rowId": "colong aja kak"
},
{
"title": "game menu",
"rowId": "colong aja kak"
},
{
"title": "tag menu",
"rowId": "colong aja kak"
},
{
"title": "cek menu",
"rowId": "colong aja kak"
},
{
"title": "news menu",
"rowId": "colong aja kak"
},
{
"title": "storage menu",
"rowId": "colong aja kak"
},
{
"title": "porn menu",
"rowId": "colong aja kak"
},
{
"title": "sound menu",
"rowId": "colong aja kak"
},
{
"title": "download menu",
"rowId": "colong aja kak"
},
{
"title": "pro menu",
"rowId": "colong aja kak"
},
{
"title": "grup menu",
"rowId": "colong aja kak"
},
{
"title": "asupan menu",
"rowId": "colong aja kak"
},
{
"title": "gacha cecan",
"rowId": "colong aja kak"
},
{
"title": "nsfw menu",
"rowId": "colong aja kak"
}
]
}
]
}}, {})
client.relayWAMessage(pi, {waitForAck: true})
break
case 'shinobu':
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/shinobu`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'randomnime':
reply(enviar.espere)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
client.sendMessage(from,media,image,{quoted: mek, caption:'Está ai'})
}
)
.catch((error) => {
console.log(error); 
}
)
});
await limitAdd(sender)
break
case 'waifu':
try {
axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
client.sendMessage(from, buf, image, {quoted: mek,caption: "Nih"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('emror')
}
await limitAdd(sender)
break
case 'uwu':
addFilter(sender)  
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/anime/uwu`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'cachorro':
case 'cachorros':
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/cachorros`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'koala':
case 'koalas':
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/koalas`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'raposa':
case 'raposas':
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/raposas`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'passaros':
case 'pássaros':
case 'passaro':
case 'pássaro':
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/passaros`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'lagartos':
case 'lagarto':
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/lagartos`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'gansos':
case 'ganso':
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/gansos`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'pandared':
reply(enviar.espere)
site = await fetchJson (`https://www.luc4rio-rest-api.tk/api/imagens/animais/pandas_vermelhos`)
imagem = await getBuffer (site.Resultado)
client.sendMessage(from, imagem, image, {quoted: mek})
break 
case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (args[0] === '1') {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
reply(enviar.levelon) 
} else if (args[0] === '0') {
_leveling.splice(from, 1)
fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
reply(enviar.leveloff)
} else {
reply('「* Adicionar parâmetro 1 / habilitar ou 0 / desabilitar*」')
}
break
case 'anticatalogo':
case 'catálogo':
case 'catalogo':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiCatalogo) return reply('Já está ativo!')
anticatalogo.push(from)
fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
reply('aтινσυ cσм ѕυcєѕѕσ σ яєcυяѕσ αηтι-cαтάℓσgσ ηєѕтє gяυρσ ✔️')
} else if (Number(args[0]) === 0) {
let position = false
Object.keys(anticatalogo).forEach((i) => {
if (anticatalogo[i] === from) {
position = i
}
})
if (position !== false) {
anticatalogo.splice(position, 1)}
fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
reply('Ɗєѕαтινσυ cσм ѕυcєѕѕσ σ αηтι-cαтάℓσgσ ηєѕтє gяυρσ ✔️')
} else {
reply('1🇦​🇹​🇮​🇻​🇦​ 0🇩​🇪​🇸​🇦​🇹​🇮​🇻​🇦​')
}
break
    
case 'setnomebot':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
NamaBot = args[0]
setting.NamaBot = NamaBot
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O nome do bot foi alterado com sucesso para : ${NamaBot}`)
break

case 'setinsta':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
instagram = args[0]
setting.instagram = instagram
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O insta foi alterado com sucesso para : ${instagram}`)
break

case 'setnome':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
NamaOwner = args[0]
setting.NamaOwner = NamaOwner
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O nome do bot foi alterado com sucesso para : ${NamaOwner}`)
break

case 'tomp3':
addFilter(sender)  
client.updatePresence(from, Presence.composing) 
if (!isQuotedVideo) return reply('Marque o video pfv')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break

case 'ranknazista':
addFilter(sender)  
try{
if(!isGroup) return reply(enviar.msg.group)
d = []
teks = '💂‍♂️Rank dos mais nazistas do gp\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'mining':
if (isOwner) {
one = 20
addLevelingXp(sender, one)
addLevelingLevel(sender, 99)
reply(`porque você é nosso proprietário da equipe bot de envio ${one}Xp para voce`)
} else {
const mining = Math.ceil(Math.random() * 10000)
 addLevelingXp(sender, mining)
await reply(`*Parabéns* você pega *${mining}Xp*`)
}
await limitAdd(sender)
break

case 'frases':
case 'frase':
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
hehe = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
if (hehe.error) return reply(hehe.error)
ccg =
`
  ‣ Author: ${hehe.Author}
 
  ‣ Criador: ${hehe.Criador}
 
  ‣ Frase: 
 
  ${hehe.Frase}\n`
daftarimg = await getBuffer(ppimg)
client.sendMessage(from, daftarimg, image, {quoted:mek, caption: ccg})
break

case 'wikipedia':
addFilter(sender)  
teks = args.join(" ")
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/wikipedia1?q=${teks}`).then(async (x) => {
send = `${x.result.result}`
reply(send)
})
break

case 'repeat'://case feita by: Bielzinho-Bot
if (args.length < 1) return reply('Hmmmm')
client.sendMessage(from, `${args[0]}${'\u200B'.repeat(2000)}`, text, {quoted: mek})
break

case 'covidglobal':
addFilter(sender)  
if (isBanned) return reply('Você foi banido de utilizar os comandos, desculpe!')
get_result = await fetchJson(`http://brizas-api.herokuapp.com/covidmundo?apikey=brizaloka`)
get_result = get_result.resultado
ini_txt = `Países Afetados : ${get_result.paisesAfetados}\n`
ini_txt = `Casos : ${get_result.casos}\n`
ini_txt = `Casos hoje : ${get_result.casos_hoje}\n`
ini_txt = `Mortes : ${get_result.mortes}\n`
ini_txt += `Mortes Hoje : ${get_result.mortes_hojes}\n`
ini_txt += `Recuperados : ${get_result.recuperados}\n`
ini_txt += `Recuperados hoje: ${get_result.recuperados_hoje}\n`
ini_txt += `Recuperados por milhão : ${get_result.recuperadosPorMilhao}\n`
ini_txt += `Ativos : ${get_result.ativos}\n`
ini_txt += `Ativos por milhão : ${get_result.ativosPorMilhao}\n`
ini_txt += `Criticos : ${get_result.criticos}\n`
ini_txt += `Críticos por milhão : ${get_result.criticosPorMilhao}\n`
ini_txt += `Casos por milhão : ${get_result.casosPorMilhao}\n`
ini_txt += `Mortes por milhão : ${get_result.mortesPorMilhao}\n`
ini_txt += `Testes : ${get_result.testes}\n`
ini_txt += `Testes por milhão : ${get_result.testesPorMilhao}\n`
ini_txt += `População : ${get_result.população}\n`
reply(ini_txt)
break

case 'covid19':
addFilter(sender)  
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/covidbr`)
send = `𝐋𝐎𝐂𝐀𝐋: ${post.result.local}\n𝐃𝐀𝐃𝐎𝐒: ${post.result.dadosAtualizados}\n𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐂𝐀𝐒𝐎𝐒: ${post.result.totalCasos}\n𝐍𝐎𝐕𝐎𝐒 𝐂𝐀𝐒𝐎𝐒: ${post.result.novosCasos}\n𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐌𝐎𝐑𝐓𝐄𝐒: ${post.result.totalMortes}\n𝐍𝐎𝐕𝐀𝐒 𝐌𝐎𝐑𝐓𝐄𝐒: ${post.result.novasMortes}\n𝐑𝐄𝐂𝐔𝐏𝐄𝐑𝐀𝐃𝐎𝐒: ${post.result.recuperados}\n 
𝐕𝐀𝐂𝐈𝐍𝐀𝐃𝐎𝐒-1: ${post.result.vacinadosPrimeiraDose}\n𝐕𝐀𝐂??𝐍𝐀𝐃𝐎𝐒-2: ${post.result.vacinadosSegundaDose}\n𝐁𝐎𝐋𝐄𝐓𝐈𝐍𝐒: ${post.result.boletinsContabilizados}`
 client.sendMessage(from, send, text, {quoted: selo, caption: mek})
break

case 'sticknime':
reply(enviar.espere)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
await limitAdd(sender)
break

case 'stickerhide':
if (!isQuotedSticker) return reply('Marque uma figurinha..')
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(enviar.stikga)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
break

case 'grupo': 
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
if (args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
}				 
break 

case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 300000) return client.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `[Problema]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
text: teks1,
contextInfo: {
mentionedJid: [sender]
},
}
client.sendMessage(`${setting.NumeroDono}@s.whatsapp.net`, options, text, {quoted: mek})
reply("mek enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
addFilter(sender)
break

case 'avalie':
const avalie = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return client.sendMessage(from, 'Máximo 400 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
tdptls = `[Avaliação]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
var options = {
text: tdptls,
contextInfo: {
mentionedJid: [sender]
},
}
client.sendMessage(`${setting.NumeroDono}@s.whatsapp.net`, options, text, {quoted: mek})
reply("mek enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
addFilter(sender)
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 400) return client.sendMessage(from, 'Máximo 400 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
sug = `[Sugestões]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
var options = {
text: sug,
contextInfo: {
mentionedJid: [sender]
},
}
client.sendMessage(`551992360@s.whatsapp.net`, options, text, {quoted: mek})
reply("mek enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
addFilter(sender)
break

case 'sad':
const sad1 = fs.readFileSync('audios/sad.mp3')
client.sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'sad2':
const sad2 = fs.readFileSync('audios/sad2.mp3')
client.sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'sad3':
const sad3 = fs.readFileSync('audios/sad3.mp3')
client.sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'sad4':
const sad4 = fs.readFileSync('audios/sad4.mp3')
client.sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'eletro':
const sound5 = fs.readFileSync('audios/sound5.mp3')
client.sendMessage(from, sound5, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'bot':
const soundft = fs.readFileSync('audios/qviado.mp3')
client.sendMessage(from, soundft, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'eletronic':
const eletronic = fs.readFileSync('audios/eletronic.mp3')
client.sendMessage(from, eletronic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'infobot':
const cmdoo = fs.readFileSync('audios/infobot.mp3')
client.sendMessage(from, cmdoo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'eletronic4':
const eletronic4 = fs.readFileSync('audios/eletronic4.mp3')
client.sendMessage(from, eletronic4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'eletronic5':
const eletronic5 = fs.readFileSync('audios/eletronic5.mp3')
client.sendMessage(from, eletronic5, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'eletronic6':
const eletronic6 = fs.readFileSync('audios/eletronic6.mp3')
client.sendMessage(from, eletronic6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'among':
const among = fs.readFileSync('audios/among.mp3')
client.sendMessage(from, among, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'eletronic3':
const eletronic3 = fs.readFileSync('audios/eletronic3.mp3')
client.sendMessage(from, eletronic3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'eletronic2':
const eletronic2 = fs.readFileSync('audios/eletronic2.mp3')
client.sendMessage(from, eletronic2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'tenso':
const tenso = fs.readFileSync('audios/up.mp3')
client.sendMessage(from, tenso, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'dj2':
const dj2 = fs.readFileSync('audios/babi.mp3')
client.sendMessage(from, dj2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'dj':
const dj = fs.readFileSync('audios/dj1.mp3')
client.sendMessage(from, dj, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'gay2':
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 2 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 3 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 4 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
hasil = `Você é ${random}% gay\n\n${bo}`
reply(hasil)
break

case 'dj4':
const dj4 = fs.readFileSync('audios/dj3.mp3')
client.sendMessage(from, dj4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'dj3':
const dj3 = fs.readFileSync('audios/dj16.mp3')
client.sendMessage(from, dj3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'dj5':
const dj5 = fs.readFileSync('audios/sound21.mp3')
client.sendMessage(from, dj5, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'music9':
const music10 = fs.readFileSync('audios/music10.mp3')
client.sendMessage(from, music10, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'sowell':
const sowell = fs.readFileSync('audios/sowell.mp3')
client.sendMessage(from, sowell, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'suave':
const suave = fs.readFileSync('audios/suave.mp3')
client.sendMessage(from, suave, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'plutao':
case 'plutão':
const plutão = fs.readFileSync('audios/plutão.mp3')
client.sendMessage(from, plutão, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'music':
const music = fs.readFileSync('audios/sound24.mp3')
client.sendMessage(from, music, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'music1':
const music1 = fs.readFileSync('audios/sound70.mp3')
client.sendMessage(from, music1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'music2':
const music2 = fs.readFileSync('audios/sound44.mp3')
client.sendMessage(from, music2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'music3':
const music3 = fs.readFileSync('audios/magic.mp3')
client.sendMessage(from, music3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'music4':
const music4 = fs.readFileSync('audios/sound25.mp3')
client.sendMessage(from, music4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 

case 'music5':
const music5 = fs.readFileSync('audios/sound2.mp3')
client.sendMessage(from, music5, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'music6':
const music6 = fs.readFileSync('audios/sound52.mp3')
client.sendMessage(from, music6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'music7':
const music7 = fs.readFileSync('audios/sound6.mp3')
client.sendMessage(from, music7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
client.groupUpdateSubject(from, `${body.slice(9)}`)
client.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: mek})
break

case 'owner':
case 'dono':
client.sendMessage(from, owner(prefix, ownerNumber, NamaBot, NamaOwner, instagram), text)
break

case 'bukatime':
case 'opentime':
case 'abrirgpt': 
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
client.updatePresence(from, Presence.composing) 
if (args[1]=="segundo") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply("*Selecionar :*\nsegundos\nminuto\nhora\n\n*Exemplo*\n10 segundos")}
setTimeout( () => {
var nomor = mek.participant
const open = {
text: `*Na hora* Grupo aberto pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nAgora *membro* pode enviar mensagens`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false);
reply(open)
}, timer)
break

case 'fechargpt':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
client.updatePresence(from, Presence.composing) 
if (args[1]=="segundo") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply("*Selecionar:*\nsegundos\nminutos\nhora\n\n*Exemplo*\n10 segundos")}
setTimeout( () => {
var nomor = mek.participant
const close = {
text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora* apenas admin* pode enviar mensagens`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
}, timer)
break
case 'setname':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
client.groupUpdateSubject(from, `${body.slice(9)}`)
client.sendMessage(from, 'Sucesso, alterado o nome do grupo', text, {quoted: mek})
break
case 'feio':
rate = body.slice(6)
reply(' ❰ Pesquisando a sua ficha de feio : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgfeio}`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {bo = 'É não é feio'} else if (feio == 21 ) {bo = '+/- feio'} else if (feio == 23 ) {bo = '+/- feio'} else if (feio == 24 ) {bo = '+/- feio'} else if (feio == 25 ) {bo = '+/- feio'} else if (feio == 26 ) {bo = '+/- feio'} else if (feio == 27 ) {bo = '+/- feio'} else if (feio == 2 ) {bo = '+/- feio'} else if (feio == 29 ) {bo = '+/- feio'} else if (feio == 30 ) {bo = '+/- feio'} else if (feio == 31 ) {bo = 'Ainda tá na média'} else if (feio == 32 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {bo = 'tenho '} else if (feio == 39 ) {bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {bo = 'Feiooo'} else if (feio == 50 ) {bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {bo = 'você é Feio demais 🙈'} 

client.sendMessage(from, wew, image, { quoted: mek, caption: '  O quanto você é feio? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ feio\n\n '+bo+' ' })
 
}, 000)
break      
case 'gay':
rate = body.slice(5)
reply(' ❰ Pesquisando a sua ficha de gay : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggay}`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 2 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 3 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 4 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
client.sendMessage(from, wew, image, { quoted: mek, caption: '  O quanto você é gay? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ gay 🏳️‍🌈\n\n '+bo+' ' })
}, 000)
break
case 'corno':
rate = body.slice(1)
reply(' ❰ Pesquisando a ficha de : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgcorno}`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
client.sendMessage(from, wew, image, { quoted: mek, caption: '  O quanto você é corno? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱  corno 🐃'})
}, 000)
break
case 'gado':

addFilter(sender)  
rate = body.slice(1)
reply(' ❰ Pesquisando a ficha do : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggado}`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
client.sendMessage(from, wew, image, { quoted: mek, caption: 'O quanto você é gado? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  gado 🐂'})
}, 000)
break 
case 'nazista':

addFilter(sender)  
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de nazista : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgnazista}`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
client.sendMessage(from, wew, image, { quoted: mek, caption: 'O quanto você é nazista? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  nazista 卐'})
}, 000)
break 
case 'gostoso':
addFilter(sender)  
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de gostoso : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggostoso}`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
client.sendMessage(from, wew, image, { quoted: mek, caption: '  O quanto você é gostoso? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱ gostoso 😝', Mimetype: 'video/gif'})
}, 000)
break 
case 'gostosa':
addFilter(sender)  
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de gostosa : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggostosa}`)
zxzz = 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
client.sendMessage(from, wew, image, { quoted: mek, caption: 'O quanto você é gostosa? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  gostosa 😳'})
}, 000)
break
case 'retardado':
 
addFilter(sender)  
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
hasil = `você é: *${random}%* RETARDADO(A)😛`
reply(hasil)
break
case 'chato':
 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
hasil = `Nível de chatisse😐\n\nVocê é: *${random}%* CHATO(A)😒😬`
reply(hasil)
break
case 'tmdopau':
 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 25)}`
hasil = `Ta poha meno😌\n\nVocê tem  : *${random}* cm de pau😁`
reply(hasil)
break
case 'devo':
 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
hasil = `Eu acho que Você tem  : *${random}* % De chance de acertar na sua escolha😳 `
reply(hasil)
break
case 'golpe':
 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
hasil = `você é: *${random}* % do golpe 😳\n\nGosta de ferir sentimentos neh 💔`
reply(hasil)
break
case 'engraçado':
 
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
hasil = `você e : *${random}* % engraçado 😄\n\nGosta de fazer piadinha neh engraçadinho chega pv que te conto a piada que sua mãe me contou onten de noite`
reply(hasil)
break
case 'amretardado':
 
if (args.length < 1) return client.sendMessage(from, 'coloca um nome idiota', text, {quoted: mek})
ytb = body.slice(13)
client.updatePresence(from, Presence.composing)
random = `${Math.floor(Math.random() * 100)}`
hasil = `*IDIOTA ENCONTRADO😛*\n\n*NOME DO IDIOTA* : *${args[0]}*\n*PORCENTAGEM DE IDIOTICE* : ${random}%😂`
reply(hasil)
break
case 'amgolpe':
 
addFilter(sender)  
if (args.length < 1) return client.sendMessage(from, 'coloca um nome', text, {quoted: mek})
pkt = body.slice(13)
client.updatePresence(from, Presence.composing)
random = `${Math.floor(Math.random() * 100)}`
hasil = `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *${args[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`
reply(hasil)
break
case 'gtts':
if (args.length < 1) return client.sendMessage(from, '', text, {quoted: mek})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return client.sendMessage(from, 'Falta colocar o código do idioma!', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 250
? reply('Para reduzir spam o máximo de letras permitidas são 130!')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
if (err) return reply('Falha')
client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
break
case 'grave2':
addFilter(sender)  
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'reversevid':
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break 
case 'tempo-v':
 
var req = args.join(' ')            
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
break
case 'slowvid':
 
if (!isQuotedVideo) return fakegroup('Marque um vídeo')
reply(enviar.espere) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'grave':
 
addFilter(sender)  
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await client.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'adolesc':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break  
case 'fastvid':
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})		
break
case 'bass3':
 
addFilter(sender)  
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'bass': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'bass2': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'estourar': 
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'fast':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'esquilo':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'hentai':
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://i.imgur.com/U9GwX4.jpg`)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Cara bate pra 2d 😂'})
break
case 'bomdia':
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://i.imgur.com/7VL9cFf.jpg`)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Bom dia, vcs sao fodas ❤️'})
break
case 'boatarde':
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://i.imgur.com/JaO3yoV.jpg`)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Boa tarde, rapeize 😎👍'})
break
case 'boanoite':
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://i.imgur.com/yOFxSUR.jpg`)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Boa noite fml ❤️'})
break
case 'trash':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(enviar.espere)
owgi = await client.downloadAndSaveMediaMessage(ted)
tels = body.slice(7)
anu = await imgbb("9a7ea179fd1cebbe552fc1cb5ef122b", owgi)
hehe = await getBuffer(`https://api-gdr2.herokuapp.com/api/petpet?url=${anu.url}`)
client.sendMessage(from, hehe, image, {quoted: mek})
} else {
reply('Só foto')
}
break
case 'termux':
meme = await kagApi.memes()
buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgADDq_64EbTI0NroP7CUoVeWmu1J06NnGHw&usqp=CAU`)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Terminal é um programa muito conhecido no mundo das distribuições Linux. Ele é uma ferramenta que facilita muito nas tarefas relacionadas ao sistema. Agora, já pensou em utilizar o Terminal Linux no seu Android? Esta é a proposta do Termux.\n\n*TERMUX: UTILIZE O TERMINAL NO SEU ANDROID*\n\nA utilização do Terminal aumenta muito a produtividade do usuário que já possui um determinado nível de conhecimento técnico.\nCom o terminal, é possível fazer diversas e diferentes coisas, desde navegar entre os diretórios e instalar programas, até descompactar arquivos e monitorar os processos.'})
break
case 'grupoinfo':
 
client.updatePresence(from, Presence.composing)
ppUrl = await client.getProfilePicture(from)
buffer = await getBuffer(ppUrl)
client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
break 
case 'setppbot':
client.updatePresence(from, Presence.composing)
if (!isOwner) return reply(enviar.msg.ownerB)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(enmedia)
await client.updateProfilePicture(botNumber, media)
reply('Obrigado pelo novo perfil😗')
break

case 'add1':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
A = args.join(" ")
list.A = A
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${A} foi adicionado com sucesso na lista `)
break
case 'add2':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
B = args.join(" ")
list.B = B
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${B} foi adicionado com sucesso na lista `)
break
case 'add3':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
C = args.join(" ")
list.C = C
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${C} foi adicionado com sucesso na lista `)
break
case 'add4':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
D = args.join(" ")
list.D = D
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${D} foi adicionado com sucesso na lista `)
break
case 'add5':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
E = args.join(" ")
list.E = E
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${E} foi adicionado com sucesso na lista `)
break
case 'add6':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
F = args.join(" ")
list.F = F
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${F} foi adicionado com sucesso na lista `)
break
case 'add7':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
G = args.join(" ")
list.G = G
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${G} foi adicionado com sucesso na lista `)
break
case 'add':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
H = args.join(" ")
list.H = H
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${H} foi adicionado com sucesso na lista `)
break
case 'add9':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
I = args.join(" ")
list.I = I
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${I} foi adicionado com sucesso na lista `)
break
case 'add10':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
J = args.join(" ")
list.J = J
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${J} foi adicionado com sucesso na lista `)
break
case 'add11':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
K = args.join(" ")
list.K = K
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${K} foi adicionado com sucesso na lista `)
break
case 'add12':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
L = args.join(" ")
list.L = L
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${L} foi adicionado com sucesso na lista `)
break
case 'add13':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
M = args.join(" ")
list.M = M
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${M} foi adicionado com sucesso na lista `)
break
case 'add14':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
N = args.join(" ")
list.N = N
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${N} foi adicionado com sucesso na lista `)
break
case 'add15':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
O = args.join(" ")
list.O = O
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${O} foi adicionado com sucesso na lista `)
break
case 'add16':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
P = args.join(" ")
list.P = P
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${P} foi adicionado com sucesso na lista `)
break
case 'add17':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
Q = args.join(" ")
list.Q = Q
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${Q} foi adicionado com sucesso na lista `)
break
case 'add1':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
R = args.join(" ")
list.R = R
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${R} foi adicionado com sucesso na lista `)
break
case 'add19':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
S = args.join(" ")
list.S = S
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${S} foi adicionado com sucesso na lista `)
break
case 'add20':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
T = args.join(" ")
list.T = T
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${T} foi adicionado com sucesso na lista `)
break
case 'add21':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
U = args.join(" ")
list.U = U
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${U} foi adicionado com sucesso na lista `)
break
case 'add22':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
V = args.join(" ")
list.V = V
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${V} foi adicionado com sucesso na lista `)
break 
case 'add23':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
W = args.join(" ")
list.W = W
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${W} foi adicionado com sucesso na lista `)
break
case 'add24':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
X = args.join(" ")
list.X = X
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${X} foi adicionado com sucesso na lista `)
break
case 'add25':
if (args.length < 1) return
if (!isOwner) return reply(enviar.msg.ownerB)
Y = args.join(" ")
list.Y = Y
fs.writeFileSync('./dono/list.json', JSON.stringify(list, null, '\t'))
reply(`${Y} foi adicionado com sucesso na lista `)
break
case 'info':
msgFilter.isFiltered(from)
me = client.user
uptime = process.uptime()
inf =`
◇ Nome do bot: ${setting.NamaBot}
◆ Número do bot:@${me.jid.split('@')[0]}
◇ Dono: wa.me/${setting.NumeroDono}
◆ Prefix: ${prefix}
◇ O bot está ativo há: ${kyun(uptime)}`
buffer = await getBuffer('https://i.ibb.co/zbbTmKb/4e2014991640.jpg')
client.sendMessage(from, buffer, image, {caption: `${inf}`})
break 

case 'beijo':
if (!isGroup) return reply('So em gp man')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = fs.readFileSync('./logos/beijo.mp4')
client.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'marcar':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
members_id = []
jrp = (args.length > 1) ? body.slice(8).trim() : ''
jrp += '\n\n'
for (let mem of groupMembers) {
jrp += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(jrp, members_id, true)
break

case 'marcar2':
members_id = []
ytb = (args.length > 1) ? body.slice(9).trim() : ''
ytb += '\n\n'
for (let mem of groupMembers) {
jrp += `╠➥ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
reply(ytb)
break

case 'marcar1':
members_id = []
ytb = (args.length > 1) ? body.slice(9).trim() : ''
ytb += '\n\n'
for (let mem of groupMembers) {
ytb += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
client.sendMessage(from, ytb, text, {detectLinks: false, quoted: mek})
break

case 'clearchat':
case 'limparchat':  
case 'limpar':  
if (!isOwner) return reply(enviar.msg.ownerB)
anu = await client.chats.all()
list_chat = await client.chats.all()
for (let chat of list_chat) {
client.modifyChat(chat.jid, "delete", {includeStarred: false})
}
reply("Chat limpo")
break

case 'promover':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
const dlptu = body.slice(10)
if (dlptu.length > 14)return reply(`Exemplo : ${prefix}promover @55439220420`) 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
ytb = 'Promovido com sucesso\n'
for (let _ of mentioned) {
ytb += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse(a) aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break

case 'rebaixar':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
const dlp = body.slice(15)
if (dlp.length >= 15)return reply(`Exemplo : ${prefix}rebaixar @55439220420`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
ytb = 'Rebaixado com sucesso\n'
for (let _ of mentioned) {
ytb += `@${_.split('@')[0]}\n`
}
mentions(ytb, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse(a) aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break
case 'addsp':
if (!isGroup) return reply(enviar.msg.group) 
if (!issupre) return 
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args[0].startsWith('0')) return reply('Use o código do país, man')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Falha ao adicionar destino, talvez porque é privado')
}
break
case 'kick':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
const dltp = body.slice(6)
if (dltp.length > 14)return reply(`Exemplo : ${prefix}kick @55439220420`) 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!') 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Esse ai ja foi kkkk :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupRemove(from, mentioned)
}
await limitAdd(sender)
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup) return reply(enviar.msg.group)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'linkgp':
case 'linkgroup':
if (!isGroupAdmins) return reply(enviar.msg.admins)
if (!isGroup) return reply(enviar.msg.group)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await client.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'toimg':
if (!isQuotedSticker) return reply('{ ❗ } *Marque a figurinha*')
reply(enviar.espere)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter adesivos em imagens, não converto gifs ❌')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
fs.unlinkSync(ran)
})
break
case 'simih':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗️')
} else if (Number(args[0]) === 0) {
samih.splice(from, 1)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break
case 'boi':
anu = await getBuffer('https://i.ibb.co/KWc62L6/6b31c46d70a.jpg')
if(command.includes == args[0] )
if (command.includes("touro")){
reply('Parabéns') 
} else {
reply('Errado, animal')
}
client.sendMessage(from, anu, image, {quoted: mek})
break
case 'bemvindo':
case 'welcome':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (args.length < 1) return reply('1 pra ligar, 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Já esta ativo.')
welkom.push(from)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Ativou com sucesso o recurso de boas-vindas neste grupo 😉️')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Desativou com sucesso o recurso de boas-vindas neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdão vc em KAKKKK')
}
break

case 'hidetag':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
var value = body.slice(9)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text)
break

case 'hidemarcar':
if (!isGroup) return reply(enviar.msg.group)
if (!isGroupAdmins) return reply(enviar.msg.admin)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
var value = body.slice(12)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text)
break 

case 'hidesp':
if (!isGroup) return reply(enviar.msg.group)
if (!issupre) return 
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
var value = body.slice(8)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text)
break

case 'wait':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
reply(enviar.espere)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
media = await client.downloadMediaMessage(encmedia)
await wait(media).then(res => {
client.sendMessage(from, res.video, video, {quoted: mek, caption: res.ytb.trim()})
}).catch(err => {
reply(err)
})
} else {
reply('Só uma foto mano')
}
break

case 'gimage':
case 'googleimage':
case 'img':
if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(enviar.espere)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
await limitAdd(sender)
break

//_JOGO DA VELHA By: Resen
//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(enviar.espere)
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)

} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk, crtt)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 12000) //2 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
client.sendMessage(from, ttthelp(prefix), text)
break

case 'tttme':
if (!isGroup) return reply('SÓ EM GRUPO')
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted: mek})
break

case 'tttrank':
if (!isGroup) return reply('Só grupo')
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break

case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply(enviar.espere)
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break

case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break

case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break

case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break

}
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break

case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break

case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break

case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break

}	
client.sendMessage(from, `🎉🎉 VITÓRIA DO ${setting.NamaBot} 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO ${setting.NamaBot} 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break

case 'setprefix2':
if (args.length < 1) return
if (!issupre) return reply(enviar.msg.ownerB)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'execut2':
if (!issupre) return 
return eval(`${args.join(' ')}`)
break 
if (!mek.key.fromMe) {
if (isGroup) {
try {
const checkuser = getMsgId(sender)
if (checkuser === undefined) addMsgId(sender)
const name = checkuser
const getmessage = getMsgMessage(sender)
messageContage(sender, 1)      
} catch (err) {
console.error(err)
}
}
}
break

/*---------[ Tictactoe Handler ]----------*/
case 'anagrama':
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./src/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
client.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`,MessageType.text)
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./src/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./src/anagrama-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break
case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'rv': 
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
reply('Jogo resetado com sucesso\nSe você não for um dos jogador que está jogando, você será removido do grupo, preste atenção.');
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break 
case 'cassino':
client.updatePresence(from, Presence.composing) 
      //CASSINO
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}
	const cassino = `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`
reply(cassino)
if (Vitória == "Você ganhou!!!") {
reply('Parabéns')
}
await limitAdd(sender)
break
default:
//=======[FUNCÃO-JOGO-DA-VELHA]=========\\
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "aceitar" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "aceito"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
client.sendMessage(from, chatAccept, MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
}
} else if (
budy.toLowerCase() == "recusar" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "nao"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
 client.sendMessage(from,
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`,
 MessageType.text, {quoted: mek,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
return;
}
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
client.sendMessage(from, chatWon, MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
}, 2000000) //20 minutos
reply(`_*🥳 Parabéns você ganhou 🎉...*_`)      
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
client.sendMessage(from, chatMove, MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
}

//=======================================\\


if (listRM === "&play") {
if (args.length === 0) return reply(`Use assim *${prefix + command}* _O título da música a ser pesquisada_`)
reply(enviar.espere)
aramas = await yts(q);
aramat = aramas.all 
var mulaikah = aramat[0].url							
console.log(color('[YT PLAY MÚSICA]', 'magenta'), color(`PROCURANDO A MÚSICA NO YT`, 'yellow')) 
 try {
 yta(mulaikah)
 .then((res) => {
 const { dl_link, thumb, title, filesizeF, filesize } = res
 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
 .then(async (a) => {
 if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho do arquivo* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply('error'))
})                
})
} catch (err) {
reply(err)
}
await limitAdd(sender)
}

bah = mek.isBaileys
if (bah === true) return


/*** Anti-Catálogo By JvDarK***/
if (isGroup && isAntiCatalogo && (type == 'productMessage')) {
if (isGroupAdmins) return reply('Isso é um catálogo, mas vc é adm então ta de boa.')
reply('🔰Ƭrανα Ƈαтάℓσgσ ∂єтєcтαdσ\n❌Rємσνєη∂σ❌')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
  client.groupRemove(from, [kik])
}, 2000)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
client.sendMessage(from, clear , MessageType.text, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
}
if (contact.includes(type)){
if (!Anticontato) return
if (isGroupAdmins) return reply(`hummmm contato`) 
reply(`contato detectado, somos muito severo em essas situações, então terei que ti remover, se não for trava, entre em contato com algum adm.`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)	
setTimeout(() =>{
client.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 000)
reply(`${destrava}`)
reply(`${destrava}`)
reply(`${destrava}`)
}

if (location.includes(type)){
if (!Antiloc) return
if (isGroupAdmins) return reply(`hummmm localização `)   
reply(`localização detectada, somos severos nessa questão, então terei que remover você, qualquer dúvida, entre em contato com algum adm.`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
client.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 000)
reply(`${destrava}`)
reply(`${destrava}`)
reply(`${destrava}`)
}

if (document.includes(type)){
if (!Antidoc) return
if (isGroupAdmins) return reply(`hummmm documento`)     
reply(`Não permitimos envio de documentos no grupo, por questões de segurança de travas e etc..., então por conta disso, terei que ti remover, qualquer dúvida,entre em contato com algum adm.`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
client.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 000)
reply(`${destrava}`)
reply(`${destrava}`)
reply(`${destrava}`)
}
	
	
if (budy.includes("//s.kwai.app/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
client.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
}, 1100)
setTimeout( () => {
client.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}	
	
if (budy.includes("//vm.tiktok")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
client.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
}, 1100)
setTimeout( () => {
client.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}
	
if (budy.includes("://youtube")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
client.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
}, 1100)
setTimeout( () => {
client.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}

if (budy.includes("://youtu.be")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
client.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
}, 1100)
setTimeout( () => {
client.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}

if (budy.includes("//s.kw.ai/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
client.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
}, 1100)
setTimeout( () => {
client.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}

if (budy.includes("instagram.com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
client.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
}, 1100)
setTimeout( () => {
client.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}
	
if (budy.includes("://t.me/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
client.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
}, 1100)
setTimeout( () => {
client.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}
	
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
client.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
}, 1100)
setTimeout( () => {
client.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}

if (budy.includes(".com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
client.updatePresence(from, Presence.composing)
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
}, 1100)
setTimeout( () => {
client.groupRemove(from, [Kic]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
}		

	
if (isGroup && isSimi && budy != undefined) {
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
} else {
console.log(color('[ERROR]','red'), 'eita bixo comando não registrado de', color(sender.split('@')[0]))
				
}
if (isCmd) {
if(type == 'stickerMessage') {
return  
} else if(budy.includes("@s.whatsapp.net")){
return
} else {
const naumm = fs.readFileSync('audios/cmdin.mp3')
client.sendMessage(from, naumm, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
}
}
} catch (err) {
e = String(err)
if (!e.includes("this.isZero" || !e.match("jid is not defined"))){
const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
console.log(color(time_error, "yellow"), color("[ ERRO ]", "aqua"), color(e, 'red'))
}
}
})
}
starts()