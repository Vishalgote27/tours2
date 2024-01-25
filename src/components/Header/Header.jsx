import { Link } from 'react-router-dom'
import "./header.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/user/userSlice'


const nav_links = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    }
]


const Header = () => {
    const dispatch = useDispatch()
    const { info } = useSelector(state => state.user)
    const loginOnlecontent = <>
        {
            info && <>

                <div class="dropdown d-flex text-center">
                    {
                        info.photo
                            ? <img

                                width={50}
                                className='img-fluid rounded-circle  '
                                src={info.photo} alt="hello" />
                            : <div
                                data-bs-toggle="dropdown"
                                style={{ height: 50, width: 50 }}
                                className='bg-warning fw-bold fs-4 text-white d-flex align-items-center justify-content-center  p-4 rounded-circle'>
                                {info.username}
                            </div>

                    }
                    <span className='fw-bold'></span>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><button
                            onClick={e => dispatch(logout())}
                            class="dropdown-item" >Log Out</button></li>
                    </ul>
                </div>
            </>
        }
    </>
    return <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container ">
                <a class="navbar-brand" href="#">
                    <img className='img-fluid' height={100} width={200} src="https://travelicious.bold-themes.com/wp-content/uploads/2018/10/travelicious-logo-big.png" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" >
                        {
                            nav_links.map((item, index) => <>
                                <li className="nav-item px-4" key={index}>
                                    <Link to={item.path} className={navClass => navClass.isActive ? "active_link" : ""}>{item.display}</Link>
                                </li>
                            </>)
                        }
                    </div>
                    <div className="m-auto">
                    </div>
                    <div className='d-flex gap-3'>
                        {loginOnlecontent}
                        <Link to="/login" className='btn btn-warning text-light rounded-5 fs-5 px-2'>Login</Link>
                        <Link to="/register" className='btn btn-warning text-light fs-5 rounded-5'>Register</Link>

                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Header