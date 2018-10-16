import { connect } from 'react-redux';
import { readFilter } from '../actions';
import Read from '../components/read';

const mapStateToProps = state => ({
  filterText: state.readFilter,
});

export const mapDispatchToProps = dispatch => ({
  onChange: (text) => {
    dispatch(readFilter(text));
  },
});

const ReadContainer = connect(mapStateToProps, mapDispatchToProps)(Read);

export default ReadContainer;
