import React, { useState, useEffect } from 'react';

function UserIcon (props) {

  const {
      src,
      name
  } = props;

  return (
      <div className='UserIcon'>
          <img src={src || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIu4OXvz-ae0nUgYrD5TymZqMhJdgtQbNaYxRR-DEe9m6ZQouJ8w&s'} alt=""/>
          <span className="name">{name}</span>
      </div>
      )
}

export default UserIcon;