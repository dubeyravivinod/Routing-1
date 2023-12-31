import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Homedetails = () => {

    const Navigate = useNavigate()
    const { homeitems } = useSelector((state) => state.productdata)
    var item = homeitems[homeitems.length - 1]

    function backtoplace() {
        Navigate("/");
    }


    return (
        <>
            <div className='productdiv'>
                <div className='productmaindiva'>

                    <div className='categrydiv'>
                        <h2>{ item.category }</h2>

                        <div onClick={ backtoplace }>
                            <img src="https://img.icons8.com/emoji/256/back-arrow-emoji.png" alt="" />
                        </div>
                    </div>
                    <div className='detailsSeconddiv'>

                        <div className='imagediv'>
                            <img src={ item.image } alt="" />
                        </div>
                        <div className='detailsofproducts'>
                            <div className='paradiv'>
                                <p className='title'>title: <span>{ item.title }</span></p>
                                <p className='price'>price: <span>{ item.price }</span></p>
                            </div>

                            <div className='descriptiondiv'>
                                <p className='desc'>description: <span>{ item.description }</span></p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Homedetails
