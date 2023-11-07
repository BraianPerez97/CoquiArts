import React from "react";

const About = () => {
  const about = [
    {
      class: "about-left",
      title: "What do we do?",
      answer: "Connect you with creativity.",
      text: "We believe in the incredible talents of our local artist, and we’re on a mission to bring creativity to the forefront. Our service is designed to connect clients with amazing artists, fostering a vibrant community of talent that can flourish. This is a platform for artist by artist.",
    },
    {
      class: "about-right",
      title: "Who are we?",
      answer: "Artists helping artists.",
      text: "We are a passionate group of students with a shared love for both creativity and community. Driven by our belief in the immense potential of local artist, we’ve come together To build a bridge between their talents and those seeking unique artistic experiences.",
    },
    {
      class: "about-left",
      title: "Our vision",
      answer: "Connect creativity.",
      text: "Our vision and mission is all about supporting our local creative ecosystem, connect artists to opportunities by showcasing their services in our platform in order for clients to reach out and find the perfect artistic touch for their projects.",
    },
  ];
  return (
    <section className="about-us">
      {about.map((piece) => 
        <div className={piece.class}>
          <div className="about-card">
            <h3>{piece.title}</h3>
            <span>{piece.answer}</span>
            <p>{piece.text}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
