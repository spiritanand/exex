"use server";

import { z, ZodError } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name should be at least 2 characters long",
  }),
  description: z.string().min(10, {
    message: "Description should be at least 10 characters long",
  }),
});

export async function create(userId: string, formData: FormData) {
  try {
    const { name, description } = formSchema.parse({
      name: formData.get("name"),
      description: formData.get("description"),
    });

    console.log({
      userId,
    });

    console.log(
      "Creating product with name:",
      name,
      "and description:",
      description,
    );

    return {
      status: "success",
      message: "Product created successfully",
    };
  } catch (e) {
    // In case of a ZodError (caused by our validation) we're adding issues to our response
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }

    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
