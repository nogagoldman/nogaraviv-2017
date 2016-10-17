/******************************************************************************\
* File: Budsies.jsx
*
* Author: Josh Taylor
*
* Description: Budsies Page
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

        const pageName = 'budsies';

        let page = pages[pageName];

        return (
            <ProjectPage
            title={page.title}
            roles={page.roles}
            url={page.url}
            page={pageName}
            >

            <div className="content-text">
            <p>Budsies is a company that turns children&#39;s artwork into custom stuffed animals.
            </p>
            </div>

            <div className="content-text">
            <p>It’s pretty awesome. Check it:
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/budsies/child-budsies.jpg" />
            </div>
            </div>

            <div className="content-text">
            <p>Their best season, of course, is holiday season, but the problem is that it takes 6-7 weeks to make a Budsie. Instead of shutting off holiday orders early, they needed something they could keep selling up until Christmas - even as a great last minute gift.
            </p>
            <p>That’s where the “Creativity Kit” came in: A pre-paid kit for *designing* a Budsie. It needed to be more substantial than a gift card, but easily produced. The Creativity Kit needed to be an *awesome physical experience*. 
            </p>
            <p>I led this project from concept to mass product as part of my summer internship at Budsies.
            </p>
            <p>The Creativity Kit included: a children’s book, crayons, colored pencils, sketchbook, voucher, and stuffed animal.
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/budsies/all-budsies.jpg" />
            </div>
            </div>

            <div className="content-text">
            <p>Each item was carefully crafted - we considered everything from box weight (it was important that the box not be too light - since it was a gift it needed to feel substancial), type of crayon wax, to wireframing and testing the children’s book with real kids.
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/budsies/notebook-budsies.jpg" />
            </div>
            </div>

            <div className="content-text">
            <p>Maintaing a consistent design was extremely important to me. It was during the design phase that I realized Budsies did not have an official styleguide or specific brand colors other than their logo, so I strived to make them and bring this to the attention of the team. This was towards the end of my internship, so the new and improved consistent brand didn’t make the cut for the Creativity Kit. But hey, that’s why we iterate!
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/budsies/coloring-budsies.jpg" />
            </div>
            </div>

            <div className="content-text">
            <p>I&#39;m particularly proud of this project - a physical product shipped to large numbers of customers. I got to be involved not just with the graphic design, but with the physical experience and production phase. Given I had no experience starting out, it was a huge learning curve, but I managed to do it under tight (8 weeks) time and budget constraints.
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/budsies/storybook-budsies.jpg" />
            </div>
            </div>

            </ProjectPage>
            )
    }
})