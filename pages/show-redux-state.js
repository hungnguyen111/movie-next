import { useSelector } from 'react-redux'
import Link from 'next/link'

const codeStyle = {
  background: '#ebebeb',
  width: 400,
  padding: 10,
  border: '1px solid grey',
  marginBottom: 10,
}

const ShowReduxState = () => {
  const state = useSelector((state) => state.userReducer)
  // console.log(state);
  
  return (
    <>
      <pre style={codeStyle}>
        <p>{JSON.stringify(state, null, 4)}</p>
      </pre>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </>
  )
}

export default ShowReduxState
