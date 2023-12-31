import Header from "../Header";
import { TypeAnimation } from "react-type-animation";

function HomePage() {
  return (
    <>
      <Header />
      
      <div className="flex justify-center items-center">
        <TypeAnimation
          className="flex justify-center items-center border-[5px]  rounded-lg border-gray-400 mt-16 w-[35rem] p-12"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            " Hello New User👋👋 and Welcome to Website . We will be here for your prepration . This website will help you to pass your tests ",
            1000,
          ]}
          wrapper="div"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    </>
  );
}

export default HomePage;
