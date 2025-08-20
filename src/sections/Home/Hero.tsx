import Image from 'next/image'
const Hero = () => {
  return (
    <section className="bg-[url('/images/cover.png')] bg-cover bg-center h-[100vh] w-full">
      <article className='container flex justify-between items-center flex-wrap h-screen'>
        <div className='leading-[28px] text-white'>
          <h1 className='font-bold text-[40px] mb-[35px]'>Lorem Ipsum</h1>
          <p className='font-medium text-[18px] mb-[66px] lg:w-[700px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry standard dummy text ever since the 1500s
          </p>
          <a
            href='#'
            className='py-[17px] px-[35px] font-medium text-[18px] leading-[26px] text-primary bg-white rounded-xl'
          >
            Read More
          </a>
        </div>
        <Image src={'/images/man.png'} alt='man' width={374} height={374} />
      </article>
    </section>  )
}
export default Hero