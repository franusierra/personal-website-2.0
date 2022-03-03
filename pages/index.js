import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
    return (
        <div className='bg-gray-900'>
            <Head>
                <title>Fran Núñez</title>
                <meta name='description' content='Francisco Núñez Sierra Personal Website'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <header className='max-h-full p-6 grid'>
                <nav className='w-full grid justify-end'>
                    <ul className='hidden md:flex space-x-8 font-bold text-white'>
                        <li>
                            <a href='#'>Works</a>
                        </li>
                        <li>
                            <a href='#'>Blog</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                    <div className='md:hidden'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-white cursor-pointer' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'/>
                        </svg>
                    </div>
                </nav>
                <div className='container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-2 justify-center content-center md:py-40 '>
                    <div className='grid justify-center items-center order-1 col-span-1'>
                        <div className={
                            styles.polaroid + " grid grid-cols-1 content-center"
                        }>
                            <a href="#" title="About me" className='w-full'>
                                <div className='w-96 h-96'>
                                    <Image className='rounded-sm' layout='fill' src='/static/images/paper-texture-brighter.jpg'/>
                                    <Image height="80" width="80" layout='responsive' src='https://i.gifer.com/Gpsx.gif'/>
                                </div>
                                <label className='align-middle grid-cols-1 text-3xl font-bold text-gray-800'>Francisco Núñez</label>
                            </a>
                        </div>
                    </div>
                    <div className='mt-8 md:mt-0  hcol-span-1  grid auto-cols-auto auto-cols-min content-center'>
                        <h1 className='self-align-center md:text-4xl lg:text-5xl text-white text-center md:text-left font-bold mb-6'>
                            <span className='text-amber-200'>Print(</span>'Hello World'<span className='text-amber-200'>);</span>
                        </h1>
                       
                        <p className='lg:text-4xl md:text-2xl text-white text-center md:text-left'>I am a Software Engineer specialized on <span className='text-teal-300'>DevOps Methodologies</span> and <span className='text-teal-300'>Cloud Architectures</span>.</p>
                        <div>
                            <button className='mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400'>
                                Download Resume</button>
                        </div>

                    </div>
                </div>

            </header>

        </div>
    )
}
