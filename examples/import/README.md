Examples in `index.js`

## Directory imports
In node v16.14.0 if I don't want to specify the `*index.js` full path in an import from a directory I need to use the `node --experimental-specifier-resolution=node`. See:
- https://stackoverflow.com/a/68621282/2938519
- https://nodejs.org/api/esm.html#esm_customizing_esm_specifier_resolution_algorithm
