//testing bot start---------------------
// const { Telegraf } = require('telegraf')
// const bot = new Telegraf('1649432599:AAGbi0TCoX3hXjPm8aw2Js2wr3bOiDZdfSw')
//testing bot end -----------------------


//deploy bot start-----------------------
const { Composer } = require('micro-bot')
const bot = new Composer
//deploy bot end-------------------------


bot.start((ctx) => {
   
    ctx.reply("Send Hii")
})
bot.on('sticker',(ctx) =>{
    ctx.reply("Sorry!!!\nthis bot can't perform the this command please send a Hi ")

})
//HI COMMAND
bot.hears('Hi',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'```Click here to select your semester```', 
    { 
        reply_markup:{
            inline_keyboard:[
                [{text: "SEMESTER 2",callback_data:"ecs1"},{text: "SEMESTER 4",callback_data:"ecs3"}],
                [{text: "SEMESTER 6",callback_data:"ecs5"},{text: "SEMESTER 8",callback_data:"ecs7"}],
                [{text:"Admin Pannel",callback_data:"ap"}],
            ]
        }
    })
})
bot.hears('Hii',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'```Click here to select your semester```', 
    { 
        reply_markup:{
            inline_keyboard:[
                [{text: "SEMESTER 2",callback_data:"ecs1"},{text: "SEMESTER 4",callback_data:"ecs3"}],
                [{text: "SEMESTER 6",callback_data:"ecs5"},{text: "SEMESTER 8",callback_data:"ecs7"}],
                [{text:"Admin Pannel",callback_data:"ap"}],
            ]
        }
    })
})
bot.hears('hi',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'```Click here to select your semester```', 
    { 
        reply_markup:{
            inline_keyboard:[
                [{text: "SEMESTER 2",callback_data:"ecs1"},{text: "SEMESTER 4",callback_data:"ecs3"}],
                [{text: "SEMESTER 6",callback_data:"ecs5"},{text: "SEMESTER 8",callback_data:"ecs7"}],
                [{text:"Admin Pannel",callback_data:"ap"}],
            ]
        }
    })
})
bot.hears('hii',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'```Click here to select your semester```', 
    { 
        reply_markup:{
            
            inline_keyboard:[
                [{text: "SEMESTER 2",callback_data:"ecs1"},{text: "SEMESTER 4",callback_data:"ecs3"}],
                [{text: "SEMESTER 6",callback_data:"ecs5"},{text: "SEMESTER 8",callback_data:"ecs7"}],
                [{text:"Admin Pannel",callback_data:"ap"}],
            ]
        }
        
    })
})
bot.hears('hai',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'```Click here to select your semester```', 
    { 
        reply_markup:{
            inline_keyboard:[
                [{text: "SEMESTER 2",callback_data:"ecs1"},{text: "SEMESTER 4",callback_data:"ecs3"}],
                [{text: "SEMESTER 6",callback_data:"ecs5"},{text: "SEMESTER 8",callback_data:"ecs7"}],
                [{text:"Admin Pannel",callback_data:"ap"}],
            ]
        }
    })
})
bot.hears('Hai',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'```Click here to select your semester```', 
    { 
        reply_markup:{
            inline_keyboard:[
                [{text: "SEMESTER 2",callback_data:"ecs1"},{text: "SEMESTER 4",callback_data:"ecs3"}],
                [{text: "SEMESTER 6",callback_data:"ecs5"},{text: "SEMESTER 8",callback_data:"ecs7"}],
                [{text:"Admin Pannel",callback_data:"ap"}],
            ]
        },
        parse_mode: 'Markdown'

    })
})
bot.hears('Hey',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'```Click here to select your semester```', 
    { 
        reply_markup:{
            inline_keyboard:[
                [{text: "SEMESTER 2",callback_data:"ecs1"},{text: "SEMESTER 4",callback_data:"ecs3"}],
                [{text: "SEMESTER 6",callback_data:"ecs5"},{text: "SEMESTER 8",callback_data:"ecs7"}],
                [{text:"Admin Pannel",callback_data:"ap"}],
            ]
        },
        parse_mode: 'Markdown'

    })
})
bot.hears('hey',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'```Click here to select your semester```', 
    { 
        reply_markup:{
            inline_keyboard:[
                [{text: "SEMESTER 2",callback_data:"ecs1"},{text: "SEMESTER 4",callback_data:"ecs3"}],
                [{text: "SEMESTER 6",callback_data:"ecs5"},{text: "SEMESTER 8",callback_data:"ecs7"}],
                [{text:"Admin Pannel",callback_data:"ap"}],
            ]
        },
        parse_mode: 'Markdown'

    })
})
//END OF  INTO COMMAND HI----------------------------------------------------------------------------------------------------------
bot.action('ecs1',(ctx) =>{
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id,'``` S2 Materials are\nComing Soon!\n Got a bug! Contact Admin```',
    { 
        reply_markup:{
            inline_keyboard:[
                [{text:"Admin Pannel",callback_data:"ap"}],
            ]
        },
        parse_mode: 'Markdown'

    }
   )
})
bot.action('ecs5',(ctx) =>{
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id,'``` S6 Materials are\nComing Soon!\n Got a bug! Contact Admin```',
    { 
        reply_markup:{
            inline_keyboard:[
                [{text:"Admin Pannel",callback_data:"ap"}],
            ]
          
        },
        parse_mode: 'Markdown'
    }
   )
})
bot.action('ecs7',(ctx) =>{
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id,'```S8 Materials are\nComing Soon!\n Got a bug! Contact Admin```',
    { 
        reply_markup:{
            inline_keyboard:[
                [{text:" Admin Pannel",callback_data:"ap"}],
            ]
        },
        parse_mode: 'Markdown'

    }
   )
})
//----------------------------------------------------------------------
//S4
bot.action('ecs3',(ctx) =>{
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id,'ECE-Select your Subject', 
    { 
        reply_markup:{
            inline_keyboard:[
                [{text: "AC",callback_data:"ac"},{text: "CAM",callback_data:"cam"}],
                [{text: "SAS",callback_data:"sas"},{text: "MAT",callback_data:"ecmat"}],
                [{text: "DE",callback_data:"de"},{text: "CI",callback_data:"ci"}],
                [{text:"Admin Pannel",callback_data:"ap"}],
            ]
        },
        parse_mode: 'Markdown'

    })
})
//SAS-------------------------
bot.action('sas',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'LOGIC CIRCUIT DESIGN\nIMPORTANT VIDEO LINKS\n\n1.https://youtu.be/ai59DBrifRM\n2.https://youtu.be/0RR0ZGXHURI\n2.https://youtu.be/0RR0ZGXHURI\n4.https://youtu.be/Q7kMyCn_wmg\n5.https://youtu.be/7onqsel1D-U\n6.https://youtu.be/bfvnAm-ItD4\n7.https://youtu.be/pVih5FSNdks\n8.https://youtu.be/rQHsmImLXHY\n9.https://youtu.be/jKG62CNCzy0\n10.https://youtu.be/oe5zUWHuFRY\n11.https://youtu.be/QpUcG0lsIGg')     
} 
)
//END OF SAS------------------



//CAM-------------------------
bot.action('cam',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'\nNETWORK THEORY\nYou can directely download TEXTBOOK by taping below\nTEXTBOOK=/NTTXT1  /NTTXT2')     
})
bot.command('NTTXT1', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAMPX4RNT_9sgRut9VZb1h3ahVj49qkAAlUBAAKPCRBUzhQM1jCx960bBA',
        {"reply_to_message_id":ctx.message.message_id}
    )
})

bot.command('NTTXT2', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAMQX4RNavmoNJqewuqccVc9lB7XYAMAAusBAAKnmyFUWp71sXdDpR8bBA',
        {"reply_to_message_id":ctx.message.message_id}
    )
})
//END OF CAM----------------




//AC------------------------
bot.action('ac',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'SOLID STATE DEVICES\n\nMODULE 1 IMPORTANT VIDEO LINKS\n1. https://rb.gy/xanoko\n2. https://rb.gy/d28di4\n3. https://rb.gy/j97e8j\n4. https://rb.gy/coniys\n5. https://rb.gy/cgagnq\n6. https://rb.gy/6qikn3\n7. https://rb.gy/hqmx8s\n8. https://rb.gy/wtnith\n9. https://rb.gy/we1jb2\nYou can directely download TEXTBOOK by taping below\nTEXTBOOK=/SSDTXT\nNOTE\nModule1\n  /SSD11\n  /SSD12\nModule2\n  /SSD21\n  /SSD22\n  /SSD23\nModule3\n  /SSD31')     
})

bot.command('SSDTXT', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAIClV99tyjS1GN4h8x-G0LcoYpq4k0QAAJMAQAC4rjxV3UhsV8XHsy5GwQ',
        {"reply_to_message_id":ctx.message.message_id}
    )
})
bot.command('SSD11', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAM1X6wL2ivjDrXr3EuVu4EpP_D9boUAAkUBAAJ1m_FXMcXTER3r7iAeBA',
        {"reply_to_message_id":ctx.message.message_id}
    )
})

bot.command('SSD12', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAM2X6wMN4toa6-WkNJySUlowi-MEDMAAkUBAAJ1m_FXMcXTER3r7iAeBA',
        {"reply_to_message_id":ctx.message.message_id}
    )
})

bot.command('SSD21', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAM7X6wMn2EF_AZmel3KnjtoCGHjn1gAAhoBAAI6oghUf5IAAQMhGG3HHgQ',
        {"reply_to_message_id":ctx.message.message_id}
    )
})

bot.command('SSD22', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAM8X6wMzmdxDVTBmBZCDLw-ISVzFYQAAgwCAAK_LmFUMjFqz_TfvwABHgQ',
        {"reply_to_message_id":ctx.message.message_id}
    )
})
bot.command('SSD23', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAM9X6wM-BDNlBqpXi1WpL5DDB_YhCoAApMBAAJQ7GBUJ0Opz4V97IoeBA',
        {"reply_to_message_id":ctx.message.message_id}
    )
})

bot.command('SSD31', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAM-X6wNH1WXXIWqcTxtB-7u2jXZWHYAAg0CAAK_LmFU9vr1lil6AAHYHgQ',
        {"reply_to_message_id":ctx.message.message_id}
    )
})
//END OF AC-------------------------------




//PE ------------------------------------
bot.action('de',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'```\nPROF.ETHICS\nYou can directely download TEXTBOOK by taping below\nTEXTBOOK=/PETXT```')
})
bot.command('PETXT', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAMcX4RPuepXjFVdE-XY0JYzGkdScFEAAswBAALQ8iBUVfJZcZ3WqHwbBA',
        {"reply_to_message_id":ctx.message.message_id}
    )
})
bot.command('PETXT2', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAMlX4Ra_3EY7kW9kp8aoSqbKFxwU7AAAvgBAAKnmyFUN-E7lRxskc0bBA',
        {"reply_to_message_id":ctx.message.message_id}
    )
})
bot.command('PETXT3', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAMmX4RbMo5dZfe9KUci-nFUuVu1LBMAAvkBAAKnmyFUXwABKAonK9AJGwQ',
        {"reply_to_message_id":ctx.message.message_id}
    )
})
//END OF PE-----------------------------


//SE 
bot.action('CI',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'\nSUSTAINABLE ENGG.\nYou can directely download Scanned textbook by taping below\nTEXTBOOK=/SETXT1 /SETXT2 /SETXT3')     
})
bot.command('SETXT1', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_file',)
    ctx.telegram.sendDocument(ctx.chat.id,
        'BQACAgUAAxkBAAMkX4Ra2kjnrvabx0lYijbqjsW76vcAAvcBAAKnmyFUpV-senTUDS8bBA',
        {"reply_to_message_id":ctx.message.message_id}
    )
})

//MAT-----------------------------------------------

bot.action('ecmat',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'Maths materials Will be available soon!!!!!!\n\n\n\n\nGot bug!!! /ContactAdmin')     
})
//END OF MAT---------------------------------------



bot.action('ap',(ctx) =>{
    // ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id,'Got bug!!!! Contact Admin ',  
    { 
        reply_markup:{
            inline_keyboard:[
                [{text: "Connect Whatsapp",url:"https://wa.me/918606683287?text=Got+bug!!!!"}],
                [{text: "Connect Telegram",url:"https://t.me/karthikSunilK"}],
               
            ]
        }
    })   
    
})
// git add .
// git commit -m 'commit message'
// git push heroku master
//calm-bayou-06011
//https://calm-bayou-06011.herokuapp.com/

bot.on('document',(ctx)=>{
    console.log(JSON.stringify(ctx.update.message.document))
})

//bot test----
// bot.launch()
//end test----

//bot deploy------------
module.exports = bot
//deploy end------------
