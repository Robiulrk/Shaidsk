const fs = require("fs-extra");
module.exports = {
config: {
		name: "bot",
    version: "1.0",
		author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
		countDown: 5,
		role: 0,
		shortDescription: "no-prefix",
		longDescription: "Bot Will Reply You In Engish/Bangla Language",
		category: "no prefix",
		guide: {
      en: "{p}{n}",
    }
	},

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {
  const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]);
  
  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = [ "সুন্দর মাইয়া মানেই-🥱-আমার বস রবিউল এর বউ-😽🫶-আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗",
  "-কিরে-🫵-তরা নাকি  prem করস-😐🐸-আমারে একটা করাই দিলে কি হয়-🥺",
  "Bot বলে অসম্মান করচ্ছিছ,😰😿",
  "-হুদাই আমারে  শয়তানে লারে-😝😑☹️",
  "- বেডি মানুষ বড় ভেজাইল্লা🤧🔪",
  "⎯তো্ঁর্ঁ ন্ঁজ্ঁরে্ঁ স্ঁম্ঁস্যা্ঁ আ্ঁছে্ঁ  ন্ঁজ্ঁর্ঁ ঠি্ঁক্ঁ ক্ঁর্ঁ-🐸🫣⎯⃝''",
  "-চু্ঁপ্ঁ থা্ঁক্ঁ তু্ঁই্ঁ 🫵 বি্ঁছা্ঁনা্ঁয়্ঁ মু্ঁতো্ঁস্ঁ 😽⎯͢⎯⃝🩷🍒🙂",
  "___মন দে !🙂🫴---ছিনি মিনি খেলমু 🤭🤭",
  "- ওই 🫵 তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵",
  "-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস রবিউল কে দান করেন-🥱🐰🍒",
  "-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸",
  "-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস রবিউল কে-🐸😾🔪",
  "-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧",
  "- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস রবিউল কে সন্দেহ করে.!🐸",
  "-তোর কথা তোর বাড়ি কেউ শুনে না তো আমি কোনো শুনবো__🤔😂",
  "—যারে দেহি তারেই ভাল্লাগে..!🙈- মনে হয় রুচি বাড়ছে..!😀😋 তুমি কি দেখো তোমাকেও তো  ভাল্লাগে - 😩🫢🫣",
  "-বুকের বাম পাশে এসি সহ একটা ফ্লাট খালি আছে...একজন বিশ্বস্ত ভাড়াটিয়া চাই😊...!🙈👀",
  "-একদিন ঠাস করে😎🔪 কিউট হয়ে যামু_😩 তারপর তোগোরে  আর পাত্তা দিমু না __🐸🌚🙂",
  "-ভাই তুই একটু আমার কাছে আই তরে মাইরা আমি ঘুমামু_👊😴",
  "-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋",
  "-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️",
  "- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি যামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼",
  "--নাটক কম করো প্রিয় তুমি যে অন্য জনে আসক্ত তা তোমার ব্যবহারেই বুঝা যায় প্রিয়__😒🦋",
  "__বড় আর হইলাম কই, এখনো \n\n-আকাশ দিয়ে হেলিকপ্টার গেলে তাকাই থাকা আমি...! 🌻🙂",
  "-আমাকে এত ডাকছেন কেন আপনার কি চরিত্রের সমস্যা আছে-🤨🤭😼",
  "-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸",
  "জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂",
  "-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦",
  "-নাটক কম করো পিও-🙃-তুমি যে অন্য জনের pream এ আসক্ত..! সেটা তোমার ব্যাবহার দেখেই বুজা যায় পিও..! 🐸👍🏾",
  "চুনা ও চুনা আমার বস রবিউল এর হবু বউ রে কেও দেকছো খুজে পাচ্ছি না-😪🤧😭",
  "-জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽",
  "- ঝাং 🫵 থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦",
  "-শুনবো না 😼 তুমি আমাকে প্রেম করাই দাও নি 🥺 পচা তুমি 🥺",
  "-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧",
  "-আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧",
  "আমি এখন বস রবিউল এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻",
  "-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস রবিউল ধরতে পারছে না-🐸🥲",
  "আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো-🥱😘",
  "-হুম জান তোমার অইখানে উম্মমাহ-😷😘",
  "—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস রবিউল এর সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗",
  "-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦",
  "-শখের নারী  বিছানায় মু'তে..!🙃🥴",
  "-এই'নেও🔑চাবী 😒𝘪𝘯𝘣𝘰𝘹-এর 🔐তালা খুলে মেছেজ দেও📥🫠🤗 𝐈 𝐚𝐦 𝐒𝐢𝐧𝐠𝐥𝐞 🙂",
  "আমি গরীব এর সাথে কথা বলি না-😼😼",
  "-ওই বেডি তোমার বাসায় না আমার বস রবিউল মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস ROBIUL কে জানে মারার কি দরকার-🙄🤧",
  "-আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি-🤗",
  "-𝚘𝐢𝐢-ইত্তু 🤏 ভালু’পাসা দিবা-🫣🥺🐼",
  "-জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽",
  "-আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈",
  "-আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇",
  "-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱",
  "-আর কত বার ডাকবি ,শুনছি তো,🤭🙈",
  "-আমাকে এতো না ডেকে বস রবিউল কে একটা গফ দে-🙄😌",
  "-আরে Bolo আমার জান ,কেমন আছো?-😚😍 ",
  "-হ্যাঁ জানু , এইদিক এ আসো কিস দেই 🤭💋"],
    var badol = Messages[Math.floor(Math.random() * Messages.length)]
  
  if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "bot") || (event.body.indexOf("বট") == 0)) {
    var msg = {
      body: ` ${badol}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};