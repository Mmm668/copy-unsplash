import React, {useState, useEffect} from 'react';
import SearchBar from "./SearchBar";
import HeaderCategory from "./HeaderCategory";
import {Link, withRouter} from "react-router-dom";
import {navigate} from "../../helpers/HistoryHelper";
import PopupMenu from "./PopupMenu";
import { FaTwitter, FaFacebookSquare,  FaInstagram, FaMedium } from "react-icons/fa";
import _ from 'lodash';
function Header(props) {

    const {
        currentPath
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const moreMenuItems = [
        {
            link: '/',
            txt: 'Blog',
        },
        {
            link: '/',
            txt: 'Community',
        },
        {
            link: '/',
            txt: 'History',
        },
        {
            link: '/',
            txt: 'Made with Unsplash',
        },
        {
            link: '/',
            txt: 'API/Developers',
        },
        {
            link: '/',
            txt: 'Press',
        },
        {
            link: '/',
            txt: 'Join the team',
        },
        {
            link: '/',
            txt: 'License',
        },
        {
            link: '/',
            txt: 'Help',
        },
    ];

    function checkEvent(e){
       if(document.getElementsByClassName('PopupMenu')){
           if(e.target.innerHTML !== 'more_horiz' || e.target.className.indexOf('PopupMenu') == 0){
               setIsOpen(false);
           }
       }
    }

    useEffect(() => {
        function watchClick(){
            window.addEventListener('click', checkEvent);
        }
        watchClick();
        //component will unmount 시에 걸리는 return 인가?
        return () => {
            window.removeEventListener('click', checkEvent)
        }
    }, []);

    function Menu({routes}){
        return _.map(routes, (route, i) => <div key={i}
                                           onClick={() => navigate(route.to)}>{route.name}</div>)
    }

    return (
        //className={cn(((e.scorllTop >= 100vh) && 'get-scroll' ))}
        <div className="Header">
            <div className="upper">
                <div className="
                logo">
                    <svg className="_2m4hn" onClick={() => navigate('/')}
                         version="1.1" viewBox="0 0 32 32" width="32" height="32"
                         aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash
                        Home</title>
                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                    </svg>

                    <div className="txt-wrap">
                        <div className="top">Unsplash</div>
                        <div className="bottom">Photos for everyone</div>
                    </div>
                </div>

                <div className="search-wrap">
                    <SearchBar/>
                </div>

                <div className="tools">
                    <div className="links">
                        <Link to={'/'} className="link">
                            <div className="txt">Home</div>
                        </Link>
                        <Link to={'/collections'} className="link">
                            <div className="txt">Collections</div>
                        </Link>
                        <div className="link"
                             style={{position: 'relative'}}
                             onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="txt">
                                <i className="material-icons">more_horiz</i>
                            </div>
                            <PopupMenu
                                items={moreMenuItems}
                                isOpen = {isOpen}
                            >
                                <div className="col-wrap">
                                    <Link to={'/'} className="item">
                                        <FaTwitter/>
                                    </Link>
                                    <Link to={'/'} className="item">
                                        <FaFacebookSquare/>
                                    </Link>
                                    <Link to={'/'} className="item">
                                        <FaInstagram/>
                                    </Link>
                                    <Link to={'/'} className="item">
                                        <FaMedium/>
                                    </Link>
                                </div>

                            </PopupMenu>
                        </div>
                        <Link to={'/submit'} className="link btn-type">
                            <div className="txt">Submit a photo</div>
                        </Link>
                        <div className="bar"></div>
                        {/*로그인 시 종류 변경*/}
                        {/*<div className="link">*/}
                        {/*<i className="material-icons">notification_important</i>*/}
                        {/*</div>*/}
                        <div className="link" onClick={() => {alert('Not prepared yet!')}}>
                            <div className="txt">Login</div>
                        </div>
                        <div className="link green" onClick={() => {alert('Not prepared yet!')}}>
                            <div className="txt">Join free</div>
                        </div>
                    </div>
                </div>
            </div>
                {
                    (currentPath === '/' || currentPath.indexOf('bCate') > 0 ) &&
                    <HeaderCategory/>
                }
        </div>
    )
}

export default withRouter(Header);