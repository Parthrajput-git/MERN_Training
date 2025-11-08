// There are help to create asyn function.
// function wait() {
    // return new Promise((res, rej) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            res();
        }, 1000);
    });
}
// This is a async function.
async function read() {
    await wait();
    await wait();
    wait();
}

read();












































