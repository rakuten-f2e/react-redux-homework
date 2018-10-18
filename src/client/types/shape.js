import PropTypes from 'prop-types';

export const rowPropType = PropTypes.shape({
  seq: PropTypes.number,
  status: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  owner: PropTypes.string,
  priority: PropTypes.string,
});

export const updatePropType = PropTypes.shape({
  seq: PropTypes.number,
  color: PropTypes.string,
});

export const cellPropType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.string,
});
