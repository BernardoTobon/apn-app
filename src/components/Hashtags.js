import UserTabs from "./TabMenu";

const { useState } = require("react");

const Hashtags = () => {
  const [hashtags, setHagstags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddHashtags = () => {
    if (inputValue.trim() !== "") {
      setHagstags((prevHashtags) => [...prevHashtags, inputValue.trim()]);
      setInputValue("");
    }
  };
  

  return (
    <>
    <UserTabs>
    <div className="flex justify-center">
    <h1 className="m-3 flex justify-center font-extrabold  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-light-brown to-dark-green">#Hashtags</h1>
    </div>
    <div className=" pt-10 flex justify-center">
      <div className="grid grid-cols-1">
        <div className="flex justify-center">
        <div className="m-2 p-2 flex flex-col border-2 border-fluorescent-green rounded-lg h-28 w-72 pt-8">
          <input
            className="border border-2 border-fluorescent-green text-light-brown text-center rounded-lg focus:outline-none"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Ingrese un hashtag"
          />
          <div className="flex justify-center">
          <button className="bg-light-green m-2 border border-2 border-fluorescent-green rounded-lg text-dark-green w-20" onClick={handleAddHashtags}>
            Agregar
          </button>
          </div>
        </div>
        </div>
        <div className="m-2 border border-fluorescent-green rounded-lg p-2 w-fit">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {hashtags.map((hashtag, index) => (
              <span
                className="m-1 border border-2 border-dark-green rounded-lg p-1 text-light-brown w-60"
                key={index}
              >
                #{hashtag}
              </span>
            ))}
          </div>
        </div>
      </div>
      </div>
      </UserTabs>
    </>
  );
};

export default Hashtags;
