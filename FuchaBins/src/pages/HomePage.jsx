import React from "react";
import Navbar from "../components/navbar";
import PlusCard from "../components/plus-card";
import logo from "../assets/Logo.png";
import Banner from "../assets/Banner.png";

const HomePage = () => {
    return(

    <div className="bg-baki bg-cover bg-center">
        <main className="w-screen max-w-screen">
        <Navbar />
        <section className="grid w-full grid-cols-2 px-8 my-6">
        {/* Left pane */}
        <div className="flex flex-col items-center justify-start">
          <p className="text-3xl font-bold" style={{width: '452.17px', height: '125px', left: '111px', top: '130px'}}>
            Karibu 
          </p>
          <div className="" style={{width: '549px', height: '344.17px', left: '67px', top: '158px'}}>
          <img src={Banner} alt="logo"/>

          </div>
          </div>

          {/*Right Pane*/}
          <div className="flex flex-col justify-end w-full">
          <div class="flex items-center mb-2">
  <h1 class="text-3xl font-bold ml-80 mr-5" style={{width: '178px'}}>CHATAFISHA</h1>
  <img src={logo} alt="logo" class="ml-6 w-12 h-12"/>
</div>
          {/* Plus cards */}
          <div className="flex items-center w-full overflow-auto gap-x-4 ">
            <PlusCard className="bg-black">
              News&
              <br />
              Updates
            </PlusCard>
            <PlusCard className="bg-[#57b787]">Sokoni Market place</PlusCard>
            <PlusCard className="bg-[#5275f1]">Tupe support</PlusCard>
            <PlusCard className="bg-[#3aabe3]">Tufahamu</PlusCard>
          </div>
          </div> 
          </section>
        </main>
    </div>
    
    
    );
};

export default HomePage;