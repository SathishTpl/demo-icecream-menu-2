import React from 'react'

const MenuTemplate_2 = () => {

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
        <section>
            <div className='main-container-2'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-xl-12 col-xxl-9 col-lg-12 col-md-12 col-sm-12'>

                        <div className='d-flex justify-content-between align-items-center'>

                            <div className='d-flex'>
                                <div className='left-side-ice'>
                                    <img src={require('../assets/images/Groupice-image.png')} alt='' className='img-fluid' />
                                </div>
                                <div className='left-side-ice' style={{ marginTop: '-88px', marginLeft: '-30px' }}>
                                    <img src={require('../assets/images/Group (3).png')} alt='' className='img-fluid' />
                                </div>
                            </div>

                            <div className='text-center title-border' style={{ width: '350px' }}>
                                <img src={require('../assets/images/Vectorbnox.png')} alt='' className='curved-box' />
                                <h1 className='menu-title mb-0' style={{ color: '#F7B42F', fontWeight: 'bold', fontSize: '130px', marginTop: '-90px' }}>ICE</h1>
                                <h2 className='mb-0 title-cream' style={{ color: '#F7B42F', fontWeight: 'bold', fontSize: '60px', borderBottom: '3px solid', margin: '0 60px', paddingBottom: '30px' }}>
                                    CREAM
                                </h2>
                                {/* <hr style={{ margin: '30px 60px 0px 60px', borderTop: '4px solid #F7B42F' }} /> */}
                            </div>

                            <div className='d-flex'>
                                <div className='right-side-ice'>
                                    <img src={require('../assets/images/Groupcup-ice.png')} alt='' style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className='card'>
                                    <img src={require('../assets/images/Groupcard.png')} alt='' style={{ width: '100%', height: '100%' }} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-xl-12 col-xxl-9 col-lg-12 col-md-12 col-sm-12 menu-lists'>
                        <div className='row'>

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='d-flex justify-content-between'>
                                    <h2 style={{ color: '#F7B42F', fontWeight: 'bold' }}>ICE CREAMS</h2>
                                    <img src={require('../assets/images/Grouplist-ice-img.png')} alt='' className='me-5' style={{ width: '50px', height: '50px' }} />
                                </div>
                                <ul className="list-group list-unstyled">
                                    {menuList.map((item, i) => (
                                        <li key={i} className="list-group-item px-0">
                                            <span className='menu-list-item'>{item.item}</span>
                                            <span className='price-separator'></span>
                                            <span className='menu-list-price'>{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="vr" style={{ backgroundColor: '#F7B42F', marginLeft: '-30px' }}></div>

                            <div className='col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-sm-5 menu-list-sm' >
                                <div className='d-flex justify-content-between'>
                                    <h2 style={{ color: '#F7B42F', fontWeight: 'bold' }}>ICE CREAMS</h2>
                                    <img src={require('../assets/images/Grouplist-ice-img.png')} alt='' className='me-5' style={{ width: '50px', height: '50px' }} />
                                </div>
                                <ul className="list-group list-unstyled">
                                    {menuList.map((item, i) => (
                                        <li key={i} className="list-group-item px-0">
                                            <span className='menu-list-item'>{item.item}</span>
                                            <span className='price-separator'></span>
                                            <span className='menu-list-price'>{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="vr" style={{ backgroundColor: '#F7B42F', marginLeft: '-30px' }}></div>

                            <div className='col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-md-5 mt-sm-5 menu-list-sm'>
                                <div className='d-flex justify-content-between'>
                                    <h2 style={{ color: '#F7B42F', fontWeight: 'bold' }}>ICE CREAMS</h2>
                                    <img src={require('../assets/images/Grouplist-ice-img.png')} alt='' className='me-5' style={{ width: '50px', height: '50px' }} />
                                </div>

                                <ul className="list-group list-unstyled">
                                    {menuList.map((item, i) => (
                                        <li key={i} className="list-group-item px-0">
                                            <span className='menu-list-item'>{item.item}</span>
                                            <span className='price-separator'></span>
                                            <span className='menu-list-price'>{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                <footer className="text-white footer pt-5 px-1 px-md-0">
                    <section className="">
                        <div className="row text-center d-flex justify-content-center px-5">
                            <div className="col-md-4 ps-0">
                                <a href="" className="me-3 f-icons text-white">
                                    <i className="bi bi-browser-chrome h4"></i>
                                </a>
                                <a href="" className="me-3 f-icons text-white">
                                    <i className="bi bi-facebook h4"></i>
                                </a>
                                <a href="" className="me-3 f-icons text-white">
                                    <i className="bi bi-twitter h4"></i>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <span className='fw-bold'>Phone: +1234 567890</span>
                            </div>
                            <div className="col-md-4 pe-0">
                                <span className='fw-bold'>www.youtube.com</span>
                            </div>
                        </div>
                    </section>
                </footer>
                </div>
            </div>


        </section>
    )
}

export default MenuTemplate_2