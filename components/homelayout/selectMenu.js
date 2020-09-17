import React, {Fragment} from 'react';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../store/actions';
import Link from 'next/link'

const SelectMenu = ()=> {
    const [maPhimSelected, setMaPhimSelected] = useState();
    const [cinemaSelected, setCinemaSelected] = useState('Rạp');
    const [dateSelected, setDateSelected] = useState();
    const [timeSelected, setTimeSelected] = useState('');
    const [maLichChieu, setmaLichChieu] = useState();
    const [cinema, setCinema] = useState();

    const state = useSelector(state => state)
    // console.log(state.movieReducer);

    const dispatch = useDispatch();
    // useEffect(() => {
    //     const showtimes = (maPhim)=>{
    //         dispatch(actions.getShowtimes(maPhim))
    //     }
    // }, [dispatch])

    const onChange = (e)=>{
        let {name, value} = e.target;
        setMaPhimSelected(value);
        setTimeSelected('')
        dispatch(actions.getShowtimes(value))
    }
    const renderNameMovie = ()=>{
        return (
            state.movieReducer.listMovie.map((movie, index)=>{
                return (
                    <Fragment key={index}>
                        <option value={movie.maPhim}>{movie.tenPhim}</option>
                    </Fragment>
                )
            })
        )
    }
    const onChangeCinema=(e)=>{
        let { name, value } = e.target;
        setCinemaSelected(value);
        if(value === 'Rạp'){
            setCinema(false)
        } else {
            setCinema(true)
        }
    }
    const renderCinema = ()=>{
        return state.movieReducer.showtimesMovie.map((heThongRap, index) => {
            return heThongRap.heThongRapChieu.map((cumRap, index) => {
                return cumRap.cumRapChieu.map((item, index) => {
                    // console.log(item);
                    return (
                        <option key={index}>{item.tenCumRap}</option>
                    )
                })
            })
        })
    }

    const onChangeDate=(e)=>{
        let { name, value } = e.target;
        setDateSelected(value);
    }
    const renderDate=()=>{
        return state.movieReducer.showtimesMovie.map((heThongRap, index1) => {

            return heThongRap.heThongRapChieu.map((cumRap, index2) => {
                return cumRap.cumRapChieu.map((item, index3) => {
                    if (item.tenCumRap === cinemaSelected) {
                        return item.lichChieuPhim.map((lichChieu, index4) => {
                            return (
                                <option key={index4}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString()}</option>
                            )
                        })
                    }
                })
            })
        })
    }

    const onChangeTime=(e)=>{
        let { name, value } = e.target;
        if(value === 'Xuất chiếu'){
            setTimeSelected()
        } else{
            setTimeSelected(value)
        }
    }
    const renderTime=()=>{
        return state.movieReducer.showtimesMovie.map((heThongRap, index1) => {
            return heThongRap.heThongRapChieu.map((cumRap, index2) => {
                return cumRap.cumRapChieu.map((item, index3) => {
                    // console.log(item);
                    if (item.tenCumRap === cinemaSelected) {
                        return item.lichChieuPhim.map((lichChieu, index4) => {
                            return (
                                <option key={index4} value={lichChieu.maLichChieu}>{new Date(lichChieu.ngayChieuGioChieu).toLocaleTimeString()}</option>
                            )
                        })
                    }
                })
            })
        })
    }
    return (
        <section className="selectMenu">
                <div className="selectCinema">
                    <select className="form-control selectMenuChild" name='maPhimSelected' onChange={onChange}>
                        <option>Phim</option>
                        {renderNameMovie()}
                    </select>
                </div>
                <div className="selectCinema">
                    <select className="form-control selectMenuChild" name="cinemaSelected" onChange={onChangeCinema}>
                        <option>Rạp</option>
                        {renderCinema()}
                    </select>
                </div>
                <div className="selectCinema" onChange={onChangeDate}>
                    <select className="form-control selectMenuChild">
                        <option>Ngày Xem</option>
                        {renderDate()}
                    </select>
                </div>
                <div className="selectCinema" onChange={onChangeTime}>
                    <select className="form-control selectMenuChild">
                        <option value=''>Xuất chiếu</option>
                        {renderTime()}
                    </select>
                </div>
                <div className="buttonSelect">
                    <Link href={`/checkout/${timeSelected}`}><button type="button" className={`btn btn-secondary ${timeSelected !== '' ? 'selectedMovie': ''}`} id="btnBuy"><a>MUA VÉ NGAY</a></button></Link>
                 </div>
            </section>
    )
}

export default SelectMenu;