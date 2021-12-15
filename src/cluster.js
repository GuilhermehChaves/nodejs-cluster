const cluster = require('cluster');
const { cpus } = require('os');

if (cluster.isMaster) {
    cpus().forEach(() => cluster.fork());

    cluster.on('listening', worker => {
        console.log(`Worker started: PID ${worker.process.pid}`);
    });

    cluster.on('exit', worker => {
        console.log(`Exiting worker: PID ${worker.process.pid}`);
        cluster.fork();
    });
} else {
    require('./server');
}
