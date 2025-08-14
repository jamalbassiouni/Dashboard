import Image from "next/image"

const list = [
  {name : "Home" , link : "/"},
  {name : "About Us" , link : "/about"},
  {name : "Services" , link : "/services"},
  {name : "Blog" , link : "/blog"},
  {name : "Our Team" , link : "/team"}, 
  {name : "Contact Us" , link : "/contact"}, 
]

const Navbar = () => {
  return (
    <div className="bg-primary py-4">
      <div className="container">
        {/* Logo */}
        <Image src={"/images/logo.svg"} alt="Logo" width={110} height={100} />
        {/* Link List */}
        {/* Search & Book */}
      </div>
    </div>
  )
}

export default Navbar