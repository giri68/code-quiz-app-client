// one action for each property of state.mode
// see initialState.js for the list

export const GOTO_LANDING = 'GOTO_LANDING';
export const gotoLanding = () => ({
  type: GOTO_LANDING,
  view: 'landing'
})

export const GOTO_ABOUT = 'GOTO_ABOUT';
export const gotoAbout = () => ({
  type: GOTO_ABOUT,
  view: 'about'
})

export const GOTO_LOGIN = 'GOTO_LOGIN';
export const gotoLogin = () => ({
  type: GOTO_LOGIN,
  view: 'login'
})

export const GOTO_PROFILE = 'GOTO_PROFILE';
export const gotoProfile = () => ({
  type: GOTO_PROFILE,
  view: 'profile'
})

export const GOTO_DASHBOARD = 'GOTO_DASHBOARD';
export const gotoDashboard = () => ({
  type: GOTO_DASHBOARD,
  view: 'dashboard'
})

export const GOTO_QUIZLIST = 'GOTO_QUIZLIST';
export const gotoQuizlist = () => ({
  type: GOTO_QUIZLIST,
  view: 'quizlist'
})

export const GOTO_QUESTION = 'GOTO_QUESTION';
export const gotoQuestion = () => ({
  type: GOTO_QUESTION,
  view: 'question'
})

export const GOTO_RESULTs = 'GOTO_RESULTs';
export const gotoResults = () => ({
  type: GOTO_RESULTs,
  view: 'results'
})

export const GOTO_ACCURACY = 'GOTO_ACCURACY';
export const gotoAccuracy = () => ({
  type: GOTO_ACCURACY,
  view: 'accuracy'
})

export const GOTO_ANSWER = 'GOTO_ANSWER';
export const gotoAnswer = () => ({
  type: GOTO_ANSWER,
  view: 'answer'
})

export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = (modal) => ({
  type: SHOW_MODAL,
  modal
})