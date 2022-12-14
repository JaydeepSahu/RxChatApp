
$(document).ready(function () {
    var connection=JSON.parse(localStorage.getItem("Connection", JSON.stringify(connection))); 
})
   



    $("#btnLogin").on("click", function(event) {
        let userName = $('#username').val();
        let userPass = $('#userPassword').val();
        let personInfo = { userName: userName, password: userPass };
        connection.invoke("authMe", personInfo)
            .then(() => alert("Login Success"))
            .catch(function (err) {
                return console.error(err.toString());
            });
    });
    connection.start().catch(function (err) {
        return console.error(err.toString());
    });
connection.on("authMeResponseFail", function () {
    alert("Wrong credentials!");
});

class User {
    public id: string;
    public name: string;
    public connId: string;//signalr
    public msgs: Array<Message>;//5Tutorial (only client-side property)
}

export class Message {
    constructor(
        public content: string,
        public mine: boolean,
        public addedOn: Date = new Date()
    ) { }
    }
})