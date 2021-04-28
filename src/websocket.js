import io from 'socket.io-client'
let socketServerAddress = 'http://localhost:1002'

export const createSocket = () => {
    return io(socketServerAddress)
}
