## Guess The News

## Current rules

* no space allowed
* `apple's` will be split into `apple` and `s`
* maximum 3 tries, then link will be revealed

## Bugs

* Optimised with English at the moment. Will update methods for other languages later...
* Each <Card /> title will remain revealed when switching between filters

## To Add Features: Persist

* Remember which article has been guessed (Use a uid for each article link? Also solve title reveal bug)
* LocalStorage

## To Optimize:

### - Images loading...

### - Only import necessary Ant Design component (DONE)

eg. `import Button from 'antd/lib/button'` than `import { Button } from 'antd'`. Results:

before: antd (195.46 KB) node_modules (1.18 MB)

after: antd (20.7 KB) node_modules (316.54 KB)
