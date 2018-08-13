import React from 'react';
import PropTypes from 'prop-types';
import ScreenRow from './ScreenRow';

const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow value={props.question} />
      <ScreenRow value={props.answer} />
    </div>
  )
}

Screen.prototypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

export default Screen;