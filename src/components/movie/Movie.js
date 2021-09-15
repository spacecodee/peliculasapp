export default function Movie(props) {
    const {title, rate, director, actors, date, duration, img} = props;
    const url = `/images/uploads/${img}.jpg`;

    return (
        <div className="movie-item-style-2">
            <img src={url}
                 alt=""/>
            <div className="mv-item-infor">
                <h6>
                    <a href="moviesingle.html">
                        {title}
                    </a>
                </h6>
                <p className="rate">
                    <i className="ion-android-star"/>
                    <span>{rate}</span> /10</p>
                <p className="describe">{props.children}</p>
                <p className="run-time"> Run Time: {duration}. <span>MMPA: PG-13</span>. <span>Release: {date}</span>
                </p>
                <p>Director: <a href="#">{director}</a></p>
                <p>Stars: {actors}
                </p>
            </div>
        </div>
    );
}
