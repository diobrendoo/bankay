import _translate from "./_translate.js"
const tradutor = _translate.plugins.gc_tagall
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `\n\nالرسالة: ${pesan}\n`;
  let teks = `استدعاء  القروب:📢  ${oi}\n\nاعضاء القروب❤️‍🔥\n`;
  for (const mem of participants) {
    teks += `┣➥ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* 𝑀𝐴𝐾𝐼𝑀𝐴-𝐵𝛩𝑇\n\n*▌│█║▌║▌║║▌║▌║▌║█*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(منشن|مننشن|اصحو)$/i;
handler.admin = true
handler.group = true;
export default handler;
