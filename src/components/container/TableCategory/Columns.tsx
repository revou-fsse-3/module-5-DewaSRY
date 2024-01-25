import { createColumnHelper } from "@tanstack/react-table";
import { CollectionsProps } from "@features/utils/collections.type";
import Link from "next/link";
const columnHelper = createColumnHelper<CollectionsProps>();
const columns = [
  columnHelper.accessor("name", {
    cell: (props) => <span>{props.getValue()}</span>,
    header: () => <span>Last Name</span>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("is_active", {
    cell: (props) => <span>{props.getValue() ?? "active"}</span>,
    header: () => <span>Active Status</span>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("created_at", {
    cell: (props) => {
      const date = new Date(props.getValue());
      const formatData = formattedDate(date);
      return <span>{formatData}</span>;
    },
    header: () => <span>Create</span>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("updated_at", {
    cell: (props) => {
      const date = new Date(props.getValue());
      const formatData = formattedDate(date);
      return <span>{formatData}</span>;
    },
    header: () => <span>Update</span>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("id", {
    cell: (props) => (
      <Link href={`/collection/update?id=${props.getValue()}`}>Actions</Link>
    ),
    header: () => <span>Actions</span>,
    footer: (props) => props.column.id,
  }),
];

export default columns;
const formattedDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
