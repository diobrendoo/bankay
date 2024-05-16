import fg from 'api-dylux';
import fetch from 'node-fetch';
import {savefrom, facebookdl, facebookdlv2} from '@bochilteam/scraper';
import fbDownloader from 'fb-downloader-scrapper';
import {facebook} from '@xct007/frieren-scraper';
import axios from 'axios';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.descargas_facebook
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.



const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!args[0]) throw `_*(قسم التحميلات_فيسبوك)*_\n\n*ادخل رابط لتحميل الفيديو من موقع فيسبوك*\n\n*مثال:* _${usedPrefix + command} https://www.facebook.com/share/v/LSufKzPg57HFAZmH/?mibextid=A7sQZp_`;
  if (!args[0].match(/www.facebook.com|fb.watch/g)) throw `_*4${tradutor.texto2[0]}*_\n\n*5${tradutor.texto2[1]}*\n\n*6${tradutor.texto2[2]}* _${usedPrefix + command} https://fb.watch/fOTpgn6UFQ/_`;
  try {
    await m.reply(`*سيتم ارسال الفيديو الان*\n\n*لا تنسى متابعة البوت في قروبه الرسمي😉*\n https://chat.whatsapp.com/GG4u32AnYEm2tYs2LkdAV8`);
    const d2ata = await facebook.v1(args[0]);
    let r2es = '';
    if (d2ata.urls && d2ata.urls.length > 0) {
      r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`;
    }
    conn.sendFile(m.chat, r2es, 'error.mp4', `_*8${tradutor.texto4}*_\n\n`, m);
  } catch (err1) {
    try {
      const req = await igeh(args[0]);
      conn.sendMessage(m.chat, {video: {url: req.url_list}}, m);
    } catch (err1_2) {
      try {
        const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
        const Jjson = await Rres.json();
        let VIDEO = Jjson.result[0];
        if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
        conn.sendFile(m.chat, VIDEO, 'error.mp4', `_[𝑀𝐴𝐾𝐼𝑀𝐴-𝐵𝛩𝑇]_\n\n`, m);
      } catch (err2) {
        try {
          const ress = await fg.fbdl(args[0]);
          const urll = await ress.data[0].url;
          await conn.sendFile(m.chat, urll, 'error.mp4', `_*11${tradutor.texto4}*_\n\n`, m);
        } catch (err3) {
          try {
            const res = await fbDownloader(args[0]);
            for (const result of res.download) {
              const ur = result.url;
              await conn.sendFile(m.chat, ur, 'error.mp4', `_*22${tradutor.texto4}*_\n\n`, m);
            }
          } catch (err4) {
            try {
              const res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=nekosmic&q=${args[0]}`);
              const json = await res3.json();
              const url3 = await json.video;
              await conn.sendFile(m.chat, url3, 'error.mp4', `_*الرابط خربان😔❤️*_\n\n`, m);
            } catch (err5) {
              try {
                const {result} = await facebookdl(args[0]).catch(async (_) => await facebookdlv2(args[0])).catch(async (_) => await savefrom(args[0]));
                for (const {url, isVideo} of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, '*[ 📥 ] تم التحميل - فيسبوك*\n_---> 𝑀𝐴𝐾𝐼𝑀𝐴-𝐵𝛩𝑇._', m);
              } catch (err6) {
                throw `_*55${tradutor.texto5}*`;
              }
            }
          }
        }
      }
    }
  }
};
handler.command = /^(فيس-بوك|فيسبوك|فيس)$/i;
export default handler;

async function igeh(url_media) {
  return new Promise(async (resolve, reject)=>{
    const BASE_URL = 'https://instasupersave.com/';
    try {
      const resp = await axios(BASE_URL);
      const cookie = resp.headers['set-cookie']; // get cookie from request
      const session = cookie[0].split(';')[0].replace('XSRF-TOKEN=', '').replace('%3D', '');
      const config = {method: 'post', url: `${BASE_URL}api/convert`, headers: {'origin': 'https://instasupersave.com', 'referer': 'https://instasupersave.com/pt/', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-origin', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52', 'x-xsrf-token': session, 'Content-Type': 'application/json', 'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}`}, data: {url: url_media}};
      axios(config).then(function(response) {
        const ig = [];
        if (Array.isArray(response.data)) {
          response.data.forEach((post) => {
            ig.push(post.sd === undefined ? post.thumb : post.sd.url);
          });
        } else {
          ig.push(response.data.url[0].url);
        }
        resolve({results_number: ig.length, url_list: ig});
      }).catch(function(error) {
        reject(error.message);
      });
    } catch (e) {
      reject(e.message);
    }
  });
}
