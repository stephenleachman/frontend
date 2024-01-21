import Image from 'next/image';
import ccchaos from '@/../../public/images/ccchaos.svg'

function PageNotFound() {
  return (
    <div className="flex justify-center w-[100%]">
        <div className="flex-col justify-center mt-10">
        <Image
            src={ccchaos}
            width={500}
            height={500}
            alt=""
            className="mb-[-350px] opacity-25 z-0"
        />
        <div className="flex justify-center content-center">
            <div>
                <h1 className="text-9xl tracking-widest bg-gradient-to-r from-custom-blue to-custom-green bg-clip-text text-transparent inline-block  z-10">404</h1>
                <div className="w-full h-[1px] bg-custom-gray-link my-5"></div>
                <h2 className="text-2xl tracking-widest text-center ">Page Not Found</h2>    
            </div>
       
        </div>
        </div>
    </div>
  )
}

export default PageNotFound
