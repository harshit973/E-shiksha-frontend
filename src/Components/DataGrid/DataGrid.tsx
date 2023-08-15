import { useEffect, useState } from "react";

export default function DataGrid(props) {
  const [rows, setRows] = useState<Array<any>>([]);
  const [columns, setColumns] = useState<Array<any>>([]);
  useEffect(() => {
    setRows(props.rows ? props.rows : []);
    setColumns(props.columns ? props.columns : []);
  }, [props.rows, props.columns]);
  return (
    <>
      {columns.length > 0 && rows.length > 0 && (
        <div className="container">
          <div className="row">
            {(() => {
              let temp = columns.map((column) => {
                return <div className="col text-center">{column.value}</div>;
              });
              return temp;
            })()}
          </div>
          {(() => {
            let data = rows.map((row) => {
              return (
                <div className="row">
                  {(() => {
                    let data = columns.map((column) => {
                      return (
                        <div className="col text-center">
                          {row[column.value]}
                        </div>
                      );
                    });
                    return data;
                  })()}
                </div>
              );
            });
            return data;
          })()}
        </div>
      )}
    </>
  );
}
