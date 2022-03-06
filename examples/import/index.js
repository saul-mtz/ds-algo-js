import defaultSingleObject from './defaultSingleObject.js';
import dir from './dir/index.js';
import { testInt, testFn } from './individualFeatures.js';

// in v16.14.0 if I want to use the path below I need to set --experimental-specifier-resolution=node
// See docs/examples/import
//import dir from './dir';

console.log({ defaultSingleObject, dir, testInt, testFn });
