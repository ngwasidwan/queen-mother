import { useState } from "react";

const initImg = ["fried-plantain.jpg", "goat-meat.jpg", "potato.jpg"];

function App() {
  const [imageArr, setImageArr] = useState<string[]>(initImg);

  const handleEditImage = (
    ev: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = ev.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imgUrl = e.target?.result;

        const newArr = imageArr.map((img, i) => {
          if (i === index) return imgUrl as string;
          return img;
        });

        setImageArr(newArr);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imgUrl = e.target?.result;

        setImageArr((cur) => [...cur, imgUrl as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="max-w-[60rem] mx-auto h-svh">
        <nav className="flex bg-slate-900">
          <h1 className="text-white">this is the nav</h1>
          <img
            src="./logo.jpg"
            className="w-40 ml-auto object-cover h-40 rounded-full"
            alt="logo"
          />
        </nav>

        <div className="flex items-center gap-4">
          <div>
            <h1>our services</h1>
            <ul>
              <li>home delivery</li>
              <li>birthday ceremonies</li>
              <li>birthday ceremonies</li>
              <li>birthday ceremonies</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-2 my-6">
            {imageArr.map((el, index) => {
              return (
                <div key={index} className="relative  max-h-40">
                  <img
                    src={el}
                    alt="food image"
                    className="h-40 w-60 object-cover rounded-md"
                  />
                  <input
                    className="absolute w-full top-0 h-full z-50 opacity-0"
                    type="file"
                    onChange={(ev) => handleEditImage(ev, index)}
                  />
                </div>
              );
            })}
          </div>{" "}
        </div>
        <footer className="bg-slate-800 py-4 text-white">
          <div className="flex gap-4 mb-3">
            <p>whatsapp: +237 675970381</p>
            <p>email: sabipikinboyz.njaka@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <label htmlFor="image">Add new image</label>
            <input
              onChange={handleAddImage}
              type="file"
              id="image"
              className="border border-slate-300 pl-2"
            />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
