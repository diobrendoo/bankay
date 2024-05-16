import {webp2png} from '../lib/webp2mp4.js';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.convertidor_toimg
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, {conn, usedPrefix, command}) => {
  const notStickerMessage = `*[🤖]هذا الامر مخصص لتحويل الملصقات الى صورة فقط قم بالرد على الملصق لتحويله الى صورة*`;
  if (!m.quoted) throw notStickerMessage;
  const q = m.quoted || m;
  const mime = q.mediaType || '';
  if (!/sticker/.test(mime)) throw notStickerMessage;
  const media = await q.download();
  const out = await webp2png(media).catch((_) => null) || Buffer.alloc(0);
  await conn.sendFile(m.chat, out, 'error.png', null, m);
};
handler.help = ['toimg (reply)'];
handler.tags = ['sticker'];
handler.command = ['لصورة', 'لصوره', 'تحويل-صورة'];
export default handler;
