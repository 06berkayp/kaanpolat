import { FaInstagram, FaSteam } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaSpotify } from 'react-icons/fa'
import Container from '@/components/container'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

function Home() {
    return (
        <Container as='main' className='h-full'>
            <div className='md:flex md:flex-col lg:flex lg:flex-col lg:items-center lg:justify-center lg:pt-5 xl:pt-7 xxl:pt-14'>
                <div className='m-auto size-[230px] bg-gradient-to-r from-[#B6B8AD] to-[#B6B8AD] xxs:size-[260px] xs:size-[300px] sm:size-[340px] md:size-[400px] lg:size-[360px] xl:size-[400px] xxl:size-[450px]'>
                    <img
                        className='size-[230px] object-cover p-1 xxs:size-[260px] xs:size-[300px] sm:size-[340px] md:size-[400px] lg:size-[360px] xl:size-[400px] xxl:size-[450px]'
                        src='/assets/images/main.jpeg'
                    />
                </div>
                <div className='mt-4 flex h-full w-full items-center justify-center gap-3 text-white *:cursor-pointer md:pt-2 lg:pt-2 *:lg:size-[50px] xl:pt-1 *:xl:size-[50px] xxl:pt-2 *:xxl:size-[60px]'>
                    <Link to='https://www.instagram.com/kaanplt06/' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram className='size-[34px] rounded-lg text-[#B6B8AD] transition-all hover:bg-gradient-to-r hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:p-1 hover:text-white xxs:size-[37px] xs:size-[45px] sm:size-[50px] md:size-[50px] lg:size-[45px] xxl:size-[55px]' />
                    </Link>
                    <Link to='https://twitter.com/kaanpol50981441' target='_blank' rel='noopener noreferrer'>
                        <FaXTwitter className='size-[34px] rounded-lg text-[#B6B8AD]  transition-all hover:bg-[#000000] hover:p-1 hover:text-white xxs:size-[37px] xs:size-[45px] sm:size-[50px] md:size-[50px] lg:size-[45px] xxl:size-[55px]' />
                    </Link>
                    <Link
                        to='https://open.spotify.com/user/31votwl4vq6dvqehxfggh22hzmum?si=3c95fd8a022b48ac'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FaSpotify className='size-[34px] rounded-lg text-[#B6B8AD] transition-all hover:bg-[#1DB954] hover:p-1 hover:text-white xxs:size-[37px] xs:size-[45px] sm:size-[50px] md:size-[50px] lg:size-[45px] xxl:size-[55px]' />
                    </Link>
                    <Link to='https://steamcommunity.com/id/kaanpolatt7' target='_blank' rel='noopener noreferrer'>
                        <FaSteam className='size-[34px] rounded-lg text-[#B6B8AD] transition-all hover:bg-[#000000] hover:bg-gradient-to-r hover:p-1 hover:text-white xxs:size-[37px] xs:size-[45px] sm:size-[50px] md:size-[50px] lg:size-[45px] xxl:size-[55px]' />
                    </Link>
                </div>
            </div>

            <div className=' relative mt-[30px] flex w-full flex-col xl:w-[60%] xl:pt-5 xxl:w-[60%] xxl:pt-1'>
                <h1 className='text-[60px] font-extrabold tracking-wider text-[#B6B8AD] xs:text-[75px] sm:text-[90px] md:text-[105px] lg:text-[120px] xl:text-[130px] xxl:text-[160px]'>
                    KAAN
                </h1>

                <h1 className='w-full content-end border-b-[1px] border-neutral-700 text-end text-[60px] font-extrabold text-[#B6B8AD] xs:text-[75px] sm:text-[90px] md:text-[105px] lg:text-[120px] xl:-mt-[20px] xl:text-[130px] xxl:text-[160px]'>
                    POLAT
                </h1>

                <Marquee speed={80} className='flex w-full items-center overflow-hidden xxs:pt-4 xxl:pt-8'>
                    <div className='flex items-center justify-center px-14'>
                        <div className='rounded-full bg-gradient-to-r from-[#DD2476] to-[#FF512F] xxs:h-2 xxs:w-2'></div>
                        <p className='hidden bg-gradient-to-r from-[#DD2476] to-[#FF512F] bg-clip-text px-3 font-extrabold text-transparent xxs:text-4xl sm:text-[40px] md:text-6xl lg:block lg:text-6xl xl:text-5xl xxl:text-6xl'>
                            Frontend
                        </p>
                        <p className='bg-gradient-to-r from-[#FF512F] to-[#DD2476] bg-clip-text px-3 font-extrabold text-transparent xxs:text-4xl sm:text-[40px] md:text-6xl lg:text-6xl xl:text-5xl xxl:text-6xl'>
                            Developer
                        </p>
                        <div className='rounded-full bg-gradient-to-r from-[#DD2476] to-[#FF512F] xxs:h-2 xxs:w-2'></div>
                    </div>
                </Marquee>
            </div>
        </Container>
    )
}

export default Home
