import CategoryItem from "../components/CategoryItem"

const categories =[
  {href:"/pots", name:"Pots", imageUrl:"/pots.png"},
  {href:"/tools", name:"Tools", imageUrl:"/tools.png"},
  {href:"/seeds", name:"Seeds", imageUrl:"/seeds.png"},
  {href:"/fertilizers", name:"Fertilizers", imageUrl:"/fertilizers.png"}
]

const HomePage = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">Explore our Categories</h1>
        <p className="text-center text-gray-400 mb-12">Discover a wide range of products for your gardening needs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-10 justify-center ">
          {categories.map((category) => (
            <CategoryItem
              category={category}
              key={category.name}/>
          ))}
          </div>
        </div>
    </div>
  )
}

export default HomePage