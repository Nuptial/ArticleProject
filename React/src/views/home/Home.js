import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Pagination from '../../components/pagination/pagination';
import Loader from "react-loader-spinner";
import "./Home.sass";

function Home() {
  const reqUrl = "http://localhost:1337/articles";
  let [activePage, setActivePage] = useState(1);
  const [articles, setArticles] = useState([]);
  const perPageCount = 5;

  useEffect(() => {
    fetch(reqUrl)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  const generateArticles = () => {
    return articles
      .sort((d1, d2) => new Date(d2.date).getTime() - new Date(d1.date).getTime())
      .slice((activePage - 1) * perPageCount, activePage * perPageCount)
      .map((article) => {
        return (
          <tr key={article.id}>
            <td>{article.title}</td>
            <td>
              <Link to={`/detail/${article.id}`}>
                {article.detail.slice(0, 20) + "..."}
              </Link>
            </td>
            <td>{article.date}</td>
          </tr>
        );
      });
  }

  const generatePagination = () => {
    return (
      articles.length > perPageCount && (
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          articles={articles}
          pageCount={perPageCount}
        ></Pagination>
      )
    );
  }

  return (
    <div className="container">
      {!articles.length ? (
        <Loader type="ThreeDots" color="#dddddd" height={500} />
      ) : (
        <>
          <h2>Articles</h2>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Title</th>
                  <th>Detail</th>
                  <th>Date</th>
                </tr>
                {generateArticles()}
              </tbody>
            </table>
          </div>
          {generatePagination()}
        </>
      )}
    </div>
  );
}

export default Home;