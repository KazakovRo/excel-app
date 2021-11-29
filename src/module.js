console.log('new file')

async function start() {
  return await Promise.resolve('async workk !!!!')
}

start().then(console.log)
