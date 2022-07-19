import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FcHome } from "react-icons/fc";

const Contact = () => {
  return (
    <div>
      <div
        className='card d-flex flex-wrap justify-content-between align-items-center'
        style={{ width: `49%`, margin: "15px auto" }}>
        <div className='card-header'>
          <Link to='/'>
            <FcHome size={17} />
            &nbsp;&nbsp;Home
          </Link>
        </div>
        <div
          className='card-body flex-wrap justify-content-between align-items-center py-3 my-4'
          style={{ textAlign: "left" }}>
          <Table style={{ textAlign: `left` }}>
            <tbody>
              <tr>
                <td>
                  <strong>Repo</strong>
                </td>
                <td>
                  <a href='https://github.com/kocak-ilyas/UPaymentsTask' className='card-link'>
                    https://github.com/kocak-ilyas/UPaymentsTask
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Demo</strong>
                </td>
                <td>
                  <a href='https://upayment.netlify.app/' className='card-link'>
                    https://upayment.netlify.app
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Linkedin</strong>
                </td>
                <td>
                  <a href='https://www.linkedin.com/in/ilyaskocak' className='card-link'>
                    https://www.linkedin.com/in/ilyaskocak
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>GitHub</strong>
                </td>
                <td>
                  <a href='https://github.com/kocak-ilyas' className='card-link'>
                    https://github.com/kocak-ilyas
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Gmail</strong>
                </td>
                <td>
                  <span className='card-link'>kocakilyas18@gmail.com</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Contact;
