import { useForm } from "../../hooks/useForm"

export const FormCreateBook = () => {

  const {nameText, }= useForm({
    name: '',
    author: '',
    release_year: '',
    is_available: '',

  })

  return (
    <>
      <h1>Create Book</h1>
      <hr />

    </>
  )
}
