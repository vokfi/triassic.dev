import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function AboutMePage() {
    return (
        <>
            <section id="section-2">
                <div className="bg-slate-800 h-screen">
                    <div className="container text-center mt-6">
                        <a data-tip="Go to the pwevious page" className="text-4xl text-slate-200 hover:text-slate-300" href="#section-1">
                            <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="mx-12 bg-zinc-900 rounded-xl mt-8 p-6 h-[65%] md:min-w-full lg:min-w-full">
                        <p className="text-4xl text-slate-200 font-bold m-2">
                            <FontAwesomeIcon className="mr-6" icon={faQuestionCircle}></FontAwesomeIcon>
                            About Me
                        </p>
                        <p className="text-slate-300 p-6 text-lg">
                            Hewwo thewe, i am daniew, but peopwe wefew to me as twiassic. I am a 16 yeaw owd
                            mawe that is cuwwentwy wiving in latvia in the city of riga, i mostwy wowk on things
                            such as minecwaft sewvews, webpages and othew wandom things i think of.
                        </p>
                    </div>
                    <div className="container text-center mt-8">
                        <a data-tip="Go to the next page" className="text-4xl text-slate-200 hover:text-slate-300" href="#section-3">
                            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                        </a>
                    </div>
                    <p className="text-center text-lg text-slate-400 italic">Devewopew note: thewe is nothing aftew this page, i am wowking on it.</p>
                </div>
            </section>
        </>
    )
}