import React from "react";
//Components
import ToTop from "../../components/ToTopBtn";
import Footer from "../../components/Footer";

const Usage = () => {
  return (
    <section className="Terms">
      <div className="title">
        <h1>Acceptable Use Policy</h1>
      </div>
      <div className="container-tc">
        <div className="rich-text-block-4 w-richtext">
          <p className="update">
            <em>Updated 15-Nov-2023</em>
          </p>
          <p>
            In a world where you can be anything, be kind. Please read our use
            policy so you know what is that in our app. Thank you!
          </p>
      <ToTop></ToTop>

          {/*-------------How to use app--------------------------*/}
          <h3>
            <strong>How you use the site</strong>
            <br />
          </h3>
          <p>
            You must not use the site in any way that is unlawful, illegal,
            fraudulent or harmful; or in connection with any unlawful, illegal,
            fraudulent or harmful purpose or activity.
          </p>
          <p>
            You must not use the site in any way that causes, or may cause,
            damage to the site or impair availability or accessibility of the
            site.
          </p>
          <p>
            The site is for freelancers and clients to connect, so outside of
            that purpose you must not use it for any advertising or promoting
            anything else, or use it to send, or allow anyone else to send,
            spam.
          </p>

          {/*---------------------------------------*/}
          <h3>
            ‍<strong>How you interact with other people</strong>
          </h3>
          <p>
            Always remember that the Coqui community is made up of people, so
            please remember to be polite and professional - this Acceptable Use
            Policy applies to your interactions virtually or in person, just as
            much as it does when using our site. We are not responsible for
            users conduct outside of the app, but remember to be professional
            and thoughtful as this may be a chance for your career to grow!
          </p>
          <p>
            You must not use the site for the purpose of deliberately upsetting
            or offending others or impersonate other people.
          </p>

          <p>
            You must not use the site to send any hostile communication or any
            communication intended to insult, including such communications
            directed at a particular person or group of people.
          </p>

          <p>
            Content must not be liable to deliberately cause annoyance,
            inconvenience or needless anxiety to others (and if your portfolio
            contains material that might do this, please include a notice to
            warn).
          </p>

          {/*-------------Content you upload onto the site-------------------------- */}
          <h3>
            <strong>Content you upload onto the site</strong>
          </h3>
          <p>
            Content must not be untrue, offensive, deceptive, threatening,
            abusive, harassing, menacing, hateful, discriminatory or
            inflammatory.
          </p>

          <p>
            Content and your use of it must not break laws or contracts, for
            example: (i) be libellous or maliciously false; (ii) be obscene or
            indecent; (iii) infringe any intellectual property rights; (iv)
            infringe any right of confidence, right of privacy or right under
            data protection laws; (v) constitute negligent advice or contain any
            negligent statement; (vi) constitute an incitement to commit a
            crime, instructions for the commission of a crime or the promotion
            of criminal activity; (vii) be in contempt of any court, or in
            breach of any court order; (viii) constitute a breach of racial or
            religious hatred or discrimination legislation; (ix) constitute a
            breach of official secrets legislation; or (x) constitute a breach
            of any contractual obligation owed to any person (for example, a
            non-compete or exclusivity obligation).
          </p>
          {/*----------------Reasons for Suspension----------------*/}
          <h3>
            <strong>Reasons for Suspension</strong>
          </h3>
          <p>
            We receive reports or information that require immediate review for
            legal or safety reasons
          </p>
          <p>
            We conclude that a user has engaged in unlawful or fraudulent
            behavior
          </p>
          <p>
            Unsolicited contact was made for their own purposes outside of
            CoquiArts’ platform. This contact can be to solicit circumvention or
            for another reason.
          </p>
          <p>
            Transfer or sell your User account, password and/or identification,
            or any other User's Information to any other party.
          </p>
          <p>
            Discriminate against or harass anyone on the basis of race, national
            origin, religion, gender, gender identity or expression, physical or
            mental disability, medical condition, marital status, age or sexual
            orientation.
          </p>

          <p>
            Post, email or otherwise transmit any malicious code, files or
            programs designed to interrupt, damage, destroy or limit the
            functionality of the CoquiArts Platform or any computer software or
            hardware or telecommunications equipment or surreptitiously
            intercept or expropriate any system, data or personal information.
          </p>
          <p>
            Forge headers or otherwise manipulate identifiers in order to
            disguise the origin of any information transmitted through the
            CoquiArts Platform.
          </p>
          <p>
            “Frame” or “mirror” any part of the CoquiArts platform, without our
            prior written authorization or use meta tags or code or other
            devices containing any reference to us in order to direct any person
            to any other website for any purpose.
          </p>
          <p>Modify, adapt, translate, reverse engineer, decipher, decompile or otherwise disassemble any portion of the CoquiArts Platform.</p>
          <p>
            You acknowledge that we may actively monitor the content and the use of the site.
          </p>

          <p></p>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Usage;
