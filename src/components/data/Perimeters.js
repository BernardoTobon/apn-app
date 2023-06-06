const { useState, useRef, useEffect } = require("react")

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
    const paragraRef1 = useRef(null);

    const handleFieldClick1 = (field) => {
        setVideoVisible1(field);
    }

    const handleFieldClickParagraph1 = (field) => {
        setParagraphvisible1(field);
    }

    useEffect(() => {
        if (videoVisible1) {
            videoRef1.current.play();
            videoRef1.current.loop = true;
        }
    }, [videoVisible1])


    return<>
    
    </>
}