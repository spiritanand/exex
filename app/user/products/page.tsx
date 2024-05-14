import { getMyProducts } from "@/server/queries";

async function Page() {
  const allProducts = await getMyProducts();

  return (
    <main>
      <h2 className="scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
        All Product
      </h2>

      {allProducts?.map((product) => (
        <div key={product.id} className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-500">{product.description}</p>
        </div>
      ))}
    </main>
  );
}

export default Page;
