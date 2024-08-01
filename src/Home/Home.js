import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
    const [data, setData] = useState([]);

    // Hook for running API instantly
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((e) => {
                console.log("There is something wrong");
            });
    }, []);

    return (

        <div>
          
            <div className='col-md-12 mt-5'>
                <div className="jumbotron">
                    <div className="container">
                        <h1 class="display-3">Hello, welcome to My Website </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='container col-md-12'>
                    <h2 class="display-4">Products</h2> <br/>
                    <div className='row'>
                        
                        {data.map((item) => {
                            return (
                                <div className='col-md-4'>
                                <div className="card" style={{ width: '20rem' }} key={item.id}>

                                    <img src={item.image} className="card-img-top m-auto" alt={item.title} style={{ height: '150px', width: '150px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <a href="#" className="btn btn-primary">Buy Now</a><br/>
                                    </div>
                                </div>
                                </div>

                            );
                        })}
                    </div><br/>

                </div>
            </div>
        </div>
    )
}

export default Home