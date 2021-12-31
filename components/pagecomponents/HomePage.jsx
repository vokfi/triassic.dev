import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faYoutube, faTwitter, faReddit, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
    return (
        <section id="section-1">
            <div className="bg-gradient-to-r from-[#39CBFB] to-[#E783FC] w-full h-full">
                <div className="mx-12">
                    <div className="flex flex-col items-center justify-center h-screen">
                        <div className="bg-slate-700 min-w-3/6 md:min-w-full lg:min-w-full p-8 rounded-lg">
                            <div className="mb-12">
                                <div className="font-bold text-slate-600 pb-8 text-center">
                                    <Image src="/assets/img/triassic-128x128.png" width="128" height="128" alt="Triassic's Profile Picture" />
                                    <p className="text-xl text-slate-200 mt-4">Hello, I am Daniel.</p>
                                    <p className="italic text-sm text-slate-400">also known as Triassic.</p>
                                </div>
                                <div className="border-t border-slate-500"></div>
                            </div>
                            <p className="font-bold text-slate-300 text-2xl">Front-end Developer & Designer.</p>
                            <p className="italic text-slate-500 text-md mb-6">and I sure do create nice communities!</p>
                        </div>
                        <div className="relative">
                            <div className="bg-slate-800 rounded-full px-3 p-2 w-64 absolute -bottom-5 -left-32 text-center">
                                <a data-tip="Triassic#3426" href="https://discord.gg/YFk2BzJSKK" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-slate-200 hover:text-slate-300 mr-3" icon={faDiscord}></FontAwesomeIcon></a>
                                <a data-tip="RealTriassic" href="https://github.com/RealTriassic" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-slate-200 hover:text-slate-300 mr-3" icon={faGithub}></FontAwesomeIcon></a>
                                <a data-tip="Triassic" href="https://youtube.com/c/triassic" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-slate-200 hover:text-slate-300 mr-3" icon={faYoutube}></FontAwesomeIcon></a>
                                <a data-tip="@RealTriassic" href="https://twitter.com/RealTriassic" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-slate-200 hover:text-slate-300 mr-3" icon={faTwitter}></FontAwesomeIcon></a>
                                <a data-tip="techbyteofficial" href="https://reddit.com/user/techbyteofficial" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-slate-200 hover:text-slate-300 mr-3" icon={faReddit}></FontAwesomeIcon></a>
                                <a data-tip="RealTriassic" href="https://instagram.com/realtriassic/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-2xl text-slate-200 hover:text-slate-300" icon={faInstagram}></FontAwesomeIcon></a>
                            </div>
                        </div>
                        <div className="container text-center mt-16">
                            <a data-tip="Go to the next page" className="text-4xl text-slate-200 hover:text-slate-300" href="#section-2">
                                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                            </a>
                        </div>
                        <p className="text-center text-lg text-slate-300 italic">Keep going to find out more about me ;)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}  