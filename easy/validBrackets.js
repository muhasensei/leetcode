function isValid(s) {
    const stack = [];
    const parens = '{} () []';

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        let open = stack[stack.length - 2];
        let close = stack[stack.length - 1];
        const checkBrackets = open + close;
        if (parens.includes(checkBrackets)) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log(isValid('{'))