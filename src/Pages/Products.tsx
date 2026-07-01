import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { dummyProducts, categoriesData } from '../assets/assets';
import type { Product } from '../types/index';
import { FaHome, FaSlidersH, FaCaretDown, FaStar, FaTimes } from 'react-icons/fa';
import { MdFormatClear } from 'react-icons/md';
import { Loader } from 'lucide-react';
import FilterPanel from '../Components/FilterPanel';
import { useCart } from "../Context/CartContext";
import {FaShoppingCart } from "react-icons/fa";

function Products() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
    const { addToCart } = useCart();

    const category = searchParams.get('category') || '';
    const page = searchParams.get('page') || '1';
    const sort = searchParams.get('sort') || '';
    const organic = searchParams.get('organic') || '';
    const minPrice = searchParams.get('minPrice') || '';
    const maxPrice = searchParams.get('maxPrice') || '';

    const fetchProducts = async () => {
      setLoading(true);

      // Filter by category
      let filtered = dummyProducts.filter(p => p.category === category || category === '');

      // Filter by price
      if (minPrice) filtered = filtered.filter(p => p.price >= Number(minPrice));
      if (maxPrice) filtered = filtered.filter(p => p.price <= Number(maxPrice));

      // Sort products
      if (sort === 'price_asc') filtered.sort((a, b) => a.price - b.price);
      else if (sort === 'price_desc') filtered.sort((a, b) => b.price - a.price);
      else if (sort === 'rating') filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      else if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

      setProducts(filtered);
      setLoading(false);
    };


    useEffect(() => {
      fetchProducts();

    }, [category, page, sort, organic, minPrice, maxPrice]);

    const updateFilter = (key: string, value: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      if (value) {
        newSearchParams.set(key, value);
      } else {
        newSearchParams.delete(key);
      }
      if (key !== 'page') {
        newSearchParams.delete('page');
      }
      setSearchParams(newSearchParams);
    };

    const clearFilters = () => {
      setSearchParams(new URLSearchParams());
    };

    const activeCategory = categoriesData.find((c) => c.slug === category);
    const hashFilter = category || organic || minPrice || maxPrice;

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            <FaHome className="text-lg" />
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-900">{activeCategory?.name || "All Products"}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Filter Categories</h3>
              <FilterPanel
                category={category}
                minPrice={minPrice}
                maxPrice={maxPrice}
                updateFilter={updateFilter}
                clearFilters={clearFilters}
                hashFilter={hashFilter}
              />
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Header & Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {activeCategory?.name || "All Products"}
                </h1>
                <p className="text-gray-500 mt-1">{products.length} Products Found</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden flex items-center justify-center gap-2 bg-gray-100 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex-1 sm:flex-none"
                >
                  <FaSlidersH /> Filters
                </button>

                {/* Sort Dropdown */}
                <div className="relative flex-1 sm:flex-none">
                  <select
                    value={sort}
                    onChange={(e) => updateFilter("sort", e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-300 px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-700 cursor-pointer"
                  >
                    <option value="">Newest</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="rating">Rating</option>
                    <option value="name">A to Z</option>
                  </select>
                  <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader className="animate-spin text-blue-600 w-10 h-10" />
              </div>
            ) : products.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg mb-4">No products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MdFormatClear /> Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <Link to={`/products/${product._id}`} className="flex flex-col h-full">
                      {/* Product Image */}
                      <div className="bg-gray-50 rounded-xl h-48 flex items-center justify-center overflow-hidden mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Product Name */}
                      <h3 className="font-semibold text-gray-800 line-clamp-2 min-h-[3rem]">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mt-2">
                        <FaStar className="text-yellow-400 text-sm" />
                        <span className="text-sm text-gray-600 font-medium">{product.rating}</span>
                      </div>

                      {/* Price */}
                      <div className="mt-auto pt-4 flex items-end gap-2">
                        <span className="text-xl font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm line-through text-gray-400 mb-0.5">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
                      >
                        <FaShoppingCart />
                        Add to Cart
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>


        {mobileFilterOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 transition-opacity"
              onClick={() => setMobileFilterOpen(false)}
            />

            {/* Sliding Panel */}
            <div className="relative w-full max-w-xs h-full bg-white shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-left">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={clearFilters}
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    aria-label="Clear filters"
                  >
                    <MdFormatClear className="text-xl" />
                  </button>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    aria-label="Close filters"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <FilterPanel
                  category={category}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  updateFilter={updateFilter}
                  clearFilters={clearFilters}
                  hashFilter={hashFilter}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

export default Products;