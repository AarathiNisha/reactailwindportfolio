export default function Resume () {
    const config = {
        link: 'https://drive.google.com/file/d/1j7QQjoKQKNwqjSIwh9ioqsLjesKEtSCk/view?usp=sharing'
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-2'>
    
        <div className='md:w-1/2 flex'>
            <div className='flex flex-col px-2 text-white'>
                <h1 className='text-4xl border-b-2 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href={config.link} download> Download</a></p>
            </div>
        </div>
    </section>
}