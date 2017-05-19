'use strict';

const k = require('./ClassWork');
const net = require('net');
const sock = new net.Socket;



sock.on('connect', () => {
    sock.write('GET /en/HTTP/1.1 \r\n');
    sock.write('Host : istc.am');
    sock.write('\r\n\r\n');
});
sock.setEncoding('utf-8');

const total_data = [];

sock.on('data', d => total_data.push(d));

sock.on('end',() => k.retVal(total_data));

sock.connect({
    port: 80,
    host: 'istc.am'
});
