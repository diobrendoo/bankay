let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*『${pickRandom(global.lw)}』*`, m)
}
handler.help = ['bzmzjdks']
handler.tags = ['fun']
handler.command = ['لو']
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

     global.lw = [ 
 'لو خيروك أن تلبس ملابس الغوص وتذهب بها إلى العمل لمدة يوم كامل أو أن ترتدي ملابس جدتك.',
   'لو خيروك أن تصرخ في الطريق أو أن تصفع أول شخص تلتقي به.',
   'لو خيروك بين أن تتناول الشوكولا التي تحبها ولكن بشرط أن تضيف عليها رشة ملح مع القليل من عصير الليمون، أو أن تأكل ليمونة كاملة.',
   'لو خيروك بين أن ترقص على سطح المنزل أو أن تغني وأنت واقف على نافذتك.',
   'لو خيروك أن تضع لبانة على شعرك أو أن تأكل لبانة كانت بفم شخص غيرك.',
   'لو خيروك بين تنظيف شعرك بسائل غسيل الأطباق، أو أن تستخدم كريم الأساس حتى تغسل الأطباق.',
   'لو خيروك أن تضع وجهك بالطحين أو أن تأكل فص ثوم.',
   'لو خيروك بين اللعب مع الأطفال لمدة طويلة أو أن تجلس وحيدًا لمدة 24 ساعة دون فعل أي شيء.',
   'لو خيروك بحلق شعرك كله أو أن تلونه بلون بنفسجي.',
   'لو خيروك أن تقص شعر أخيك وهو نائم أو أن ترتدي ملابس أخيك الصغير وتخرج بها.',
   'لو خيروك بين أن تضيف البرتقال إلى طبق السلطة أو أن تضيف البطاطا لطبق الفاكهة.',
   'لو خيروك بين تناول الثلج أو شرب ماء ساخن.',
   'لو خيروك بين أكل قرن من الحد أو أن تأكل بصلة كاملة.',
   'لو خيروك أن تكون شخص يحبه الجميع أو أن يخشاه الجميع.',
   'لو خيروك أن تعيش وحيدًا على سطح القمر أو أن تعيش على سطح المريخ وحيدًا.',
   'لو خيروك بين أمك وأبيك.',
   'لو خيروك بأن تبقى مع حبيبتك مدى الحياة أو أن تبقى مع أختك.',
   'لو خيروك بأن تسافر إلى المالديف رحلة سياحية ولكن تستطيع فقط أن تأخذ معك شخص واحد، فمن تختار؟.',
   'لو خيروك أن تشتري هدية باهظة الثمن لأحد أفراد عائلتك فلمن تعطيها؟.',
   'لو خيروك بين الحب والمال ماذا تختار؟.',
   'لو خيروك بين أن تتزوج شخص تحبه أو أن تتزوج الشخص الذي سيحقق لك أحلامك.',
   'لو خيروك بين أن تأخذ مليون دولار، أو أن تفشي سر أحد أصدقائك.',
   'لو خيروك أن ترقص مع فتاة أمام زوجتك أو حبيبتك أو أن تلبس ملابس فتاة.',
   'لو خيروك تتزوج ماكيما او تتزوج فتاة اخرى.'
 ] 
