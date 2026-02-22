import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form'

const CreateRecipe = () => {

  const { register, handleSubmit } = useForm();

  const SubmitHandler = (data) => {
    data.id = nanoid();
    console.log(data);

  }

  return (
    <form onSubmit={handleSubmit(SubmitHandler)} className='w-full flex flex-col mx-auto gap-5 py-10 sm:text-lg' >
      <div className='w-full mx-auto grid sm:grid-cols-2 gap-5'>
        <div className='flex flex-col gap-2'>
          <input
            type="url"
            {...register("image")}
            className='block w-full border-b-2 outline-none'
            placeholder='Image URL'
          />
          <small className='text-red-400'>
            * Image should be less than 1MB
          </small>
        </div>

        <div className='flex flex-col gap-2'>
          <input
            type="text"
            {...register("title")}
            placeholder="Recipe Title"
            className='block w-full border-b-2 outline-none'
          />
          <small className='text-red-400'>
            * Title should be less than 100 characters
          </small>
        </div>

        <div className='flex flex-col gap-2'>
          <input
            type="text"
            {...register("chef")}
            placeholder="Chef Name"
            className='block w-full border-b-2 outline-none'
          />
          <small className='text-red-400'>
            * Chef name should be less than 100 characters
          </small>
        </div>

        <div className='flex flex-col gap-2'>
          <select name="category" id="category" {...register("category")} className='block w-full border-b-2 outline-none'>
            <option className='text-black' value="">Select Category</option>
            <option className='text-black' value="breakfast">Breakfast</option>
            <option className='text-black' value="lunch">Lunch</option>
            <option className='text-black' value="dinner">Dinner</option>
            <option className='text-black' value="dessert">Dessert</option>
          </select>
        </div>

        <div className='flex flex-col gap-2'>
          <textarea
            type="text"
            {...register("description")}
            placeholder="Recipe Description"
            className='block w-full border-b-2 outline-none'
          ></textarea>
          <small className='text-red-400'>
            * Description should be less than 1000 characters
          </small>
        </div>

        <div className='flex flex-col gap-2'>
          <textarea
            type="text"
            {...register("ingredients")}
            placeholder="write ingredients seperated by commas"
            className='block w-full border-b-2 outline-none'
          ></textarea>
          <small className='text-red-400'>
            * Ingredients should be less than 1000 characters
          </small>

        </div>

        <div className='flex flex-col gap-2'>
          <textarea
            type="text"
            {...register("instructions")}
            placeholder="write instructions seperated by commas"
            className='block w-full border-b-2 outline-none'
          ></textarea>
          <small className='text-red-400'>
            * Instructions should be less than 1000 characters
          </small>
        </div>


      </div>

      <button className='block self-end w-fit mt-5 bg-green-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600 transition-colors duration-300 active:scale-95' type='submit' >
        Save Recipe
      </button>
    </form>
  )
}

export default CreateRecipe
