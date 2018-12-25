var ws_clients = [];

function connect_ws(ws, req, next) {
    ws_clients.push(ws);
    console.log("connected -> " + ws);

    // обработка входящих сообщений
    ws.on('message', (msg) => {
        console.log('recv message');
    });

    ws.on('close', () => {
        console.log('close connection');
    });
}

var express_ws = undefined;
//module.exports = ws_clients;
exports.start = (app, path) => {
    express_ws = require('express-ws')(app);
    app.ws(path, connect_ws);
}


// список подключенных клиентов

// отправка уведомлений
// function send_data(s, msg, t) {
//     for (var i = 0; i < ws_clients.length; i++) {
//         if (ws_clients[i] != s && ws_clients[i] != undefined) { 
//             console.log('send msg >> ' + t);
//             ws_clients[i].send(msg);
//         }
//     }
// }

// обработка вебсокетов
// app.ws('/', (ws, req, next) => {
//     ws_clients.push(ws);
//     console.log("connected -> " + ws);

//     // обработка входящих сообщений
//     ws.on('message', (msg) => {
//         switch(data.type) {
//             // мобильное приложение отправляет offer на соедениение через WebRTC с устройством 
//             //      -> требуется доставить на устройство
//             case 'offer':
//                 var offer = data.offer;
//                 var msg = JSON.stringify({
//                      'type': 'offer',
//                      'offer': offer,
//                 });
//                 send_data(ws, msg, 'offer');
//                 break;
            
//             // устройство отправляет (на запрос offer) ответanswer 
//             //      -> требуется доставить в мобильное приложение
//             case 'answer':
//                 var answer = data.answer;
//                 var msg = JSON.stringify({
//                     'type': 'answer',
//                     'answer': answer,
//                 });
//                 send_data(ws, msg, 'answer');
//                 break;
            
//             // устройство и мобильное приложение договариваются о icecandidate
//             case 'candidate':
//                 var candidate = data.candidate;
//                 var msg = JSON.stringify({
//                     'type': 'candidate',
//                     'candidate': candidate,
//                 });
//                 send_data(ws, msg, 'candidate');
//                 break;
            
//             // устройство отправляет свой статус -> доставляем в мобильное приложение
//             case 'status':
//                 break;
//             // пользователь отдал комманду на выполнение (снять трубку, открыть дверь etc) 
//             //      -> доставить на устройство
//             case 'action':
//                 break;

//             default:
//                 break;
//                 //ws.send()
//         }
//     });

//     ws.on('close', () => {
//         for (var i = 0; i < ws_clients.length; i++) {
//             if (ws_clients[i] == ws) { 
//                 console.log('connection close ' + ws);
//                 delete ws_clients[i];
//             }
//         }
//     });
// });

