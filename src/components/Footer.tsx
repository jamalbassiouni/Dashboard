import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='bg-primary mt-[26px] pt-14 p-11'>
      <div className='container flex justify-between items-center flex-wrap gap-y-9 text-white border-b-2 border-white pb-12'>
        <Image src={'/images/logo.svg'} alt='man' width={110} height={100} />
        <div className='flex'>
          <input
            type='text'
            placeholder='Email'
            className='rounded-l-md pl-[14px] text-black placeholder-black placeholder:text-[16px] placeholder:font-normal placeholder:leading-[20px]'
          />
          <button className='mr-[43px] bg-primary text-white'>
            Subscribe
          </button>
          <div className='flex gap-8'>
            <p className='font-normal text-[16px] leading-[26px]'>Contact</p>
            <span className='flex justify-center items-center gap-7'>
              <Image src={'/images/twitter.png'} alt='twitter' width={17} height={26} />
              <Image src={'/images/facebook.png'} alt='facebook' width={11} height={26} />
              <Image src={'/images/google.png'} alt='google' width={24} height={26} />
            </span>
          </div>
        </div>
      </div>
      <div className='container flex justify-between items-center text-white pt-[47] flex-wrap gap-y-9 font-normal text-[16px] leading-[26px]'>
        <ul className='flex justify-between items-center flex-wrap gap-8'>
          <li>About</li>
          <li>Our Strategy</li>
          <li>Our Advantages</li>
          <li>Social Responsibility</li>
          <li>Our Services</li>
        </ul>
        <p>© 2024 . All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
