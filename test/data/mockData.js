export const odd = {
  index:1,
  seq: 3,
  status: 'Open',
  category: 'cat5',
  title: 'title500',
  owner: 'Sean',
  priority: 'P4'
};

export const even = {
  index: 2,
  seq: 314,
  status: 'Close',
  category: 'cat1',
  title: 'title5',
  owner: 'Shawn',
  priority: 'P3'
};

export const bySeq = {
  key: 'seq',
  search: 3
};

export const byOwner = {
  key: 'owner',
  search: 'Seandjkf'
};

export const byNone = {
  key: 'dfjaskfas',
  search: 'Sean'
};

export const mockCreate = {
  index: 3,
  seq: 2,
  status: 'Open',
  category: 'cat133',
  title: 'title30',
  owner: 'Nash',
  priority: 'P5'
};

export const mockInput = {
  target: {
    name: 'seq',
    value: 123
  }
};

export const mockSearch = {
  target: {
    name: 'key',
    value: 'seq'
  }
};

export const mockData = [
  odd,
  even
];

export const mockTarget = {
  isClicked: true,
  index:1,
  seq: 3,
  status: 'Open',
  category: 'cat5',
  title: 'title500',
  owner: 'Sean',
  priority: 'P4'
};
