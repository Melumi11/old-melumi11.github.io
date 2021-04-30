function setAudio() {
    var rand = Math.random()
    if (rand > 0.7) {document.getElementById("memeAudio").setAttribute("src","https://archive.org/download/NeverGonnaGiveYouUp/jocofullinterview41.mp3")}
    else if (rand < 0.5) {document.getElementById("memeAudio").setAttribute("src","https://drive.google.com/u/0/uc?id=1OOCZkZaRn_LchAsCxL3ggZ1ia3c_vUkW&export=download")}
    else if (rand <= 0.7) {document.getElementById("memeAudio").setAttribute("src", "https://archive.org/download/savurduyarranimp370k/Savurdu%20Yarrani%28MP3_70K%29.mp3")}
}
function playMemeAudio() {document.getElementById("memeAudio").play();}

function setCopyright() {
    const date = Date();
    const dateSplit = date.split(" ");
    const year = dateSplit[3];
    document.getElementById("year").innerText = `Melumi ${year}, All rights reserved`;
    console.log(date);
}

//Sending messages
function sendEmbed(title, message) {
    if(title.length + message.length > 2000) {
        alert("Sorry, but there's a 2000 character limit. Please try again.");
    } else {
    var request = new XMLHttpRequest()
    request.open("POST","https://discord.com/api/webhooks/837469721787498506/tLTpxu1GCBktShBPKKbsvko5a6K-kxIhz17PRB95mrf8ELj5kHJYUhVwbiBbVKWYDa4z");
    request.setRequestHeader('Content-type', 'application/json');
    var myEmbed = {
        // author: {name:"Captain Hook"},
        title: title,
        description: message,
        color: 16711935
    }
    var params = { //username, avatar_url, content
        embeds: [myEmbed]
    }
    request.send(JSON.stringify(params));
    }
}
function sendMessage(message) {
    var request = new XMLHttpRequest()
    request.open("POST","https://discord.com/api/webhooks/837469721787498506/tLTpxu1GCBktShBPKKbsvko5a6K-kxIhz17PRB95mrf8ELj5kHJYUhVwbiBbVKWYDa4z");
    request.setRequestHeader('Content-type', 'application/json');
    var params = {content: message}
    request.send(JSON.stringify(params));
}
function annoyRud(){
    var request = new XMLHttpRequest()
    request.open("POST","https://discord.com/api/webhooks/791082804670103552/67Yodr-bdBIP-oeOP0mdwK2dN0dq8pZiWgAQPJYclGxn-_Y0TYIl4fN1N4nYnutsic5L");
    // request.setRequestHeader('Content-type', 'application/json');
    var params = {content:"rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud rud"}
    request.send(JSON.stringify(params));
}
function prepareFormData() { // Includes ip
    var name = document.getElementById("form-name").value.toString();
    var message = document.getElementById("form-message").value.toString();
    if (name=="") {
        alert("Please enter a name.");
        document.getElementById("form-name").classList.add("is-danger")
    }
    else if (message=="") {
        alert("Please enter a message.");
        document.getElementById("form-message").classList.add("is-danger")
        document.getElementById("form-name").classList.remove("is-danger")
    }
    else {
        document.getElementById("form-name").classList.remove("is-danger")
        document.getElementById("form-message").classList.remove("is-danger")
        name ="From:" + name
        sendEmbed(name, message)
        $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
        // Convert key-value pairs to JSON
        data = data.trim().split('\n').reduce(function(obj, pair) {
            pair = pair.split('=');
            return obj[pair[0]] = pair[1], obj;
        }, {});
        sendMessage(data["ip"]);
        });
        alert("Your message has been sent!");
    }
}

//Modal
class Modal {
    constructor(modalButton) {
        this.element = modalButton;
        this.modalID = modalButton.dataset.id;
        this.modalNode = document.querySelector(`#${this.modalID}`);
        this.modalParent = this.modalNode.parentNode;
        this.open = false;

        this.modalInit();
    }

    modalInit = () => {
        this.element.addEventListener('click', this.openModal);
        this.modalParent.addEventListener('mousedown', this.handleOverlayClick);

        let closeButtons = this.modalNode.querySelectorAll('.modal-close');
        closeButtons.forEach(cur => cur.addEventListener('click', this.closeModal))
    }

    openModal = () => {
        this.modalParent.classList.add('modal-background--active');

        this.modalNode.classList.add('modal--active');

        this.open = !this.open;
    }

    closeModal = () => {
        this.modalParent.classList.remove('modal-background--active');

        this.modalNode.classList.remove('modal--active');

        this.open = !this.open;
    }

    handleOverlayClick = (e) => {
        if (!e.target.closest('.modal')) {
            this.closeModal();
        }
    }
}
let buttons = document.querySelectorAll('.modal-swing-button');
buttons.forEach(cur => new Modal(cur));