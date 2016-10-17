/******************************************************************************\
* File: Ippycon.jsx
*
* Author: Josh Taylor
*
* Description: Idiomatic Page
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React    from 'react'
import { Link } from 'react-router'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------
import Header       from 'modules/common/Header'
import ProjectPage  from 'modules/common/ProjectPage'
import pages        from 'pages'
//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    render: function() {

        const pageName = 'idiomatic';

        let page = pages[pageName];

        return (
            <ProjectPage
            title={page.title}
            roles={page.roles}
            url={page.url}
            page={pageName}
            >

            <div className="content-text">
            <p>Idiomatic translates common English idioms into their literal meanings. It was created over a 12-hour period during the <b>Spectra all-ladies hackathon at Youtube Headquarters</b>. I worked as the designer on a team with developers, and a product manager.
            </p>
            <p>Idiomatic solves problems for English as a Second Language (ESL) students who aren&#39;t familiar with American idioms, and people with autism who tend to understand words literally.
            </p>
            <p>We created a website that allows people who want to know the meaning of an idiom by searching a phrase or searching via a suggested word. The site also allows users to type in keywords, in case the entire phrase was forgotten.
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/idiomatic/idiomatic-website.jpg" />
            </div>
            </div>

            </ProjectPage>

            )
    }
})