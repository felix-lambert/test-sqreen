import React from 'react'
import { store } from '../store/'
import FaUserAdd from 'react-icons/lib/ti/user-add'
import FaSearch from 'react-icons/lib/fa/search'

export default class UserRow extends React.Component {
  render() {
    if (this.props.user && typeof this.props.user.name === 'string') {
      var name = this.props.user.name;
      var email = this.props.user.email;
    
      <span>
        {name}
      </span>;
    } else {
      return (<div></div>);
    }
    return (
      <tr>
        <td>
          <div className="row">
            <div className="col-md-2">
              <div className="testimonial-desc">
                <h1>
                <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" alt="" /> 
                </h1>
              </div>
              </div>
              <div className="col-md-6 well-blue-p">
              <p>{name}
              <br/>
                <small className='logo'>{email}</small>
              </p>
                
              </div>
            </div>
        </td>
        <td className='text-center logo'><h1><FaUserAdd /></h1>Click here</td>
      </tr>
    );
  }
}