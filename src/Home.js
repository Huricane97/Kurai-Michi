import Navbar from "./navbar.js";
import discord from "./images/discord.png";
import instagram from "./images/insta.png";
import twitter from "./images/twitter_icon.png";
import button from "./images/discord_join.png";
import oslogo from "./images/opensea.png";


import "./App.css";
import "animate.css";
import Slide from "react-reveal/Slide";



function Home() {
  return (
    <div className="container-fluid">

      <div className="hero">
        <Navbar />
      </div>

      <div>
        <div className="hero1">
        </div>
      </div>

      <br></br>

      <div className="immg">
        <div className="team pt-5 px-5 container">
          <div className="row">
            <div className="col">

            </div>
            <div className="col col-2">

            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <img width={300} className="mt-5" src={button}></img>
      </div>

      <div className="team pt-5 mt-5 px-5 container text-white">
        <div className="row">
          <div className="col-md-12">
            <h1 className="titletext text-center pb-2 roadmap" id="roadmap">
              roadmap
            </h1>
            <p className="text-white1 billion text-center text-lg">
              We’ve prepared a map of targets we intend to hit, as we work along hitting each target
              we will activate the destination goal, before diving onto the next.

            </p>
          </div>
        </div>

        <div class="timeline">

          <div class="abc right">
            <div class="date titletext text-center">01</div>

            <div class="content">
              {/* <h2>Lorem ipsum dolor sit amet</h2> */}
              <Slide left>
                <h1 className="cardheading">NFT DESIGN</h1>
                <p className=" ">

                  To make sure our holders get the very best quality nfts,
                  the main focus and effort has been in the creative input
                  and execution of the artwork. From the finest details to
                  the deep thought process behind our imaginative collection,
                  we’re proud to introduce Kurai Michi.
                  We have some of the best artists in the industry
                  today working with some of the best creative brains
                  to make sure we deliver our holders nothing but the
                  best quality possible.
                </p>
              </Slide>
            </div>
          </div>

          <div class="abc left">
            <div class="date titletext text-center">02</div>
            <div class="content-left">
              {/* <h2>Lorem ipsum dolor sit amet</h2> */}
              <Slide right>
                <h1 className="cardheading">Launch</h1>
                <p>
                  Website and social media launch to inform and build our
                  community status, the most important part of the project.
                  We want to give back to our loyal community, we will listen
                  closely to what you want or would like in the future,
                  to grow together. We want to hear your ideas interact,
                  reward our valued members by creating custom prize winning,
                  features you decide. Not to mention gift NFTs and
                  many more prize offers.
                </p>
              </Slide>
            </div>
          </div>

          <div class="abc right">
            <div class="date titletext text-center">03</div>
            <div class="content">
              {/* <h2>Lorem ipsum dolor sit amet</h2> */}
              <Slide left>
                <h1 className="cardheading">The Mint</h1>
                <p>

                  We will conduct a whitelist for our community members
                  for future launches and announcements. OG and Elite spots
                  all available to active members in discord and twitter.
                  Mints will also be awarded in competitions and to those
                  contributing to the community.</p>
              </Slide>
            </div>
          </div>

          <div class="abc left">
            <div class="date titletext text-center">04</div>
            <div class="content-left">
              {/* <h2>Lorem ipsum dolor sit amet</h2> */}
              <Slide right>
                <h1 className="cardheading">Utilities</h1>
                <p>
                  So its all about community and growing a rewarding
                  brand for all involved. We have a ton of giveaways planned
                  for our loyal members/holders. The first 2000 for WL holders
                  is a free mint. Then a massive 777 NFT raffle post mint
                  among holders. 10% royalties to sweep floor pre-launch.
                  $10 weekly giveaway comps. Collaboration with
                  established utility based projects.
                  Then possible Staking is post-mint. Nodes/Minting bots.
                  WL marketplace. Alpha calls
                </p>
              </Slide>
            </div>
          </div>

          <div class="abc right">
            <div class="date titletext text-center">05</div>
            <div class="content">
              <Slide left>
                <h1 className="cardheading">The Next Series</h1>
                <p>
                  Keep your eyes and ears open as in the not to distant future
                  we will be revealing the next series, with new exciting characters.
                  The next chapter in the story will reveal new updates to most of
                  the cast of Kurai Michi as the plot thickens!!!</p>
              </Slide>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-12">
            <h1 className="supplytext pt-5 pb-2 text-center">Check us out on</h1>
            <a href="https://opensea.io/BillionaireSheepClub"><img className="oslogo pt-3" src={oslogo} /></a>
          </div>
        </div>


      </div>

      <div>
        <div className="footer1">
        </div>
      </div>


      <div className="team pt-5 mt-5 px-5 container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="titletext pb-2 roadmap" id="roadmap">
              Kurai Michi Team
            </h1>
            <p className="text-white1">
              A small team of dedicated business owners, designers, artists and marketing heads with a passion for the brand.
              Totally in love with the space and aware of the responsibility to further grow Kurai Michi. By being a part of the process,
              the team and community will progress by continuously developing through collective means to have a brand and collection
              to truly be proud of.</p>
            <h1 className="titletext pb-2 roadmap" id="roadmap">
              Full-time Community team
            </h1>
            <p className="text-white1">
              As a community-centric brand, we give huge importance to the Kurai Michis community's set of moderators and community managers.
              Their duty is not just to hang out and look after you and the server, they’re there to engage with the community, grow the community
              from within while acting as our first line of defence in this space.
            </p>
          </div>
          <div className="footer2">
            <div className="row">
              <div className="col-md-12">
                <span className="socials oslogo pt-3 ">
                  <a href="https://twitter.com/BillionaireShe1">
                    <img className="socialicon" src={twitter} />
                  </a>
                  <a href="https://www.instagram.com/billionairesheepclub/">
                    <img className="socialicon" src={instagram} />
                  </a>
                  <a href="https://discord.gg/kzyctCBTC8">
                    <img className="socialicon " src={discord} />
                  </a>


                </span>
              </div>
            </div>
            <p className="text-white text-center d-block pb-2">2022 Kurai Michi. All rights reserved.</p>
          </div>
        </div>
      </div>





    </div>
  );
}

export default Home;
