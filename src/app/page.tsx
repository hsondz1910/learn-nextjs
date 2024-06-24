import Link from 'next/link';

export default function Home() {
	return (
    <div>
      <ul>
        <li>
          {/* <a href="/about">About</a> */}
          <Link href="/about">About</Link>
        </li>
        <li>
          <a href="/ho-so-benh">Hồ sơ bệnh</a>
        </li>
        <li>
          <a href="/booking">Booking</a>
        </li>
      </ul>
    </div>);
}
