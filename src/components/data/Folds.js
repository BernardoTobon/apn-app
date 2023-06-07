import React, { useState, useRef, useEffect } from "react";

const Folds = () => {
  const [videoVisible, setVideoVisible] = useState("");
  const [paragraphVisible, setParagraphvisible] = useState("");
  const [subscapularis, setSubscapularis] = useState("");
  const [triceps, setTriceps] = useState("");
  const [biceps, setBiceps] = useState("");
  const [iliac, setILiac] = useState("");
  const [supraspinal, setSupraspinal] = useState("");
  const [abdominal, setAbdominal] = useState("");
  const [frontThigh, setFrontThigh] = useState("");
  const [medialCalf, setMedialCalf] = useState("");
  const [MedialAxillary, setMedialAxillary] = useState("");
  const [pectoral, setPectoral] = useState("");

  const videoRef = useRef(null);

  const handleFieldClick = (field) => {
    setVideoVisible(field);
  };

  const handleFieldClickParagraph = (field) => {
    setParagraphvisible(field);
  };

  useEffect(() => {
    if (videoVisible) {
      videoRef.current.play();
      videoRef.current.loop = true;
    }
  }, [videoVisible]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="pl-2 md:pl-10 pt-8">
        <form>
          <div className="flex flex-row">
            <div className="w-40 m-1">
              <label className="text-dark-green">Subescapular</label>
            </div>
              <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                type="text"
                value={subscapularis}
                onChange={(e) => setSubscapularis(e.target.value)}
                onClick={() => {
                  handleFieldClick("subscapularis");
                  handleFieldClickParagraph("subscapularis");
                }}
              />
          </div>
          <div className="flex flex-row">
            <div className="w-40 m-1">
              <label className="text-dark-green">Tríceps</label>
            </div>
              <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                type="text"
                value={triceps}
                onChange={(e) => setTriceps(e.target.value)}
                onClick={() => {
                  handleFieldClick("triceps");
                  handleFieldClickParagraph("triceps");
                }}
              />
          </div>
          <div className="flex flex-row">
            <div className="w-40 m-1">
              <label className="text-dark-green">Bíceps</label>
            </div>
              <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                type="text"
                value={biceps}
                onChange={(e) => setBiceps(e.target.value)}
                onClick={() => {
                  handleFieldClick("biceps");
                  handleFieldClickParagraph("biceps");
                }}
              />
          </div>
          <div className="flex flex-row">
            <div className="w-40 m-1">
              <label className="text-dark-green">Cresta Ilíaca</label>
            </div>
              <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                type="text"
                value={iliac}
                onChange={(e) => setILiac(e.target.value)}
                onClick={() => {
                  handleFieldClick("iliac");
                  handleFieldClickParagraph("iliac");
                }}
              />
          </div>
          <div className="flex flex-row">
            <div className="w-40 m-1">
              <label className="text-dark-green">Supraespinal</label>
            </div>
              <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                type="text"
                value={supraspinal}
                onChange={(e) => setSupraspinal(e.target.value)}
                onClick={() => {
                  handleFieldClick("supraspinal");
                  handleFieldClickParagraph("supraspinal");
                }}
              />
          </div>
          <div className="flex flex-row">
            <div className="w-40 m-1">
              <label className="text-dark-green">Abdominal</label>
            </div>
              <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                type="text"
                value={abdominal}
                onChange={(e) => setAbdominal(e.target.value)}
                onClick={() => {
                  handleFieldClick("abdominal");
                  handleFieldClickParagraph("abdominal");
                }}
              />
          </div>
          <div className="flex flex-row">
            <div className="w-40 m-1">
              <label className="m-1 text-dark-green">Muslo Frontal</label>
            </div>
              <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                type="text"
                value={frontThigh}
                onChange={(e) => setFrontThigh(e.target.value)}
                onClick={() => {
                  handleFieldClick("frontThigh");
                  handleFieldClickParagraph("frontThigh");
                }}
              />
            </div>
          <div className="flex flex-row">
            <div className="w-40 m-1">
              <label className="text-dark-green">Pantorrilla Medial</label>
            </div>
              <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                type="text"
                value={medialCalf}
                onChange={(e) => setMedialCalf(e.target.value)}
                onClick={() => {
                  handleFieldClick("medialCalf");
                  handleFieldClickParagraph("medialCalf");
                }}
              />
          </div>
          <div className="flex flex-row">
            <div className="w-40 m-1">
              <label className="text-dark-green">Axilar Medial</label>
            </div>
              <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                type="text"
                value={MedialAxillary}
                onChange={(e) => setMedialAxillary(e.target.value)}
                onClick={() => {
                  handleFieldClick("medialAxillary");
                  handleFieldClickParagraph("medialAxillary");
                }}
              />
          </div>
          <div className="flex flex-row">
            <div className="w-40 m-1">
              <label className="text-dark-green">Pectoral</label>
            </div>
              <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                type="text"
                value={pectoral}
                onChange={(e) => setPectoral(e.target.value)}
                onClick={() => {
                  handleFieldClick("pectoral");
                  handleFieldClickParagraph("pectoral");
                }}
              />
          </div>
        </form>
      </div>
      <div className="flex flex-col">
        {videoVisible && (
          <div className="flex justify-center pt-4">
            <video
              className="h-96"
              ref={videoRef}
              src={
                videoVisible === "subscapularis"
                  ? "/Vegeta.mp4"
                  : videoVisible === "triceps"
                  ? "/Goku.mp4"
                  : videoVisible === "biceps"
                  ? ""
                  : videoVisible === "iliac"
                  ? ""
                  : videoVisible === "supraspinal"
                  ? ""
                  : videoVisible === "abdominal"
                  ? ""
                  : videoVisible === "fronThigh"
                  ? ""
                  : videoVisible === "medialCalf"
                  ? ""
                  : videoVisible === "medialAxillary"
                  ? ""
                  : videoVisible === "pectoral"
                  ? ""
                  : videoVisible
              }
              autoPlay
              loop
              muted
            />
          </div>
        )}
        <div className="pt-4 m-3">
          {paragraphVisible === "subscapularis" ? (
            <p>
              Está situado a dos centímetros del ángulo inferior de la escápula,
              en dirección oblicua abajo y hacia afuera formando un ángulo de
              45°
              <br />
              <b>
                Se usa en Fórmulas de: Siri, Brozek, Faulkner, Ledesma y cálculo
                del somatotipo
              </b>
            </p>
          ) : paragraphVisible === "triceps" ? (
            <p>
              Está situado en el punto medio acromio-radial en la parte
              posterior del brazo.
              <br />
              <b>
                Se usa en Fórmulas de: Siri, Brozek, Faulkner, Ledesma y cálculo
                del somatotipo
              </b>
            </p>
          ) : paragraphVisible === "biceps" ? (
            <p>
              Está situado en el punto medio acromio-radial en la parte anterior
              del brazo.
              <br />
              <b>Se usa en Fórmulas de: Siri, Brozek y Ledesma.</b>
            </p>
          ) : paragraphVisible === "iliac" ? (
            <p>
              Está situado en el punto medio acromio-radial en la parte anterior
              del brazo.
              <br />
              <b>Se usa en Fórmulas de: Siri, Brozek y Ledesma.</b>
            </p>
          ) : paragraphVisible === "supraspinal" ? (
            <p>
              Está localizado en la intersección formada en la línea del borde
              superior del íleon y una línea imaginaria que va desde la espina
              ilíaca antero posterior derecha hasta el borde axilar anterior
              <br />
              <b>
                Se usa para Fórmulas de: Siri, Brozek, Faulkner, Ledesma y
                cálculo del somatotipo
              </b>
            </p>
          ) : paragraphVisible === "abdominal" ? (
            <p>
              Está situada lateralmente a la derecha junto a la cicatriz
              umbilical anterior
              <br />
              <b>
                Se usa en la Fórmula de Faulkner para cálculo de grasa coporal.
              </b>
            </p>
          ) : paragraphVisible === "frontThigh" ? (
            <p>
              Está localizado en el punto medio de la línea que une al pliegue
              inguinal y el borde proximal del rótulo.
            </p>
          ) : paragraphVisible === "medialCalf" ? (
            <p>
              Está localizado en la zona donde el perímetro de la pantorrilla es
              máximo.
              <br />
              <b>Se usa para cálculo del somatotipo</b>
            </p>
          ) : paragraphVisible === "medialAxillary" ? (
            <p>
              Está localizado en la línea media axilar a la altura de la
              apófisis xifoides.
            </p>
          ) : paragraphVisible === "pectoral" ? (
            <p>Está localizado en la línea que une la axila con el pezón.</p>
          ) :paragraphVisible}
        </div>
      </div>
    </div>
  );
};

export default Folds;
