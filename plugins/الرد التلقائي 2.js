let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,`*احتين علي احتك 🐦🥹*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 } 

if (/^اوامر$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*لا تنسى (.)*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
}

   if (/^عبيط|يا عبيط|اهبل|غبي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*انت يبيبي 🥲❤️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
   
if (/^كروساكي|دازاي|بابلو|كاكاشي|فينوم|شادو|يوتا|كريم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*صديق ماكيما الروح بالروح🤩❤️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
}
   
   if (/^منور|منوره$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بنوري 🫠💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
    if (/^مين عمك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*عمي هو اوراهارا طبعا 🫶🏻💗*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
    } 

    if (/^بوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*اسمي ماكيما🥺❤️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
      
    }
 if (/^يب$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*قول نعم ياحب 🫶🏻 🐦❤*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

   if (/^رونالدو$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*عم الجميع*',m) //wm, null, [['Menu', '#menu']], m) botones :v

   }

   if (/^بوت خرا|بوت زفت|خرا عليك$/i.test(m.text) ) { //sem prefixo
     conn.reply(m.chat,'  *ليه😭*',m) //wm, null, [['Menu','#menu']], m) botones :v

   }
 if (/^بحبك|احبك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*انا اكتر 🙂‍↔🫶*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 

   if (/^خول|متناك|مبعبص|معرص|كسم|عرص$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*عيب يا قليل الادب ياللي ماتربيتش*', m) //wm, null, [['Menu', '#menu']], m) botones :V

   }
 if (/^بنورك|دا نورك|نورك الاصل|نور نورك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*يعم بنوري انا 🫠🐦*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 
  
 if (/^امزح|بهزر$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*ماشي🥲*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
   } 
  
 if (/^في ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*ولا حاجة*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
 } 
  
 if (/^تست$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*توست توست*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
  
 } 
  
 if (/^بتعمل ايه دلوقت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` ولا حاجة`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` *هلا بيك*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^اخرس|اسكت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*حاضر😔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^حرامي|سارق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*تتهم بريء بالسرقة 
 من دون تحري او بحث 
 عن حقيقة ليست ملموسة 
 ارحنا واعمل شرطي  
 ثم افتح فمك وثرثر 
 فكلامك كـجاهل واحد  
 بل جهلاً ارحم من حديثك 
 تتصنع دور الشرطي  
 وكأنك محقق 
 بالله اصمت ولا تحرج نفسك  
 ارحنا وارح أعصابك  
 ان اكرمك الله بعقل 
 فبسكوتك اقتل جهلك*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^السلام عليكم |السلام عليكم ورحمة الله|سلام عليكم|السلام عليكم ورحمة الله وبركاته $/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*وعليكم السلام ورحمة الله وبركاته♥*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^كل خرا|كل تبن$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,`*طعمك مش حلو🔪*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^انا تعبان$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*الف سلامة عليك*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 
     
 if (/^🐦‍⬛$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/^مياو$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*قطة ماكيما*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^نعم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*حد ناداك 🌚🐦*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 

  
 if (/^كيفك|شخبارك|علوك|عامل ايه|اخبارك|اي الدنيا$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `*الحمد لله و انت*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 if (/^🐦$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `🐦🐦🐦🐦🐦🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }

   
 } 
 return !0 } 
 export default handler
