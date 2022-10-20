const handler = {
  get: function (target, name) {
    return name === 'name' ? `${target.a} ${target.b}` : target[name];
  },
};

const p = new Proxy({ a: 'WONSE', b: 'IS LEESIN ZANGIN' }, handler);
console.log(p.name);
