import profile from "../assets/profile.png";
import { ABOUT_TEXT } from "../constants";

export default function About() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Acerca de <span className="text-neutral-500">mí</span></h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={profile} alt="" className="rounded-2xl" />
                    </div>

                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight text-center lg:text-left">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

