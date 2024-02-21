import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const Navbar = (props) => {
  // const setCountry = (event) => {
  //   console.log(event.target.value)
  // }

  return (
    <div className="sticky-top">
      <nav className="navbar  navbar-expand-lg shadow" data-bs-theme="dark" style={{ backgroundColor: '#2d2b39' }}>
        <div className="container-fluid">
          <Link key="" className="navbar-brand" to="/">
            &#128039;PenguiNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link key="" className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {/* {News Categories} */}

              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
              <li className="nav-item">

                {/* {Countries} */}
                <select className="form-select form-select-sm m-2" onChange={props.ctrOption}>
                  <option value="in" disabled>Countries</option>
                  <option value="in">India</option>
                  <option value="us">United States</option>
                  <option value="gb">United Kingdom</option>
                  <option value="jp">Japan</option>
                  <option value="ae">United Arab Emirates</option>
                  <option value="ar">Argentina</option>
                  <option value="at">Austria</option>
                  <option value="au">Australia</option>
                  <option value="be">Belgium</option>
                  <option value="bg">Bulgaria</option>
                  <option value="br">Brazil</option>
                  <option value="ch">Switzerland</option>
                  <option value="cn">China</option>
                  <option value="co">Colombia</option>
                  <option value="cu">Cuba</option>
                  <option value="cz">Czech Republic</option>
                  <option value="de">Germany</option>
                  <option value="eg">Egypt</option>
                  <option value="fr">France</option>
                  <option value="gr">Greece</option>
                  <option value="hk">Hong Kong</option>
                  <option value="hu">Hungary</option>
                  <option value="id">Indonesia</option>
                  <option value="ie">Ireland</option>
                  <option value="il">Israel</option>
                  <option value="it">Italy</option>
                  <option value="kr">Korea</option>
                  <option value="lt">Lithuania</option>
                  <option value="lv">Latvia</option>
                  <option value="ma">Morocco</option>
                  <option value="mx">Mexico</option>
                  <option value="my">Malaysia</option>
                  <option value="ng">Nigeria</option>
                  <option value="nl">Netherlands</option>
                  <option value="no">Norway</option>
                  <option value="nz">New Zealand</option>
                  <option value="ph">Philippines</option>
                  <option value="pl">Poland</option>
                  <option value="pt">Portugal</option>
                  <option value="ro">Romania</option>
                  <option value="ru">Russian Federation</option>
                  <option value="sa">Saudi Arabia</option>
                  <option value="se">Sweden</option>
                  <option value="sg">Singapore</option>
                  <option value="si">Slovenia</option>
                  <option value="sk">Slovakia</option>
                  <option value="th">Thailand</option>
                  <option value="tr">Turkey</option>
                  <option value="tw">Taiwan</option>
                  <option value="ua">Ukraine</option>
                  <option value="ve">Venezuela,Bolivarian</option>
                  <option value="za">South Africa</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  ctrOption: "in"
}

// Navbar.propTypes = {
//   ctrOption: PropTypes.func
// }

export default Navbar;
