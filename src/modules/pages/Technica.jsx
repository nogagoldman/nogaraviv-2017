/******************************************************************************\
* File: Technica.jsx
*
* Author: Josh Taylor
*
* Description: Technica Page
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

        const pageName = 'technica';

        let page = pages[pageName];

        return (
            <ProjectPage
            title={page.title}
            roles={page.roles}
            url={page.url}
            page={pageName}
            >
            <div className="content-img">
            <div className="image">
            <img src="/pics/technica/logo.jpg" />
            </div>
            </div>

            <div className="content-text">
            <p>
            Hackathons are a great way to meet people who love making things and get involved in the tech community. <b>However, not many women attend.</b> Given that hackathons are where people come together to get introduced to tech and learn new skills, it&#39;s a great opportunity to bring women into tech - especially beginners just starting out.
            </p>
            <p>
            At the University of Maryland, we had the idea to create a ladies-only hackathon. This way, women would feel comfortable attending, asking questions, and meeting others like them. Our ultimate goal was for women new to tech to feel less intimidated attending co-ed hackathons, and long-term involvement in the tech community.
            </p>
            <p>
            As part of the organizing design team, I was responsible for designing the apparel, schedule, and the physical space of the hackathon. I got involved with the marketing prior to the event as well. During the event I handled logistics and operations - walkie-talkie and everything!
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/technica/swag.gif" />
            </div>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/technica/event.jpg" />
            </div>
            </div>

            <div className="content-text">
            <p>
            To help promote Technica, I created 80+ gradient profile pictures for our Technica supporters.
            </p>
            <p>
            This campaign was so successful that eventually a hacker automated the process.
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/technica/technified-amritha.jpg" />
            </div>
            <div className="image">
            <img src="/pics/technica/technified-izzy.jpg" />
            </div>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/technica/technified-nick.jpg" />
            </div>
            <div className="image">
            <img src="/pics/technica/technified-ari.jpg" />
            </div>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/technica/event-vr.jpg" />
            </div>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/technica/group-photo.jpg" />
            </div>
            </div>

            </ProjectPage>
            )
  }
})