let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai ๐
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
โบโบโญโใ *Donasi* ใ
โญโก๐ฎ: Donasi ngab jgan gunain doang.
โโโทโง *Ovo:* ${pulsa}
โโโทโง *Dana:* ${dana}
โโโทโง *Gopay:* ${gopay}
โโฐโโโยทยทยทโโโโโ
โโบโห Ingin Donasi? Chat nomor owner
โฐโโโโโโโโโโยทยทยทโโโโฎ
wa.me/${numberowner} (Owner)

*donasi via follow ig juga boleh*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
