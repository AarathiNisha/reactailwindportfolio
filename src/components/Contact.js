
export default function Contact () {

    const config = {
        email : 'aarathisa@gmail.com',
        phone: '9150943461'
    }

    return <section id='contact' className='flex flex-col bg-primary px-1 py-32 text-white'>
        <div className='flex flex-col px-5'>
           
            <h1 className='text-4xl border-b-2  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}