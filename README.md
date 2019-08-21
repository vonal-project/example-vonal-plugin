# example-vonal-plugin
An example of how to make a plugin to the Vonal launcher.

## Installation
Every plugin will be loaded from ~/.config/vonal/plugins/
Make this directory and place your plugin's directory there, 
so Vonal will be able to reach `~/.config/vonal/plugins/your-plugin/package.json`

### Toturial - If you don't want to use JSX : 
This would be a bit harder to be used to, but you will not need node_modules, so that's an advantage.

1. Do not clone this repository
2. Make a package.json with content: `{ main: 'index.js'}` this will be the entry point of your plugin
3. Make an index.js file like this:
```js
module.exports = React.createElement('div',null,['Hello world'])
```


### Toturial - If you want to use JSX :
1. Clone this repository 
2. Run `npm i` from this directory
3. Run `npm dev` to build the code