const { useState, useRef, useEffect } = require("react");

const Perimeters = () => {
  const [videoVisible1, setVideoVisible1] = useState("");
  const [paragraphVisible1, setParagraphvisible1] = useState("");
  const [cephalic, setCephalic] = useState("");
  const [neck, setNeck] = useState("");
  const [halfArmRelaxed, setHalfArmRelaxed] = useState("");
  const [halfArmContracted, setHalfArmContracted] = useState("");
  const [forearm, setForearm] = useState("");
  const [wrist, SetWrist] = useState("");
  const [mesoesternal, setMesoesternal] = useState("");
  const [umbilical, setUmbilical] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [thigh, setThigh] = useState("");
  const [halfThigh, setHalfThigh] = useState("");
  const [calf, setCalf] = useState("");
  const [ankle, setAnkle] = useState("");

  const videoRef1 = useRef(null);

  const handleFieldClick1 = (field) => {
    setVideoVisible1(field);
  };

  const handleFieldClickParagraph1 = (field) => {
    setParagraphvisible1(field);
  };

  useEffect(() => {
    if (videoVisible1) {
      videoRef1.current.play();
      videoRef1.current.loop = true;
    }
  }, [videoVisible1]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="pl-2 md:pl-10 pt-8">
        <form>
          <div className="flex flex-row">
            <div className="w-64 m-1">
              <label className="text-dark-green">Cefálico</label>
            </div>
            <input
              className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
              type="text"
              value={cephalic}
              onChange={(e) => setCephalic(e.target.value)}
              onClick={() => {
                handleFieldClick1("cephalic");
                handleFieldClickParagraph1("cephalic");
              }}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-64 m-1">
              <label className="text-dark-green">Cuello</label>
            </div>
            <input
              className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              onClick={() => {
                handleFieldClick1("neck");
                handleFieldClickParagraph1("neck");
              }}
            />
          </div>
          <div className="flex flex-row">
                <div className="w-64 m-1">
                    <label className="text-dark-green">Mitad del brazo relajado</label>
                </div>
                <input
                    className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                    value={halfArmRelaxed}
                    onChange={(e) => setHalfArmRelaxed(e.target.value)}
                    onClick={() => {
                        handleFieldClick1("halfArmRelaxed");
                        handleFieldClickParagraph1("halfArmRelaxed");
                    }}
                />
            </div>
            <div className="flex flex-row">
                <div className="w-64 m-1">
                    <label className="text-dark-green">Mitad del brazo contraido</label>
                </div>
                <input
                    className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                    value={halfArmContracted}
                    onChange={(e) => setHalfArmContracted(e.target.value)}
                    onClick={() => {
                        handleFieldClick1("halfArmContracted");
                        handleFieldClickParagraph1("halfArmContracted");
                    }}
                />
            </div>
            <div className="flex flex-row">
                <div className="w-64 m-1">
                    <label className="text-dark-green">Antebrazo</label>
                    </div>
                    <input
                        className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                        value={forearm}
                        onChange={(e) => setForearm(e.target.value)}
                        onClick={() => {
                            handleFieldClick1("forearm");
                            handleFieldClickParagraph1("forearm");
                        }}
                    />
            </div>
            <div className="flex flex-row">
                <div className="w-64 m-1">
                    <label className="text-dark-green">Muñeca</label>
                </div>
                <input
                    className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"      
                    value={wrist}
                    onChange={(e) => SetWrist(e.target.value)}
                    onClick={() => {
                        handleFieldClick1("wrist");
                        handleFieldClickParagraph1("wrist");
                    }}
                />
            </div>
            <div className="flex flex-row">
                <div className="w-64 m-1">
                    <label className="text-dark-green">Mesoesternal</label>
                </div>
                <input
                    className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"         
                    value={mesoesternal}
                    onChange={(e) => setMesoesternal(e.target.value)}
                    onClick={() => {
                        handleFieldClick1("mesoesternal");
                        handleFieldClickParagraph1("mesoesternal");
                    }}
                />
            </div>
            <div className="flex flex-row">
                <div className="w-64 m-1">
                    <label className="text-dark-green">Umbilical</label>
                </div>
                <input
                    className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                    value={umbilical}
                    onChange={(e) => setUmbilical(e.target.value)}
                    onClick={() => {
                        handleFieldClick1("umbilical");
                        handleFieldClickParagraph1("umbilical");
                    }}
                />
            </div>
            <div className="flex flex-row">
                <div className="w-64 m-1">
                    <label className="text-dark-green">Cintura</label>
                </div>
                <input
                    className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    onClick={() => {
                        handleFieldClick1("waist");
                        handleFieldClickParagraph1("waist");
                    }}
                />
            </div>
            <div className="flex flex-row">
            <div className="w-64 m-1">
                <label className="text-dark-green">Cadera</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                onClick={() => {
                    handleFieldClick1("hip");
                    handleFieldClickParagraph1("hip");
                }}
            />
            </div>
            <div className="flex flex-row">
                <div className="w-64 m-1">
                    <label className="text-dark-green">Muslo ( 1cm )</label>
                </div>
                <input
                    className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                    value={thigh}
                    onChange={(e) => setThigh(e.target.value)}
                    onClick={() => {
                        handleFieldClick1("thigh");
                        handleFieldClickParagraph1("thigh");
                    }}    
                />
            </div>
            <div className="flex flex-row">
                <div className="w-64 m-1">
                    <label className="text-dark-green">Múslo medio</label>
                </div>
                <input
                    className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                    value={halfThigh}
                    onChange={(e) => setHalfThigh(e.target.value)}
                    onClick={() => {
                        handleFieldClick1("halfThigh");
                        handleFieldClickParagraph1("halfThigh");
                    }}
                />
            </div>
            <div className="flex flex-row">
                <div className="w-64 m-1">
                    <label className="text-dark-green">Pantorrilla</label>
                </div>
                <input
                    className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                    value={calf}
                    onChange={(e) => setCalf(e.target.value)}
                    onClick={() => {
                        handleFieldClick1("calf");
                        handleFieldClickParagraph1("calf");
                    }}
                />
            </div>
            <div className="flex flex-row">
                <div className="w-64 m-1">
                    <label className="text-dark-green">Tobillo</label>
                </div>
                <input
                    className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                    value={ankle}
                    onChange={(e) => setAnkle(e.value.target)}
                    onClick={() => {
                        handleFieldClick1("ankle");
                        handleFieldClickParagraph1("ankle");
                    }}
                />
            </div>
        </form>
      </div>
      <div className="flex flex-col">
        {videoVisible1 && (
          <div className="flex justify-center pt-4">
            <video
              className="h-96"
              ref={videoRef1}
              src={
                videoVisible1 === "cephalic"
                  ? "/Vegeta.mp4"
                  : videoVisible1 === "neck"
                  ? ""
                  : videoVisible1 === "halfArmRelaxed"
                  ? ""
                  : videoVisible1 === "halfArmContracted"
                  ? ""
                  : videoVisible1 === "forearm"
                  ? ""
                  :videoVisible1 === "wrist"
                  ? ""
                  : videoVisible1 === "mesoesternal"
                  ? ""
                  : videoVisible1 === "umbilical"
                  ? ""
                  : videoVisible1 === "waist" 
                  ? ""
                  : videoVisible1 === "hip"
                  ? ""
                  :videoVisible1 === "thigh"
                  ? "" 
                  : videoVisible1 === "halfThigh"
                  ? ""
                  : videoVisible1 === "calf" 
                  ? ""
                  : videoVisible1 === "ankle"
                  ? ""
                  : videoVisible1
              }
              autoPlay
              loop
              muted
            />
          </div>
        )}
        <div className="pt-4 m-3">
          {paragraphVisible1 === "cephalic" ? (
            <p>Perímetro de la cabeza</p>
          ) : paragraphVisible1 === "neck" ? (
            <p>Perímetro del cuello</p>
          )
            :paragraphVisible1 === "halfArmRelaxed" ? (
                <p>Es el contorno del brazo relajado con el sujeto de pie</p>
            )
            :paragraphVisible1 === "halfArmContracted" ? (
                <p>Es el contorno máximo del brazo contraido con el sujeto de pie. La flexión de codo debe ser de 45°<br/>
                <b>Se usa para cálculo del somatotipo</b></p>
            )
            : paragraphVisible1 === "forearm" ? (
                <p>Es el máximo contorno del antebrazo, tomado con el codo extendido.</p>
            )
            :paragraphVisible1 === "wrist" ? (
                <p>Es el mínimo contorno del antebrazo.</p>
            )
            : paragraphVisible1 === "mesoesternal" ? (
                <p>También llamado torácico o pecho, esta en el cuerpo del esternon a nivel de la cuarta articulación condroesternal.</p>
            )
            : paragraphVisible1 === "umbilical" ? (
                <p>Perímetro abdominal</p>
            )
            :paragraphVisible1 === "waist" ? (
                <p>En el punto medio del borde costal y la cresta iliaca.</p>
            )
            : paragraphVisible1 === "hip" ? (
                <p>Es el contorno máximo de la cadera</p>
            )
            : paragraphVisible1 === "thigh" ? (
                <p>El sujeto adopta una posición relajada, de pie, con los brazos cruzados sobre el tórax. El sujeto está de pie, con los pies levemente separados y la masa del cuerpo distribuido por igual en ambos pies.</p>
            )
            : paragraphVisible1 === "halfThigh" ? (
                <p>El sujeto adopta una posicion relajada, de pie, con los brazos cruzados sobre el tórax. El sujeto está de pie, con los pies levemente separados y el peso del cuerpo distribuido por igual en ambos pies.</p>
            )
            : paragraphVisible1 === "calf" ? (
                <p>El contorno máximo de la pantorrilla<br/>
                <b>Se usa para cálculo del somatotipo</b>
                </p>
            )
            :paragraphVisible1 === "ankle" ? (
                <p>Es el mínimo contorno de la pierna, por encima del maleolo tibial.</p>
            )
            :paragraphVisible1
        }
        </div>
      </div>
    </div>
  );
};

export default Perimeters;
