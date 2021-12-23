function BalancedPairs(somecase, pairs) {
	//here check if somecase has possibles opening and closing pairs matching
	if (somecase.length % 2 !== 0) return false;

	let stack = [];

	const openers = Object.keys(pairs);

	for (let part of somecase) {
		if (openers.includes(part)) {
			//here wie have a opening tag
			stack.push(part);
		} else if (stack.length !== 0) {
			let last = stack[stack.length - 1];
			//if the last element is the corresponding opening tag, we can pop it

			if (pairs[last] === part) stack.pop();
		}
	}
	return stack.length === 0;
}

//cases contains the test cases using "(", ")", "{", "}", "[", "]"

const parentheses_pairs = {
	'(': ')',
	'{': '}',
	'[': ']'
};

const parentheses_cases = [ '{}', '[]', '()', '{}[(])', '([)]' ];

for (let somecase of parentheses_cases) {
	console.log(BalancedPairs(somecase, parentheses_pairs));
}
