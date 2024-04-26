import React from 'react'

export interface Row {
    data: string;
    values: string;
  }

interface TableProps {
    data: Row[];



} 





const Table: React.FC<TableProps> = ({ data }) => {

  
    return (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border">
            <thead>
              <tr>
                <th className="border-2 border-[#64748B] px-4 py-2 bg-[#CBD5E1]">Data</th>
                <th className="border-2 border-[#64748B] px-4 py-2 bg-[#CBD5E1]">Values</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="border-2 border-[#64748B] px-4 py-2 font-[500] text-[16px] leading-[24px] text-center ">{row.data}</td>
                  <td className="border-2 border-[#64748B] px-4 py-2  font-[500] text-[16px] leading-[24px] text-center ">{row.values}</td>
                </tr>
              ))}           
            </tbody>
          </table>
          
        </div>
      );
    };


export default Table
