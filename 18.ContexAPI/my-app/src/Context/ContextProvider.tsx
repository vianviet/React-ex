import React, { createContext, useState } from 'react'

interface Idata {
  key: string;
  name: string;
  age: number;
  address: string;
}
export type dataContextType = {
  data: Idata[];
  saveData: (data: Idata) => void;
};

// const initialState = {
//   data: Array,
//   setData: () => {},
// };

export const TableContext = createContext<dataContextType | null>(null);

export default function ContextProvider({ children, ...props} : React.PropsWithChildren<{}>) {
  const [data, setData] = useState<Idata[]>([{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },]);
  const saveData = (each: Idata) => {
    const newData: Idata = {
      key: each.key, // not really unique - but fine for this example
      name: each.name,
      age: each.age,
      address: each.address,
    };
    setData([...data, newData]);
  };
    
  return (
    <TableContext.Provider value={{data, saveData}}>{children}</TableContext.Provider>
  )
}
