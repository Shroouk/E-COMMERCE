import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../Components/ProductCard';



function PaginatedItems({ itemsPerPage,items }) {

    function Items({ currentItems }) {
        return (
          <>
            {currentItems &&
              currentItems.map((item) => (
                <>
                 
                  <ProductCard key={item.id} id={item.id} title={item.title} img={item.image} price={item.price} />
                </>
              ))}
          </>
        );
      }
      
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
 // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
  //  console.log(
    //  `User requested page number ${event.selected}, which is offset ${newOffset}`
    //);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        previousLabel="<<"
        nextLabel=">>"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="pagination"
        activeClassName="active"
        onPageChange={handlePageClick}
      />
    </>
  );
}

export default  PaginatedItems;