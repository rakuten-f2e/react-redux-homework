import { connect } from 'react-redux';
import { fetchData } from '../actions';
import FetchBtn from '../components/fetchBtn';

export const mapDispatchToProps = dispatch => ({
  onClick: (tableData) => {
    dispatch(fetchData(tableData));
  },
});

const FetchBtnContainer = connect(null, mapDispatchToProps)(FetchBtn);

export default FetchBtnContainer;
