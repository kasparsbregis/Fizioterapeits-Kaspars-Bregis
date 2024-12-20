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
    invoice: "Fizioterapeita konsultācija",
    totalAmount: "€30.00",
    paymentMethod: "50min",
  },
];

export function KonsultacijaPricing() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Pakalpojums</TableHead>
          <TableHead>Laiks</TableHead>
          <TableHead className="text-right">Cena</TableHead>
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
