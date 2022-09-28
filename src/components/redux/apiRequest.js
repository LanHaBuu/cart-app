import axios from "axios"
import { useEffect, useRef, useState } from "react"

export const useDataProducts = () => {
	const [dataProducts, setDataProducts] = useState([])
	const [loading, setLoading] = useState(false)
	const [err, setErr] = useState(false)
	const isMouted = useRef(false)
	useEffect(() => {
		isMouted.current = true
		setLoading(true)
		axios
			.get("https://mocki.io/v1/1d6d5047-18fd-4b02-a3b2-a6877edead02")
			.then(res => {
				if (isMouted.current) {
					setDataProducts(res.data)
					setLoading(false)
				}
			})
			.catch(err => {
				setErr(err)
			})
		return () => {
			isMouted.current = false
		}
	}, [])
	return { dataProducts, loading, err }
}
