import { useState } from "react";
import { FC, TableHTMLAttributes, PropsWithChildren } from "react";
import COLUMNS from "./Columns";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { CollectionsProps } from "@features/utils/collections.type";
import {
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  data: CollectionsProps[];
}
type TableComponents = FC<TableProps> & PropsWithChildren;
const Table: TableComponents = ({ data, ...resProps }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable<CollectionsProps>({
    data,
    columns: COLUMNS,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <table
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <TableHead table={table} />
      <TableBody table={table} />
    </table>
  );
};

export default Table;
