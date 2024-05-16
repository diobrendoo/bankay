import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import {instagram} from '@xct007/frieren-scraper';
import {instagramdl} from '@bochilteam/scraper';
import instagramDl from '@sasmeee/igdl';
import {fileTypeFromBuffer} from 'file-type';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.descargas_instagram
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.


const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!args[0]) throw `_*«قسم التنزيلات__انستغرام»*_\n\n _*هذا الامر مخصص لتحميل الفيديوهات من تطبيق انستغرام*_\n\n_*مثال:*_ _${usedPrefix + command} https://www.instagram.com/reel/C5oBQdYRgok/?igsh=MWduMnV2emI5eWZwaw==`;
  m.reply(global.wait);
  try {
const img = await instagramDl(args[0]);
for (let i = 0; i < img.length; i++) {
    const bufferInfo = await getBuffer(img[i].download_link);
        if (bufferInfo.detectedType.mime.startsWith('image/')) {
            await conn.sendMessage(m.chat, {image: {url: img[i].download_link}}, {quoted: m});
        } else if (bufferInfo.detectedType.mime.startsWith('video/')) {
            await conn.sendMessage(m.chat, {video: {url: img[i].download_link }}, {quoted: m});
        }
}
  } catch {   
  try {
    const datTa = await instagram.download(args[0]);
    for (const urRRl of datTa) {
      const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
      const tXXxt = `🐦🐦 _${shortUrRRl}_`.trim();
      conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  } catch {
      try {
        const resultss = await instagramGetUrl(args[0]).url_list[0];
        const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
        const txt2 = `هلا _${shortUrl2}_`.trim();
        await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m);
      } catch {
        try {
          const resultssss = await instagramdl(args[0]);
          const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
          const txt4 = `مرحبا _${shortUrl3}_`.trim();
          for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
        } catch {
          try {
            const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
            const json = await human.json();
            const videoig = json.result;
            const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
            const txt1 = `${tradutor.texto2} _${shortUrl1}_`.trim();
            await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m);
          } catch {
            throw `ايرور\nيبدو ان الرابط خطا الرجاء اصلاح الرابط او ارسال رسالة مرة اخرى`;
          }
        }
      }
    }
  }
};
handler.command = /^(instagramdl|instagram|igdl|ig|اينستا|انستغرام|igdl2|ig2|انستجرام|انستاجرام|انستا|ig3)$/i;
export default handler;

const getBuffer = async (url, options) => {
    options = options || {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1}, ...options, responseType: 'arraybuffer'});
    const buffer = Buffer.from(res.data, 'binary');
    const detectedType = await fileTypeFromBuffer(buffer);
    if (!detectedType || (detectedType.mime !== 'image/jpeg' && detectedType.mime !== 'image/png' && detectedType.mime !== 'video/mp4')) {
        return null;
    }
    return { buffer, detectedType };
};
