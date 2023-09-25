import { useForm } from "react-hook-form";
import "./CreateBook.css";

export const FormCreateBook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createBook(data);
  };

  let createBook = async (data) =>
    fetch("http://localhost:8080/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        author: data.author,
        release_year: data.release_year,
        is_available: data.is_available,
      }),
    });

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <h1>Create Book</h1>
      <hr />
      <form className="create-book" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <input
          type="text"
          placeholder="author"
          {...register("author", { required: true })}
        />
        {errors.author && <span>This field is required</span>}
        <input
          type="number"
          placeholder="release_year"
          {...register("release_year", { required: true })}
        />
        {errors.release_year && <span>This field is required</span>}
        <label> is available</label>
        <input type="checkbox" {...register("is_available")} />

        <input type="submit" />
      </form>
    </>
  );
};
