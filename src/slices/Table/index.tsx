import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Section } from "@/components/ui/section";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `Table`.
 */
export type TableProps = SliceComponentProps<Content.TableSlice>;

/**
 * Component for "Table" Slices.
 */
const TableSlice: FC<TableProps> = ({ slice }) => {
  const tableData = slice.primary.table;

  if (!tableData) {
    return (
      <Section
        head={{
          title: slice.primary.title,
          text: slice.primary.text,
        }}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div>No table data available</div>
      </Section>
    );
  }

  console.log(tableData);

  return (
    <Section
      head={{
        title: slice.primary.title,
        text: slice.primary.text,
      }}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Table>
        {tableData.head?.rows && tableData.head.rows.length > 0 && (
          <TableHeader>
            {tableData.head.rows.map((row) => (
              <TableRow key={row.key}>
                {row.cells.map((cell) => (
                  <TableHead key={cell.key}>
                    <PrismicRichText field={cell.content} />
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
        )}
        <TableBody>
          {tableData.body.rows.map((row) => (
            <TableRow key={row.key}>
              {row.cells.map((cell) => (
                <TableCell
                  key={cell.key}
                  nowrap={slice.primary.mode === "nowrap"}
                >
                  <PrismicRichText field={cell.content} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
};

export default TableSlice;
