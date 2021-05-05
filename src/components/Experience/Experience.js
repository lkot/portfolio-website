import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      {/* These e.g. classes below are the Bootstrap classes. */}
      <div className="d-flex justify-content-center my-5">
        <h1>experience & education</h1>
      </div>
      <div className="container experience-wrapper">
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            {/* <h3>October 2012 - March 2017</h3> */}
            <h3>2012 - 2015</h3>
            <h4>University of Zielona Góra | Poland</h4>
            <h5>Computer Science graduate with Bachelor of Science degree. </h5>
            <p>Studies conducted with specialisation in Network IT Systems.</p>

            <hr />

            <h5>Additional Altkom Akademia IT courses: </h5>
            <p>· 70-483: Programming in C#</p>
            <p>
              · 70-511: Windows Applications Development with Microsoft .NET
              Framework 4.
            </p>

            <hr />

            <h5>Additional Softronic IT courses: </h5>
            <p>· MS-20410 Installing and Configuring Windows Server 2012</p>
            <p>· MS-20411 Administering Windows Server 2012</p>
            <p>· MS-20412 Configuring Advanced Windows Server 2012 Services</p>
            <p>· MS-10774 Querying Microsoft SQL Server 2012</p>
            <p>· MS-10775 Administering Microsoft SQL Server 2012 Databases</p>
            <p>
              · MS-10777 Implementing a Data Warehouse with Microsoft SQL Server
              201
            </p>
          </div>
        </div>
        {/* - */}
        {/* <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2015</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              omnis laboriosam odio deserunt reprehenderit optio cum ratione
              sequi pariatur deleniti iste perspiciatis officiis minima iusto
              hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque
              delectus asperiores et quas qui.
            </p>
          </div>
        </div> */}
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015 - 2016</h3>
            <h4>Gap year - Journey around the World</h4>
            <h5>Venture included:</h5>
            <p>· Establishing collaboration with multiple sponsors.</p>
            <p>
              · Collaboration with National Television - broadcasting episodes.
            </p>
            <p>
              · Establishing collaboration with Rafał Sonik as our honour
              patron.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016 - 2017</h3>
            {/* <h4>March 2017</h4> */}
            <h4>Computer Science studies graduated.</h4>
            <h5>BSc thesis' final project - KrewSystem Application</h5>
            <p>
              KrewSystem is a further development of Blood Donation Center
              System via implementation of web portal for servicing blood
              donors. Application is an extension of already existing BDC's
              system and is dedicated for local departments of Lubuskie region
              located in 5 other cities.
            </p>
            <p>
              The application's functionality is based on the ASP.NET MVC 5
              framework (written in C# language) along with the use of
              EntityFramework 6 for database connection. Other technologies,
              frameworks and libraries used: HTML, CSS, JavaScript, Bootstrap,
              Transact-SQL, etc.
            </p>

            {/* <hr />

            <h4>April 2017 - September 2017</h4>
            <h5>Intern Software Developer | catsSoft IT Systems</h5>
            <p>
              Developing applications and functionalities based on ASP.NET MVC 5
              framework, along with technologies such as HTML/CSS, Bootstrap or
              EntityFramework.
            </p> */}
          </div>
        </div>

        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017</h3>
            <h4>April 2017 - September 2017</h4>
            <h5>Intern Software Developer | catsSoft IT Systems</h5>
            <p>
              Developing applications and functionalities based on ASP.NET MVC 5
              framework, along with technologies such as HTML5, CSS3, Bootstrap
              or EntityFramework.
            </p>
            <hr />
            <h4>May 2017</h4>
            <p>
              IELTS (International English Language Testing System) - C1 level.
            </p>
          </div>
        </div>
        {/* - */}

        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017 - 2020</h3>
            {/* <h4>October 2017</h4> */}
            <h4>Over 2 years stay in Australia.</h4>
            <h5>Various jobs not related with IT, including:</h5>
            <p>
              · Food and Beverage Attendant in 5-Star Ayers Rock Resort (Yulara,
              Northern Territory, Australia)
            </p>
            <p>
              · Exclusive Pensions' Painter (Sydney, New South Wales, Australia)
            </p>
            <p>
              · Banana Plantation Worker (Atherton, Far North Queensland,
              Australia)
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020</h3>
            <h4>February 2020</h4>
            <p>
              TOEIC (Test of English of International Communication) - C2 level.
            </p>

            <hr />

            <h4>April 2020 - Currently</h4>
            <h5>Part-time Junior Software Developer | catsSoft IT Systems</h5>
            <p>
              Developing applications and functionalities based on ASP.NET MVC 5
              framework, along with technologies such as HTML/CSS, Bootstrap or
              EntityFramework.
            </p>

            <hr />

            <h4>October 2020 - Currently</h4>
            <h4>Kozminski University | Warsaw, Poland</h4>
            <h5>Part-time Master of Science studies.</h5>
            <p>
              Faculty of Master in Management conducted fully in English
              language with specialisation in Project Management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
