import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

function About() {
  return (
    <div className="w-[100%] " id="landing">
      <Header bgcol="rgba(255,255,255,0.1)" />

      <div className="  text-sec2 px-[20%] text-center  flex justify-center flex-col gap-7 h-screen font-bold">
        <h1>ABOUT US</h1>

        <div
          className="flex gap-7 text-left rounded-xl flex-col justify-center"
          style={{
            animation: "fadein 2s", // Animation
          }}
        >
          <h2 className="text-center">
            Oldies isn't your average second-hand platform.
          </h2>
          <p>
            We're passionate about giving pre-loved items a second chance,
            connecting them with new owners who appreciate their unique stories.
          </p>

          <div className="gap-7">
            {" "}
            {/* Align bullet points to the left */}
            <p>
              Unearthing hidden gems: We curate a treasure trove of unique
              finds, from vintage clothing and furniture to rare collectibles.
            </p>
            <p>
              Lightning-fast delivery: Get your finds quickly! We prioritize
              swift and reliable shipping to get your oldies into your hands
              ASAP.
            </p>
            <p>
              Trustworthy sellers, guaranteed: Our community is built on trust.
              We have a robust verification system and clear guidelines to
              ensure a smooth and secure buying experience.
            </p>
            <p>
              Quality you can count on: We don't just deal in "used." We offer a
              wide variety of well-maintained, high-quality items that will
              become cherished additions to your life.
            </p>
          </div>

          <p>
            Join the Oldies community and discover the joy of giving pre-loved
            items a new lease on life!
          </p>

          {/* Define CSS keyframes for the fadein animation */}
          <style>
            {`
          @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
        `}
          </style>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
