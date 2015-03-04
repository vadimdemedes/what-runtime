# what-runtime?

Detect whether script is running via Node.js or io.js.

**Purpose**: Decide to apply transpilers, such as babel, or not.

### Installation

```
$ npm install what-runtime --save
```

### Usage

```javascript
var runtime = require('what-runtime');

// runtime = 'nodejs' if Node.js
// runtime = 'iojs' if io.js
```

## License

WTFPL – Do What the Fuck You Want to Public License
