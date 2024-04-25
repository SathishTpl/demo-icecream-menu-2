import React from 'react'

const MenuTemplate = () => {

    const menuList = [
        {
            item: "Ice cream 1", price: '$12',
        },
        {
            item: "Ice cream 2", price: '$12',
        },
        {
            item: "Ice cream 3", price: '$12',
        },
        {
            item: "Ice cream 4", price: '$12',
        },
        {
            item: "Ice cream 5", price: '$12',
        },
        {
            item: "Ice cream 6", price: '$12',
        },
        {
            item: "Ice cream 7", price: '$12',
        },
    ]

    return (
        <div className='main-container'>
            <div className='inner-container'>
                <div className='dotted-container row d-flex justify-content-center'>

                    <div className='col-xl-12 col-xxl-9 col-lg-12 col-md-12 col-sm-12'>

                        <div className='d-flex justify-content-between'>

                            <div className='left-ice'>
                                <img src={require('../assets/images/GroupLeft-ice-icon.png')} alt='' style={{ width: '100%', height: '100%' }} />
                            </div>

                            <div className='text-center' style={{ width: '350px' }}>
                                <h1 className='menu-title' style={{ color: '#F7B42F', fontWeight: 'bold', fontSize: '120px' }}>MENU</h1>
                                <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis</span>
                            </div>

                            <div className='right-ice'>
                                <img src={require('../assets/images/Groupright-ice-icon.png')} alt='' style={{ width: '100%', height: '100%' }} />
                            </div>

                        </div>

                        {/* <div className='row'>
                            <div className='col-md-4'>
                                <div className='left-ice'>
                                    <img src={require('../assets/images/GroupLeft-ice-icon.png')} alt='' style={{ width: '100%', height: '100%' }} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 text-center'>
                                <h1 className='menu-title' style={{ color: '#F7B42F', fontWeight: 'bold', fontSize: '120px' }}>MENU</h1>
                                <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis</span>
                            </div>
                            <div className='col-md-4 d-flex justify-content-end'>
                                <div className='right-ice'>
                                    <img src={require('../assets/images/Groupright-ice-icon.png')} alt='' style={{ width: '100%', height: '100%' }} />
                                </div>
                            </div>
                        </div> */}

                        <div className='float-end'>
                            <img src={require('../assets/images/Vectorarrow.png')} alt='' className='arrow-icon' />
                        </div>
                    </div>

                    <div className='col-xxl-10 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                        <div className='row mt-3'>

                            <div className='col-lg-2 col-md-4 me-5 me-md-0'>
                                <div className='bottom-ice mt-3'>
                                    <img src={require('../assets/images/Groupbottom-ice.png')} alt='' style={{ width: '100%', height: '100%' }} />
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-8 col-sm-12 mt-xs-5 mt-sm-5 mt-md-0 mt-lg-0 menu-lists '>
                                <div className='d-flex flex-column'>
                                    <div className='d-flex'>
                                        <img src={require('../assets/images/VectorleftVector.png')} alt=''
                                            style={{ width: '40px', height: '50px' }} className='me-3' />
                                        <h3 className='mb-0 me-3' style={{ color: '#F7B42F', marginTop: '-5px', fontWeight: '900' }}>ICE CREAMS</h3>
                                        <img src={require('../assets/images/Vectorright.png')} alt='' style={{ width: '40px', height: '50px' }} />
                                    </div>
                                    <div className=''>
                                        <ul className="list-group list-unstyled ps-lg-5 ps-md-0 ps-sm-0">
                                            {menuList.map((item, i) => (
                                                <li key={i} className="list-group-item">
                                                    <span className='menu-list-item'>{item.item}</span>
                                                    <span className='price-separator'></span>
                                                    <span className='menu-list-price'>{item.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-8 col-sm-12 mt-lg-0 mt-md-4 mt-sm-5 ms-sm-0 ms-lg-5 ms-md-0 menu-lists menu-list-md'>
                                <div className='d-flex flex-column'>
                                    <div className='d-flex'>
                                        <img src={require('../assets/images/VectorleftVector.png')} alt=''
                                            style={{ width: '40px', height: '50px' }} className='me-3' />
                                        <h3 className='mb-0 me-3' style={{ color: '#F7B42F', marginTop: '-5px', fontWeight: '900' }}>ICE CREAMS</h3>
                                        <img src={require('../assets/images/Vectorright.png')} alt='' style={{ width: '40px', height: '50px' }} />
                                    </div>
                                    <div className=''>
                                        <ul className="list-group list-unstyled ps-lg-5 ps-md-0 ps-sm-0">
                                            {menuList.map((item, i) => (
                                                <li key={i} className="list-group-item">
                                                    <span className='menu-list-item'>{item.item}</span>
                                                    <span className='price-separator'></span>
                                                    <span className='menu-list-price'>{item.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MenuTemplate