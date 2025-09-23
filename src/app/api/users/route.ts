import { NextResponse } from "next/server";
import { User } from "./types";


const users: User[] = [
  { 
    id: 1, 
    name: "Joan of Arc", 
    account: "1234-5", 
    agency: "4321",
    balance: 3000.00,
    points: 1260.00,
    transactions: [
      { 
        id: 1, 
        value: 10.00, 
        type: "Expense",
        method: "Transfer",            
        date: "2025-09-15T09:30:00Z",  
        counterpart: "Lorena Lumens"   
      },
      { 
        id: 2, 
        value: 33.00, 
        type: "Income",
        method: "Transfer",            
        date: "2025-09-15T09:30:00Z",  
        counterpart: "Mateus Sombre"   
      },
      { 
        id: 3, 
        value: 60.50, 
        type: "Expense",
        method: "Debit",            
        date: "2025-09-15T09:30:00Z",  
        counterpart: "Oinc Food"   
      }
    ]
  }
];

export async function GET() {
  return NextResponse.json(users);
}