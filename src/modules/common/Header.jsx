/******************************************************************************\
* File: Header.jsx
*
* Author: Josh Taylor
*
* Description: Header for pages
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React    from 'react'
import { Link } from 'react-router'
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'style/common/Header.scss'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------

//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    render: function() {
        return (
            <div className="common_Header" key={this.props.page}>
                <div className="links">
                    <p className="name"><Link to="/">Noga Raviv</Link></p>
                    <p className={`work ${this.props.contact ? '' : 'selected'}`}><Link to="/">Work</Link></p>
                    <p className={`contact ${this.props.contact ? 'selected' : ''}`}><Link to="/contact">Contact</Link></p>
                </div>
            </div>
        )
    }
})