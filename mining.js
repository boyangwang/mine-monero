const CoinHive = require('coin-hive');

(async () => {
  // Create miner
  const miner = await CoinHive('MUtCJzIDhrs01ERrf3qlqdawo35N0CYD', {
    executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
    args: ['--disable-setuid-sandbox', '--no-sandbox']
  }); // CoinHive's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );

  // Stop miner
  setTimeout(async () => await miner.stop(), 60000);
})();
