import useQ from "@/hooks/useQ";
import { Form, useSubmit } from "react-router-dom";

export default function SearchCreateForm() {
  const submit = useSubmit();

  const q = useQ();

  return (
    <Form className="flex px-4">
      <input
        id="q"
        aria-label="Search contacts"
        placeholder="🔍 Search"
        type="search"
        // Upon submission, 'name' will be a query parameter in the URL
        name="q"
        className="mr-4 border-none font-extralight shadow"
        defaultValue={q}
        onChange={(e) => {
          submit(e.currentTarget.form);
        }}
      />
      <button type="submit" className="bg-sky-500 px-4 py-2 text-white">
        New
      </button>
    </Form>
  );
}
