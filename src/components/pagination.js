import style from "../App.css";

const Pagination = (props) => {
  const { nextPage, previousPage, page } = props;
  return (
    <nav className="d-inline-flex" aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" onClick={previousPage} aria-label="Previous">
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            {page}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" onClick={nextPage} aria-label="Next">
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
