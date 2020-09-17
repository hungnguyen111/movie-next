import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Header from '../../components/header';
import * as actions from '../../store/actions';
import * as actionsUser from '../../store/actions/userActions';
import * as actionsMovie from '../../store/actions/movieActions';
import SelectMenu from '../../components/homelayout/selectMenu';
// import './index.scss'

const Index = () => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(startClock())
  //   console.log('123');
  // }, [dispatch])

  useEffect(()=>{
    dispatch(actions.actGetListMovieAPI());
    dispatch(actions.actGetListMovieAPIComming());
    dispatch(actions.actGetListCinema());
    dispatch(actions.actGetCinePlexBHD());
    dispatch(actions.actGetCinePlex());
    dispatch(actions.setIsLoading());
    dispatch(actions.setIsListSeat());
    dispatch(actions.setDisplayMenu());
    dispatch(actionsUser.actGetListUser())
    // console.log();
  }, [dispatch])

  const state = useSelector(state => state)
//   console.log(state);
//   console.log(dispatch);
  return (
    <>
      <Header/>
      <SelectMenu/>
      {/* <Examples /> */}
      {/* <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link> */}

    </>
  )
}

// Index.getInitialProps = (ctx) => {
//     const { req } = ctx;
//     console.log('req', req.headers.cookie );
//     return {};
// }

export default Index;
