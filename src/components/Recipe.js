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
    <div className=" bg-light-green h-screen">
      <h1 className="flex justify-center font-russo-one font-bold text-dark-green text-4xl ">
        MIS RECETAS
      </h1>
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-3 overflow-auto max-h-96 gap-1">
          {savedData.map((data, index) => (
            <div className="overflow-hidden  " key={index}>
              <img
                className="h-80 border border-2 border-dark-green m-3"
                src={data.image && URL.createObjectURL(data.image)}
                alt={`Imagen `}
              />
              <p
                className="m-3 bg-tea-green w-50 h-20 text-left"
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
        <div className="flex flex-col gap-2">
          <input type="file" onChange={handleFileInputChange} />
          <textarea
            className="border border-2 border-dark-green  "
            value={text}
            onChange={handleTextChange}
          />
          <button
            className="bg-dark-green text-light-green border border-2 border-dark-green rounded-full w-[30vw] md:w-[15vw]"
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
