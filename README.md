# xin-blueprint

[github](https://github.com/tonioloewald/xin-blueprint/) | [live demo](https://tonioloewald.github.io/xin-blueprint/) | [npm](https://www.npmjs.com/package/xin-blueprint)

**blueprint src url** `https://tonioloewald.github.io/xin-blueprint/dist/blueprint.js`

The example web-component is a toggle-switch.

```
<xin-toggle id="basic" checked>
  <div slot="on">on</div>
  <div slot="off">off</div>
</xin-toggle>
```

## Loading a blueprint

If you just want to bundle the component…

```
import { makeComponent } from 'xinjs'
import blueprint from 'xin-clock'

const xinClock = makeBlueprint('xin-clock', blueprint).creator

document.body.append(xinClock())
```

If you want to use a CDN:

```
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/xinjs@0.7.1/dist/module.js'
</script>
<xin-loader>
  <xin-blueprint tag="xin-clock" src="https://tonioloewald.github.io/xin-clock/dist/blueprint.js"></xin-blueprint>
</xin-loader>
<xin-clock></xin-clock>
```

You can also use `<xin-loader>` and `<xin-blueprint>` or `makeComponent` to load blueprints at runtime.

## Development

This project is designed for use with [Bun](https://bun.sh).

The blueprint code is `./src/blueprint.ts` and unless it's complicated there's no reason
it can't all be in one source file.

`./index.html` exercises your blueprint.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

## Development

This project is designed for use with [Bun](https://bun.sh).

The blueprint code is `./src/blueprint.ts` and unless it's complicated there's no reason
it can't all be in one source file.

`./index.html` exercises your blueprint.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```
