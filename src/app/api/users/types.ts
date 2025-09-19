export type Transaction = {
  id: number;
  value: number;
  type: "Income" | "Expense";
  method: "Transfer" | "Debit" | "Credit"; 
  date: string; 
  counterpart: string;
};

export type User = {
  id: number;
  name: string;
  account: string;
  agency: string;
  balance: number;
  transactions: Transaction[];
};