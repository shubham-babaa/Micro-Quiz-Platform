// src/app/api/categories/route.ts
import { NextResponse } from 'next/server';
import { Category,categories } from '@/data/categories';
export async function GET() {
   const categorie: Category[] =categories
  return NextResponse.json({ categorie });
}
