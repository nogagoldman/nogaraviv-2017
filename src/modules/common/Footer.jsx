/******************************************************************************\
* File: Footer.jsx
*
* Author: Josh Taylor
*
* Description: App footer
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React        from 'react'
import { Link }     from 'react-router'
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'style/common/Footer.scss'
//------------------------------------------------------------------------------
// Utils -----------------------------------------------------------------------
import links from 'util/links'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------
import SocialBar from 'modules/common/SocialBar'
//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    render: function() {
        return (
            <div className="common_Footer">
            <h5>
            Noga is a human bean, designer, and crafter. Previously, she
            designed at <a href={links.workhorse} target="_blank">Workhorse</a>,
            founded <a href={links.technica} target="_blank">Technica</a>, and helped
            direct <a href={links.startupshell} target="_blank">Startup Shell</a>. She also holds
            a world record for the largest ball of tape.
            </h5>
            <SocialBar />
            </div>
            )
    }
})