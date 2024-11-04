export default function About () {
    const config  = {
        line1: 'Hi, My name is Aarathi Nisha. I am a BE Computer Science and Engineering Final year Student.',
        line2: 'My objective is to excel in both front-end and back-end development, ensuring seamless and efficient web application delievery.',
        line3: 'I built beautiful Blog Websites with Html, CSS, JavaScript, Django and MySQL.',
        line4: 'I am proficient in Frontend skills like Html, CSS, React.js, Tailwind CSS.',
        line5: 'In backend I know Django, MySQl, Python(Programming Language).',

        
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/8 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-20 border-primary mb-5 w-[170px] font-bold about'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
                <p className='pb-5'>{config.line5}</p>
            </div>
        </div>
    </section>
}