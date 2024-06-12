import Sofa1 from '../assets/Images/Sofa1.jpg'
import Sofa2 from '../assets/Images/Sofa2.jpg'
import Sofa3 from '../assets/Images/Sofa3.jpg'
import Sofa4 from '../assets/Images/Sofa4.jpg'
import Chair1 from '../assets/Images/Chair1.png'
import Chair2 from '../assets/Images/Chair2.png'
import Chair3 from '../assets/Images/Chair3.png'
import Listing from './Listing'

export default function ProductSection() {

    const productTabs = [
        {
            id: 1,
            name: "Sofas",
        },
        {
            id: 2,
            name: "Chairs",
        },
        {
            id: 3,
            name: "Tables",
        },
        {
            id: 4,
            name: "Side Tables",
        },
        {
            id: 5,
            name: "Beds",
        },
        {
            id: 6,
            name: "Book Shelves",
        }
    ]
    
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
        },
        {
            id: 4,
            title: "Luxora Elegant 3-Seater Sofa with Plush Cushions",
            price: "$299",
            img: Sofa4,
            link: "/productlisting"
        },
        {
            id: 5,
            title: "Luxora Matching Accent Chair with Plush Cushions",
            price: "$99",
            img:  Chair1,
            link: "/productlisting"
        },
        {
            id: 6,
            title: "Luxora Matching Accent Chair with Plush Cushions",
            price: "$99",
            img:  Chair2,
            link: "/productlisting"
        },
        {
            id: 7,
            title: "Luxora Matching Accent Chair with Plush Cushions",
            price: "$99",
            img:  Chair3,
            link: "/productlisting"
        }
    ]

  return (
    <div className='w-screen h-fit bg-neutral-200'>
        <div className="container ">
            <div className='flex flex-col xs:h-44 h-28 justify-around items-center text-center xs:pt-6 pt-3'>
                <h2 className='xs:text-5xl text-2xl font-semibold'>Catalogue</h2>
                <p className='xs:w-96 w-52 xs:text-base text-xs text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae odio nisi. Praesent sit amet.</p>
            </div>
            <div className='container w-fit h-12 flex justify-center items-center xs:p-5 p-2 xs:mt-7 mt-3'>
                <ul className='flex justify-center items-center xs:gap-7 gap-2'>
                    {
                        productTabs.map(({ id, name }) => {
                            return <li key={id} className="xs:text-base text-xs cursor-pointer hover:border-b-2 hover:border-secondary hover:text-secondary duration-200" ><a href='/product'>{name}</a></li>
                        })
                    }
                </ul>
            </div>
            <div className='h-[2px] w-full bg-slate-300 mb-14'></div>
            <div className='grid lg:grid-rows-3 sm:grid-rows-4 grid-rows-7 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 md:pb-20 pb-9'>
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
