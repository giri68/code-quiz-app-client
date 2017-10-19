import React from 'react';
import { connect } from 'react-redux';
import QuizLi from './quiz-li';
import { REACT_APP_BASE_URL } from '../config';
import * as actionsUser from '../actions/users';
import * as actionsMode from '../actions/mode';
import * as actionsQuiz from '../actions/quiz';

export function QuizList(props) {
  console.log('QuizList',props);

  const handleTakeQuizButton = (id) => {
    props.dispatch(actionsQuiz.takeQuiz(id));
  }
 
  const handleAddQuizButton = (quiz) => {
    const updatedUser = 
    console.log('quiz is object with props read from DOM');
    let userData;
    console.log('add to user data from store');
    props.dispatch(actionsUser.updateUserData(userData));
  }

  const quizLi = props.quiz.menuOfAllQuizzes.map((quiz, index)=>{
    return <QuizLi key={index} status={true} testing={true} li={quiz} />
  })
  
    return (
      <div>
        <h2 className="temp">5 List of All Quizzes</h2>
        <ul>
          {quizLi}
        </ul>
      </div>
    );
}

const mapStateToProps = state => ({
  user: state.user,
  quiz: state.quiz,
  mode: state.mode
})

export default connect(mapStateToProps)(QuizList);