import { Navbar, PlusCard } from "../components";
import logo from "../assets/Logo.png";
import logo2 from "../assets/logo2.png";

const Login = () => {
  return (
    <main className="w-screen max-w-screen">
      <Navbar />

      <section className="grid w-full grid-cols-2 px-8 my-6">
        {/* Left pane  */}
        <div className="flex flex-col items-center justify-start">
          <p className="text-3xl font-bold">
            Karibu <img src={logo} alt="logo" className="inline" />
            <br />
            Chatafisha
          </p>

          <p className="my-6 text-2xl">Let&apos;s get started</p>

          <div className="w-3/5 space-y-4">
            <button className="block bg-[#d9e2de] p-4 rounded-lg w-full">
              Open an account
            </button>
            <button className="block w-full p-4 rounded-lg bg-btnGrey">
              Already have account
            </button>
          </div>
        </div>

        {/* Right pane */}
        <div className="flex flex-col justify-end w-full">
          {/* Tembo card */}
          <div className="bg-no-repeat bg-contain bg-tembo ">
            <div className="flex items-center justify-center w-full pt-2">
              <img src={logo2} alt="logo2" className="max-w-full " />
            </div>

            <div className="px-4 my-8 text-white">
              <p className="font-semibold ">Pata thamani</p>
              <small>
                Earn carbon credits through the offsets of plastic
                <br />
                waste into usable goods and building materials
              </small>
            </div>
          </div>

          {/* Plus cards  */}
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
  );
};

export default Login;
