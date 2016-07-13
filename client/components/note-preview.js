import React, { Component } from 'react';

const NotePreview = ({title, date, content}) => {
  return (
      <div className="col-lg-3 col-sm-4 col-xs-12 note">
        <p className="title">{title}</p>
        <p className="date">{date}</p>
      </div>
  )
}

export default NotePreview;
