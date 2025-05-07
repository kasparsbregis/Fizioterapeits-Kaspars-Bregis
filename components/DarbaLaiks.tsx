import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "Pirmdiena:",
    paymentMethod: "10:00 - 19:00",
  },
  {
    invoice: "Otrdiena:",
    paymentMethod: "08:00 - 18:00",
  },
  {
    invoice: "Trešdiena:",
    paymentMethod: "09:00 - 18:00",
  },
  {
    invoice: "Ceturtdiena:",
    paymentMethod: "09:00 - 18:00",
  },
  {
    invoice: "Piektdiena:",
    paymentMethod: "08:00 - 17:00",
  },
  {
    invoice: "Sestdiena:",
    paymentMethod: "Brīvs",
  },
  {
    invoice: "Svētdiena:",
    paymentMethod: "Brīvs",
  },
];

export function DarbaLaiks() {
  return (
    <Table className="text-[16px]">
      <TableHeader>
        <TableRow className="bg-[#f5712c]">
          <TableHead className="font-bold text-[#292929]">Diena</TableHead>
          <TableHead className="font-bold text-[#292929]">
            Darba laiks
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
