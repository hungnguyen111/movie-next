import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../actions'
import Examples from '../components/examples';
import Header from '../components/header';

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return (
    <>
      <Header/>
      {/* <Examples /> */}
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>

    </>
  )
}

export default Index
