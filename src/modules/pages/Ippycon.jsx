/******************************************************************************\
* File: Ippycon.jsx
*
* Author: Josh Taylor
*
* Description: Ippycon Page
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

        const pageName = 'ippycon';

        let page = pages[pageName];

        return (
            <ProjectPage
            title={page.title}
            roles={page.roles}
            url={page.url}
            page={pageName}
            >

            <div className="content-text">
            <p>Ippycon is an emoticon wbesite and iOS keyboard.</p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/ippycon/header-image.jpg" />
            </div>
            </div>

            <div className="content-text">
            <p>
            I use emoticons (read: “ippies”) on messenger all the time and usually Google search the face I want each time over again from scratch. That became a bit tedious (and stopped me from sending faces), so Nick Aversano and I created a website (and later, a keyboard) to make that process a lil bit easier (and more fun ＼(＾▽＾)／).
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/ippycon/ippy-website.gif" />
            </div>
            </div>

            <div className="content-text">
            <p>Currently, there are websites that already do this - the copy-to-clipboard emoticon concept wasn't something we'd come up with from scratch. However, all of those websites, even when easily accessed through bookmarks, require many click-throughs. And while they all have benefits of their own (such as sorting by categories), we wanted users to have easy and fast acess to so that they could access them fast in the flow of their conversations.
            </p>
            <p>I laid out the page so that the first screen immediately exposed the user to several emoticons. This way, when the user enters the site, they can quickly click on the card they want and leave. I intentionally chose scrolling through emoticons over clicking through page numbers to further minimize the amount of clicks the user goes through to access the Ippy they want. Again, the goal here was to create a super fast ("grab-n-go") interaction.</p>
            <p>This was the first time I’d fully coded my designs from scratch. I’d come into this project with the intent of learning to code (we used HTML, CSS, JS, and Ruby) - I wanted to know what it was like to code something so that I could communicate better with developers and execute more ideas and designs by myself/faster.
            </p>
            </div>

            <div className="content-text">
            <h4>Next Steps</h4>
            <p>Overall, I learned a lot from this project. I learned basic front-end development, interacted with users and heard their feedback, and learned the constraints (which were a bit different from regular apps) that come with designing for an iOS keyboard. Recently, iOS 10 came out with draggable stickers built into iMessage. Because of this, Ippy keyboard may be less convienent. With this, I’ve learn to get too attached to the design and that especially with changing technology there are many more iterations that can be done!</p>
            <p>When Nick and I launched the site, it got a lot of excited feedback from the design community (with about 17,000 views in the first 3 days), with people telling us that they’d saved this in their bookmarks. Four months after the launch, the site had a 55% return rate, with hundreds of sessions every week.
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/ippycon/userfeedback-01.jpg" />
            </div>
            </div>

            <div className="content-text">
            <p>We even had people requesting other forms of Ippycon.</p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/ippycon/userfeedback-02.jpg" />
            </div>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/ippycon/userfeedback-03.jpg" />
            </div>
            </div>

            <div className="content-text">
            <p>Because of this, I teamed up with Luis Santos, an iOS developer, to create a keyboard with Ippies embedded inside so that users could directly paste ippies during a conversation on mobile. We specifically decided to create a keyboard to solve the issue/annoyance of opening a new browser on mobile during a conversation.</p>
            </div>

            /**
            <div className="content-img">
            <div className="image">
            <img src="/pics/ippycon/ippy-keyboard.gif" />
            </div>
            </div>
            **/

            <div className="content-text">
            <p>When we initially launched the website, we got a lot (a lot) of feedback. While it was mostly positive, there were a lot similarites in our users requests.</p>
            <p>If we decide to build this project out more, <b>our next steps will be:</b><br></br>
            - Create a moderator/filter for Ippies people post.<br></br>
            - Build a tagging/category system.<br></br>
            - Exposed this to a japanese audience, the design style matches a lot of their current graphics and I am interested to see whether this would stick in areas in Japan like it did in the states. (This includes changing copy, the actual emoticons to match those popular in Japan, etc.)</p>
            <p>As for the keyboard, I found that users were frustrated with both design and technical issues. Tech-wise there was no auto-correct, which had people using a standard keyboard for typing, only switching to the Ippy keyboard when they wanted an Ippy.</p>
            <p>If we decide to redesign the keyboard, I will ditch the keys, making it more like this:</p>
            </div>

            <div className="content-text">
            <h4>All-in-All</h4>
            <p>Overall, I learned a lot from this project. I learned basic front-end development, interacted with users and heard their feedback, and learned the constraints (which were a bit different from regular apps) that come with designing for an iOS keyboard. Recently, iOS 10 came out with draggable stickers built into iMessage. Because of this, Ippy keyboard may be less convienent. With this, I’ve learn to get too attached to the design and that especially with changing technology there are many more iterations that can be done!</p>
            </div>
            </ProjectPage>

            )
}
})