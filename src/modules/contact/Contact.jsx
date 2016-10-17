/******************************************************************************\
* File: Contact.jsx
*
* Author: Josh Taylor
*
* Description: Contact page content
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React    from 'react'
import { Link } from 'react-router'
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'style/contact/Contact.scss'
//------------------------------------------------------------------------------
// Utils -----------------------------------------------------------------------
import links from 'util/links'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------
import SocialBar    from 'modules/common/SocialBar'
//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    render: function() {
        return (
            <div className="contact_Contact">
                <h1 className="title">Heyo!</h1>
                <h4 className="main-text">
                    How lovely to have you here!
                    <br /><br />
                    I'm Noga, a San Francisco-based user interface and product
                    designer. Currently, I freelance on Gigster, where I work
                    with startups large and small on creating x with a team of
                    product managers and developers.
                    <br /><br />
                    On the weekends, I do things
                    like <Link to={links.goop}>pour goop on my head</Link>
                    , <Link to={links.nose}>build giant noses</Link>
                    , and <Link to={links.silly}>make silly videos</Link>.
                </h4>

                <img 
                    className="image"
                    src="/pics/contact.jpg"
                />

                <h4 className="sub-image">Let's chat on the internets!</h4>

                <SocialBar />

            </div>
        )
    }
})