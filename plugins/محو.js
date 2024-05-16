import _translate from "./_translate.js"
const tradutor = _translate.plugins.cmd_del
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `*[❗ملحوظة❗]يمكن تعيين النصوص أو الأوامر المخصصة للملصقات أو الصور فقط، وللحصول على الرمز المخصص، استخدم الأمر COMMAND ${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw `*2*`;
  delete sticker[hash];
  m.reply(`*[✓] تم حذف النص/الأمر المخصص للملصق/الصورة من قاعدة البيانات بشكل صحيح*`);
};
handler.command = ['محو'];
handler.rowner = true;
export default handler;
