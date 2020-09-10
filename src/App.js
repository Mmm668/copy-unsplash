import React, {useEffect} from 'react';
import {Route, withRouter, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Action from "./redux/action";
import Home from "./views/pages/home/Home";
import Header from "./views/components/Header";
import NotFound from "./views/pages/NotFound";
import Search from "./views/pages/search/Search";
import Collections from "./views/pages/collections/Collections";
import Footer from "./views/components/Footer";
import RandomPhotos from "./views/pages/randomPhotos/RandomPhotos";
import CollectionPhotos from "./views/pages/collections/CollectionPhotos";
import PopupShare from "./views/components/PopupShare";
import Toast from "./views/components/Toast";
import OpacityScreen from "./views/components/OpacityScreen";

function App(props) {

    const {
        dispatch,
        toastMessage,
        opacityScreen,
        showSharePopup,
        location,
    } = props;

    useEffect(() => {
        dispatch(Action.Creators.updateState({
            // toastMessage: '',
            currentPath: location.pathname,
            showSharePopup: false,
        }));

        if (location.pathname.indexOf('search') < 0) {
            console.log('location.pathname.indexOf(\'search\')', location.pathname.indexOf('search'))
            dispatch(Action.Creators.updateState({
                keyword: '',
                //reset popup Detail
                opacityScreen: false,
                selectedPhoto: {}
            }));
        }
    }, [location.pathname]);

    return (
        <div className="App">
            <Header currentPath={location.pathname}/>

            <Switch>
                <Route exact path={'/'} component={Home}/>

                <Route path={'/random'} component={RandomPhotos}/>
                <Route path={'/collections/:id/:title/'} component={CollectionPhotos}/>
                <Route path={'/collections'} component={Collections}/>
                <Route path={'/search/:type/:keyword'} component={Search}/>

                <Route path={'/404'} component={NotFound}/>
                <Redirect to={'/404'}/>
            </Switch>

            <Footer/>
            {
                showSharePopup &&
                <PopupShare/>
            }
            {
                opacityScreen &&
                <OpacityScreen/>
            }

            {
                toastMessage &&
                <Toast message={toastMessage}/>
            }
        </div>
    );
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(withRouter(App));