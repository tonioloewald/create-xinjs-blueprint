# create-xinjs-blueprint

[github](https://github.com/tonioloewald/create-xinjs-blueprint/) | [live demo](https://tonioloewald.github.io/create-xinjs-blueprint/) | [npm](https://www.npmjs.com/package/create-xinjs-blueprint)

**blueprint src url** `https://tonioloewald.github.io/create-xinjs-blueprint/dist/blueprint.js`

To create your own web-component blueprint, simply use `create-xinjs-blueprint` thus:

```
npx create-xinjs-blueprint my-custom-element
```

> The example web-component is a toggle-switch.

```
<create-xinjs-blueprint id="basic" checked>
  <div slot="on">on</div>
  <div slot="off">off</div>
</create-xinjs-blueprint>
```

## Loading a blueprint

If you just want to bundle the component…

```
import { makeComponent } from 'xinjs'
import blueprint from 'create-xinjs-blueprint'

const { creator } = makeBlueprint( 'create-xinjs-blueprint', blueprint )

document.body.append( creator() )
```

If you want to use a CDN:

```
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/xinjs@0.7.1/dist/module.js'
</script>
<xin-loader>
  <xin-blueprint tag="create-xinjs-blueprint" src="https://tonioloewald.github.io/create-xinjs-blueprint/dist/blueprint.js"></xin-blueprint>
</xin-loader>
<create-xinjs-blueprint></create-xinjs-blueprint>
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
