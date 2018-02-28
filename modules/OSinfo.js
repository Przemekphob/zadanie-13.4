var os = require('os');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    var time = require('../modules/time.js');
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ~', (time.print((uptime / 60))));
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
    process.exit();
}

exports.print = getOSinfo;
