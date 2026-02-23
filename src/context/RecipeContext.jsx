import React, { createContext, useContext, useState } from 'react'

export const RecipeContext = createContext(null);

export const useRecipes = () => {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error("useRecipes must be used within RecipeContextProvider");
    }
    return context;
};

const RecipeContextProvider = ({ children }) => {

    const [data, setData] = useState([
        {
            id: "1",
            title: "Butter Chicken",
            chef: "Chef Arjun Singh",
            category: "Dinner",
            ingredients: `
            Chicken pieces,
            Tomato puree,
            Butter,
            Cream,
            Garam masala,
            Kasuri methi,
            Ginger garlic paste,
            Salt and pepper to taste
        `,
            instructions: `
            Marinate chicken with spices and ginger garlic paste.,
            Cook chicken until lightly browned.,
            Prepare sauce with butter, tomato puree and spices.,
            Add cream and simmer until thickened.,
            Add cooked chicken to sauce and mix well.,
            Serve hot with naan or rice.
        `,
            description: `Rich and creamy Indian chicken curry in a buttery tomato sauce.`,
            image: "https://cdn.dummyjson.com/recipe-images/20.webp"
        },
        {
            id: "2",
            title: "Vegetable Biryani",
            chef: "Chef Riya Mehta",
            category: "Lunch",
            ingredients: `
            Basmati rice,
            Mixed vegetables,
            Saffron milk,
            Spices,
            Onion,
            Ginger garlic paste,
            Mint & coriander leaves,
            Salt to taste
        `,
            instructions: `
            Wash and soak rice.,
            Sauté spices and ginger garlic paste.,
            Add vegetables and cook until tender.,
            Layer cooked rice and saffron milk.,
            Simmer until rice is fully cooked.,
            Fluff and serve with raita.
        `,
            description: `Aromatic layered rice dish with mixed vegetables and Indian spices.`,
            image: "https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg"
        },
        {
            id: "3",
            title: "Masala Dosa",
            chef: "Chef Vikram Patel",
            category: "Breakfast",
            ingredients: `
            Dosa batter,
            Boiled potatoes,
            Mustard seeds,
            Turmeric,
            Curry leaves,
            Onion,
            Green chillies,
            Salt
        `,
            instructions: `
            Heat tawa and spread dosa batter thinly.,
            Cook until crisp and golden.,
            Prepare potato masala filling with spices.,
            Place filling inside dosa and fold.,
            Serve hot with chutney and sambar.
        `,
            description: `Crispy South Indian crepe with spiced potato filling.`,
            image: "https://cdn.dummyjson.com/recipe-images/28.webp"
        },
        {
            id: "4",
            title: "Paneer Tikka",
            chef: "Chef Kavita Rao",
            category: "Snack",
            ingredients: `
            Paneer cubes,
            Yogurt,
            Tandoori masala,
            Bell peppers,
            Onion,
            Lemon juice,
            Salt and pepper
        `,
            instructions: `
            Marinate paneer cubes with yogurt and spices.,
            Skewer with peppers and onions.,
            Grill until slightly charred.,
            Serve hot with mint chutney.
        `,
            description: `Smoky and spicy grilled Indian cottage cheese bites.`,
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYsofjYsyeOYdpvxopwdcJ5ZDpsmwNYFQur4wT1nVsaculHavzMRffVsN7FsBDPGvlPQ6El5VSYayfBvmNw_wnMfc_XWIuxbClGBxwckZMTx5uhwQWOZac16GaUs5kmdiRuGwWkndLwVHv/s1600/paneer+tikka.jpg"
        },
        {
            id: "5",
            title: "Chole Bhature",
            chef: "Chef Neha Sharma",
            category: "Lunch",
            ingredients: `
            Chickpeas soaked,
            Onion,
            Tomato,
            Chole masala,
            Ginger garlic paste,
            Flour,
            Yogurt,
            Salt
        `,
            instructions: `
            Cook chickpeas until soft.,
            Prepare spicy gravy with onions tomatoes and spices.,
            Knead bhature dough with flour and yogurt.,
            Roll and deep fry bhature until puffed.,
            Serve hot with chole.
        `,
            description: `Spicy chickpea curry with deep fried fluffy bread.`,
            image: "https://www.happy-tummy.co.in/wp-content/uploads/2020/07/Chole-Bhature-scaled.jpg"
        },
        {
            id: "6",
            title: "Aloo Paratha",
            chef: "Chef Rohan Gupta",
            category: "Breakfast",
            ingredients: `
            Wheat flour,
            Boiled potatoes,
            Cumin seeds,
            Chilli powder,
            Coriander,
            Salt,
            Ghee or oil
        `,
            instructions: `
            Mix mashed potato filling with spices.,
            Stuff into dough and roll out paratha.,
            Cook on hot tawa with ghee until golden.,
            Serve with curd and pickle.
        `,
            description: `Stuffed Indian flatbread with spiced potato filling.`,
            image: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2025-07/Aloo-Paratha-_2025_Lifestyle_H_2435.jpg"
        },
        {
            id: "7",
            title: "Samosa",
            chef: "Chef Meera Joshi",
            category: "Snack",
            ingredients: `
            Flour,
            Potatoes,
            Peas,
            Cumin seeds,
            Chilli powder,
            Salt,
            Oil for frying
        `,
            instructions: `
            Prepare dough and let rest.,
            Mix spicy potato pea filling.,
            Shape into triangles.,
            Deep fry until crisp and golden.,
            Serve with chutney.
        `,
            description: `Famous Indian crisp pastry snack with spicy filling.`,
            image: "https://www.thespruceeats.com/thmb/R-8QZ7bWFECFrBVRlhL-g3FPxrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/samosa-recipe-5208972-hero-03-df96a730eec248f18fbb2c6c24aa33eb.jpg"
        },
        {
            id: "8",
            title: "Rajma Chawal",
            chef: "Chef Arnav Kumar",
            category: "Lunch",
            ingredients: `
            Kidney beans soaked,
            Onion,
            Tomato,
            Ginger garlic paste,
            Rajma masala,
            Salt,
            Rice cooked
        `,
            instructions: `
            Prepare thick rajma gravy with onions and tomatoes.,
            Simmer until rich and creamy.,
            Serve hot over steamed rice.
        `,
            description: `Hearty red kidney bean curry served with rice.`,
            image: "https://cdn.dummyjson.com/recipe-images/27.webp"
        },
        {
            id: "9",
            title: "Gulab Jamun",
            chef: "Chef Sanya Kapoor",
            category: "Dessert",
            ingredients: `
            Milk powder,
            Flour,
            Cardamom,
            Milk,
            Sugar syrup,
            Rose water
        `,
            instructions: `
            Make dough with milk powder and flour.,
            Shape into balls and fry until golden.,
            Soak in warm sugar syrup with cardamom and rose water.,
            Serve warm.
        `,
            description: `Soft sweet dumplings in fragrant sugar syrup.`,
            image: "https://5.imimg.com/data5/SELLER/Default/2024/2/384944363/DN/MV/KT/144303146/gulab-jamun-desi-ghee.jpg"
        },
        {
            id: "10",
            title: "Vegetable Pulao",
            chef: "Chef Priya Reddy",
            category: "Dinner",
            ingredients: `
            Basmati rice,
            Mixed vegetables,
            Spices,
            Ginger garlic paste,
            Salt,
            Oil
        `,
            instructions: `
            Heat oil and sauté spices and ginger garlic paste.,
            Add vegetables and cook until tender.,
            Add rice and water.,
            Cook until rice is fluffy.,
            Serve hot.
        `,
            description: `Fragrant Indian rice pilaf with mixed vegetables.`,
            image: "https://c.ndtvimg.com/2023-01/bcdjpkg_pulao_625x300_31_January_23.jpg"
        }
    ]);
    console.log('data', data)

    return (
        <RecipeContext.Provider value={{ data, setData }}>
            {children}
        </RecipeContext.Provider>
    )
}

export default RecipeContextProvider
