import { useState } from "react"
import { Link } from "react-router-dom";

const Search = ({ products }) => {
    const [ searchQuery, setSearchQuery ] = useState('');
    // const [ showResult, setShowResult ] = useState(true);

    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
      // setShowResult(false);
    }
    
    // search functionality
    const filteredProducts = (searchQuery === '')? [] : products.filter((product) => {
       return product.title.toLowerCase().includes( searchQuery.toLowerCase()) || 
                product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase());
    })
  return (
    <>
    <input 
        type="search" 
        placeholder="Search for products"
        onChange={ handleSearch }
    />
     {/* { showResult && (  */}
      <ul className="product">
          { filteredProducts.map((product) => (
              <>
              <Link to={`/product/${product.id}`}> {/* for routing single page */}
                <li className="searchedProducts" key={product.id}>{product.title}</li>
              </Link>
              </>
          ))}
        </ul>
      {/* )} */}
    </>
  )
}

export default Search