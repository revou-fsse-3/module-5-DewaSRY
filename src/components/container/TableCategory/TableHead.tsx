import { FC, HTMLAttributes, PropsWithChildren, Fragment } from "react";
import { flexRender, Table } from "@tanstack/react-table";
import { CollectionsProps } from "@features/utils/collections.type";

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  table: Table<CollectionsProps>;
}
type TableHeadComponents = FC<TableHeadProps> & PropsWithChildren;
const TableHead: TableHeadComponents = ({ table, ...resProps }) => {
  return (
    <thead
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          <th>NO</th>
          {headerGroup.headers.map((header, id) => {
            return (
              <th key={header.id + id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    <Fragment>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </Fragment>
                    <Fragment>
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </Fragment>
                  </div>
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default TableHead;
