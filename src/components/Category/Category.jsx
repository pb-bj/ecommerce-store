import './Category.scss';

const Category = ({ header }) => {
  return (
    <div className='category-container'>
        <h2 className='category-header'>{ header }</h2>
        <div className="category-wrapper">
          <aside className="category-left">
              <p>filter Options</p>
          </aside>
          <div className="category-right">
              <div>category</div>
              <div>category</div>
              <div>category</div>
          </div>
        </div>
    </div>
    )
}

export default Category;