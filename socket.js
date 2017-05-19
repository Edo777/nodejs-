'use strict';

const net = require('net');
const sock = new net.Socket;

sock.on('connect', () => {
    sock.write('Get /en/HTTP/1.1\r\n');
    sock.write('Host:istc.am');
    sock.write('\r\n\r\n');
});
sock.setEncoding('utf-8');

const total_data = [];

sock.on('data', d => total_data.push(d));

sock.on('end', () => console.log(total_data.reduce((prev, total)=> prev + total)));
sock.connect({
    port: 80,
    host: 'istc.am'
});
