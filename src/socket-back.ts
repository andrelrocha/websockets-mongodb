import { io } from "./server";

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`)

    socket.on("selectDocument", ( documentName ) => {
        console.log(`Usuário conectado no documento ${documentName}`)
        socket.join(documentName)
    })

    socket.on("textEditor", ( text ) => {
        //socket.broadcast.emit("textEditorClients", text)

        socket.to("JavaScript").emit("textEditorClients", text)
    })

    socket.on("disconnect", () => {
        console.log(`Usuário desconectado no socket ${socket.id}`)
    })
})