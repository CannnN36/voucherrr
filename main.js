const { ACAR } = require('../../Global/Clients/Global.Clients');
const { Mongoose } = require('../../Global/Databases/Global.MongoDB.Driver');
const client = global.client = new ACAR();
const { GUILD } = require('../../Global/Init/Settings');

// Client Ayarları (Başlangıç)
client.botName = "Voucher"
// Client Ayarları (SON)

Mongoose.Connect()
GUILD.fetch(sistem.SERVER.ID)
client.fetchCommands(true, true)
client.fetchEvents()
client.connect(sistem.TOKENS.Voucher)

