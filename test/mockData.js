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
  target: {
    key: {value: 'seq'},
    search: {value: 3}
  }
};

export const byOwner = {
  target: {
    key: {value: 'owner'},
    search: {value: 'Sean6'}
  }
};

export const byNone = {
  target: {
    key: {value: 'ownerssss'},
    search: {value: 'Sean'}
  }
};

export const createEvent = {
  target: {
    index: {value: 3},
    seq: {value: 2},
    status: {value: 'Open'},
    category: {value: 'cat133'},
    title: {value: 'title30'},
    owner: {value: 'Nash'},
    priority: {value: 'P5'}
  }
};

export const mockData = [
  odd,
  even
];
