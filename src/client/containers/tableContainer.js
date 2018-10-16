import { connect } from 'react-redux';
import Table from '../components/table';

const mapStateToProps = state => ({
  tableData: state.table,
  filterText: state.readFilter,
});

const tableContainer = connect(mapStateToProps)(Table);

export default tableContainer;
