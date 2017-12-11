# Search in list

[![Build Status](https://travis-ci.org/enieber/search-in-list.svg?branch=master)](https://travis-ci.org/enieber/search-in-list)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fenieber%2Fsearch-in-list.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fenieber%2Fsearch-in-list?ref=badge_shield)

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


const listSearch = search(list, 'lu', 'name');
console.log(listSearch) //[{ id: 5, name: 'lucas louco'}]

```

## Example with outher params

```js

const search = require('./search');

const list = new Array({
  id: 1,
  expert: 'João pinhao',
},{
  id: 2,
  expert: 'João cagão',
},{
  id: 3,
  expert: 'catarina marciel',
},{
  id: 4,
  expert: 'carlos vegas',
},{
  id: 5,
  expert: 'lucas louco',
});


const listSearch = search(list, 'lu', 'expert');
console.log(listSearch) //[{ id: 5, name: 'lucas louco'}]
```



## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fenieber%2Fsearch-in-list.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fenieber%2Fsearch-in-list?ref=badge_large)