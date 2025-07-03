import { useState } from "react";
import { BiFork, BiKnife } from "react-icons/bi";
import { GiSpoon } from "react-icons/gi";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import { LiaMapMarkerAltSolid } from "react-icons/lia";

interface imgObj {
  image: string;
  containerStyle: string;
  imageStyle: string;
}

const initialData: Array<imgObj> = [
  {
    image: "fried-plantain.jpg",
    containerStyle:
      " rounded-full overflow-hidden border-4 border-white w-34 h-34 relative",
    imageStyle: "h-32 w-32 object-cover",
  },
  {
    image: "potato.jpg",
    containerStyle:
      "rounded-full overflow-hidden border-4 border-white -ml-8 z-10 relative",
    imageStyle: "h-28 w-28 object-cover",
  },
  {
    image: "goat-meat.jpg",

    containerStyle:
      " rounded-full overflow-hidden border-4 border-white -ml-8 relative",
    imageStyle: "h-32 w-32 object-cover",
  },
  {
    image: "ndole.jpg",
    containerStyle:
      "rounded-full overflow-hidden border-4 border-white  absolute -bottom-20 z-20 left-1/2 transform -translate-x-1/2",
    imageStyle: "h-32 w-32 object-cover",
  },
];
const services: Array<string> = [
  "meal planning",
  "home delivery",
  "rental services",
  "catering services",
  "meal preparation for events",
  "customize meal preparation",
];

function App() {
  const [data, setData] = useState(initialData);

  const handleEditImage = (
    ev: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const file = ev.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imgUrl = e.target?.result;

        const newData = data.map((dataObj, index) => {
          if (i === index) return { ...dataObj, image: imgUrl };
          return dataObj;
        });

        setData(newData as Array<imgObj>);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="bg-black mx-auto relative w-full overflow-hidden   text-white h-svh sm:h-auto">
        <div className="px-6 mt-4 mb-6 text-center">
          <div className="absolute top-4 shadow-md shadow-orange-500 rounded-full overflow-hidden md:h-28 md:w-28 flex flex-col items-center justify-center h-20 w-20   text-xs md:text-base">
            <h1 className="font-semibold">Queen</h1>
            <h1 className=" font-semibold">Mother's </h1>
            <h1 className="">Cuisine</h1>
            <div className="flex items-center justify-center gap-1 mt-2 text-orange-500">
              <BiFork />
              <BiKnife />
              <GiSpoon />
            </div>
          </div>
          <h2 className="text-white text-sm tracking-widest font-semibold ">
            TODAY's
          </h2>
          <h1 className="text-4xl font-bold text-orange-500 ">Special</h1>
          <h1 className="text-5xl font-extrabold tracking-wide ">MENU</h1>
        </div>

        <div className="relative flex items-center justify-center mb-10">
          <div className=" relative flex justify-center items-center  ">
            {data.map((el, index) => (
              <div key={index} className={`${el.containerStyle}`}>
                <img
                  src={el.image}
                  alt="food image"
                  className={el.imageStyle}
                />

                <input
                  className="absolute w-full top-0 h-full z-50  opacity-0"
                  type="file"
                  onChange={(ev) => handleEditImage(ev, index)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <h1 className="ml-4 text-orange-400 font-bold mb-2 ">Our services</h1>
          <ul className=" text-sm tracking-wide ml-8 list-disc ">
            {services.map((service, index) => (
              <li key={index} className="capitalize mb-2">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex  items-center flex-col gap-2 my-8">
          <button className=" bg-white text-black px-6 py-2 rounded-full font-bold mb-4">
            ORDER NOW
          </button>

          {/* <div> */}
          <p className="flex items-center gap-2 font-semibold text-lg">
            <IoLogoWhatsapp />
            <span>+ 237 651 103 724</span>
          </p>
          <p className="flex items-center gap-2">
            <IoLogoFacebook className="text-xl" />
            <span className="font-semibold">Queen Mother Restaurant</span>
          </p>
          <p className="flex items-center gap-2">
            <LiaMapMarkerAltSolid className="text-xl" />
            <span className="font-semibold">
              Derriere Stade Cicam (Ange Raphael)
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
