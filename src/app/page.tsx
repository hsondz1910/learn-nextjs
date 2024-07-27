'use client'
import Link from 'next/link'
import style1 from '@/styles/app.module.css'
import style2 from '@/styles/phson.module.css'
import AppTable from '@/components/app.table'
// import { useEffect } from 'react';
import useSWR from 'swr'

export default function Home() {
	const fetcher = (url: string) => fetch(url).then((res) => res.json())

	const { data, error, isLoading } = useSWR('http://localhost:8000/blogs', fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	})

	// useEffect(() => {
	//   const fetchData = async() => {
	//     const res = await fetch("http://localhost:8000/blogs")
	//     const data = await res.json()

	//     console.log(">>> check res: ", data)
	//   }
	//   fetchData()
	// }, [])

	// console.log(">>> check data: ", data)

	if (!data) {
		return <div>loading...</div>
	}

	return (
		<div>
			{/* <div>{data?.length}</div> */}
			<ul>
				<li className="red">
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
			<AppTable blogs={data} />
		</div>
	)
}
