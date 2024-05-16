const { Client, Location } = require('whatsapp-web.js');
const qibla = require('qibla');
const express = require('express');
const app = express();

// بيانات مواقيت الصلاة لبعض الدول لأغراض التجربة
const prayerTimes = {
    "المملكة_العربية_السعودية": {
        "فجر": "4:30 AM",
        "ظهر": "12:00 PM",
        "عصر": "3:30 PM",
        "مغرب": "6:45 PM",
        "عشاء": "8:15 PM"
    },
    "مصر": {
        "فجر": "4:15 AM",
        "ظهر": "11:45 AM",
        "عصر": "3:15 PM",
        "مغرب": "6:30 PM",
        "عشاء": "8:00 PM"
    }
};

const client = new Client();

client.on('message', async (message) => {
    if (message.body.startsWith('.مواقيت-الصلاة')) {
        const country = 'المملكة_العربية_السعودية'; // يمكنك تحديد الدولة الافتراضية هنا أو استخدام تقنية لتحديد رمز الدولة
        if (prayerTimes[country]) {
            let response = 'مواقيت الصلاة:\n';
            Object.keys(prayerTimes[country]).forEach((prayer) => {
                response += `${prayer}: ${prayerTimes[country][prayer]}\n`;
            });
            message.reply(response);
        } else {
            message.reply("عذرًا، لا يمكن العثور على مواقيت الصلاة لهذه الدولة.");
        }
    }
});

client.initialize();

// تشغيل خادم Express
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
