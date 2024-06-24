import Link from 'next/link';
import style1 from '@/styles/app.module.css';
import style2 from '@/styles/phson.module.css'

export default function Home() {
	return (
    <div>
      <ul>
        <li className='red'>
          {/* <a href="/about">About</a> */}
          <Link href="/about">About</Link>
        </li>
        <li>
          <a className={style2['red']} href="/ho-so-benh">
            <span className={style1['red']}>Hồ sơ bệnh</span>
          </a>
        </li>
        <li>
          <a href="/booking">Booking</a>
        </li>
      </ul>
    </div>);
}
