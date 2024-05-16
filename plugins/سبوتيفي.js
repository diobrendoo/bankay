// TheMystic-Bot-MD@BrunoSobrino - descargas-spotifypro.js
// Creditos de los tags a @darlyn1234 y diseño a @ALBERTO9883
// Este plugins descarga por texto, album, track o playlist de spotify.
import pkg from 'sanzy-spotifydl'; 
const { downloadTrack, downloadAlbum, search } = pkg; 
import fetch from 'node-fetch';
import pkg2 from 'fluid-spotify.js';
const { Spotify } = pkg2;
import _translate from "./_translate.js"
const tradutor = _translate.plugins.descargas_spotifypro
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.


const handler = async (m, { conn, text }) => {
 if (!text) throw ` *[❗] أدخل رابط الألبوم أو قائمة التشغيل أو Spotify أو ببساطة اسم أغنية للبحث.*`; 
 const isSpotifyUrl = text.match(/^(https:\/\/open\.spotify\.com\/(album|track|playlist)\/[a-zA-Z0-9]+)/i);
 if (!isSpotifyUrl && !text) throw `ععع${tradutor.texto2}`;
  try {
     if (isSpotifyUrl) {
      if (isSpotifyUrl[2] === 'album') {
        const album = await downloadAlbum(isSpotifyUrl[0]);
        const img = await (await fetch(`${album.metadata.cover}`)).buffer()  
        let spotifyi = `2${tradutor.texto3[0]}\n\n`
          spotifyi += `3	${tradutor.texto3[1]} ${album.metadata.title}\n`
          spotifyi += `	4${tradutor.texto3[2]} ${album.metadata.artists}\n`
          spotifyi += `	5${tradutor.texto3[3]} ${album.metadata.releaseDate}\n`   
          spotifyi += `	6${tradutor.texto3[4]} ${album.trackList.length}\n\n`   
          spotifyi += `6${tradutor.texto3[5]}`
        await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": isSpotifyUrl[0], "sourceUrl": isSpotifyUrl[0]}}}, {quoted: m});
        for (let i = 0; i < album.trackList.length; i++) {
            await conn.sendMessage(m.chat, {audio: album.trackList[i].audioBuffer, fileName: `${album.trackList[i].metadata.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
}
          
      } else if (isSpotifyUrl[2] === 'track') {
        const track = await downloadTrack(isSpotifyUrl[0]);
        const dlspoty = track.audioBuffer;
        const img = await (await fetch(`${track.imageUrl}`)).buffer()  
        let spotifyi = `هل${tradutor.texto4[0]}\n\n`
          spotifyi += `🙂‍↔	_*العنوان*_ ${track.title}\n`
          spotifyi += `🙂‍↔	_*المغني:*_ ${track.artists}\n`
          spotifyi += `🙂‍↔	_*الوقت:*_ ${track.duration}\n`
          spotifyi += `🙂‍↔	_*البوم:*_ ${track.album.name}\n`                 
          spotifyi += `🙂‍↔	${tradutor.texto4[5]} ${track.album.releasedDate}\n\n`   
          spotifyi += `${tradutor.texto4[6]}`
        await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": track.url, "sourceUrl": track.url}}}, {quoted: m});
        await conn.sendMessage(m.chat, {audio: dlspoty, fileName: `${track.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
          
      } else if (isSpotifyUrl[2] === 'playlist') {
          const infos = new Spotify({
              clientID: "7fb26a02133d463da465671222b9f19b",
              clientSecret: "d4e6f8668f414bb6a668cc5c94079ca1",
          });      
          const playlistId = isSpotifyUrl[0].split('/').pop();
          const playlistInfoByID = await infos.getPlaylist(playlistId);
          const tracks = playlistInfoByID.tracks.items;
          const img = await (await fetch(`${playlistInfoByID.images[0].url}`)).buffer()  
        let spotifyi = `${tradutor.texto5[0]}\n\n`
          spotifyi += `	${tradutor.texto5[1]} ${playlistInfoByID.name}\n`
          spotifyi += `	${tradutor.texto5[2]} ${tracks.length}\n\n`
          spotifyi += `${tradutor.texto5[3]}`
        await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": playlistInfoByID.external_urls.spotify, "sourceUrl": playlistInfoByID.external_urls.spotify}}}, {quoted: m});
          let target = m.chat;
          if (m.isGroup && tracks.length > 20) {
              target = m.sender;
          }
for (let i = 0; i < tracks.length; i++) {
    const track = await downloadTrack(tracks[i].track.external_urls.spotify);
    await conn.sendMessage(target, { audio: track.audioBuffer, fileName: `${tracks[i].track.name}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m });
    }
}
     } else {
        const searchTrack = await downloadTrack(text);
        const dlspoty = searchTrack.audioBuffer;
        const img = await (await fetch(`${searchTrack.imageUrl}`)).buffer()  
        let spotifyi = ` *جاري التنزيل يرجى الانتظار*\n\n`
          spotifyi += `*⚜️العنوان:* ${searchTrack.title}\n`
          spotifyi += `*🔱المغني:* ${searchTrack.artists}\n`
          spotifyi += `*⚜️الوقت:* ${searchTrack.duration}\n`
          spotifyi += `*🔱اسم الاغنية:* ${searchTrack.album.name}\n`                 
          spotifyi += `*🎧منذ:* ${searchTrack.album.releasedDate}\n\n`   
          spotifyi += `*سيتم ارسال الأغنية الرجاء الانتظار قليلا*`
        await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": searchTrack.url, "sourceUrl": searchTrack.url}}}, {quoted: m});
        await conn.sendMessage(m.chat, {audio: dlspoty, fileName: `${searchTrack.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
}  
  } catch (error) {
    console.error(error);
    throw tradutor.texto7;
  }
};
handler.command = /^(سبوتيفي|سبوتيفاي)$/i;
export default handler;
