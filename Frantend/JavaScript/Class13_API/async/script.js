// Create a async function..
function wait() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            res();

        }, 1000);
    });
}

async function op() {
    await wait();
    await wait();
    wait();
}

op();










