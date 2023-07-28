import AnimatedElement from "../hooks&HOCs/AnimatedElement";

export default function License() {
    return (
        <div className="bg-cyan-600 p-10 flex flex-col gap-10 py-24" id="license">
            <AnimatedElement direction="static">
                <h1 className="text-center text-6xl font-bold text-slate-50">Лицензия</h1>
            </AnimatedElement>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-7xl">
                <AnimatedElement direction="left">
                    <div className="grid gap-1">
                        <img src="/passport.jpg" alt="passport" />
                        <span className="text-slate-200 text-center ">Паспорт основателя</span>
                    </div>
                </AnimatedElement>
                <AnimatedElement direction="right">

                    <div className="grid gap-1">
                        <a href="/file1.pdf" download className="w-full">
                            <img src="/license.png" alt="license" className="cursor-pointer" />
                            <span className="text-slate-200 text-center w-full">License</span>
                        </a>
                    </div>
                </AnimatedElement>
            </div>
        </div >
    )
}