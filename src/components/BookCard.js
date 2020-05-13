import React from 'react';

//buat function biasa karena gak ada data

const BookCard = props => {
    const book = props.buku.map(item => (
        <div className="card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <h4> {item.title}</h4>
            <p>  {item.description} </p>
            <div class="row-author">
                <div class="col-author">Author: </div>
                <div class="col-name-author">{item.author}</div>
            </div>
        </div>
    ));
    return (
            <div className="row-card">
                {/* <h3>Book Card</h3>
                <p>{props.kaka}</p>
                <p>{props.kaka2}</p>
                <p>{props.contoh}</p> */}
                {book}
            </div>
    )
}

export default BookCard;