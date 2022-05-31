import React, { useContext } from 'react';
import './App.css';
import { Table } from 'antd';
import columns from './components/common/columns';
import { dataContextType, TableContext } from './Context/ContextProvider';
import FormAdd from './components/FormAdd';

function App() {
  const {data} = useContext(TableContext) as dataContextType;
  return (
    <div className="App">
      <Table className='width-100' columns={columns} dataSource={data}></Table>
      <FormAdd ></FormAdd>
    </div>
  );
}

export default App;
