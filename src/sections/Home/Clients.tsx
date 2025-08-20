import Image from 'next/image'
const clients = () => {
  return (
    <section className='bg-primary'>
      <div className='container pt-[100px] pb-[167px] text-white'>
        <h3 className='font-bold text-[40px] leading-[52px] mb-[26px]'>
          What our clients are saying?
        </h3>
        <p className='font-normal text-[18px] mb-[64px] lg:w-[579px]'>
          Our clients range from individual investors, to local, international as well as fortune
          500 companies.Our clients range from individual investors, to local, international as well
          as fortune 500 companies.
        </p>
        <div className='flex gap-12 flex-wrap'>
          <Image src={'/images/man.png'} alt='man' width={374} height={374} />
          <article>
            <p className='font-normal text-[24px] leading-10 mb-[101px] lg:w-[728px] '>
              With the help of the hospitable staff of Al Safar and Partners I was able to get my
              work done without any hassle. The help I received helped me a great deal to overcome
              the issues that I faced. I was always updated about my case and my queries never went
              unanswered.
            </p>
            <p className='font-semibold text-[24px] leading-[45px] mb-5'>Mohammed Saif</p>
            <p className='font-normal text-[16px]'>CEO/Company</p>
          </article>
        </div>
      </div>
    </section>
  )
}
export default clients
