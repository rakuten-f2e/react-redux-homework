export const odd = {
  index:361,
  seq: 3,
  status: 'Open',
  category: 'cat5',
  title: 'title500',
  owner: 'Sean',
  priority: 'P4'
};

export const even = {
  index: 34,
  seq: 314,
  status: 'Close',
  category: 'cat1',
  title: 'title5',
  owner: 'Shawn',
  priority: 'P3'
};

export const bySeq = {
  target: {
    key: {value: 'seq'},
    search: {value: 1}
  }
};

export const byOwner = {
  target: {
    key: {value: 'owner'},
    search: {value: 'Sean'}
  }
};

export const byNone = {
  target: {
    key: {value: 'ownerssss'},
    search: {value: 'Sean'}
  }
};

export const event = {
  target: even
};

export const mockData = [
  odd,
  even,
];
