function balanceParentheses (text) {
    const array = text.split('');
    const result = array.reduce(function (pre, character) {
        if (pre < 0 ) {
            return pre;
        }
        if (character === '(') {
            return ++pre;
        }
        if (character === ')') {
            return --pre;
        }
        return pre;
    }, 0)
    

    if (!result) {
        console.log(text + " dengeli bir yapıdır");
    } else {
        console.log(text + " dengeli bir yapıda değildir.");
    }
}

balanceParentheses('(()');
