import fetch from 'node-fetch'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn, text }) => {
    if (!text) throw `Id?`
    let ress = await fetch(`http://weeb-scraper.onrender.com/api/anoboy/` + text)
    if (!ress) throw 'Error 404 Not Found'
    let res = await ress.json()
    let v = res.data
    let linkvi = res.data.video_embed_links
    let miror = res.data.video_mirrors
    let cap = `*Title :* ${res.data.name || res.data.episode_navigation.nav_name}\n*Synopsis :* ${res.data.synopsis || '-'}\n\n*Link to download or watch the video*\n`
    for (let x of linkvi) {
    for (let z of miror) {
    cap += `*Download 1 :*\n${x.resolution || '-'} : ${x.link || '-'}\n*Download 2 :*\n${z.resolution || '-'} : ${z.link || '-'}`
    cap += '' + '\n'
  	} }
    await conn.reply(m.chat, cap, m)
    await apivisit
	
	}
handler.help = ['anoboydl'].map(v => v + ' <id>')
handler.tags = ['tools']
handler.command = /^(anoboydl)$/i
export default handler
