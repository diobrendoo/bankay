import fetch from 'node-fetch';
import {sizeFormatter} from 'human-readable';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.descargas_gdrive
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.


const formatSize = sizeFormatter({
  std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`});

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `_*«قسم التحميلات - جوجل درايف»*_\n\n_*[🫶] قم بارسال رابط من جوجل درايف*_\n\n_*مثال:*_ _${usedPrefix + command} https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view_`;
  try {
    GDriveDl(args[0]).then(async (res) => {
      conn.reply(m.chat, '_*«قسم التحميلات _ جوجل درايف»*_\n\n _*[🐦‍⬛] يتم ارسال الملف انتظر قليلا...*_\n\n_*[🐦‍⬛]اذا لم يتم ارسال الملف فقد يكون تجاوز حد الحجم المسموح*_', m);
      if (!res) throw res;
      conn.sendFile(m.chat, res.downloadUrl, res.fileName, 'اتفضل❤️', m, null, {mimetype: res.mimetype, asDocument: true});
    });
  } catch (e) {
    m.reply(tradutor.texto3);
    console.log(e);
  }
};
handler.command = /^(جوجل-درايف|درايف|gdrive)$/i;
export default handler;
async function GDriveDl(url) {
  let id;
  if (!(url && url.match(/drive\.google/i))) throw 'الرابط غلط هتضحك عليا؟';
  id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1];
  if (!id) throw '[💀]ايرووووووووووووووووووووووووووووووور';
  const res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
    method: 'post',
    headers: {
      'accept-encoding': 'gzip, deflate, br',
      'content-length': 0,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'origin': 'https://drive.google.com',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
      'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
      'x-drive-first-party': 'DriveWebUi',
      'x-json-requested': 'true'}});
  const {fileName, sizeBytes, downloadUrl} = JSON.parse((await res.text()).slice(4));
  if (!downloadUrl) throw 'Link Download Limit !';
  const data = await fetch(downloadUrl);
  if (data.status !== 200) throw data.statusText;
  return {downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')};
}
