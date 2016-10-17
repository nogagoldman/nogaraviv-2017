/******************************************************************************\
* File: SocialBar.jsx
*
* Author: Josh Taylor
*
* Description: List of social contact methods
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React from 'react'
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'style/common/SocialBar.scss'
//------------------------------------------------------------------------------
// Utils -----------------------------------------------------------------------
import links from 'util/links'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------

//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    render: function() {
        return (
            <h6 className="common_SocialBar">
                <a href={'mailto:' + links.email} target="_blank">
                    EMAIL
                </a> / <a href={links.twitter} target="_blank">
                    TWITTER
                </a> / <a href={links.medium} target="_blank">
                    MEDIUM
                </a> / <a href={links.dribbble} target="_blank">
                    DRIBBBLE
                </a> / <a href={links.vimeo} target="_blank">
                    VIMEO
                </a>
            </h6>
        )
    }
})