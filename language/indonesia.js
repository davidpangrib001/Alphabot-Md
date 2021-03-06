exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `*Memproses.. Bisa Di Tunggu..*`
}
exports.ok = () => {
    return `*Dah Selesai Ya.. >~<*`
}

exports.err = () => {
    return `*Yah.. Fiturnya Tiba Tiba Error..*`
}
exports.erorLink = () => {
    return `*Link Yang Kamu Kirim Salah :\*`
}
exports.media = () => {
    return `Mau Media Apa Ya Yang Ingin Kamu Unduh??\nCoba Pilih Di Bawah..`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah, Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `Hanya Owner Yang Bisa Memakai Command Ini`
}

exports.doneOwner = () => {
    return `â  ï¸Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `ð¥  Command ini hanya bisa digunakan di dalam grup`
}

exports.adminOnly = () => {
    return `ð  Command ini hanya bisa digunakan oleh admin grup`
}

exports.nhFalse = () => {
    return `Kode tidak valid`
}

exports.listBlock = (blockNumber) => {
    return `*ââ ã HALL OF SHAME ã ââ*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `User bukan seorang admin`
}

exports.adminAlready = () => {
    return `Tidak  dapat mem-promote user yang merupakan admin`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu ð`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, time, pushname, botname) =>{
	return`Hai ${pushname}, selamat ${salam}, 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp. 
Name : ${pushname}
Time : ${time} WIB
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*âJam : ${time}* WIB
*ð List-Menu One Botz :*

ââââê¥ã Bot Info ã 
ââ¾ ${prefix}owner
ââ¾ ${prefix}rules
ââ¾ ${prefix}sc
ââ¾ ${prefix}ping
ââ¾ ${prefix}runtime
ââ¾ ${prefix}botstatus
ââê¥ ${prefix}donate


ââââê¥ã Owner ã 
ââ¾ < evaluate
ââ¾ > evaluate
ââ¾ $ exec
ââ¾ => exec
ââ¾ ${prefix}setmenu [query]
ââ¾ ${prefix}setmenu templateLocation
ââ¾ ${prefix}setmenu templateTenor
ââ¾ ${prefix}setmenu katalog
ââ¾ ${prefix}setmenu katalog2
ââ¾ ${prefix}setmenu list
ââ¾ ${prefix}setwm packname|author
ââ¾ ${prefix}sendsesi
ââ¾ ${prefix}listpc
ââ¾ ${prefix}listgc
ââ¾ ${prefix}broadcast [text]
ââ¾ ${prefix}bc [text]
ââ¾ ${prefix}bcgc [text]
ââ¾ ${prefix}nsfw [on/off]
ââ¾ ${prefix}autorespond [on/off]
ââ¾ ${prefix}antiviewonce [on/off]
ââ¾ ${prefix}join [link]
ââ¾ ${prefix}self
ââ¾ ${prefix}public [only bot]
ââ¾ ${prefix}del [reply pesan bot]
ââê¥ ${prefix}setppbot [reply image]


ââââê¥ã Database ã 
ââ¾ ${prefix}setcmd [reply stiker]
ââ¾ ${prefix}delcmd [reply stiker]
ââ¾ ${prefix}listcmd
ââ¾ ${prefix}absen
ââ¾ ${prefix}cekabsen
ââ¾ ${prefix}deleteabsen
ââ¾ ${prefix}absenstart
ââ¾ ${prefix}addmsg [nama file]
ââ¾ ${prefix}getmsg [nama file]
ââ¾ ${prefix}listmsg
ââê¥ ${prefix}delmsg [nama file]


ââââê¥ã Group ã 
ââ¾ ${prefix}listonline
ââ¾ ${prefix}sider
ââ¾ ${prefix}wm packname|author
ââ¾ ${prefix}infochat
ââ¾ ${prefix}setdesk [text]
ââ¾ ${prefix}setppgrup [reply image]
ââ¾ ${prefix}antilink [on/off]
ââ¾ ${prefix}revoke
ââ¾ ${prefix}leave
ââ¾ ${prefix}add [62***]
ââ¾ ${prefix}kick @tag
ââ¾ ${prefix}leave
ââ¾ ${prefix}linkgc
ââ¾ ${prefix}take packname|author
ââ¾ ${prefix}group [open/close]
ââ¾ ${prefix}tagall [text]
ââê¥ ${prefix}hidetag [text]

ââââê¥ã Anime ã 
ââ¾ ${prefix}quotesanime
ââ¾ ${prefix}anime [query]
ââ¾ ${prefix}manga [query]
ââê¥ ${prefix}character [query]

ââââê¥ã Tag ã 
ââ¾ ${prefix}stickertag
ââ¾ ${prefix}videotag [query]
ââ¾ ${prefix}vntag [query]
ââê¥ ${prefix}imagetag [query]

ââââê¥ã Stalking ã 
ââ¾ ${prefix}igstalk [username]
ââ¾ ${prefix}ghstalk [username]
ââê¥ ${prefix}ytstalk [channel]


ââââê¥ã Search ã 
ââ¾ ${prefix}ytsearch [query]
ââ¾ ${prefix}wallpaper [query]
ââ¾ ${prefix}wikimedia [query]
ââ¾ ${prefix}hentai
ââ¾ ${prefix}wattpad [query]
ââ¾ ${prefix}webtoons [query]
ââ¾ ${prefix}drakor [query]
ââê¥ ${prefix}pinterest [query]


ââââê¥ã Converter ã
ââ¾ ${prefix}toaudio [video]
ââ¾ ${prefix}tomp3 [video]
ââ¾ ${prefix}tovn [video]
ââ¾ ${prefix}stiker [reply image]
ââ¾ ${prefix}tourl [image/video/stiker]
ââ¾ ${prefix}togif [sticker]
ââ¾ ${prefix}tomp4 [sticker]
ââê¥${prefix}toimg [reply sticker]


ââââê¥ã Image Effect ã 
ââ¾ ${prefix}wanted [reply image/stiker]
ââ¾ ${prefix}utatoo [reply image/stiker]
ââ¾ ${prefix}unsharpen [reply image/stiker]
ââ¾ ${prefix}thanos [reply image/stiker]
ââ¾ ${prefix}sniper [reply image/stiker]
ââ¾ ${prefix}sharpen [reply image/stiker]
ââ¾ ${prefix}sepia [reply image/stiker]
ââ¾ ${prefix}scary [reply image/stiker]
ââ¾ ${prefix}rip [reply image/stiker]
ââ¾ ${prefix}redple [reply image/stiker]
ââ¾ ${prefix}rejected [reply image/stiker]
ââ¾ ${prefix}posterize [reply image/stiker]
ââ¾ ${prefix}ps4 [reply image/stiker]
ââ¾ ${prefix}pixelize [reply image/stiker]
ââ¾ ${prefix}missionpassed [reply image/stiker]
ââ¾ ${prefix}moustache [reply image/stiker]
ââ¾ ${prefix}lookwhatkarenhave [reply image/stiker]
ââ¾ ${prefix}jail [reply image/stiker]
ââ¾ ${prefix}invert [reply image/stiker]
ââ¾ ${prefix}instagram [reply image/stiker]
ââ¾ ${prefix}greyscale [reply image/stiker]
ââ¾ ${prefix}glitch [reply image/stiker]
ââ¾ ${prefix}gay [reply image/stiker]
ââ¾ ${prefix}frame [reply image/stiker]
ââ¾ ${prefix}fire [reply image/stiker]
ââ¾ ${prefix}distort [reply image/stiker]
ââ¾ ${prefix}dictator [reply image/stiker]
ââ¾ ${prefix}deepfry [reply image/stiker]
ââ¾ ${prefix}ddungeon [reply image/stiker]
ââ¾ ${prefix}circle [reply image/stiker]
ââ¾ ${prefix}challenger [reply image/stiker]
ââ¾ ${prefix}burn [reply image/stiker]
ââ¾ ${prefix}brazzers [reply image/stiker]
ââê¥ ${prefix}beautiful [reply image/stiker]


ââââê¥ã Sticker Effect ã 
ââ¾ ${prefix}jail [reply image/stiker]
ââ¾ ${prefix}red [reply image/stiker]
ââ¾ ${prefix}gay [reply image/stiker]
ââ¾ ${prefix}bloo [reply image/stiker]
ââ¾ ${prefix}blue [reply image/stiker]
ââ¾ ${prefix}sepia [reply image/stiker]
ââ¾ ${prefix}green [reply image/stiker]
ââ¾ ${prefix}glass [reply image/stiker]
ââ¾ ${prefix}invert [reply image/stiker]
ââ¾ ${prefix}blurple [reply image/stiker]
ââ¾ ${prefix}blurple2 [reply image/stiker]
ââ¾ ${prefix}wasted [reply image/stiker]
ââ¾ ${prefix}passed [reply image/stiker]
ââ¾ ${prefix}triggered [reply image/stiker]
ââ¾ ${prefix}comrade [reply image/stiker]
ââ¾ ${prefix}greyscale [reply image/stiker]
ââ¾ ${prefix}threshold [reply image/stiker]
ââ¾ ${prefix}brightness [reply image/stiker]
ââê¥ ${prefix}invertgreyscale [reply image/stiker]


ââââê¥ã Download ã 
ââ¾ ${prefix}tiktok [link]
ââ¾ ${prefix}tiktoknowm [link]
ââ¾ ${prefix}tiktokwm [link]
ââ¾ ${prefix}tiktokaudio [link]
ââ¾ ${prefix}ytdl [link]
ââ¾ ${prefix}play [query]
ââ¾ ${prefix}ytmp3 [link]
ââ¾ ${prefix}ytshortmp3 [link]
ââ¾ ${prefix}ytmp4 [link]
ââ¾ ${prefix}ytshorts [link]
ââ¾ ${prefix}facebook [link]
ââ¾ ${prefix}facebooksd [link]
ââ¾ ${prefix}facebookhd [link]
ââ¾ ${prefix}fbaudio [link]
ââ¾ ${prefix}igstory [username]
ââ¾ ${prefix}igdl [link]
ââ¾ ${prefix}igphoto [link]
ââ¾ ${prefix}igvideo [link]
ââ¾ ${prefix}igreels [link]
ââ¾ ${prefix}igtv [link]
ââ¾ ${prefix}soundcloud [link]
ââ¾ ${prefix}gitclone [link repo]
ââ¾ ${prefix}gitrepo [username repo branch]
ââ¾ ${prefix}mediafire [link]
ââê¥ ${prefix}twitter link

ââââê¥ã Primbon ã
ââ¾ ${prefix}nomorhoki 887435047326
ââ¾ ${prefix}artimimpi [query]
ââ¾ ${prefix}artinama [query]
ââ¾ ${prefix}ramaljodoh
ââ¾ ${prefix}ramaljodohbali
ââ¾ ${prefix}suamiistri
ââ¾ ${prefix}ramalcinta
ââ¾ ${prefix}cocoknama
ââ¾ ${prefix}pasangan
ââ¾ ${prefix}jadiannikah
ââ¾ ${prefix}sifatusaha
ââ¾ ${prefix}rezeki
ââ¾ ${prefix}pekerjaan
ââ¾ ${prefix}nasib
ââ¾ ${prefix}penyakit
ââ¾ ${prefix}tarot
ââ¾ ${prefix}fengshui
ââ¾ ${prefix}haribaik
ââ¾ ${prefix}harisangar
ââ¾ ${prefix}harisial
ââ¾ ${prefix}nagahari
ââ¾ ${prefix}arahrezeki
ââ¾ ${prefix}peruntungan
ââ¾ ${prefix}weton
ââ¾ ${prefix}karakter
ââ¾ ${prefix}keberuntungan
ââ¾ ${prefix}memancing
ââ¾ ${prefix}masasubur
ââ¾ ${prefix}zodiak 
ââê¥ ${prefix}shio [query]

ââââê¥ã Random Anime ã
ââ¾ ${prefix}loli
ââ¾ ${prefix}neko
ââ¾ ${prefix}waifu
ââ¾ ${prefix}shinobu
ââ¾ ${prefix}megumin
ââ¾ ${prefix}bully
ââ¾ ${prefix}cuddle
ââ¾ ${prefix}cry
ââ¾ ${prefix}hug
ââ¾ ${prefix}awoo
ââ¾ ${prefix}kiss
ââ¾ ${prefix}lick
ââ¾ ${prefix}pat
ââ¾ ${prefix}smug
ââ¾ ${prefix}bonk
ââ¾ ${prefix}yeet
ââ¾ ${prefix}blush
ââ¾ ${prefix}smile
ââ¾ ${prefix}wave
ââ¾ ${prefix}highfive
ââ¾ ${prefix}handhold
ââ¾ ${prefix}nom
ââ¾ ${prefix}bite
ââ¾ ${prefix}glomp
ââ¾ ${prefix}slap
ââ¾ ${prefix}kill
ââ¾ ${prefix}happy
ââ¾ ${prefix}wink
ââ¾ ${prefix}poke
ââ¾ ${prefix}dance
ââê¥ ${prefix}cringe

ââââê¥ã Nsfw & Sfw ã
ââ¾ ${prefix}ahegao
ââ¾ ${prefix}ass
ââ¾ ${prefix}bdsm
ââ¾ ${prefix}blowjob
ââ¾ ${prefix}cuckold
ââ¾ ${prefix}cum
ââ¾ ${prefix}ero
ââ¾ ${prefix}femdom
ââ¾ ${prefix}foot
ââ¾ ${prefix}gangbang
ââ¾ ${prefix}glasses
ââ¾ ${prefix}jahy
ââ¾ ${prefix}manga
ââ¾ ${prefix}masturbation
ââ¾ ${prefix}neko
ââ¾ ${prefix}orgy
ââ¾ ${prefix}panties
ââ¾ ${prefix}pussy
ââ¾ ${prefix}tentacles
ââ¾ ${prefix}thighs
ââ¾ ${prefix}yuri
ââ¾ ${prefix}feet
ââ¾ ${prefix}lewdkemo
ââ¾ ${prefix}woof
ââ¾ ${prefix}gasm
ââ¾ ${prefix}solo
ââ¾ ${prefix}8ball
ââ¾ ${prefix}goose
ââ¾ ${prefix}avatar
ââ¾ ${prefix}hololewd
ââ¾ ${prefix}gecg
ââ¾ ${prefix}holo
ââ¾ ${prefix}fox_girl
ââ¾ ${prefix}tits
ââ¾ ${prefix}eroyuri
ââ¾ ${prefix}holoyero
ââ¾ ${prefix}lizard
ââ¾ ${prefix}keta
ââ¾ ${prefix}eron
ââ¾ ${prefix}erok
ââ¾ ${prefix}kemonomimi
ââ¾ ${prefix}cum_jpg
ââ¾ ${prefix}nsfw_avatar
ââ¾ ${prefix}erofeet
ââ¾ ${prefix}meow
ââ¾ ${prefix}wallpaper
ââ¾ ${prefix}waifu
ââ¾ ${prefix}trap
ââ¾ ${prefix}lewd
ââ¾ ${prefix}pussy_jpg
ââ¾ ${prefix}futanari
ââ¾ ${prefix}lewdk
ââ¾ ${prefix}solog
ââ¾ ${prefix}smug
ââ¾ ${prefix}cum
ââ¾ ${prefix}slap
ââ¾ ${prefix}les
ââ¾ ${prefix}erokemo
ââ¾ ${prefix}bj
ââ¾ ${prefix}pwankg
ââ¾ ${prefix}pat
ââ¾ ${prefix}poke
ââ¾ ${prefix}feed
ââ¾ ${prefix}nsfw_neko_gif
ââ¾ ${prefix}pussy
ââ¾ ${prefix}feetg
ââ¾ ${prefix}baka
ââ¾ ${prefix}hug
ââ¾ ${prefix}kiss
ââ¾ ${prefix}tickle
ââ¾ ${prefix}spank
ââ¾ ${prefix}kuni
ââ¾ ${prefix}classic
ââ¾ ${prefix}boobs
ââ¾ ${prefix}anal
ââ¾ ${prefix}ngif
ââ¾ ${prefix}cuddle
ââê¥ ${prefix}zettai

ââââê¥ã Ephoto360 Menu ã
ââ¾ ${prefix}youtubegold
ââ¾ ${prefix}youtubesilver
ââ¾ ${prefix}facebookgold
ââ¾ ${prefix}facebooksilver
ââ¾ ${prefix}instagramgold
ââ¾ ${prefix}instagramsilver
ââ¾ ${prefix}twittergold
ââ¾ ${prefix}twittersilver
ââ¾ ${prefix}retrotext
ââ¾ ${prefix}halloweenbats
ââ¾ ${prefix}texthalloween
ââ¾ ${prefix}cardhalloween
ââ¾ ${prefix}birthdaycake
ââ¾ ${prefix}thundertext
ââ¾ ${prefix}icetext
ââ¾ ${prefix}milkcake
ââ¾ ${prefix}snowontext
ââ¾ ${prefix}metalstar
ââ¾ ${prefix}dragonfire
ââ¾ ${prefix}zombie3d
ââ¾ ${prefix}merrycard
ââ¾ ${prefix}generalexam 
ââ¾ ${prefix}viettel
ââ¾ ${prefix}embroider
ââ¾ ${prefix}graffititext
ââ¾ ${prefix}graffititext2
ââ¾ ${prefix}graffititext3
ââ¾ ${prefix}covergraffiti
ââ¾ ${prefix}moderngold
ââ¾ ${prefix}capercut
ââ¾ ${prefix}lovecard
ââ¾ ${prefix}heartflashlight
ââ¾ ${prefix}heartcup
ââ¾ ${prefix}sunglightshadow
ââ¾ ${prefix}graffiti3d
ââ¾ ${prefix}moderngoldsilver
ââ¾ ${prefix}moderngold2
ââ¾ ${prefix}moderngold3
ââ¾ ${prefix}fabrictext
ââ¾ ${prefix}masteryavatar
ââ¾ ${prefix}messagecoffee
ââ¾ ${prefix}announofwin
ââ¾ ${prefix}writeblood
ââ¾ ${prefix}horrorletter
ââ¾ ${prefix}writehorror
ââ¾ ${prefix}shirtclub
ââ¾ ${prefix}angelwing
ââ¾ ${prefix}christmasseason
ââ¾ ${prefix}projectyasuo
ââ¾ ${prefix}lovelycute
ââ¾ ${prefix}womansday
ââ¾ ${prefix}covergamepubg
ââ¾ ${prefix}nameonheart
ââ¾ ${prefix}funnyhalloween
ââ¾ ${prefix}lightningpubg
ââ¾ ${prefix}greetingcardvideo 
ââ¾ ${prefix}christmascard 
ââ¾ ${prefix}galaxybat
ââ¾ ${prefix}writegalaxy
ââ¾ ${prefix}starsnight
ââ¾ ${prefix}noeltext
ââ¾ ${prefix}textcakes
ââ¾ ${prefix}pubgbirthday
ââ¾ ${prefix}galaxywallpaper
ââ¾ ${prefix}pubgglicthvideo 
ââ¾ ${prefix}pubgmascotlogo
ââ¾ ${prefix}realembroidery
ââ¾ ${prefix}vintagetelevision
ââ¾ ${prefix}funnyanimations
ââ¾ ${prefix}glowingtext
ââ¾ ${prefix}textonglass
ââ¾ ${prefix}cartoonstyle
ââ¾ ${prefix}multicolor
ââ¾ ${prefix}watercolor2
ââ¾ ${prefix}textsky
ââ¾ ${prefix}summerbeach
ââ¾ ${prefix}1917text
ââ¾ ${prefix}puppycute
ââê¥ ${prefix}rosebirthday


ââââê¥ã Textpro Menu ã
ââ¾ ${prefix}halloween2 text|text2
ââ¾ ${prefix}horror text|text2
ââ¾ ${prefix}game8bit text|text2
ââ¾ ${prefix}layered text|text2
ââ¾ ${prefix}glitch2 text|text2
ââ¾ ${prefix}coolg text|text2
ââ¾ ${prefix}coolwg text|text2
ââ¾ ${prefix}realistic text|text2
ââ¾ ${prefix}space3d text|text2
ââ¾ ${prefix}gtiktok text|text2
ââ¾ ${prefix}stone text|text2
ââ¾ ${prefix}marvel text|text2
ââ¾ ${prefix}marvel2 text|text2
ââ¾ ${prefix}pornhub text|text2
ââ¾ ${prefix}avengers text|text2
ââ¾ ${prefix}metalr text|text2
ââ¾ ${prefix}metalg text|text2
ââ¾ ${prefix}metalg2 text|text2
ââ¾ ${prefix}halloween2 text|text2
ââ¾ ${prefix}lion text|text2
ââ¾ ${prefix}wolf_bw text|text2
ââ¾ ${prefix}wolf_g text|text2
ââ¾ ${prefix}ninja text|text2
ââ¾ ${prefix}3dsteel text|text2
ââ¾ ${prefix}horror2 text|text2
ââ¾ ${prefix}lava text|text2
ââ¾ ${prefix}bagel text|text2
ââ¾ ${prefix}blackpink text
ââ¾ ${prefix}rainbow2 text
ââ¾ ${prefix}water_pipe text
ââ¾ ${prefix}halloween text
ââ¾ ${prefix}sketch text
ââ¾ ${prefix}sircuit text
ââ¾ ${prefix}discovery text
ââ¾ ${prefix}metallic2 text
ââ¾ ${prefix}fiction text
ââ¾ ${prefix}demon text
ââ¾ ${prefix}transformer text
ââ¾ ${prefix}berry text
ââ¾ ${prefix}thunder text
ââ¾ ${prefix}magma text
ââ¾ ${prefix}3dstone text
ââ¾ ${prefix}neon text
ââ¾ ${prefix}glitch text
ââ¾ ${prefix}harry_potter text
ââ¾ ${prefix}embossed text
ââ¾ ${prefix}broken text
ââ¾ ${prefix}papercut text
ââ¾ ${prefix}gradient text
ââ¾ ${prefix}glossy text
ââ¾ ${prefix}watercolor text
ââ¾ ${prefix}multicolor text
ââ¾ ${prefix}neon_devil text
ââ¾ ${prefix}underwater text
ââ¾ ${prefix}bear text
ââ¾ ${prefix}wonderfulg text
ââ¾ ${prefix}christmas text
ââ¾ ${prefix}neon_light text
ââ¾ ${prefix}snow text
ââ¾ ${prefix}cloudsky text
ââ¾ ${prefix}luxury2 text
ââ¾ ${prefix}gradient2 text
ââ¾ ${prefix}summer text
ââ¾ ${prefix}writing text
ââ¾ ${prefix}engraved text
ââ¾ ${prefix}summery text
ââ¾ ${prefix}3dglue text
ââ¾ ${prefix}metaldark text
ââ¾ ${prefix}neonlight text
ââ¾ ${prefix}oscar text
ââ¾ ${prefix}minion text
ââ¾ ${prefix}holographic text
ââ¾ ${prefix}purple text
ââ¾ ${prefix}glossyb text
ââ¾ ${prefix}deluxe2 text
ââ¾ ${prefix}glossyc text
ââ¾ ${prefix}fabric text
ââ¾ ${prefix}neonc text
ââ¾ ${prefix}newyear text
ââ¾ ${prefix}newyear2 text
ââ¾ ${prefix}metals text
ââ¾ ${prefix}xmas text
ââ¾ ${prefix}blood text
ââ¾ ${prefix}darkg text
ââ¾ ${prefix}joker text
ââ¾ ${prefix}wicker text
ââ¾ ${prefix}natural text
ââ¾ ${prefix}firework text
ââ¾ ${prefix}skeleton text
ââ¾ ${prefix}balloon text
ââ¾ ${prefix}balloon2 text
ââ¾ ${prefix}balloon3 text
ââ¾ ${prefix}balloon4 text
ââ¾ ${prefix}balloon5 text
ââ¾ ${prefix}balloon6 text
ââ¾ ${prefix}balloon7 text
ââ¾ ${prefix}steel text
ââ¾ ${prefix}gloss text
ââ¾ ${prefix}denim text
ââ¾ ${prefix}decorate text
ââ¾ ${prefix}decorate2 text
ââ¾ ${prefix}peridot text
ââ¾ ${prefix}rock text
ââ¾ ${prefix}glass text
ââ¾ ${prefix}glass2 text
ââ¾ ${prefix}glass3 text
ââ¾ ${prefix}glass4 text
ââ¾ ${prefix}glass5 text
ââ¾ ${prefix}glass6 text
ââ¾ ${prefix}glass7 text
ââ¾ ${prefix}glass8 text
ââ¾ ${prefix}captain_as2 text
ââ¾ ${prefix}robot text
ââ¾ ${prefix}equalizer text
ââ¾ ${prefix}toxic text
ââ¾ ${prefix}sparkling text
ââ¾ ${prefix}sparkling2 text
ââ¾ ${prefix}sparkling3 text
ââ¾ ${prefix}sparkling4 text
ââ¾ ${prefix}sparkling5 text
ââ¾ ${prefix}sparkling6 text
ââ¾ ${prefix}sparkling7 text
ââ¾ ${prefix}decorative text
ââ¾ ${prefix}chocolate text
ââ¾ ${prefix}strawberry text
ââ¾ ${prefix}koifish text
ââ¾ ${prefix}bread text
ââ¾ ${prefix}matrix text
ââ¾ ${prefix}blood2 text
ââ¾ ${prefix}neonligth2 text
ââ¾ ${prefix}thunder2 text
ââ¾ ${prefix}3dbox text
ââ¾ ${prefix}neon2 text
ââ¾ ${prefix}roadw text
ââ¾ ${prefix}bokeh text
ââ¾ ${prefix}gneon text
ââ¾ ${prefix}advanced text
ââ¾ ${prefix}dropwater text
ââ¾ ${prefix}wall text
ââ¾ ${prefix}chrismast text
ââ¾ ${prefix}honey text
ââ¾ ${prefix}drug text
ââ¾ ${prefix}marble text
ââ¾ ${prefix}marble2 text
ââ¾ ${prefix}ice text
ââ¾ ${prefix}juice text
ââ¾ ${prefix}rusty text
ââ¾ ${prefix}abstra text
ââ¾ ${prefix}biscuit text
ââ¾ ${prefix}wood text
ââ¾ ${prefix}scifi text
ââ¾ ${prefix}metalr text
ââ¾ ${prefix}purpleg text
ââ¾ ${prefix}shiny text 
ââ¾ ${prefix}jewelry text
ââ¾ ${prefix}jewelry2 text
ââ¾ ${prefix}jewelry3 text
ââ¾ ${prefix}jewelry4 text
ââ¾ ${prefix}jewelry5 text
ââ¾ ${prefix}jewelry6 text
ââ¾ ${prefix}jewelry7 text
ââ¾ ${prefix}jewelry8 text
ââ¾ ${prefix}metalh text
ââ¾ ${prefix}golden text
ââ¾ ${prefix}glitter text
ââ¾ ${prefix}glitter2 text
ââ¾ ${prefix}glitter3 text
ââ¾ ${prefix}glitter4 text
ââ¾ ${prefix}glitter5 text
ââ¾ ${prefix}glitter6 text
ââ¾ ${prefix}glitter7 text
ââ¾ ${prefix}metale text
ââ¾ ${prefix}carbon text
ââ¾ ${prefix}candy text
ââ¾ ${prefix}metalb text
ââ¾ ${prefix}gemb text
ââ¾ ${prefix}3dchrome text
ââ¾ ${prefix}metalb2 text
ââ¾ ${prefix}metalg text
ââê¥ ${prefix}metalg text


ââââê¥ã Others ã
ââ¾ ${prefix}afk [reason]
ââ¾ ${prefix}translate kode_bahasa text
ââ¾ ${prefix}kalkulator [query]
ââ¾ ${prefix}smeme [text]
ââ¾ ${prefix}smeme2 [text|text]
ââ¾ ${prefix}memegen [text|text]
ââê¥

ââââê¥ã Game Menu ã
ââ¾ ${prefix}kuismath
ââ¾ ${prefix}tebak [option]
ââ¾ ${prefix}tekateki
ââ¾ ${prefix}susunkata
ââê¥ ${prefix}caklontong


ââââê¥ã Asupan Menu ã
ââ¾ ${prefix}chika
ââ¾ ${prefix}delvira
ââ¾ ${prefix}ayu
ââ¾ ${prefix}bunga
ââ¾ ${prefix}aura
ââ¾ ${prefix}nisa
ââ¾ ${prefix}ziva
ââ¾ ${prefix}yana
ââ¾ ${prefix}viona
ââ¾ ${prefix}syania
ââ¾ ${prefix}riri
ââ¾ ${prefix}syifa
ââ¾ ${prefix}mama_gina
ââ¾ ${prefix}alcakenya
ââ¾ ${prefix}mangayutri
ââ¾ ${prefix}rikagusriani
ââ¾ ${prefix}asupan
ââ¾ ${prefix}bocil
ââ¾ ${prefix}geayubi
ââ¾ ${prefix}santuy
ââ¾ ${prefix}ukhty
ââê¥ ${prefix}syifa

ââââê¥ã Telegram Sticker ã
ââ¾ ${prefix}awoawo
ââ¾ ${prefix}benedict
ââ¾ ${prefix}chat
ââ¾ ${prefix}dbfly
ââ¾ ${prefix}dino_kuning
ââ¾ ${prefix}doge
ââ¾ ${prefix}gojosatoru
ââ¾ ${prefix}hope_boy
ââ¾ ${prefix}jisoo
ââ¾ ${prefix}kr_robot
ââ¾ ${prefix}kucing
ââ¾ ${prefix}lonte
ââ¾ ${prefix}manusia_lidi
ââ¾ ${prefix}menjamet
ââ¾ ${prefix}meow
ââ¾ ${prefix}nicholas
ââ¾ ${prefix}patrick
ââ¾ ${prefix}popoci
ââ¾ ${prefix}sponsbob
ââ¾ ${prefix}kawan_sponsbob
ââê¥ ${prefix}tyni
,
ââââê¥ã Random Cewe ã
ââ¾ ${prefix}china 
ââ¾ ${prefix}indonesia 
ââ¾ ${prefix}malaysia 
ââ¾ ${prefix}thailand 
ââ¾ ${prefix}korea 
ââ¾ ${prefix}japan 
ââ¾ ${prefix}vietnam 
ââ¾ ${prefix}jenni 
ââ¾ ${prefix}jiso 
ââ¾ ${prefix}lisa  
ââê¥ ${prefix}rose

ââââê¥ã TqTo ã 
ââ¾ My God
ââ¾ My Parents
ââ¾ Fatih A.
ââ¾ Ferdi
ââ¾ DikaArdnt
ââ¾ Mhankbarbar
ââ¾ Nurutomo
ââ¾ Rashid
ââ¾ ZeeoneOfc
ââ¾ Penyedia Module
ââê¥ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*ââ ã RULES AND FAQ ã ââ*

1. Jangan spam bot. ð
Sanksi: *â WARN/SOFT BLOCK*

2. Jangan telepon bot. âï¸
Sanksi: *â SOFT BLOCK*

3. Jangan mengeksploitasi bot.ð
Sanksi: *PERMANENT BLOCK*

ð¯ï¸ Bot tidak atau lambat merespon ?
â¡ï¸ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rulesâ¼ï¸

ð¯ï¸ Dimana saya bisa mendapatkan Script dari bot ini ?
â¡ï¸ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

ð¯ï¸ Boleh saya menambah ke grup?
â¡ï¸ Untuk sementara bot dalam status free to add.

ð¯ï¸ Prefixnya apa ya?
â¡ï¸ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

ð¯ï¸ Kak, kok syaa chat owner tidak direspon?
â¡ï¸ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

â ï¸ Segala kebijakan dan ketentuan OneBotz di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*ï¹*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan One Botz
ðð
`
}
exports.welcome = () =>{
	return`ð©ðºðððºð ððððº ððððð ððºð ð¤
	
âê¥ ð­ðºððº :
ââ¾ ð´ððð :
ââ¾ ð¦ð¾ðð½ð¾ð :
ââ¾ ð ðððð :
ââê¥ ð¯ðºðððð ðððð¾ð ðððð ððº ððºk ~`
}
exports.leave = () =>{
	return`Yah kok out ð£ Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`ã SOURCE CODE ã
Nih Sc Botnya...\nhttps://github.com/davidpangrib001/Alphabot-Md\nUdah Sekalian Sama Modules Loh.. Jangan Lupa Kasih Star Ya.. Sebelum Ganti Sessionnya Hapus Dulu File store.json\nTakutnya Error..`
}
exports.tos = (ownernomer) => {
    return `
*-------ã DONATE ã -------*

Hai kak âºï¸ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti ð

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`ââââê¥ã Bot Info ã 
ââ¾ ${prefix}owner
ââ¾ ${prefix}rules
ââ¾ ${prefix}sc
ââ¾ ${prefix}ping
ââ¾ ${prefix}runtime
ââ¾ ${prefix}botstatus
ââê¥ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`ââââê¥ã Owner ã 
ââ¾ < evaluate
ââ¾ > evaluate
ââ¾ $ exec
ââ¾ => exec
ââ¾ ${prefix}setmenu [query]
ââ¾ ${prefix}setmenu templateLocation
ââ¾ ${prefix}setmenu templateTenor
ââ¾ ${prefix}setmenu katalog
ââ¾ ${prefix}setmenu katalog2
ââ¾ ${prefix}setmenu list
ââ¾ ${prefix}setwm packname|author
ââ¾ ${prefix}sendsesi
ââ¾ ${prefix}listpc
ââ¾ ${prefix}listgc
ââ¾ ${prefix}broadcast [text]
ââ¾ ${prefix}bc [text]
ââ¾ ${prefix}bcgc [text]
ââ¾ ${prefix}nsfw [on/off]
ââ¾ ${prefix}autorespond [on/off]
ââ¾ ${prefix}antiviewonce [on/off]
ââ¾ ${prefix}join [link]
ââ¾ ${prefix}self
ââ¾ ${prefix}public [only bot]
ââ¾ ${prefix}del [pesan bot]
ââê¥ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`ââââê¥ã Database ã 
ââ¾ ${prefix}setcmd [reply stiker]
ââ¾ ${prefix}delcmd [reply stiker]
ââ¾ ${prefix}listcmd
ââ¾ ${prefix}absen
ââ¾ ${prefix}cekabsen
ââ¾ ${prefix}deleteabsen
ââ¾ ${prefix}absenstart
ââ¾ ${prefix}addmsg [nama file]
ââ¾ ${prefix}getmsg [nama file]
ââ¾ ${prefix}listmsg
ââê¥ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`ââââê¥ã Group ã 
ââ¾ ${prefix}listonline
ââ¾ ${prefix}sider
ââ¾ ${prefix}wm packname|author
ââ¾ ${prefix}infochat
ââ¾ ${prefix}setdesk [text]
ââ¾ ${prefix}setppgrup [reply image]
ââ¾ ${prefix}antilink [on/off]
ââ¾ ${prefix}revoke
ââ¾ ${prefix}leave
ââ¾ ${prefix}add [62***]
ââ¾ ${prefix}kick @tag
ââ¾ ${prefix}leave
ââ¾ ${prefix}linkgc
ââ¾ ${prefix}take packname|author
ââ¾ ${prefix}group [open/close]
ââ¾ ${prefix}tagall [text]
ââê¥ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`ââââê¥ã Anime ã 
ââ¾ ${prefix}quotesanime
ââ¾ ${prefix}anime [query]
ââ¾ ${prefix}manga [query]
ââê¥ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`ââââê¥ã Tag ã 
ââ¾ ${prefix}stickertag
ââ¾ ${prefix}videotag [query]
ââ¾ ${prefix}vntag [query]
ââê¥ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`ââââê¥ã Stalking ã 
ââ¾ ${prefix}igstalk [username]
ââ¾ ${prefix}ghstalk [username]
ââê¥ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`ââââê¥ã Search ã 
ââ¾ ${prefix}ytsearch [query]
ââ¾ ${prefix}wallpaper [query]
ââ¾ ${prefix}wikimedia [query]
ââ¾ ${prefix}hentai
ââ¾ ${prefix}wattpad [query]
ââ¾ ${prefix}webtoons [query]
ââ¾ ${prefix}drakor [query]
ââê¥ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`ââââê¥ã Converter ã 
ââ¾ ${prefix}toaudio [video]
ââ¾ ${prefix}tomp3 [video]
ââ¾ ${prefix}tovn [video]
ââ¾ ${prefix}stiker [reply image]
ââ¾ ${prefix}tourl [image/video]
ââ¾ ${prefix}togif [sticker]
ââ¾ ${prefix}tomp4 [sticker]
ââê¥${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`ââââê¥ã Image Effect ã 
ââ¾ ${prefix}wanted [reply image/stiker]
ââ¾ ${prefix}utatoo [reply image/stiker]
ââ¾ ${prefix}unsharpen [reply image/stiker]
ââ¾ ${prefix}thanos [reply image/stiker]
ââ¾ ${prefix}sniper [reply image/stiker]
ââ¾ ${prefix}sharpen [reply image/stiker]
ââ¾ ${prefix}sepia [reply image/stiker]
ââ¾ ${prefix}scary [reply image/stiker]
ââ¾ ${prefix}rip [reply image/stiker]
ââ¾ ${prefix}redple [reply image/stiker]
ââ¾ ${prefix}rejected [reply image/stiker]
ââ¾ ${prefix}posterize [reply image/stiker]
ââ¾ ${prefix}ps4 [reply image/stiker]
ââ¾ ${prefix}pixelize [reply image/stiker]
ââ¾ ${prefix}missionpassed [reply image/stiker]
ââ¾ ${prefix}moustache [reply image/stiker]
ââ¾ ${prefix}lookwhatkarenhave [reply image/stiker]
ââ¾ ${prefix}jail [reply image/stiker]
ââ¾ ${prefix}invert [reply image/stiker]
ââ¾ ${prefix}instagram [reply image/stiker]
ââ¾ ${prefix}greyscale [reply image/stiker]
ââ¾ ${prefix}glitch [reply image/stiker]
ââ¾ ${prefix}gay [reply image/stiker]
ââ¾ ${prefix}frame [reply image/stiker]
ââ¾ ${prefix}fire [reply image/stiker]
ââ¾ ${prefix}distort [reply image/stiker]
ââ¾ ${prefix}dictator [reply image/stiker]
ââ¾ ${prefix}deepfry [reply image/stiker]
ââ¾ ${prefix}ddungeon [reply image/stiker]
ââ¾ ${prefix}circle [reply image/stiker]
ââ¾ ${prefix}challenger [reply image/stiker]
ââ¾ ${prefix}burn [reply image/stiker]
ââ¾ ${prefix}brazzers [reply image/stiker]
ââê¥ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`ââââê¥ã Sticker Effect ã 
ââ¾ ${prefix}jail [reply image/stiker]
ââ¾ ${prefix}red [reply image/stiker]
ââ¾ ${prefix}gay [reply image/stiker]
ââ¾ ${prefix}bloo [reply image/stiker]
ââ¾ ${prefix}blue [reply image/stiker]
ââ¾ ${prefix}sepia [reply image/stiker]
ââ¾ ${prefix}green [reply image/stiker]
ââ¾ ${prefix}glass [reply image/stiker]
ââ¾ ${prefix}invert [reply image/stiker]
ââ¾ ${prefix}blurple [reply image/stiker]
ââ¾ ${prefix}blurple2 [reply image/stiker]
ââ¾ ${prefix}wasted [reply image/stiker]
ââ¾ ${prefix}passed [reply image/stiker]
ââ¾ ${prefix}triggered [reply image/stiker]
ââ¾ ${prefix}comrade [reply image/stiker]
ââ¾ ${prefix}greyscale [reply image/stiker]
ââ¾ ${prefix}threshold [reply image/stiker]
ââ¾ ${prefix}brightness [reply image/stiker]
ââê¥ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`ââââê¥ã Download ã 
ââ¾ ${prefix}tiktok [link]
ââ¾ ${prefix}tiktoknowm [link]
ââ¾ ${prefix}tiktokwm [link]
ââ¾ ${prefix}tiktokaudio [link]
ââ¾ ${prefix}ytdl [link]
ââ¾ ${prefix}play [query]
ââ¾ ${prefix}ytmp3 [link]
ââ¾ ${prefix}ytshortmp3 [link]
ââ¾ ${prefix}ytmp4 [link]
ââ¾ ${prefix}ytshorts [link]
ââ¾ ${prefix}facebook [link]
ââ¾ ${prefix}facebooksd [link]
ââ¾ ${prefix}facebookhd [link]
ââ¾ ${prefix}fbaudio [link]
ââ¾ ${prefix}igstory [username]
ââ¾ ${prefix}igdl [link]
ââ¾ ${prefix}igphoto [link]
ââ¾ ${prefix}igvideo [link]
ââ¾ ${prefix}igreels [link]
ââ¾ ${prefix}igtv [link]
ââ¾ ${prefix}soundcloud [link]
ââ¾ ${prefix}gitclone [link repo]
ââ¾ ${prefix}gitrepo [username repo branch]
ââ¾ ${prefix}mediafire [link]
ââê¥ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`ââââê¥ã Random Anime ã
ââ¾ ${prefix}loli
ââ¾ ${prefix}neko
ââ¾ ${prefix}waifu
ââ¾ ${prefix}shinobu
ââ¾ ${prefix}megumin
ââ¾ ${prefix}bully
ââ¾ ${prefix}cuddle
ââ¾ ${prefix}cry
ââ¾ ${prefix}hug
ââ¾ ${prefix}awoo
ââ¾ ${prefix}kiss
ââ¾ ${prefix}lick
ââ¾ ${prefix}pat
ââ¾ ${prefix}smug
ââ¾ ${prefix}bonk
ââ¾ ${prefix}yeet
ââ¾ ${prefix}blush
ââ¾ ${prefix}smile
ââ¾ ${prefix}wave
ââ¾ ${prefix}highfive
ââ¾ ${prefix}handhold
ââ¾ ${prefix}nom
ââ¾ ${prefix}bite
ââ¾ ${prefix}glomp
ââ¾ ${prefix}slap
ââ¾ ${prefix}kill
ââ¾ ${prefix}happy
ââ¾ ${prefix}wink
ââ¾ ${prefix}poke
ââ¾ ${prefix}dance
ââê¥ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`ââââê¥ã Nsfw & Sfw ã
ââ¾ ${prefix}ahegao
ââ¾ ${prefix}ass
ââ¾ ${prefix}bdsm
ââ¾ ${prefix}blowjob
ââ¾ ${prefix}cuckold
ââ¾ ${prefix}cum
ââ¾ ${prefix}ero
ââ¾ ${prefix}femdom
ââ¾ ${prefix}foot
ââ¾ ${prefix}gangbang
ââ¾ ${prefix}glasses
ââ¾ ${prefix}jahy
ââ¾ ${prefix}manga
ââ¾ ${prefix}masturbation
ââ¾ ${prefix}neko
ââ¾ ${prefix}orgy
ââ¾ ${prefix}panties
ââ¾ ${prefix}pussy
ââ¾ ${prefix}tentacles
ââ¾ ${prefix}thighs
ââ¾ ${prefix}yuri
ââ¾ ${prefix}feet
ââ¾ ${prefix}lewdkemo
ââ¾ ${prefix}woof
ââ¾ ${prefix}gasm
ââ¾ ${prefix}solo
ââ¾ ${prefix}8ball
ââ¾ ${prefix}goose
ââ¾ ${prefix}avatar
ââ¾ ${prefix}hololewd
ââ¾ ${prefix}gecg
ââ¾ ${prefix}holo
ââ¾ ${prefix}fox_girl
ââ¾ ${prefix}tits
ââ¾ ${prefix}eroyuri
ââ¾ ${prefix}holoyero
ââ¾ ${prefix}lizard
ââ¾ ${prefix}keta
ââ¾ ${prefix}eron
ââ¾ ${prefix}erok
ââ¾ ${prefix}kemonomimi
ââ¾ ${prefix}cum_jpg
ââ¾ ${prefix}nsfw_avatar
ââ¾ ${prefix}erofeet
ââ¾ ${prefix}meow
ââ¾ ${prefix}wallpaper
ââ¾ ${prefix}waifu
ââ¾ ${prefix}trap
ââ¾ ${prefix}lewd
ââ¾ ${prefix}pussy_jpg
ââ¾ ${prefix}futanari
ââ¾ ${prefix}lewdk
ââ¾ ${prefix}solog
ââ¾ ${prefix}smug
ââ¾ ${prefix}cum
ââ¾ ${prefix}slap
ââ¾ ${prefix}les
ââ¾ ${prefix}erokemo
ââ¾ ${prefix}bj
ââ¾ ${prefix}pwankg
ââ¾ ${prefix}pat
ââ¾ ${prefix}poke
ââ¾ ${prefix}feed
ââ¾ ${prefix}nsfw_neko_gif
ââ¾ ${prefix}pussy
ââ¾ ${prefix}feetg
ââ¾ ${prefix}baka
ââ¾ ${prefix}hug
ââ¾ ${prefix}kiss
ââ¾ ${prefix}tickle
ââ¾ ${prefix}spank
ââ¾ ${prefix}kuni
ââ¾ ${prefix}classic
ââ¾ ${prefix}boobs
ââ¾ ${prefix}anal
ââ¾ ${prefix}ngif
ââ¾ ${prefix}cuddle
ââê¥ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`ââââê¥ã Textpro Menu ã
ââ¾ ${prefix}halloween2 text|text2
ââ¾ ${prefix}horror text|text2
ââ¾ ${prefix}game8bit text|text2
ââ¾ ${prefix}layered text|text2
ââ¾ ${prefix}glitch2 text|text2
ââ¾ ${prefix}coolg text|text2
ââ¾ ${prefix}coolwg text|text2
ââ¾ ${prefix}realistic text|text2
ââ¾ ${prefix}space3d text|text2
ââ¾ ${prefix}gtiktok text|text2
ââ¾ ${prefix}stone text|text2
ââ¾ ${prefix}marvel text|text2
ââ¾ ${prefix}marvel2 text|text2
ââ¾ ${prefix}pornhub text|text2
ââ¾ ${prefix}avengers text|text2
ââ¾ ${prefix}metalr text|text2
ââ¾ ${prefix}metalg text|text2
ââ¾ ${prefix}metalg2 text|text2
ââ¾ ${prefix}halloween2 text|text2
ââ¾ ${prefix}lion text|text2
ââ¾ ${prefix}wolf_bw text|text2
ââ¾ ${prefix}wolf_g text|text2
ââ¾ ${prefix}ninja text|text2
ââ¾ ${prefix}3dsteel text|text2
ââ¾ ${prefix}horror2 text|text2
ââ¾ ${prefix}lava text|text2
ââ¾ ${prefix}bagel text|text2
ââ¾ ${prefix}blackpink text
ââ¾ ${prefix}rainbow2 text
ââ¾ ${prefix}water_pipe text
ââ¾ ${prefix}halloween text
ââ¾ ${prefix}sketch text
ââ¾ ${prefix}sircuit text
ââ¾ ${prefix}discovery text
ââ¾ ${prefix}metallic2 text
ââ¾ ${prefix}fiction text
ââ¾ ${prefix}demon text
ââ¾ ${prefix}transformer text
ââ¾ ${prefix}berry text
ââ¾ ${prefix}thunder text
ââ¾ ${prefix}magma text
ââ¾ ${prefix}3dstone text
ââ¾ ${prefix}neon text
ââ¾ ${prefix}glitch text
ââ¾ ${prefix}harry_potter text
ââ¾ ${prefix}embossed text
ââ¾ ${prefix}broken text
ââ¾ ${prefix}papercut text
ââ¾ ${prefix}gradient text
ââ¾ ${prefix}glossy text
ââ¾ ${prefix}watercolor text
ââ¾ ${prefix}multicolor text
ââ¾ ${prefix}neon_devil text
ââ¾ ${prefix}underwater text
ââ¾ ${prefix}bear text
ââ¾ ${prefix}wonderfulg text
ââ¾ ${prefix}christmas text
ââ¾ ${prefix}neon_light text
ââ¾ ${prefix}snow text
ââ¾ ${prefix}cloudsky text
ââ¾ ${prefix}luxury2 text
ââ¾ ${prefix}gradient2 text
ââ¾ ${prefix}summer text
ââ¾ ${prefix}writing text
ââ¾ ${prefix}engraved text
ââ¾ ${prefix}summery text
ââ¾ ${prefix}3dglue text
ââ¾ ${prefix}metaldark text
ââ¾ ${prefix}neonlight text
ââ¾ ${prefix}oscar text
ââ¾ ${prefix}minion text
ââ¾ ${prefix}holographic text
ââ¾ ${prefix}purple text
ââ¾ ${prefix}glossyb text
ââ¾ ${prefix}deluxe2 text
ââ¾ ${prefix}glossyc text
ââ¾ ${prefix}fabric text
ââ¾ ${prefix}neonc text
ââ¾ ${prefix}newyear text
ââ¾ ${prefix}newyear2 text
ââ¾ ${prefix}metals text
ââ¾ ${prefix}xmas text
ââ¾ ${prefix}blood text
ââ¾ ${prefix}darkg text
ââ¾ ${prefix}joker text
ââ¾ ${prefix}wicker text
ââ¾ ${prefix}natural text
ââ¾ ${prefix}firework text
ââ¾ ${prefix}skeleton text
ââ¾ ${prefix}balloon text
ââ¾ ${prefix}balloon2 text
ââ¾ ${prefix}balloon3 text
ââ¾ ${prefix}balloon4 text
ââ¾ ${prefix}balloon5 text
ââ¾ ${prefix}balloon6 text
ââ¾ ${prefix}balloon7 text
ââ¾ ${prefix}steel text
ââ¾ ${prefix}gloss text
ââ¾ ${prefix}denim text
ââ¾ ${prefix}decorate text
ââ¾ ${prefix}decorate2 text
ââ¾ ${prefix}peridot text
ââ¾ ${prefix}rock text
ââ¾ ${prefix}glass text
ââ¾ ${prefix}glass2 text
ââ¾ ${prefix}glass3 text
ââ¾ ${prefix}glass4 text
ââ¾ ${prefix}glass5 text
ââ¾ ${prefix}glass6 text
ââ¾ ${prefix}glass7 text
ââ¾ ${prefix}glass8 text
ââ¾ ${prefix}captain_as2 text
ââ¾ ${prefix}robot text
ââ¾ ${prefix}equalizer text
ââ¾ ${prefix}toxic text
ââ¾ ${prefix}sparkling text
ââ¾ ${prefix}sparkling2 text
ââ¾ ${prefix}sparkling3 text
ââ¾ ${prefix}sparkling4 text
ââ¾ ${prefix}sparkling5 text
ââ¾ ${prefix}sparkling6 text
ââ¾ ${prefix}sparkling7 text
ââ¾ ${prefix}decorative text
ââ¾ ${prefix}chocolate text
ââ¾ ${prefix}strawberry text
ââ¾ ${prefix}koifish text
ââ¾ ${prefix}bread text
ââ¾ ${prefix}matrix text
ââ¾ ${prefix}blood2 text
ââ¾ ${prefix}neonligth2 text
ââ¾ ${prefix}thunder2 text
ââ¾ ${prefix}3dbox text
ââ¾ ${prefix}neon2 text
ââ¾ ${prefix}roadw text
ââ¾ ${prefix}bokeh text
ââ¾ ${prefix}gneon text
ââ¾ ${prefix}advanced text
ââ¾ ${prefix}dropwater text
ââ¾ ${prefix}wall text
ââ¾ ${prefix}chrismast text
ââ¾ ${prefix}honey text
ââ¾ ${prefix}drug text
ââ¾ ${prefix}marble text
ââ¾ ${prefix}marble2 text
ââ¾ ${prefix}ice text
ââ¾ ${prefix}juice text
ââ¾ ${prefix}rusty text
ââ¾ ${prefix}abstra text
ââ¾ ${prefix}biscuit text
ââ¾ ${prefix}wood text
ââ¾ ${prefix}scifi text
ââ¾ ${prefix}metalr text
ââ¾ ${prefix}purpleg text
ââ¾ ${prefix}shiny text 
ââ¾ ${prefix}jewelry text
ââ¾ ${prefix}jewelry2 text
ââ¾ ${prefix}jewelry3 text
ââ¾ ${prefix}jewelry4 text
ââ¾ ${prefix}jewelry5 text
ââ¾ ${prefix}jewelry6 text
ââ¾ ${prefix}jewelry7 text
ââ¾ ${prefix}jewelry8 text
ââ¾ ${prefix}metalh text
ââ¾ ${prefix}golden text
ââ¾ ${prefix}glitter text
ââ¾ ${prefix}glitter2 text
ââ¾ ${prefix}glitter3 text
ââ¾ ${prefix}glitter4 text
ââ¾ ${prefix}glitter5 text
ââ¾ ${prefix}glitter6 text
ââ¾ ${prefix}glitter7 text
ââ¾ ${prefix}metale text
ââ¾ ${prefix}carbon text
ââ¾ ${prefix}candy text
ââ¾ ${prefix}metalb text
ââ¾ ${prefix}gemb text
ââ¾ ${prefix}3dchrome text
ââ¾ ${prefix}metalb2 text
ââ¾ ${prefix}metalg text
ââê¥ ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`ââââê¥ã Others ã
ââ¾ ${prefix}ttp [text]
ââ¾ ${prefix}attp [text]
ââ¾ ${prefix}afk [reason]
ââ¾ ${prefix}translate kode_bahasa text
ââ¾ ${prefix}kalkulator [query]
ââ¾ ${prefix}smeme [text]
ââ¾ ${prefix}smeme2 [text|text]
ââê¥ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`ââââê¥ã Game Menu ã
ââ¾ ${prefix}kuismath
ââ¾ ${prefix}tebak [option]
ââ¾ ${prefix}tekateki
ââ¾ ${prefix}susunkata
ââê¥ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`ââââê¥ã Asupan Menu ã
ââ¾ ${prefix}chika
ââ¾ ${prefix}delvira
ââ¾ ${prefix}ayu
ââ¾ ${prefix}bunga
ââ¾ ${prefix}aura
ââ¾ ${prefix}nisa
ââ¾ ${prefix}ziva
ââ¾ ${prefix}yana
ââ¾ ${prefix}viona
ââ¾ ${prefix}syania
ââ¾ ${prefix}riri
ââ¾ ${prefix}syifa
ââ¾ ${prefix}mama_gina
ââ¾ ${prefix}alcakenya
ââ¾ ${prefix}mangayutri
ââ¾ ${prefix}rikagusriani
ââ¾ ${prefix}asupan
ââ¾ ${prefix}bocil
ââ¾ ${prefix}geayubi
ââ¾ ${prefix}santuy
ââ¾ ${prefix}ukhty
ââê¥ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`ââââê¥ã Random Cewe ã
ââ¾ ${prefix}china 
ââ¾ ${prefix}indonesia 
ââ¾ ${prefix}malaysia 
ââ¾ ${prefix}thailand 
ââ¾ ${prefix}korea 
ââ¾ ${prefix}japan 
ââ¾ ${prefix}vietnam 
ââ¾ ${prefix}jenni 
ââ¾ ${prefix}jiso 
ââ¾ ${prefix}lisa  
ââê¥ ${prefix}rose
`
}

exports.tqto = () =>{
	return`ââââê¥ã TqTo ã 
ââ¾ My God
ââ¾ My Parents
ââ¾ Fatih A.
ââ¾ Ferdi
ââ¾ DikaArdnt
ââ¾ Mhankbarbar
ââ¾ Nurutomo
ââ¾ Rashid
ââ¾ ZeeoneOfc
ââ¾ Penyedia Module
ââê¥ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`ââââê¥ã Primbon ã
ââ¾ ${prefix}nomorhoki 82160268332
ââ¾ ${prefix}artimimpi [query]
ââ¾ ${prefix}artinama [query]
ââ¾ ${prefix}ramaljodoh
ââ¾ ${prefix}ramaljodohbali
ââ¾ ${prefix}suamiistri
ââ¾ ${prefix}ramalcinta
ââ¾ ${prefix}cocoknama
ââ¾ ${prefix}pasangan
ââ¾ ${prefix}jadiannikah
ââ¾ ${prefix}sifatusaha
ââ¾ ${prefix}rezeki
ââ¾ ${prefix}pekerjaan
ââ¾ ${prefix}nasib
ââ¾ ${prefix}penyakit
ââ¾ ${prefix}tarot
ââ¾ ${prefix}fengshui
ââ¾ ${prefix}haribaik
ââ¾ ${prefix}harisangar
ââ¾ ${prefix}harisial
ââ¾ ${prefix}nagahari
ââ¾ ${prefix}arahrezeki
ââ¾ ${prefix}peruntungan
ââ¾ ${prefix}weton
ââ¾ ${prefix}karakter
ââ¾ ${prefix}keberuntungan
ââ¾ ${prefix}memancing
ââ¾ ${prefix}masasubur
ââ¾ ${prefix}zodiak 
ââê¥ ${prefix}shio [query]
`
}

exports.ephotomenu = (prefix) =>{
	return`ââââê¥ã Ephoto360 Menu ã
ââ¾ ${prefix}youtubegold
ââ¾ ${prefix}youtubesilver
ââ¾ ${prefix}facebookgold
ââ¾ ${prefix}facebooksilver
ââ¾ ${prefix}instagramgold
ââ¾ ${prefix}instagramsilver
ââ¾ ${prefix}twittergold
ââ¾ ${prefix}twittersilver
ââ¾ ${prefix}retrotext
ââ¾ ${prefix}halloweenbats
ââ¾ ${prefix}texthalloween
ââ¾ ${prefix}cardhalloween
ââ¾ ${prefix}birthdaycake
ââ¾ ${prefix}thundertext
ââ¾ ${prefix}icetext
ââ¾ ${prefix}milkcake
ââ¾ ${prefix}snowontext
ââ¾ ${prefix}metalstar
ââ¾ ${prefix}dragonfire
ââ¾ ${prefix}zombie3d
ââ¾ ${prefix}merrycard
ââ¾ ${prefix}generalexam 
ââ¾ ${prefix}viettel
ââ¾ ${prefix}embroider
ââ¾ ${prefix}graffititext
ââ¾ ${prefix}graffititext2
ââ¾ ${prefix}graffititext3
ââ¾ ${prefix}covergraffiti
ââ¾ ${prefix}moderngold
ââ¾ ${prefix}capercut
ââ¾ ${prefix}lovecard
ââ¾ ${prefix}heartflashlight
ââ¾ ${prefix}heartcup
ââ¾ ${prefix}sunglightshadow
ââ¾ ${prefix}graffiti3d
ââ¾ ${prefix}moderngoldsilver
ââ¾ ${prefix}moderngold2
ââ¾ ${prefix}moderngold3
ââ¾ ${prefix}fabrictext
ââ¾ ${prefix}masteryavatar
ââ¾ ${prefix}messagecoffee
ââ¾ ${prefix}announofwin
ââ¾ ${prefix}writeblood
ââ¾ ${prefix}horrorletter
ââ¾ ${prefix}writehorror
ââ¾ ${prefix}shirtclub
ââ¾ ${prefix}angelwing
ââ¾ ${prefix}christmasseason
ââ¾ ${prefix}projectyasuo
ââ¾ ${prefix}lovelycute
ââ¾ ${prefix}womansday
ââ¾ ${prefix}covergamepubg
ââ¾ ${prefix}nameonheart
ââ¾ ${prefix}funnyhalloween
ââ¾ ${prefix}lightningpubg
ââ¾ ${prefix}greetingcardvideo 
ââ¾ ${prefix}christmascard 
ââ¾ ${prefix}galaxybat
ââ¾ ${prefix}writegalaxy
ââ¾ ${prefix}starsnight
ââ¾ ${prefix}noeltext
ââ¾ ${prefix}textcakes
ââ¾ ${prefix}pubgbirthday
ââ¾ ${prefix}galaxywallpaper
ââ¾ ${prefix}pubgglicthvideo 
ââ¾ ${prefix}pubgmascotlogo
ââ¾ ${prefix}realembroidery
ââ¾ ${prefix}vintagetelevision
ââ¾ ${prefix}funnyanimations
ââ¾ ${prefix}glowingtext
ââ¾ ${prefix}textonglass
ââ¾ ${prefix}cartoonstyle
ââ¾ ${prefix}multicolor
ââ¾ ${prefix}watercolor2
ââ¾ ${prefix}textsky
ââ¾ ${prefix}summerbeach
ââ¾ ${prefix}1917text
ââ¾ ${prefix}puppycute
ââê¥ ${prefix}rosebirthday`
}

exports.stcmenu = (prefix) =>{
	return`ââââê¥ã Telegram Sticker ã
ââ¾ ${prefix}awoawo
ââ¾ ${prefix}benedict
ââ¾ ${prefix}chat
ââ¾ ${prefix}dbfly
ââ¾ ${prefix}dino_kuning
ââ¾ ${prefix}doge
ââ¾ ${prefix}gojosatoru
ââ¾ ${prefix}hope_boy
ââ¾ ${prefix}jisoo
ââ¾ ${prefix}kr_robot
ââ¾ ${prefix}kucing
ââ¾ ${prefix}lonte
ââ¾ ${prefix}manusia_lidi
ââ¾ ${prefix}menjamet
ââ¾ ${prefix}meow
ââ¾ ${prefix}nicholas
ââ¾ ${prefix}patrick
ââ¾ ${prefix}popoci
ââ¾ ${prefix}sponsbob
ââ¾ ${prefix}kawan_sponsbob
ââê¥ ${prefix}tyni
`}
