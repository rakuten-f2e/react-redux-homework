import { connect } from 'react-redux';
import { readFilter } from '../actions';
import Read from '../components/read';

const mapStateToProps = state => ({
  filterText: state.readFilter,
});

const mapDispatchToProps = dispatch => ({
  onChange: (text) => {
    dispatch(readFilter(text));
  },
});

const Filter = connect(mapStateToProps, mapDispatchToProps)(Read);

export default Filter;
