import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { faUserGraduate, faChartPie, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="dark-pallet">
      <div className='absolute top-20 left-80 z-10'>
        <Image src="/img/dsd-min.jpg" alt='img' width={842} height={575} />
      </div>
      <div className="absolute bg-white w-60 top-40 left-60 z-20 p-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className='absolute flex flex-wrap justify-between content-between right-1/4 bottom-20 z-20 w-44 h-44'>
        <Link href="/student">
          <a>
            <div className="flex flex-col justify-center content-center bg-white w-20 h-20 ">
              <FontAwesomeIcon icon={faUserGraduate} size="3x" />
              <p className='text-center'>Student</p>
            </div>
          </a>
        </Link>
        <Link href="/chart">
          <a>
            <div className="flex flex-col justify-center content-center bg-white w-20 h-20 ">
              <FontAwesomeIcon icon={faChartPie} size="3x" />
              <p className='text-center'>Chart</p>
            </div>
          </a>
        </Link>
        <Link href="/download">
          <a>
            <div className="flex flex-col justify-center content-center bg-white w-20 h-20 ">
              <FontAwesomeIcon icon={faFileArrowDown} size="3x" />
              <p className='text-center'>Download</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
