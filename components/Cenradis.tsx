import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const konsultacija = [
  {
    invoice: "Fizioterapeita konsultācija",
    totalAmount: "€30.00",
    paymentMethod: "50min",
  },
];

const vingrosana = [
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

const masaza = [
  {
    invoice: "Apkakles masāža",
    totalAmount: "€20.00",
    paymentMethod: "25-30min",
  },
  {
    invoice: "Jostas daļas masāža",
    totalAmount: "€20.00",
    paymentMethod: "25-30min",
  },
  {
    invoice: "Pilna mugura (mugura + sēžas muskuļi)",
    totalAmount: "€25.00",
    paymentMethod: "35-40min",
  },
  {
    invoice: "Abu roku masāža",
    totalAmount: "€25.00",
    paymentMethod: "25-30min",
  },
  {
    invoice: "Abu kāju masāža",
    totalAmount: "€25.00",
    paymentMethod: "30-35min",
  },
  {
    invoice: "Mugura + kājas",
    totalAmount: "€40.00",
    paymentMethod: "55-60min",
  },
];

const teiposana = [
  {
    invoice: "Kinezioloģiskā teipošana",
    totalAmount: "Līdz €20.00",
    paymentMethod: "Līdz 30min",
  },
];

export function PilnsCenradis() {
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
        <TableRow className="bg-black/15">
          <TableCell colSpan={3} className="font-bold">
            Fizioterapeita konsultācija
          </TableCell>
        </TableRow>
        {konsultacija.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
        <TableRow className="bg-black/15">
          <TableCell colSpan={3} className="font-bold">
            Ārstnieciskā vingrošana
          </TableCell>
        </TableRow>
        {vingrosana.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
        <TableRow className="bg-black/15">
          <TableCell colSpan={3} className="font-bold">
            Ārstnieciskā masāža
          </TableCell>
        </TableRow>
        {masaza.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
        <TableRow className="bg-black/15">
          <TableCell colSpan={3} className="font-bold">
            Kinezioloģiskā teipošana
          </TableCell>
        </TableRow>
        {teiposana.map((invoice) => (
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
