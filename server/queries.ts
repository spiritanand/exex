import "server-only";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { products } from "@/lib/db/schema";
import { auth } from "@/auth";

export async function getMyProducts() {
  const session = await auth();

  if (!session?.user) return null;

  const id = session.user.id ?? "";

  return db.query.products.findMany({
    where: eq(products.userId, id),
  });
}
