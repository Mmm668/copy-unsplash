import React, { useState, useEffect } from 'react';
import { IoMdPersonAdd } from "react-icons/io";
import {Link} from "react-router-dom";

function UserCard (props) {
  
  const {
      user
  } = props;
  
  return (
          <div className="UserCard">
              <div className="inner-wrap">
                  <div className="info-wrap">
                      <div className="thumb" style={{backgroundImage: user.profile_image}}></div>
                      <div className="desc">
                          <p className="bold">{user.name}</p>
                          <p className="id">@{user.id}</p>
                      </div>
                  </div>
                  <div className="btn-follow"
                       onClick={() => alert('Not prepared yet')}
                  >
                      <IoMdPersonAdd/> Follow
                  </div>
              </div>
          </div>
      )
}

export default UserCard;