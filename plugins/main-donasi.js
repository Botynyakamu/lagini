let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
››╭─〘 *Donasi* 〙
╭╡📮: Donasi ngab jgan gunain doang.
│┝‷✧ *Ovo:* ${pulsa}
│┝‷✧ *Dana:* ${dana}
│┝‷✧ *Gopay:* ${gopay}
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat nomor owner
╰──────────···───╮
wa.me/${numberowner} (Owner)

*donasi via follow ig juga boleh*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
