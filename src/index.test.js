const { greet } = require('./index');

test('greets the user correctly', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
});
