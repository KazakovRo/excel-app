console.log('new file')

async function start() {
  return await Promise.resolve('async work')
}

start().then(console.log)
