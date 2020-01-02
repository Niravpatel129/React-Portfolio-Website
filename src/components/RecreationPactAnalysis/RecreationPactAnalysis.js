import React, { Component } from "react";
import "./RecreationPactAnalysis.scss";

class RecreationPactAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="RecreationPactAnalysis">
        <h3 className="title">
          P.A.C.T <br />
          Analysis
        </h3>
        <table border={0}>
          <tbody>
            <tr>
              <td className="tableTitle">People</td>
              <td className="para">
                The people in this scenario would be those in the parental stage
                of their lives (25 - 55). The primary focus for this website
                redesign will be catered towards providing the community a
                service for finding the perfect program for themselves and their
                children. This website vision is for the user is to provide an
                experience that ensures a safe and user experience journey of
                their search goals to offer peace of mind and have assistance
                where need be.
                <br></br>
                <br></br>
                As the main target audience for this website, the website should
                the language be relatively simple and friendly so that it can be
                universally understood amongst a wide variety of people.
                <br></br>
                <br></br>
                Activities (Updated word because it was spelled wrong - I forgot
                the "i") One of the main activities of the website is that the
                user (client) will be able to view and have access to vital
                information needed to know in order to enroll or learn more
                about the programs offered at each recreation.
              </td>
            </tr>
            <tr>
              <td className="tableTitle">Activities</td>
              <td className="para">
                One of the main activities of the website is that the user
                (client) will be able to view and have access to vital
                information needed to know in order to enroll or learn more
                about the programs offered at each recreation.
              </td>
            </tr>
            <tr>
              <td className="tableTitle">Context</td>
              <td className="para">
                It is important to consider that at this moment, the users do
                not necessarily want to interact with the website, due to a lack
                of information and poor architecture. So, in order to diffuse
                that, the website, or recreation centre, needs to constantly
                have important updates and information that are important for
                recreation goers to know about, rather than causing anxiety for
                workers at the recreation centre.
              </td>
            </tr>
            <tr>
              <td className="tableTitle">Technologies</td>
              <td className="para">
                The primary input should be something along the lines of text
                and drop-down, where the users can organize and input relevant
                data concerned with what they are looking for.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RecreationPactAnalysis;
