---

<div align="center">
  <h1>choo-kanye</h1>
  <h2>easily add <a href="https://github.com/bevacqua/kanye">kanye</a> keyboard shortcuts to your choo app</h2>
  <p>
    <a href="https://npmjs.com/packages/choo-kanye" alt="npm package">
      <img src="https://img.shields.io/npm/v/choo-kanye.svg?style=flat-square">
    </a>
    <a href="https://github.com/blahah/choo-kanye/blob/master/LICENSE" alt="CC0 public domain">
      <img src="https://img.shields.io/badge/license-CC0-ff69b4.svg?style=flat-square">
    </a>
  </p>
</div>

---

## Install

```
npm install --save choo-kanye
```

## Usage

### API

This module implements the [`kanye` API](https://github.com/bevacqua/kanye) using `choo` events.

Any `kanye` events received before the DOM is loaded are buffered until they can be registered.

Events `choo-kanye` listens to:

- `kanye:on` args: `combo, options?, listener`
  - see ['kanye.on'](https://github.com/bevacqua/kanye#kanyeoncombo-options-listener)
- `kanye:off` args: `combo, options?, listener`
  - see ['kanye.off'](https://github.com/bevacqua/kanye#kanyeoffcombo-options-listener)
- `kanye.clear` args: `context?`
  - see ['kanye.clear'](https://github.com/bevacqua/kanye#kanyeclearcontext)


### Example

``` js
var app = require('choo')

choo.use(require('choo-kanye'))

choo.use(function(state, bus) {
  var sayhi = function () {
    console.log('hi!')
  }
  // run sayhi when the user presses ctrl+shift+a while element with id 'main' is the target
  bus.emit('kanye:on', 'ctrl+shift+a', { filter: '#main' }, sayhi))
})
```

## License

To the extent possible by law, we transfer any rights we have in this code to the public domain. Specifically, we do so using the [CC0 1.0 Universal Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

You can do whatever you want with this code. No need to credit us, link to us, include any license, or anything else. But if you want to do those things, you're free to do that too.
