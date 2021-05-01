import http from 'http';
import app from '../lib/app';
import mongoose from 'mongoose';

const isDev = true;
const port = process.env.PORT || '4000';
const uri = isDev ? process.env.MONGODB_URI : process.env.MONGODB_REMOTE_URI;

app.set('port', port);

const server = http.createServer(app);

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then((db) => {
    app.listen(port, () => {
        console.log(`Database connection: OK`);
        console.log(`Application running at ===> http://localhost:${port}`);
    });
}).catch(err => {
    console.log(err);
    return err
})


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

server.on('error', onError);
server.on('listening', onListening);

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}