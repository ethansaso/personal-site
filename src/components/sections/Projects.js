import TaxoKeys from "../../assets/img/projects/taxogif.gif"
import WebRecon2 from "../../assets/img/projects/wrgif.gif"
import Volleyball from "../../assets/img/projects/volleygif.gif"
import Reveal from "../util/Reveal"

const Projects = () => {
    return (
        <div id="projects" className="container flex flex-col max-w-7xl mx-auto items-center justify-center mt-24 px-8 lg:px-16 lg:mb-24">
            <h1 className="text-primary text-5xl text-center lg:text-left mb-8 w-full font-semibold">Projects</h1>
            <div className="project-section flex flex-row gap-8 flex-wrap justify-between">
                <Reveal width='md:w-[45%] lg:w-full flex-grow' from='left'>
                    <div className="glass-card flex flex-col lg:flex-row items-center  flex-grow lg:p-8 project-card project-card-1">
                        <div className="w-full lg:w-[40%] flex items-center">
                            <img className="w-full aspect-[4/3] object-cover rounded-t-2xl lg:rounded-2xl border border-neutral" src={TaxoKeys} alt="TaxoKeys"/>
                        </div>
                        <div className="h-full p-8 lg:p-0 flex-grow lg:pl-8 flex flex-col lg:w-[60%] w-full">
                            <div className="w-full border-b border-neutral mb-2">
                                <h1 className="text-4xl font-semibold text-secondary">TaxoKeys</h1>
                                <h2 className="text-lg text-accent">MERN stack, Python, Digital Ocean</h2>
                            </div>
                            <p className="text-lg flex-grow">Using dynamic algorithms, TaxoKeys generates elegant, flowchart-style guides to identifying wild organisms in real time, resolving complex relationships between species with minimal error.</p>
                            <a href="https://taxokeys.org" className="w-full text-center rounded-2xl border border-neutral mt-4 lg:mt-2 p-2 hover:border-neutral-content bg-base-100/50 transition-all">Visit Site</a>
                        </div>
                    </div>
                </Reveal>
                <Reveal width='md:w-[45%] lg:w-full flex-grow' from='right'>
                    <div className="glass-card flex flex-col lg:flex-row-reverse items-center flex-grow lg:p-8 project-card project-card-2">
                        <div className="w-full lg:w-[40%] flex items-center">
                            <img className="w-full aspect-[4/3] object-cover rounded-t-2xl lg:rounded-2xl border border-neutral" src={WebRecon2} alt="Web Recon 2"/>
                        </div>
                        <div className="h-full p-8 lg:p-0 flex-grow lg:pr-8 flex flex-col lg:w-[60%] w-full">
                            <div className="w-full border-b border-neutral mb-2">
                                <h1 className="text-4xl font-semibold text-secondary">WebRecon2</h1>
                                <h2 className="text-lg text-accent">Golang, Amass, DNSGen, ...</h2>
                            </div>
                            <p className="text-lg flex-grow">WebRecon2 leverages a variety of best-in-class cybersecurity tools
                                to automate a workflow for performing subdomain enumeration.</p>
                            <a href="https://github.com/sammooredev/WebRecon2" className="w-full text-center rounded-2xl border border-neutral mt-4 lg:mt-2 p-2 hover:border-neutral-content bg-base-100/50 transition-all">Visit Site</a>
                        </div>
                    </div>
                </Reveal>
                <Reveal width='w-full' from='left'>
                    <div className="glass-card flex flex-col md:flex-row items-center flex-grow md:p-8 project-card project-card-3">
                        <div className="w-full md:w-[40%] flex items-center"> 
                            <img className="w-full aspect-[4/3] object-cover rounded-t-2xl md:rounded-2xl border border-neutral" src={Volleyball} alt="Cal Men's Volleyball"/>
                        </div>
                        <div className="h-full p-8 md:p-0 flex-grow md:pl-8 flex flex-col md:w-[60%] w-full">
                            <div className="w-full border-b border-neutral mb-2">
                                    <h1 className="text-4xl font-semibold text-secondary">Cal Men's Volleyball <span className="text-error">(WIP)</span></h1>
                                    <h2 className="text-lg text-accent">React.js, Github Pages</h2>
                            </div>
                            <p className="text-lg flex-grow">Official website for UC Berkeley's Division-I Men's Club Volleyball Team.</p>
                            <a href="https://ethansaso.github.io/cal-mens-volleyball" className="w-full text-center rounded-2xl border border-neutral mt-4 md:mt-2 p-2 hover:border-neutral-content bg-base-100/50 transition-all">Visit Site</a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}

export default Projects;