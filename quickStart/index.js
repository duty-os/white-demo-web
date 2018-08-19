var whiteWebSdk = new WhiteWebSdk();
var miniToken = 'WHITEcGFydG5lcl9pZD1DYzlFNTJhTVFhUU5TYmlHNWJjbkpmVThTNGlNVXlJVUNwdFAmc2lnPTE3Y2ZiYzg0ZGM5N2FkNDAxZmY1MTM0ODMxYTdhZTE2ZGQ3MTdmZjI6YWRtaW5JZD00JnJvbGU9bWluaSZleHBpcmVfdGltZT0xNTY2MDQwNjk4JmFrPUNjOUU1MmFNUWFRTlNiaUc1YmNuSmZVOFM0aU1VeUlVQ3B0UCZjcmVhdGVfdGltZT0xNTM0NDgzNzQ2Jm5vbmNlPTE1MzQ0ODM3NDYzMzYwMA';

var url = 'https://cloudcapiv3.herewhite.com/room?token=' + miniToken;
var requestInit = {
    method: 'POST',
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify({
        name: 'my whiteboard',
        limit: 100, // 房间人数限制
    }),
};

fetch(url, requestInit)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        return whiteWebSdk.joinRoom({
            uuid: json.msg.room.uuid,
            roomToken: json.msg.roomToken,
        });
    })
    .then(function(room) {
        room.bindHtmlElement(document.getElementById('whiteboard'));
    });