const createTestCafe = require('testcafe')
async function setupTestCafe() {
  const testcafe = await createTestCafe('ondemand.saucelabs.com:80')
  try {

    const runner = testcafe.createRunner()
    const failedCount = await runner
    .src('*.spec.ts')
    .browsers(['chrome', 'safari'])
    .run()

    console.log(`Failed tests: ${failedCount}`)
    testcafe.close()

  } catch (error) {

    console.error(error)
    testcafe.close()

  }
}

setupTestCafe()