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

        <div className="block">
          <h4>People</h4>
          <p>
            The people in this scenario would be those in the parental stage of
            their lives (25 - 55). The primary focus for this website redesign
            will be catered towards providing the community a service for
            finding the perfect program for themselves and their child. This
            website vision is for the user is to provide an experience that
            ensures a safe and user experience journey of their search goals to
            offer a peace of mind and have assistance where need be.
            <br></br>
            <br></br>
            As the main target audience for this website, the website should the
            language be relatively simple and friendly so that it can be
            universally understood amoungst a wide vareity of people.
          </p>
        </div>

        <div className="block">
          <h4>Activites</h4>
          <p>
            One of the main activities of the website is that the user (client)
            will be able to view and have access to vital information needed to
            know in order to enroll or learn more about the programs offered at
            each recreation.
          </p>
        </div>

        <div className="block">
          <h4>Content</h4>
          <p>
            It is important to consider that at this moment, the users do not
            necessarily want to interact with the website, due to lack of
            information and poor architecture. So, in order diffuse that, the
            website, or recreation centre, needs to constantly have important
            updates and information that are important for recreation goers to
            know about, rather than causing anxeity for workers at the
            recreation centre.
          </p>
        </div>
      </div>
    );
  }
}

export default RecreationPactAnalysis;
