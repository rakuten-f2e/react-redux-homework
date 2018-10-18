import { connect } from 'react-redux';
import { filterText } from '../actions';
import searchBar from '../components/searchBar';

const mapStateToProps = state => ({
  filterText: state.readFilter,
});

export const mapDispatchToProps = dispatch => ({
  onChange: (text) => {
    dispatch(filterText(text));
  },
});

const searchBarContainer = connect(mapStateToProps, mapDispatchToProps)(searchBar);

export default searchBarContainer;
