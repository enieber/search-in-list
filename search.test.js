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

test('search list client with 1 result', () => {
  const result = [{ id: 5, name: 'lucas louco'}];

  expect(search(list, 'lu')).toEqual(result);
});

test('search list client with 3 result', () => {
  const result =[{
	  id: 2,
	  name: 'João cagão',
  },{
	  id: 3,
	  name: 'catarina marciel',
  },{
	  id: 4,
	  name: 'carlos vegas',
  }];

  expect(search(list, 'ca')).toEqual(result);
})

