const checkOut = function check(text: string): boolean {
    return text === 'ok';
};

const myText = 'ok';
if (checkOut(myText)) {
    // eslint-disable-next-line no-console
    console.log('It works!');
}

// Makes file a module, without exporting nothing!
export {};
