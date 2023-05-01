import Accordion from "./Accordion"
import Calendar from "./DatePicker"
import Link from "next/link"



const StartHome = () => {
    return <>
        <div className="w-full bg-tea-green">
            <div className="flex justify-center">
                <img className="h-80 w-96" src="/apnl.png" />
            </div>
            <div className="grid grid-cols-2 gap-4 p-8">
                <div>
                    <label>PRUEBA DE ESPACIO NUMERO 1</label>
                </div>
                <div>
                    <Accordion>
                         <Calendar/>
                    </Accordion>
                </div>
            </div>
        </div>
    </>
}

export default StartHome