'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import Image from 'next/image'
const Team = () => {
  return (
    <section className='container text-center pt-[126px] pb-[117px] lg:px-[265px]'>
      <h2 className='font-bold text-[42px] tracking-[-0.4px] leading-[52px] mb-[20px] text-primary'>
        Our Team
      </h2>
      <p className='w-[764px] max-w-full mx-auto font-medium text-[18px] leading-[28px] mb-[25px] text-[#1E1E1E]'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
         navigation={true}
        modules={[Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image
            src={'/images/ImgSlider.png'}
            className='mx-auto mb-[14px]'
            alt='slider'
            width={269}
            height={184}
          />
          <p className='font-medium text-[22px] leading-[32px] mb-[10px] text-primary'>Ali</p>
          <p className='font-bold text-[14px] tracking-[2px] leading-[26px] mb-[10px] text-[#15143966]'>
            CEO
          </p>
          <span className='flex justify-center items-center gap-3'>
            <Image
              src={'/images/whatsapp.png'}
              alt='whatsappIcon'
              width={18}
              height={18}
            />
            <Image
              src={'/images/call.png'}
              alt='call'
              width={25}
              height={24}
            />
            <Image src={'/images/sms.png'} alt='sms' width={18} height={13} />
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/ImgSlider.png'}
            className='mx-auto mb-[14px]'
            alt='slider'
            width={269}
            height={184}
          />
          <p className='font-medium text-[22px] leading-[32px] mb-[10px] text-primary'>Ahmed</p>
          <p className='font-bold text-[14px] tracking-[2px] leading-[26px] mb-[10px] text-[#15143966]'>
            UI/UX Design
          </p>
          <span className='flex justify-center items-center gap-3'>
            <Image
              src={'/images/whatsapp.png'}
              alt='whatsappIcon'
              width={18}
              height={18}
            />
            <Image
              src={'/images/call.png'}
              alt='call'
              width={25}
              height={24}
            />
            <Image src={'/images/sms.png'} alt='sms' width={18} height={13} />
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/ImgSlider.png'}
            className='mx-auto mb-[14px]'
            alt='slider'
            width={269}
            height={184}
          />
          <p className='font-medium text-[22px] leading-[32px] mb-[10px] text-primary'>Mahmoud</p>
          <p className='font-bold text-[14px] tracking-[2px] leading-[26px] mb-[10px] text-[#15143966]'>
            Back-End
          </p>
          <span className='flex justify-center items-center gap-3'>
            <Image
              src={'/images/whatsapp.png'}
              alt='whatsappIcon'
              width={18}
              height={18}
            />
            <Image
              src={'/images/call.png'}
              alt='call'
              width={25}
              height={24}
            />
            <Image src={'/images/sms.png'} alt='sms' width={18} height={13} />
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/ImgSlider.png'}
            className='mx-auto mb-[14px]'
            alt='slider'
            width={269}
            height={184}
          />
          <p className='font-medium text-[22px] leading-[32px] mb-[10px] text-primary'>Ali</p>
          <p className='font-bold text-[14px] tracking-[2px] leading-[26px] mb-[10px] text-[#15143966]'>
            CEO
          </p>
          <span className='flex justify-center items-center gap-3'>
            <Image
              src={'/images/whatsapp.png'}
              alt='whatsappIcon'
              width={18}
              height={18}
            />
            <Image
              src={'/images/call.png'}
              alt='call'
              width={25}
              height={24}
            />
            <Image src={'/images/sms.png'} alt='sms' width={18} height={13} />
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/ImgSlider.png'}
            className='mx-auto mb-[14px]'
            alt='slider'
            width={269}
            height={184}
          />
          <p className='font-medium text-[22px] leading-[32px] mb-[10px] text-primary'>Ahmed</p>
          <p className='font-bold text-[14px] tracking-[2px] leading-[26px] mb-[10px] text-[#15143966]'>
            UI/UX Design
          </p>
          <span className='flex justify-center items-center gap-3'>
            <Image
              src={'/images/whatsapp.png'}
              alt='whatsappIcon'
              width={18}
              height={18}
            />
            <Image
              src={'/images/call.png'}
              alt='call'
              width={25}
              height={24}
            />
            <Image src={'/images/sms.png'} alt='sms' width={18} height={13} />
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/ImgSlider.png'}
            className='mx-auto mb-[14px]'
            alt='slider'
            width={269}
            height={184}
          />
          <p className='font-medium text-[22px] leading-[32px] mb-[10px] text-primary'>Mahmoud</p>
          <p className='font-bold text-[14px] tracking-[2px] leading-[26px] mb-[10px] text-[#15143966]'>
            Back-End
          </p>
          <span className='flex justify-center items-center gap-3'>
            <Image
              src={'/images/whatsapp.png'}
              alt='whatsappIcon'
              width={18}
              height={18}
            />
            <Image
              src={'/images/call.png'}
              alt='call'
              width={25}
              height={24}
            />
            <Image src={'/images/sms.png'} alt='sms' width={18} height={13} />
          </span>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Team
