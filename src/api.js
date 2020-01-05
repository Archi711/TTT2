import openSocket from 'socket.io-client';

const socket = openSocket('http://192.168.0.100:3001');

export default socket;