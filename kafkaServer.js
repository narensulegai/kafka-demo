require('dotenv').config();
const { kafka, topics } = require('./kafka');
const modules = require('./modules');

(async () => {
    const k = await kafka();

    k.subscribe(topics.API_CALL, ({ fn, params, token }) => {
        modules[fn](...params)
            .then(
                (resp) => {
                    k.send(topics.API_RESP, { token, resp, success: true });
                },
                (resp) => {
                    k.send(topics.API_RESP, { token, resp, success: false });
                },
            );
    }, 'Kafka Server');
})();