import discord from './images/discord.png'
import instagram from './images/insta.png'
import twitter from './images/twitter_icon.png'
import "./App.css"


function Navbar() {
    return (

        <div className='container' >

            <nav class="navbar navbar-expand-lg  navbar-light bg-transparent navbardivnav">

                <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon navbar-toggler"></span>
                </button>

                <div class="collapse navbar-collapse navbardivnav122" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ">
                        <li class="nav-item active">
                            <a class="nav-link links" href="#">Home <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link links" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link links" href="#mint">Mint</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link links" href="#roadmap">Roadmap</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link links" href="/breeding">Breeding </a>
                        </li>
                    </ul>

                </div>
                <div className='navbardivnav12'>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbardivnav12 ">

                        <li class="nav-item links">
                            <a href="https://twitter.com/BillionaireShe1"><img className='socialicon' src={twitter} /></a>                    </li>
                        <li class="nav-item links">
                            <a href="https://www.instagram.com/billionairesheepclub/"><img className='socialicon' src={instagram} /></a>                    </li>
                        <li class="nav-item links">
                            <a href="https://discord.gg/kzyctCBTC8"><img className='socialicon' src={discord} /></a>                    </li>



                    </ul>

                </div>
            </nav>



        </div>












        //         <div  class=" navbardiv">

        //     <nav class="navbar navbar-expand-lg navbar-light bg-transparent navbardivnav ">
        //     <div class="container-fluid">
        //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //           </button>


        //         <div class="collapse navbar-collapse navbar-light" id="navbarSupportedContent navbardivnav1">

        //                 <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbardivnav12">

        //                     <li class="nav-item links">
        //                     <a href="#home">Home</a>
        //                     </li>

        //                     <li class="nav-item links">
        //                     <a href="#about">About</a>
        //                     </li>

        //                     <li class="nav-item links">
        //                     <a href="#roadmap">Roadmap</a>
        //                     </li>

        //                 </ul>

        //                 <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbardivnav12 ">

        //                     <li class="nav-item links">
        //                     <a href="#"><img className='socialicon' src={discord} /></a>                    </li>

        //                     <li class="nav-item links">
        //                     <a href="#"><img className='socialicon' src={twitter} /></a>                    </li>

        //                     <li class="nav-item links">
        //                      <a href="#"><img className='socialicon' src={fb} /></a>
        //                     </li>
        //                     <li class="nav-item links">
        //                     <a href="#"><img className='socialicon' src={instagram} /></a>                    </li>

        //                 </ul>
        //             </div></div>
        //     </nav>

        // </div>
















        // <div className="row navbar mynavbar pt-3">






        //             <div className="col-md-6 links">
        //                     <a href="#home">Home</a>
        //                     <a href="#about">About</a>
        //                     <a href="#roadmap">Roadmap</a>
        //             </div>
        //             <div className="col-md-6 text-right">
        //                 <span className="socials">
        //                     <a href="#"><img className='socialicon' src={discord} /></a>
        //                     <a href="#"><img className='socialicon' src={twitter} /></a>
        //                     <a href="#"><img className='socialicon' src={fb} /></a>
        //                     <a href="#"><img className='socialicon' src={instagram} /></a>
        //                 </span>
        //             </div>
        //         </div>
    );
}

export default Navbar;