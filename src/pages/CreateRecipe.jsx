import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form'
import { useRecipes } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateRecipe = () => {

  const { data, setData } = useRecipes()
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const SubmitHandler = (recipe) => {

    if (!recipe.image || !recipe.title || !recipe.chef || !recipe.description || !recipe.ingredients || !recipe.instructions) {
      toast.error('Please fill in all fields');
      return;
    }
    if (!recipe.category) {
      toast.error('Please select a category');
      return;
    }

    recipe.id = nanoid();

    setData(prevData => [...prevData, recipe]);

    toast.success('Recipe created successfully');

    reset();

    navigate('/recipes');
  }

  return (
    <form
      onSubmit={handleSubmit(SubmitHandler)}
      className=" mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-xl space-y-8"
    >
      <div className='w-full mx-auto grid sm:grid-cols-2 gap-5'>
        <div className='flex flex-col gap-2'>
          <input
            type="url"
            {...register("image")}
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
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
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
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
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <small className='text-red-400'>
            * Chef name should be less than 100 characters
          </small>
        </div>

        <div className='flex flex-col gap-2'>
          <select name="category" id="category" {...register("category")} className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition">
            <option className='text-black' value="">Select Category</option>
            <option className='text-black' value="breakfast">Breakfast</option>
            <option className='text-black' value="lunch">Lunch</option>
            <option className='text-black' value="dinner">Dinner</option>
            <option className='text-black' value="dessert">Dessert</option>
          </select>

          <small className='text-red-400'>
            * Category should be selected
          </small>
        </div>

        <div className='flex flex-col gap-2'>
          <textarea
            type="text"
            {...register("description")}
            placeholder="Recipe Description"
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
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
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
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
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          ></textarea>
          <small className='text-red-400'>
            * Instructions should be less than 1000 characters
          </small>
        </div>


      </div>

      <button
        type="submit"
        className="w-full py-3 bg-linear-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:bg-linear-to-l  active:scale-95 transition-transform duration-300 shadow-lg cursor-pointer text-gray-900"
      >
        Save Recipe
      </button>
    </form>
  )
}

export default CreateRecipe
