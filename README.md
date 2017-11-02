# Search in list

this project is one function to seach word in the list and return another list.

## How to install

with npm

```
  npm install search-in-list --save
```

with yarn 

```
  yarn add search-in-list
```

## How to use

```js

const search = require('./search');

const list = new Array({
  id: 1,
  name: 'João pinhao',
},{
  id: 2,
  name: 'João cagão',
},{
  id: 3,
  name: 'catarina marciel',
},{
  id: 4,
  name: 'carlos vegas',
},{
  id: 5,
  name: 'lucas louco',
});


const listSearch = search(list, 'lu');
console.log(listSearch) //[{ id: 5, name: 'lucas louco'}]

```

