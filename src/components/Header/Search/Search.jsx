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
              <Link to={`/product/${product.id}`}> {/* for routing single page */}
              <li key={product.id} className="searchedProducts">
              <div className="image">
                <img src={product.image} alt="" width={55} />
              </div>
                <div className="searched-title" style={{ color: '#000'}}>{product.title}</div>
              </li>
              </Link>
          ))}
        </ul>
      {/* )} */}
    </>
  )
}

export default Search