import websiteImg1 from '../assets/website-blog.jpg';

export default function Projects() {

    const config = {
        projects : [
            
            {
                image: websiteImg1,
                description: 'Basic Blog Website . Built with Html,CSS,JavaScript,Django and MySQL',
                link: 'https://github.com/AarathiNisha/djangoaaracode.git'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-1 py-5">
                <h1 className="text-4xl border-b-2 border-secondary mb-5 w-[130px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with Html,CSS,JavaScript,React Js, Django, MySQL. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}