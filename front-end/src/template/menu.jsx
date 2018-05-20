import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse' id='menu'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-dollar'></i> My_Finances
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href='#/lancamentos'>Lançamentos</a></li>
                    <li><a href='#/contas'>Contas</a></li>
					<li><a href=''>Sobre</a></li>
                </ul>
            </div>
        </div>

    </nav>
)