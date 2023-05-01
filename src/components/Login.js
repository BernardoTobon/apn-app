import Tilt from 'react-parallax-tilt'

const Login = () => {
    return <>
        <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center">
            <div className="h-40-r w-40-r bg-gradient-to-r from-tea-green via-fluorescent-green to-dark-green rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
            <div className="h-35-r w-35-r bg-gradient-to-r from-fluorescent-green via-light-green to-dark-green rounded-full absolute mt-60 top=96 -left-20 animate-pulse"></div>
            <Tilt>
                <div className="container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-50 backdrop-filter backdrop-blur-sm">
                    <form className="h-full flex flex-col justify-evenly items-center">
                        <div className="font-poppins text-white text-2xl tracking-wider">Bienvenido</div>
                        <input type="text" placeholder="E-mail" className="input-text"></input>
                        <input type="password" placeholder="Password" className="input-text"></input>
                        <input type="submit" className="font-poppins cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80"/>
                    </form>
                </div>
            </Tilt>
        </div>
    </>
}

export default Login 