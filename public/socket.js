import { setTextEditor } from "./socketFront.js";

const socket = io();

function selectDocument(name) {
    socket.emit("selectDocument", name)
    console.log("está vindo daqui o nome do documento: " + name)
}

function emitTextEditor(text) {
    socket.emit("textEditor", text)
}

socket.on("textEditorClients", (text) => {
    setTextEditor(text)
})

export { emitTextEditor, selectDocument }