#!/usr/bin/env node
const notifier = require('node-notifier');

notifier.notify({
    title: "Remind me Health!",
    message: "Go get some water now!"
});

setInterval(() => {
    notifier.notify({
        title: "Remind me Health!",
        message: "Go get some water now!"
    });
}, 20 * 60 * 1000);
