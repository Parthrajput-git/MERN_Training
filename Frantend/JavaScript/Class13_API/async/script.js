// There are help to create asyn function.
function wait() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            res();

        }, 1000);
    });
}

async function read() {
    await wait();
    await wait();
    wait();
}

op();






















