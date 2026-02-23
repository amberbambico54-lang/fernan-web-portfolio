function CategoryItem({ category }) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 dark:text-white">{category.category}</h3>

      <ul className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300">
        {category.items.map((item, i) => (
          <li className="bg-white dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-md shadow-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryItem;
