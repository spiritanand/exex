import AddProductForm from "@/app/user/products/AddProductForm";

function Page() {
  return (
    <main>
      <h2 className="scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
        Add Product
      </h2>
      <AddProductForm />
    </main>
  );
}

export default Page;
