import Sofa1 from '../assets/Images/Sofa1.jpg'
import Sofa2 from '../assets/Images/Sofa2.jpg'
import Sofa3 from '../assets/Images/Sofa3.jpg'
import Listing from './Listing'

export default function BestSeller() {

    
    const productListing = [
        {
            id: 1,
            title: "Luxora Elegant 3-Seater Sofa with Plush Cushions",
            price: "$299",
            img: Sofa1,
            link: "/productlisting"
        },
        {
            id: 2,
            title: "Luxora Elegant 3-Seater Sofa with Plush Cushions",
            price: "$299",
            img: Sofa2,
            link: "/productlisting"
        },
        {
            id: 3,
            title: "Luxora Elegant 3-Seater Sofa with Plush Cushions",
            price: "$299",
            img: Sofa3,
            link: "/productlisting"
        }
    ]

  return (
    <div className='w-screen h-fit bg-neutral-200'>
        <div className="container">
            <div className='flex flex-col xs:h-44 h-28 justify-around items-center text-center xs:pt-6 pt-3'>
                <h2 className='xs:text-5xl text-2xl font-semibold'>Best Sellers</h2>
                <p className='xs:w-96 w-52 xs:text-base text-xs text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae odio nisi. Praesent sit amet.</p>
            </div>
            <div className='h-[2px] w-full bg-slate-300 mb-14'></div>
            <div className='grid lg:grid-rows-1 sm:grid-rows-2 grid-rows-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 md:pb-20 pb-9'>
                {
                    productListing.map(({ id, title, price, img, link }) => {
                        return <Listing id={id} title={title} price={price} img={img} href={link} />
                    })
                }
            </div>
        </div>
    </div>
  )
}
