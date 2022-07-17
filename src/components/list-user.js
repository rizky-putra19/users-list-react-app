import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Filter from "./filter-by-country";
import Pagination from './pagination';
import style from '../App.css'

const List = () => {
  const [data, setData] = useState([]);
  const [nat, setNat] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    apiResponse();
  }, []);

  const changeHandler = async (e) => {
    let { value } = e.target;
    setNat(value);
    setPage(1)

    return apiResponse(page, value);
  };

  const clickNextPageHandler = async (e) => {
    setPage(page + 1);

    return apiResponse(page, nat)
  };

  const clickPreviousPageHandler = async (e) => {
    if (page === 1) {
      setPage(1);

      return apiResponse(page, nat)
    }
    setPage(page - 1);

    return apiResponse(page, nat)
  };

  const apiResponse = async (page, value) => {
    return await axios
      .get(`https://randomuser.me/api/?page=${page}&results=10&nat=${value}`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3 className="mt-3">List Data Users</h3>
      <br />
      <Filter changeHandler={changeHandler} />
      <br />
      <Table striped>
        <thead>
          <tr>
            <th>Id Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Birthdate</th>
            <th>Photo Profile</th>
            <th>City, Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return data ? (
              <tr key={i}>
                <td>ID-{d.login.uuid.slice(0, 8).toUpperCase()}</td>
                <td>{`${d.name.title}  ${d.name.first}  ${d.name.last}`}</td>
                <td>{d.email}</td>
                <td>{moment(d.dob.date).format("DD/MM/YYYY HH:mm:ss")}</td>
                <td>
                  <img className="rounded-circle" srcSet={d.picture.medium} alt="photo profile" />
                </td>
                <td>
                  {d.location.city}, {d.location.country}
                </td>
              </tr>
            ) : (
              <tr key={i}>
                <td></td>
                <td></td>
                <td></td>
                <td>Loading...</td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="paginator" style={style}>
        <Pagination
          nextPage={clickNextPageHandler}
          previousPage={clickPreviousPageHandler}
          page={page}
        />
      </div>
    </div>
  );
};

export default List;
