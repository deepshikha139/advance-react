import {appString} from '../utils'
export const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
    return (
      <nav>
        <div className="pagination">
          <>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              {appString.previous}
            </button>
          </>
            <span className='page-item'>{`${currentPage}/${Math.ceil(totalPosts / postsPerPage)}`}</span>
          <>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}>
            {appString.next}
            </button>
          </>
        </div>
      </nav>
    );
  };