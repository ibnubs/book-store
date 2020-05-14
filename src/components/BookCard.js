import React from 'react';
import Sidebar from './Sidebar';

//buat function biasa karena gak ada data


const BookCard = props => {


    
    const book = props.buku.map(item => (
        <div className="card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <h4> {item.title}</h4>
            <p>  {item.description} </p>
            <div className="row-author">
                <div className="col-author">Author: </div>
                <div className="col-name-author">{item.author}</div>
            </div>
            <button className="btn-fav" onClick={()=> props.add(item.id)}  >Favorit</button>
        </div>
    ));
    
    

    return (
            <div className="row-card">
                <div className="col-book">
                    <div className="grid-container">
                        {book}
                    </div>
                </div>
                <div className="col-side">
                    <Sidebar />
                </div>
                    
                
                
                {/* <h3>Book Card</h3>
                <p>{props.kaka}</p>
                <p>{props.kaka2}</p>
                <p>{props.contoh}</p> */}
                
                
            </div>
    )
}

export default BookCard;