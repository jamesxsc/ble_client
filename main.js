const noble = require('noble-winrt');
const peripheralIdentifier = "Tracker 0xAB";
const absorptionConstant = 2.8;
const oneMeterPower = -57;
let distance = 0;
noble.startScanning([], true);
noble.on('discover', function (peripheral) {
    // console.log(peripheral.address + ":" + peripheral.advertisement.localName
    //     + ":" + peripheral.rssi + ":" + peripheral.connectable);

    if (peripheralIdentifier === peripheral.advertisement.localName) {
        distance = Math.round(Math.pow(10, ((oneMeterPower - peripheral.rssi) / (10 * absorptionConstant))) * 100) / 100;
        console.log(distance + "m, " + peripheral.rssi + "dBm");
    }
});