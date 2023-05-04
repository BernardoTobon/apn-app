import { useState } from "react";

function Recipe() {
  const [image, setImage] = useState();
  const [text, setText] = useState("");
  const [savedData, setSavedData] = useState([]);

  const handleFileInputChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    const newData = {
      image: image,
      text: text,
    };
    const newSavedData = [...savedData];
    newSavedData.push(newData);
    setSavedData(newSavedData);
    setImage();
    setText("");
  };

  return (
    <div className="bg-light-green h-screen overflow-auto">
      <h1 className="m-3 flex justify-center font-extrabold  text-transparent text-5xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green ">
        MIS RECETAS
      </h1>
      <div className="flex flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-3 overflow-auto max-h-[620px] gap-1 border border-black">
          {savedData.map((data, index) => (
            <div className="" key={index}>
              <div className="flex justify-center">
              <img
                className="m-4 h-[50vw] w-[60vw] md:h-80 border border-2 border-dark-green "
                src={data.image && URL.createObjectURL(data.image)}
                alt={`Imagen`}
              />
              </div>
              <p
                className="p-1 m-2 bg-tea-green w-30 h-30 text-left overflow-auto border-2 border-light-brown"
                style={{
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  msWordBreak: "break-all",
                  wordBreak: "break-word",
                }}
              >
                {data.text}
              </p>
            </div>
          ))}
        </div>
        <div className="   flex flex-col h-[40vw] md:h-[15vw] gap-2">
          <input type="file" onChange={handleFileInputChange} />
          <textarea
            className="border border-2 border-dark-green m-2 "
            value={text}
            onChange={handleTextChange}
          />
          <button
            className=" bg-dark-green text-light-green border border-2 border-dark-green rounded-full w-[30vw] md:w-[15vw]"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
