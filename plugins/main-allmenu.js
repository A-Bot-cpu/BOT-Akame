const handler = async (m, { conn, isRegistered, qtext, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist);

  const caption = `${global.allmenu}`;

  await conn.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/cl9xbc.jpg' },
    caption,
    footer: '',
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363405649403674@newsletter',
        serverMessageId: null,
        newsletterName: 'Chanel Info || Akame - AI'
      },
      externalAdReply: {
        showAdAttribution: true,
        title: 'Akame - AI',
        body: 'JavaScript',
        thumbnailUrl: 'https://files.catbox.moe/rxd0s6.jpg',
        sourceUrl: global.website,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: qtext });

  db.data.users[m.sender].exp += await randomNomor(60);
};

handler.help = ['allmenu', 'allcmd', 'menuall'];
handler.tags = ['main'];
handler.command = ['allmenu', 'allcmd', 'menuall'];
module.exports = handler;

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
