import Image from 'next/image'
import Link from 'next/link'

const list = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Blog', link: '/blog' },
  { name: 'Our Team', link: '/team' },
  { name: 'Contact Us', link: '/contact' },
]

const Navbar = () => {
  return (
    <>
      <nav className='py-4 fixed left-0 right-0'>
        <div className='container flex items-center justify-between'>
          <figure>
            <Image src={'/images/logo.svg'} alt='Logo' width={110} height={100} />
          </figure>
          <div>
            {list.map((item) => (
              <Link key={item.link} href={item.link} className='px-[27px] text-white'>
                {item.name}
              </Link>
            ))}
          </div>

          <Image src={'/images/search.png'} alt='search' width={24} height={24} />

          <Link href='' className='border rounded-lg text-white p-3 capitalize'>
            book appointment
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
