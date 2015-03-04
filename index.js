var runtime = 'iojs';

try {
  require('v8');
} catch (err) {
  runtime = 'nodejs';
}

module.exports = runtime;
