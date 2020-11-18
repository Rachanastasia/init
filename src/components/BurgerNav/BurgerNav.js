import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

function BurgerNav() {

    const [showNav, setShowNav] = useState(false)

    return (
        <div className='burger-and-nav' onClick={() => setShowNav(!showNav)}>
            {
                showNav
                    ? <div className='burger-wrapper'>
                        <span className='burger-line burger-line-one'></span>
                        <span className='burger-line burger-line-two'></span>
                        <span className='burger-line burger-line-three'></span>
                    </div>

                    : <Fragment>
                        <div className='burger-wrapper'>
                            <span className='burger-line burger-line-one burger-line-open-one'></span>
                            <span className='burger-line burger-line-two burger-line-open-two'></span>
                            <span className='burger-line burger-line-three burger-line-open-three'></span>
                        </div>

                        <nav role='navigation' className='navigation'>
                            <Link to='/login' className='navigation-link'>
                                <span className='navigation-item nav-item-one'>
                                    Login
                            </span>
                            </Link>
                            <Link to='/register' className='navigation-link'>
                                <span className='navigation-item nav-item-two'>
                                    Sign up
                            </span>
                            </Link>
                        </nav>
                    </Fragment>
            }

        </div>
    )
}

export default BurgerNav




