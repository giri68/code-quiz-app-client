import React from 'react';
import { connect } from 'react-redux';
import { REACT_APP_BASE_URL } from '../config';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import StatusBar from './question-statusbar';
import Resources from './question-resources';
import Comments  from './question-comments';
import * as actionsUser from '../actions/users';
import * as actionsMode from '../actions/mode';
import * as actionsQuiz from '../actions/quiz';

export class Question extends React.Component {

  handleSubmitButton(choice, currentIndex) {
    let formattedChoices = [];
    for ( let prop in choice ) {
      formattedChoices.push(prop);
    }
    const formattedChoiceObject = {
      userId: this.props.user.id, // user must be logged in
      questionId: this.props.quiz.questions[currentIndex].id,
      quizId: this.props.quiz.id,
      choices : formattedChoices
    };
    const nextIndex = this.props.quiz.currentIndex === (this.props.quiz.questions.length - 1) ?
      999 : this.props.quiz.currentIndex + 1 ;
      console.log(nextIndex);
      this.props.reset();   
      this.props.dispatch(actionsUser.submitChoices(formattedChoiceObject, this.props.user.authToken, nextIndex));
  }  // refer to actions/users.js for format of values

  handleGotoQuestionButton(index) { // index = 1 or -1
    this.props.reset();       
    this.props.dispatch(actionsQuiz.updateCurrentQuestion(this.props.quiz.currentIndex + index))
  }
  
  render() {

    const currentIndex = this.props.quiz.currentIndex || 0;
    const currQuestion = this.props.quiz.questions[currentIndex];
    const inputType = currQuestion.inputType; 
    
    const options = currQuestion.answers.map((answer,index)=>{
      const optionName = inputType === 'radio' ? 'option' : `${answer.id}`;
      return (
        <div key={index}>
          <Field 
            name={optionName} 
            id={answer.id}
            component='input'
            type={inputType}
            value={answer.id}
          />
          <label htmlFor={answer.id}>{answer.option}</label>
        </div>
      )
    });

    const prevQuestionClass = this.props.quiz.currentIndex > 0 ?
      'fa fa-hand-o-left smallIcon'  : 'fa fa-hand-o-left smallIcon inactive' ;
    const nextQuestionClass = this.props.quiz.questions.length > ( this.props.quiz.currentIndex + 1 ) ?
      'fa fa-hand-o-right smallIcon'  : 'fa fa-hand-o-right smallIcon inactive' ;
    const submitButtonClass = 'formisEmpty'==='empty' ?  'submitButton'  : 'submitButton inactive' ;

    return (
    <div className="question">
      <StatusBar 
        total={this.props.quiz.questions.length}
        currentIndex={this.props.quiz.currentIndex}
      />

      <p className="questionAsked">{currQuestion.question}</p>
      
      <form className="questionForm" onSubmit={this.props.handleSubmit(values =>
        this.handleSubmitButton(values, currentIndex)
      )}>
        {/* multiple choice options */}
        <ul className="questionOptions">
          {options}
        </ul>

        {/* previous button  */}
        <i className={prevQuestionClass} 
          onClick={()=>this.handleGotoQuestionButton(-1)}
          aria-hidden="true">
        < span className="faText">Previous</span>
        </i>

        {/* submit button  */}
        <button className={submitButtonClass} type="submit">Submit</button>

        {/* next button */}
        <i className={nextQuestionClass} 
          onClick={()=>this.handleGotoQuestionButton(1)}
          aria-hidden="true">
          <span className="faText">Skip</span>
        </i>

      </form>

    <p>Answers: Skip for now, same as questions, but add in: 
        User's choice, 
        Correct answer (optional), 
        Links to resources, 
        Commenting, 
        No submit button, 
        If viewing answers, record that so user cannot re-take for credit</p>
  
    </div>
  );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  quiz: state.quiz,
  mode: state.mode
})

export default compose(
  connect(mapStateToProps),
  reduxForm({form:'question'}) // in the state we'll have state.form.login
)(Question);