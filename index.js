const kanye = require('kanye')

module.exports = (state, bus) => {
  const beforedom = []
  const mappings = {}
  let domloaded = false

  const on = (combo, opts, listener) => {
    if (!domloaded) return beforedom.push([combo, opts, listener])
    kanye.on(combo, opts, listener)
  }

  const off = (combo, opts, listener) => kanye.off(combo, opts, listener)

  const clear = context => kanye.clear(context)

  bus.on('kanye:on', on)
  bus.on('kanye:off', off)
  bus.on('kanye:clear', clear)

  bus.on('DOMContentLoaded', () => {
    domloaded = true
    beforedom.forEach(args => add(...args))
    beforedom = []
  })
}
