import { Navbar, PlusCard } from "../components";
import logo from "../assets/Logo.png";
import logo2 from "../assets/logo2.png";
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";


const Login = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-baki bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
    <main className="w-screen max-w-screen">

      <Navbar />

      <section className="grid w-full grid-cols-2 px-8 my-6">
        {/* Left pane */}
        <div className="flex flex-col items-center justify-start">
          <p className="text-3xl font-bold" style={{width: '452.17px', height: '125px', left: '111px', top: '130px'}}>
            Karibu <img src={logo} alt="logo" className="inline" />
            <br />
            Chatafisha
          </p>

          <div className="flex flex-grow items-center justify-center">
            <p className="my-6 text-2xl absolute" style={{width: '260px', height: '41px', left: '230px', top: '280px'}}>Let&apos;s get started</p>
          </div>

          <div className="w-3/5 space-y-4 absolute" style={{width: '450px', height: '98px', left: '98px', top: '370px'}}>
            {/* <Link to="/register"> */}
              <button className="block bg-[#d9e2de] p-4 rounded-lg w-full" onClick={()=>{navigate("/pages/RegisterForm")}}>
            Open an account
            </button>
            {/* </Link> */}
            {/* <Link to="/loginform"> */}
            <button className="block w-full p-4 mt-3 rounded-lg bg-btnGrey" onClick={() => {navigate("/pages/LoginForm")}}>
              Already have account
            </button>
            {/* </Link> */}
          </div>
        </div>

        {/* Right pane */}
        <div className="flex flex-col justify-end w-full">
          {/* Tembo card */}
          <div className="bg-no-repeat bg-contain bg-tembo " style={{width: '549px', height:'344.17px'}}>
            <div className="flex items-center justify-center w-full pt-2">
              <img src={logo2} alt="logo2" className="max-w-full ml-80 mr-90"/>
            </div>

            <div className="px-4 my-8 text-white">
              <p className="font-semibold mt-40 mb-0 " >Pata thamani</p>
              <small>
                Earn carbon credits through the offsets of plastic
                <br />
                waste into usable goods and building materials
              </small>
            </div>
          </div>

          {/* Plus cards */}
          <div className="flex items-center w-full overflow-auto gap-x-4">
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

export default Login;
