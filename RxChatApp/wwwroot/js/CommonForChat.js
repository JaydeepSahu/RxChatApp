"use strict";

        var connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:7228/toastr", {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets
        }).build();
    


//connection.on("RecieveMessage", function (message) {
//    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
//    var div = document.createElement("div");
//    div.innerHTML = msg + "<hr/>";
//    document.getElementById("messages").appendChild(div);
//});

//connection.on("UserConnected", function (connectionId) {
//    debugger;
//    var groupElement = document.getElementById("Users");
//    var option = document.createElement("option");
//    option.text = connectionId;
//    option.value = connectionId;
//    groupElement.add(option);
//});

//connection.on("UserDisconnected", function (connectionId) {
//    debugger;
//    var groupElement = document.getElementById("Users");
//    for (var i = 0; i < groupElement.length; i++) {
//        if (groupElement.options[i].value == connectionId) {
//            groupElement.remove(i);
//        }
//    }
//});

connection.start().catch(function (err) {
    return console.error(err.toString());
});



//document.getElementById("sendButton").addEventListener("click", function (event) {
//    debugger;
//    var message = document.getElementById("message").value;
//    var groupValue = document.getElementById("Users").value;
//    //var groupValue = groupElement.options[groupElement.selectedIndex].value;
//    //var method = "sendMessageToAll";
//    //if (groupValue === "Myself") {
//    //    method ="sendMessageToCaller"
//    //}
//    if (groupValue === "Everyone" || groupValue === "Myself") {
//        var method = groupValue === "Everyone" ? "sendMessageToAll" : "sendMessageToCaller";
//        connection.invoke(method, message).catch(function (err) {
//            return console.error(err.toString());
//        })
//    }
//    else if (groupValue === "PrivateGroup") {
//        connection.invoke("sendMessageToGroup","PrivateGroup", message).catch(function (err) {
//            return console.error(err.toString());
//        })
//    }
//    else {
//        connection.invoke("sendMessageToUser", groupValue, message).catch(function (err) {
//            return console.error(err.toString());
//        })
//    }
//    //connection.invoke(method, message).catch(function (err) {
//    //    return console.error(err.toString());
//    //});
//    event.preventDefault();
//});

//document.getElementById("joinGroup").addEventListener("click", function (event) {
//    connection.invoke("joinGroup", "PrivateGroup").catch(function (err) {
//        return console.error(err.toString());
//    });
//});