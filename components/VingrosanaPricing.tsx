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
    invoice: "Ārstnieciskā vingrošana (30min)",
    totalAmount: "€15.00",
    paymentMethod: "25-30min",
  },
  {
    invoice: "Ārstnieciskā vingrošana (50min)",
    totalAmount: "€20.00",
    paymentMethod: "45-50min",
  },
];

export function VingrosanaPricing() {
  return (
    <Table className="text-[16px]">
      <TableHeader>
        <TableRow className="bg-[#f5712c]">
          <TableHead className="font-bold text-[#292929]">
            Pakalpojums
          </TableHead>
          <TableHead className="font-bold text-[#292929]">Laiks</TableHead>
          <TableHead className="text-right font-bold text-[#292929]">
            Cena
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
