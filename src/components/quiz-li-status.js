import React from 'react';
import { connect } from 'react-redux';
import { REACT_APP_BASE_URL } from '../config';
import * as actionsUser from '../actions/users';
import * as actionsMode from '../actions/mode';
import * as actionsQuiz from '../actions/quiz';

export function QuizLiStatus(props) {

  const total= props.total;
  const completed= props.completed;
  const correct= props.correct;

    return (
      <div>
        <p>Status</p>
        <p>{total}/{completed}/{correct}</p>
      </div>
    );
}

export default connect()(QuizLiStatus);