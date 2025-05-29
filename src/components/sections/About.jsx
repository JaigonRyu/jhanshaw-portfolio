
import {RevealOnScroll} from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ['React', "Vue", "TailwindCSS"];
    const backendSkills = ['Node.js', "Python", "AWS"]

    return (<section id='about' className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>

        <div className="max-w-3xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center "> About Me </h2>
      

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">Hi! I'm Jacob Hanshaw, a recent graduate with a B.S. in Cognitive Science (specializing in Machine Learning and Neural Networks) and an incoming Master's student in Data Science at UC San Diego. My journey has been driven by a passion for blending data-driven insights with real-world impact, whether in healthcare AI, computer vision, or reinforcement learning.

            I've worked on a range of projects that highlight my curiosity and technical versatility: from building reinforcement learning environments to generalize EEG data, to developing deep learning pipelines for X-ray image classification using the Stanford MURA dataset. I'm particularly interested in the intersection of scalable systems and robust, generalizable AI models—how we can take models out of the lab and into the world while ensuring they're efficient, ethical, and effective.

            My technical toolkit includes Python, Java, PyTorch, and SQL, along with a growing curiosity for cloud tools and DevOps practices. I'm not just about the code—I love collaborating across disciplines, organizing complex ideas into actionable plans, and turning data into decisions.

            When I'm not coding, I'm likely exploring the outdoors, diving into podcasts about emerging AI trends, or leading events as the VP of Social Internal for the Nikkei Student Union at UCSD.

            Let's build something impactful together!
            
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> FrontEnd</h3>

                        <div className="flex flex-wrap gap-2">

                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">

                                    {tech}
                                </span>
                            ))}
                        </div>

                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Backend</h3>

                        <div className="flex flex-wrap gap-2">

                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">

                                    {tech}
                                </span>
                            ))}
                        </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4"> Education </h3>

                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.S in Cognitive Science w/ a Spec. In Machine Learning and Neural Networks </strong> - UC San Diego (2023-2025)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Cloud Computing, ML Algorithms
                                </li>
                            </ul>

                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                            <h3 className="text-xl font-bold mb-4"> Work Experience </h3>

                            <div className="space-y-4 text-gray-300">

                                <div>

                                    <h4 className="font-semibold"> Computer Science Instructor at Juni Learning (2023-2024)</h4>
                                    <p> Taught computer science </p>
                                </div>
                            </div>

                            <div className="space-y-4 text-gray-300">

                                <div>

                                    <h4 className="font-semibold"> Research Assistant at UC San Diego</h4>
                                    <p> Built webexperiments for the Cognitive Science Lab </p>
                                </div>
                            </div>



                </div>

            </div>
        </div>
        </div>
    </RevealOnScroll>
    </section>
    );
};