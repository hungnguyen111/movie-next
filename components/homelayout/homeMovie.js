import React from 'react'

const HomeMovie = () => {
    return (
      <div className="card" key={index}>
        <div className="filmDetail">
          <NavLink to={`/detail/${item.maPhim}`}>
            <img src={item.hinhAnh} className="card-img-top" alt="..." />
          </NavLink>
          <div className="showHoverImg">
            <a
              data-toggle="modal"
              data-target={`#modalTrailer`}
              onClick={() => {
                this.handleClick(item.trailer);
              }}
            >
              <img
                src={require("../../../assets/img/icons/play-video.png")}
                alt="..."
              />
              {/* <iframe width="560" height="315" src={item.trailer} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </a>
          </div>
        </div>
        {/* //modal  */}
        <div className="showHover">
          <NavLink to={`/detail/${item.maPhim}`}>MUA VÉ</NavLink>
        </div>
        <span className="ageType">C16</span>
        <span className="avgPoint">
          <p>8.5</p>
          <p>
            <img
              src={require("../../../assets/img/icons/star1.png")}
              alt="..."
            />
            <img
              src={require("../../../assets/img/icons/star1.png")}
              alt="..."
            />
            <img
              src={require("../../../assets/img/icons/star1.png")}
              alt="..."
            />
            <img
              src={require("../../../assets/img/icons/star1.png")}
              alt="..."
            />
            <img
              src={require("../../../assets/img/icons/star1.2.png")}
              alt="..."
            />
          </p>
        </span>
        <div className="card-body">
          <h5 className="card-title">{item.tenPhim}</h5>
          <p className="card-text">117 phút</p>
        </div>
      </div>
    );
}

export default HomeMovie;