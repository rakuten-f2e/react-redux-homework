import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const TableDataSchema = new mongoose.Schema({
  seq: Number,
  status: String,
  category: String,
  title: String,
  owner: String,
  priority: String,
});

const TableData = mongoose.model('TableData', TableDataSchema);

export default TableData;
