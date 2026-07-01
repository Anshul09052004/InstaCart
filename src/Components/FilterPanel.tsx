import { categoriesData } from "../assets/assets";



function FilterPanel({ category, minPrice, maxPrice, updateFilter, clearFilters, hashFilter }: any) {
    const categoriesWithAll = [{ slug: '', name: 'All' }, ...categoriesData]
   return (
    <div className="flex flex-col gap-6">
      {/* Categories Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
          Categories
        </h3>
        <div className="flex flex-col space-y-1">
          {categoriesWithAll.map((c) => (
            <button
              key={c.slug}
              onClick={() => updateFilter('category', c.slug)}
              className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                c.slug === category 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Price Range Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
          Price Range
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => updateFilter('minPrice', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-shadow"
            min="0"
          />
          <span className="text-gray-400 font-medium">-</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => updateFilter('maxPrice', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-shadow"
            min="0"
          />
        </div>
      </div>

      {/* Clear Filters Button */}
      {hashFilter && (
        <button 
          onClick={clearFilters}
          className="w-full mt-2 py-2.5 px-4 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-lg text-sm font-medium transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}

export default FilterPanel
