import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { create } from "@/app/user/products/SubmitAction";

function AddProductForm() {
  const createWithUserId = create.bind(null, "user1");

  return (
    <form
      className="container mt-10 flex flex-col gap-7"
      action={createWithUserId}
    >
      <Label>
        Name
        <Input placeholder="product name" className="mt-2" name="name" />
      </Label>

      <Label>
        Description
        <Input
          placeholder="describe your product"
          className="mt-2"
          name="description"
        />
      </Label>

      <Button type="submit" className="self-center">
        Create
      </Button>
    </form>
  );
}

export default AddProductForm;
