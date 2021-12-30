import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function AboutMePage() {
    return (
        <>
            <section id="section-2">
                <div className="bg-slate-800 h-screen">
                    <div className="container text-center mt-6">
                        <a data-tip="Go to the previous page" className="text-4xl text-slate-200" href="#section-1">
                            <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="mx-12 bg-zinc-900 rounded-xl mt-8 p-6 h-[65%]">
                        <p className="text-4xl text-slate-200 font-bold m-2">
                            <FontAwesomeIcon className="mr-6" icon={faQuestionCircle}></FontAwesomeIcon>
                            About Me
                        </p>
                        <p className="text-slate-300 p-6 text-lg">
                            Hello there, I am Daniel, but people refer to me as Triassic. I am a 16 year old
                            male that is currently living in Latvia in the city of Riga, I mostly work on things
                            such as Minecraft servers, webpages and other random things I think of.
                        </p>
                    </div>
                    <div className="container text-center mt-8">
                        <a data-tip="Go to the next page" className="text-4xl text-slate-200" href="#section-3">
                            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                        </a>
                    </div>
                    <p className="text-center text-lg text-slate-400 italic">Developer Note: there is nothing after this page, I am working on it.</p>
                </div>
            </section>
        </>
    )
}