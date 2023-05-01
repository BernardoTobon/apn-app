export default function Vid() {
    return (
        <div className="flex flex-col h-screen">
            <video autoPlay loop muted className="object-cover h-full w-full absolute p-2">
                <source src="/Vegeta.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center">
                <div className="flex justify-center pt-8 border-4 border-emerald-500 w-96 h-80 bg-lime-100 rounded-full">
                    <form>
                        <div className="flex justify-center pt-8">
                            <label className="font-bold italic" htmlFor="email">E-mail</label>
                        </div>
                        <div className="flex justify-center pt-2">
                            <input className="text-center border-2 rounded-full border-emerald-500 hover:bg-lime-50" type="email" placeholder="example@gmail.com" id="email" name="email" required/>
                        </div>
                        <div className="flex justify-center pt-8">
                            <label className="font-bold italic" htmlFor="password">Password</label>
                        </div>
                        <div className="flex justify-center pt-2">
                            <input className="text-center border-2  rounded-full border-emerald-500 hover:bg-lime-50" type="password" placeholder="*********" id="password" name="password" required/>
                        </div>
                        <div className="flex justify-center pt-8">
                            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full" type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}
