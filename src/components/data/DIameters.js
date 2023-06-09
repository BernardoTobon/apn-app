import { useEffect, useRef, useState } from "react";

const Diameters = () => {
  const [videoVisible2, setVideoVisible2] = useState("");
  const [paragraphVisible2, setParagraphvisible2] = useState("");
  const [biacromial, setBIacromial] = useState("");
  const [biileocrestal, setBiileocrestal] = useState("");
  const [footLenght, setFootLengt] = useState("");
  const [transverseThorax, setTransverseTorax] = useState("");
  const [anteriorPosteriorThorax, setAnteriorPosteriorThorax] = useState("");
  const [biepicondylliumHumerus, setBiepicondylliumHumerus] = useState("");
  const [wristBistyloid, setWristBistyloid] = useState("");
  const [bicondyleFemur, setBicondyleFemur] = useState("");
  const [bimalleolar, setBimalleolar] = useState("");
  const [transverseFoot, setTransverseFoot] = useState("");
  const [handLenght, setHandLenght] = useState("");
  const [transverseHand, setTransversehand] = useState("");

  const videoRef2 = useRef(null);

  const handleFieldClick2 = (field) => {
    setVideoVisible2(field);
  };

  const handleFieldClickParagraph2 = (field) => {
    setParagraphvisible2(field);
  };

  useEffect(() => {
    if (videoVisible2) {
      videoRef2.current.play();
      videoRef2.current.loop = true;
    }
  }, [videoVisible2]);

  return <>
  <div className="grid grid-cols-1 md:grid-cols-2">
    <div className="pl-2 md:pl-10 pt-8">
    <form>
        <div className="flex flex-row">
            <div className="w-64 m-1">
                <label className="text-dark-green">Biacromial</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={biacromial}
                onChange={(e) => setBIacromial(e.target.value)}
                onClick={() => {
                    handleFieldClick2("biacromial");
                    handleFieldClickParagraph2("biacromial");
                }}
            />
        </div>
        <div className="flex flex-row">
            <div className="w-64 m-1">
                <label className="text-dark-green">Biileocrestal</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={biileocrestal}
                onChange={(e) => setBiileocrestal(e.target.value)}
                onClick={() => {
                    handleFieldClick2("biileocrestal");
                    handleFieldClickParagraph2("biileocrestal");
                }}
            />
        </div>
        <div className="flex flex-row">
            <div className="w-64 m-1">
                <label className="text-dark-green">Longitud del pie</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={footLenght}
                onChange={(e) => setFootLengt(e.target.value)}
                onClick={() => {
                    handleFieldClick2("footLenght");
                    handleFieldClickParagraph2("footLenght");
                }}
            />
        </div>
        <div className="flex flex-ror">
            <div className="w-64 m-1">
                <label className="text-dark-green">Transverso del toráx</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={transverseThorax}
                onChange={(e) => setTransverseTorax(e.target.value)}
                onClick={() => {
                    handleFieldClick2("transverseThorax");
                    handleFieldClickParagraph2("transverseThorax");
                }}
            />
        </div>
        <div className="flex flex-row">
            <div className="w-64 m-1">
                <label className="text-dark-green">Antero posterior del toráx</label>
            </div>
            <input
               className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
               value={anteriorPosteriorThorax}
               onChange={(e) => setAnteriorPosteriorThorax(e.target.value)}
               onClick={() => {
                handleFieldClick2("anteriorPosteriorThorax");
                handleFieldClickParagraph2("anteriorPosteriorThorax");
               }} 
            />
        </div>
        <div className="flex flex-row">
            <div className="w-64 m-1">
               <label className="text-dark-green">Biepicondilio del Húmero</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={biepicondylliumHumerus}
                onChange={(e) => setBiepicondylliumHumerus(e.target.value)}
                onClick={() => {
                    handleFieldClick2("biepicondylliumHumerus");
                    handleFieldClickParagraph2("biepicondylliumHumerus");
                }}   
            />
        </div>
        <div className="flex flex-row">
            <div className="w-64 m-1">
                <label className="text-dark-green">Biestiloideo de la muñeca</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={wristBistyloid}
                onChange={(e) => setWristBistyloid(e.target.value)}
                onClick={() => {
                    handleFieldClick2("wristBistyloid");
                    handleFieldClickParagraph2("wristBistyloid");
                }}    
            />
        </div>
        <div className="flex flex-row">
            <div className="w-64 m-1">
                <label className="text-dark-green">Bicondileo del fémur</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={bicondyleFemur}
                onChange={(e) => setBicondyleFemur(e.target.value)}
                onClick={() => {
                    handleFieldClick2("bicondyleFemur");
                    handleFieldClickParagraph2("bicondyleFemur");
                }}   
            />
        </div>
        <div className="flex flex-row">
            <div className="w-64 m-1">
                <label className="text-dark-green">Bimaleolar</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={bimalleolar}
                onChange={(e) => setBimalleolar(e.target.value)}
                onClick={() => {
                    handleFieldClick2("bimalleolar");
                    handleFieldClickParagraph2("bimalleolar");
                }}
            />
        </div>
        <div className="flex flex-row">
            <div className="w-64 m-1">
                <label className="text-dark-green">Transverso del pie</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={transverseFoot}
                onChange={(e) => setTransverseFoot(e.target.value)}
                onClick={() => {
                    handleFieldClick2("transverseFoot");
                    handleFieldClickParagraph2("transverseFoot");
                }}
            />
        </div>
        <div className="flex flex-row">
            <div className="w-64 m-1">
                <label className="text-dark-green">Longitud mano</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={handLenght}
                onChange={(e) => setHandLenght(e.target.value)}
                onClick={() => {
                    handleFieldClick2("handLenght");
                    handleFieldClickParagraph2("handLenght");
                }}
            />
        </div>
        <div className="flex flex-row">
            <div className="w-64 m-1">
                <label className="text-dark-green">Transverso de la mano</label>
            </div>
            <input
                className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-fluorescent-green rounded-lg"
                value={transverseHand}
                onChange={(e) => setTransversehand(e.target.value)}
                onClick={() => {
                    handleFieldClick2("transverseHand");
                    handleFieldClickParagraph2("transverseHand");
                }}
            />
        </div>
    </form>
    </div>
    <div className="flex flex-col">
        {videoVisible2 && (
            <div className="flex justify-center pt-4">
                <video
                className="h-96"
                    ref={videoRef2}
                    src={
                        videoVisible2 === "biacromial"
                        ? "/Goku.mp4"
                        : videoVisible2 === "biileocrestal"
                        ? "/Vegeta.mp4"
                        : videoVisible2 === "footLenght"
                        ? ""
                        : videoVisible2 === "transverseThorax"
                        ? ""
                        : videoVisible2 === "anteriorPosteriorThorax"
                        ? ""
                        : videoVisible2 === "biepicondylliumHumerus"
                        ? ""
                        :videoVisible2 === "wristBistyloid"
                        ? ""
                        :videoVisible2 === "bicondyleFemur"
                        ? ""
                        : videoVisible2 === "bimalleolar"
                        ? ""
                        :videoVisible2 === "transverseFoot"
                        ? ""
                        : videoVisible2 === "handLenght"
                        ? ""
                        : videoVisible2 === "transverseHand"
                        ? ""
                        : videoVisible2
                    }
                    autoPlay
                    loop
                    muted
                />
            </div>
        )}
        <div className="pt-4 m-3">
            {paragraphVisible2 === "biacromial" ? (
                <p>Es la distancia entre el punto acromial derecho y el izquierdo.</p>
            )
            : paragraphVisible2 === "biileocrestal" ? (
                <p>Es la distancia entre los punto ileocrestales izquierdo y derecho</p>
            )
            : paragraphVisible2 === "footLenght" ? (
                <p>Es la distacia entre los puntos anterior y posterior del pie.</p>
            )
            : paragraphVisible2 === "transverseThorax" ? (
                <p>Es la distancia entre los puntos más laterales del tórax. (a nivel de la cuarta costilla)</p>
            )
            : paragraphVisible2 === "anteriorPosteriorThorax" ? (
                <p>Es la distancia entre el punto mesoesternal del tórax y el proceso espinoso del mismo nivel.</p>
            )
            : paragraphVisible2 === "biepicondylliumHumerus" ? (
                <p>Es la distancia entre el epicóndilo y la epitróclea del húmero, el codo deberá estar en un ángulo de 90°<br/>
                <b>Se usa para cálculo del somatotipo</b></p>
            )
            : paragraphVisible2 === "wristBistyloid" ? (
                <p>Es la distancia entre la apófisis estiloides del radio y del cúbito. El sujeto debe estar con el antebrazo en pronación con una flexión de muñeca de 90°.<br/>
                <b>Se usa para cálculo de la masa ósea.</b></p>
            )
            : paragraphVisible2 === "bicondyleFemur" ? (
                <p>Es la distancia entre el cóndilo medial y lateral del fémur.
                El sujeto debrá estar sentado con una flexión de rodilla de 90°.<br/>
                <b>Se usa para cálculo del somatotipo y de la masa ósea.</b></p>
            )
            : paragraphVisible2 === "bimalleolar" ? (
                <p>Es la distancia entre el maleolar tibial y el peroneo. La articulación del tobillo debe tener 90° de flexión.</p>
            )
            : paragraphVisible2 === "transverseFoot" ? (
                <p>Es la distancia entre el punto metatarsiano tibial y peroneal.</p>
            )
            : paragraphVisible2 === "handLenght" ? (
                <p>Es la distancia entre el punto medio biestiloideo y el punto dedal medio.</p>
            )
            : paragraphVisible2 === "transverseHand" ? (
                <p>Es la distancia entre el punto metacarpiano lateral y medial.</p>
            )
            : paragraphVisible2
        }
        </div>
    </div>
    
    </div>
  </>;
};

export default Diameters;
