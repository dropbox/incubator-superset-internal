# APPLITOOLS JSDOM

## Just JSDOM without canvas package.
### Forked from [JSDOM](https://github.com/jsdom/jsdom)
### Why ?
* VGC requires JSDOM:
  For extracting URLs from SVGs (only ones downloaded by VGC not dom-snapshot ones).
* Cypress uses VGC as a plugin (i.e. opens eyes-cypress in it's own defined Node environment); if a user adds ```canvas``` package in it's project dependencies we get a conflict:

  cypress compiles canvas when the user installs the packages but then uses that native canvas library in the plugin environment (since VGC requires JSDOM and JSDOM requires canvas as well) and so we get a conflict saying that canvas was compiled with wrong node version.
  
* See this issue: https://github.com/cypress-io/cypress/issues/5785 

* Note that by not using canvas JSDOM still works fine just turns canvas tags to div tags (anyway VGC doesn't need the canvas..)
