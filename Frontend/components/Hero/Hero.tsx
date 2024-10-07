import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='bg-sky-500 w-full h-auto flex flex-col md:flex-row mx-auto'>
            <div className='md:basis-[55%] px-6 md:px-32 pt-10 md:pt-32'>
                <h1 className='text-2xl md:text-4xl font-sans font-extrabold text-white'>
                    Invest with Our Trading App
                </h1>
                <p className='text-sm text-white pt-4 md:pt-6'>
                    Our comprehensive range of diverse trading platforms is built to suit your unique objectives,<br />
                    empowering you to select the perfect platform for your individual goals and experience level.
                </p>
            </div>
            <div className='md:basis-[45%] flex justify-center md:justify-end pt-10 md:pt-14 pr-0 md:pr-20'>
                <Image
                    width={550}
                    height={450}
                    className='w-[300px] h-[300px] md:w-[550px] md:h-[450px]'
                    alt="phoneimg"
                    src={"/hero/phone.png"}
                />
            </div>
        </div>
    );
}

export default Hero;
