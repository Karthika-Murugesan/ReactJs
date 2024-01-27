import React from 'react';
import './FormStyle.css';
import { Link } from 'react-router-dom';
function LoginForm() {
  return (
    <div className="container">
      <u><center><h2>Sign Up</h2></center></u>
      <table>
        <tr>
          
        </tr>
        <tr>
          <td>
            <label>
               <b>Name:</b>
            </label>
          </td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <label>
               <b> Email:</b>
            </label>
          </td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <b>Password: </b>
            </label>
          </td>
          <td>
            <input type="password" />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button>SignUp</button>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <h3>
              Already have an account? <Link to="/SignUp" id="bu">Login</Link>
            </h3>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default LoginForm;
