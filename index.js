const notifier = require('node-notifier');

setInterval(() => {
    notifier.notify({
        title: "Remind me Health!",
        message: "Go get some water now!"
    });
}, 20 * 60 * 1000);
