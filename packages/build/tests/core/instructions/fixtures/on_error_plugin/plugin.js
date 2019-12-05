class TestError extends Error {
  constructor(...args) {
    super(...args)
    this.name = 'TestError'
  }
}

module.exports = {
  name: 'netlify-plugin-test',
  build() {
    console.log('test')
    throw new TestError('test')
  },
  error({ error: { name, message, stack } }) {
    console.log(name)
    console.log(message)
    console.log(stack)
  },
}
