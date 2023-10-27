import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
function CreateForm() {
  const [user] = useAuthState(auth);
  const schema = yup.object().shape({
    title: yup.string().required("you must add a title"),
    description: yup.string().required("you must add a text")
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  })

  const postRef = collection(db, "posts")

  const onCreatePost = (data) => {
    await addDoc(postsRef, {
      //title: data.title,
      //description: data.description,
      ...data,
      username: user?.displayName,
      id: user?.uid,
    })
  }

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder="Title..." {...register("title")} />
      <p>{errors.title.message}</p>
      <input placeholder="Description..."{...register("description")} />
      <p>{errors.description.message}</p>
      <input type="submit" {...register} />
    </form>
  )
}

export default CreateForm
