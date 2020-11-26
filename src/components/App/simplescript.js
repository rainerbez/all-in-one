const checkOut = function check(text) {
    return text === 'ok';
};

const myText = 'ok';
if (checkOut(myText)) {
    // eslint-disable-next-line no-console
    console.log('It works!');
}
