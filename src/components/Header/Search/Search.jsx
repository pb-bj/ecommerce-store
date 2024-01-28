import { useState } from "react"
import { Link } from "react-router-dom";
import './Search.scss';

const Search = ({ products }) => {
    const [ searchQuery, setSearchQuery ] = useState('');
    
    // search functionality
    const filteredProducts = (searchQuery === '' )? [] : products.filter((product) => {
       return product.title.toLowerCase().includes( searchQuery.toLowerCase()) || 
                product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase());
    })
  return (
    <>
    <input 
        type="search" 
        placeholder="Search for products"
        value={searchQuery}
        onChange={ (e) => setSearchQuery(e.target.value) }
    />
      <ul className="product">
          {  filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`}> {/* for routing single page */}
                  <li key={product.id} className="searchedProducts" onClick={() => setSearchQuery('')}>
                      <div className="image">
                        <img src={product.image} alt="" width={55} />
                      </div>
                        <div className="searched-title" style={{ color: '#000'}}>{product.title}</div>
                  </li>
              </Link>
            ))}
        </ul>
      
    </>
  )
}

export default Search