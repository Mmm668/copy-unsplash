import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import cn from 'classnames'
import _ from 'lodash';

function PopupMenu(props) {

    const {
        children,
        items = [
            {
                link: '',
                txt: '',
            },
        ],
        isOpen = false,
        isRightSide = false,
    } = props;

    return (
        <div className={cn("PopupMenu", {'open-active': isOpen, 'right-side': isRightSide})}
        >
            {_.map(items, (item, i) =>
                <Link to={item.link} className='item' key={i}>{item.txt}</Link>
            )}

            {children}
        </div>
    )
}

export default PopupMenu;