import io from 'socket.io-client'
import { serverURL } from './api'

export const createSocket = () => {
    return io(serverURL)
}
