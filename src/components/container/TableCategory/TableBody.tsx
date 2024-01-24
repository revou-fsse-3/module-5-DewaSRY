import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { flexRender, Table } from "@tanstack/react-table";
import { CollectionsProps } from "@features/utils/collections.type";
interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  table: Table<CollectionsProps>;
}
type TableBodyComponents = FC<TableBodyProps> & PropsWithChildren;
const TableBody: TableBodyComponents = ({ table, ...resProps }) => {
  const TABLE_ROWS = table.getRowModel().rows;
  return (
    <tbody
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {TABLE_ROWS.length ? (
        TABLE_ROWS.map((row, i) => (
          <tr
            key={row.id}
            className={`
                ${i % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                `}
          >
            <td>{i + 1} </td>
            {row.getVisibleCells().map((cell, id) => (
              <td key={cell.id + id} className="px-3.5 py-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr className="text-center h-32">
          <td colSpan={12}>No Record Found!</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
