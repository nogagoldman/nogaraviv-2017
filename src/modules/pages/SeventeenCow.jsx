/******************************************************************************\
* File: SeventeenCow.jsx
*
* Author: Josh Taylor
*
* Description: 17Cow Page
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

        const pageName = '17cow';

        let page = pages[pageName];

        return (
            <ProjectPage
            title={page.title}
            roles={page.roles}
            url={page.url}
            page={pageName}
            >

            <div className="content-text">
            <p>
            I was approached by 17Cow in the Summer of 2016 with a proposed project to design the user experience, interface, and landing page of an existing online study abroad app. The app helps mainland Chinese students study abroad in western countries by facilitating the application process.
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/17cow/website.jpg" />
            </div>
            </div>

            <div className="content-text">
            <p>
            Before 17Cow existed, students would go to large agencies that took long periods of time and were very expensive. 17Cow replaces traditional and expensive agency plans that most students looking to study abroad go through when applying to colleges, much like the Common App.
            </p>
            </div>

            <div className="content-text">
            <h4>Designing in Chinese</h4>
            <p>
            Designing in a foreign language is hard. Designing for a different culture is even harder. Chinese websites tend to be more chaotic-looking to Americans. 17Cow wanted to be modern (and &#34;hip,&#34; like the new generation of Chinese students) while also sticking to web standards and patterns they were familiar with.
            </p>
            <p>
            <b>Designing for Chinese people in Chinese was the hardest part of this project.</b>
            </p>
            <p>
            <b>Luckily, I spent a semester abroad in Hong Kong,</b> which gave me some background of the ways culture is incredibly different in the eastern hemisphere.
            </p>
            </div>

            <div className="content-text">
            <p>The readable fonts in America (Helvetica, Arial, etc) are not the same in China. And, since I could not read the language, it was necessary for me to do a lot of research on what the most readable and common/sleek fonts are in China. The font(s) also needed to abide by the Chinese Google Font alternative to make it easy for the developer to later implement. I ran a few texts in different fonts by my native Chinese speaker friends, and settled on a font called Heiti SC.
            </p>
            </div>

            <div className="content-text">
            <h4>Phase I: User Interface</h4>
            <p> The best part about 17Cow&#39;s app is that there are step-by-step, detailed instructions within the app (for Chinese students, even things like filling out their name on an application can be tricky: do they use their Chinese name? American name? Chinese-American Name?). Below every question, 17Cow aims to clarify these cultural misunderstandings by inserting a toggle list that hides and shows answers to questions.
            </p>
            <p>While this feature was critical and perhaps the most valuable part of the webapp, we found that since the toggle list defaults to &#39;hidden&#39; <b>users were not clicking</b> - causing them to have a weaker application due to misunderstandings.
            </p>
            <p>The answer here seems simple: just default to always show the list. Ta da! Problem solved! Err, not so fast. The overarching issue was that the application was also <b>extremely text heavy</b>. All of the text was already ovewhelming at first glance, and adding a toggle list was the quick way of solving the problem in the first version of their application.
            </p>
            <p>I knew that <b>reducing an overhwelming amount of text on each page was extremely important</b>, as was making the flow as visually and interactively simple as possible. Filling out college applications aren&#39;t the most <b>exciting thing (and often left to procrastination) so the entire process needed to feel manageable/easy, doable, and exciting</b>.
            </p>
            <p>So, I hit the drawing board.
            </p>
            </div>


            <div className="content-img">
            <div className="image">
            <img src="/pics/17cow/sketches.jpg" />
            </div>
            </div>

            <div className="content-text">
            <p>There were many textfields, columns, etc., so I approached the problem systematically: I separated the information heirarchically from most broad (schools) to most specific (form fields). This took a while, as there were many edge cases that needed to be though out, such as creating a layout that accomodated for forms that had higher character limits than others.
            </p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/17cow/ui-01.jpg" />
            </div>
            <div className="image">
            <img src="/pics/17cow/ui-02.jpg" />
            </div>
            </div>

            <div className="content-text">
            <h4>Phase II: Landing Page</h4>
            <p>The MVP landing page had &#39;got the job done&#39; but did not display the right tone to attract a larger audience of users.</p>
            <p>17Cow is a startup, and they change their plans and positioning fairly frequently. The MVP landing page was not flexible for their needs - every plan change resulted in incosistent design elements.</p>
            <p>That&#39;s where I came in - I was asked to redesign the flow and experience of the application: from whiteboard mockups to high-fidelity.</p>
            <p>My mandate was to create an approachable, simple landing page that looked high-end to be trustworthy. I was also tasked with creating a page that was dynamic and able to change with their fast-pace changes and needs.</p>
            </div>

            <div className="content-text">
            <h4>Pricing Section</h4>
            <p>This section needed to be dynamic. As a startup, 17Cow moved fast and constantly changed their plans. The design of the plan needed to be able to fit several cards, if needed. We went through several iterations of this.</p>
            </div>

            <div className="content-img">
            <div className="image">
            <img src="/pics/17cow/singlecard-plan.jpg" />
            </div>
            </div>


            <div className="content-img">
            <div className="image">
            <img src="/pics/17cow/doublecard-plan.jpg" />
            </div>
            </div>

            </ProjectPage>
            )
}
})