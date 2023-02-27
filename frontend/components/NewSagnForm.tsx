import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TagsListBox from "./Controller/tagsListBox";
import Input from "./Input";
import TextArea from "./TextArea";
import SelectedTagsBox from "./Controller/selectedTagsBox";
import { json } from "stream/consumers";

interface Inputs {
  title: string;
  story: string;
  tags : string[];
}

interface Props {
  className?: string;
}
 const postSagn=async (data:Inputs)=>{
  const JSOndata= {
    "title":data.title,
    "text":data.story,
    "tags":[data.tags],
    "likes":13,
    "dislikes":13,
    "id":21,
    "postedAt":{"$date":new Date()}}; 
  const options:RequestInit={
    headers:{
      'Content-Type':'application/json',
    },
    method:'POST',
    body:JSON.stringify(JSOndata),
  } 
  console.log(JSOndata)
  const endpoint=("http://localhost:3000/api/post/postPost")
  const response = await fetch(endpoint,options).catch(
  )
  const result =response.json;
  console.log(result)
  }


const NewSagnForm = ({className}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  
  const [tags, setTags] = useState([])
  const addTag= () => {

  }

  const onSubmit: SubmitHandler<Inputs> = (data) =>postSagn(data);
  useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${className}`}>
      <Input
        {...register("title")}
        className="mt-4"
        labelText="Tittel"
      />
      <TextArea
        {...register("story", { required: false })}
        className="mt-4"
        labelText="Historie"
        error={errors.story && "Historien må skrives"}
      />
      <div className="flex flex-row space-x-2 place-content-between">
        <button
            className="mt-2 transition duration-500 active:scale-95 py-2 px-4 bg-violet-500 hover:bg-violet-700
                 hover:bg-gra text-white shadow shadow-violet-600/25 rounded-md hover:shadow-violet-600/75"
            type="submit"
        >
            submit
        </button>
        <TagsListBox className="mt-2" list={tags} onChange={addTag}/>
      </div>
      {/* <SelectedTagsBox className=""/> */}
    </form>
  );
};

export default NewSagnForm;