import auth from './authActionType';
import meetup from './meetupActionType';
import getAllMeetups from './getAllmeetupsActionType';
import singleMeetup from './getSingleMeetupActionType';
import createQuestion from './createQuestionActionType';
import singleQuestion from './getSingleQuestionActionType';
import getQuestions from './getQuestionActionType';

const {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE
} = auth;

const {
  CREATE_MEETUP_PENDING,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE
} = meetup;

const {
  GET_ALL_MEETUPS_PENDING,
  GET_ALL_MEETUPS_SUCCESS,
  GET_ALL_MEETUPS_FAILURE
} = getAllMeetups;

const {
  GET_MEETUP_PENDING,
  GET_MEETUP_SUCCESS,
  GET_MEETUP_FAILURE
} = singleMeetup;

const {
  CREATE_QUESTION_PENDING,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE
} = createQuestion;

const {
  GET_A_QUESTION_PENDING,
  GET_A_QUESTION_SUCCESS,
  GET_A_QUESTION_FAILURE
} = singleQuestion;

const {
  GET_QUESTIONS_PENDING,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE
} = getQuestions;

export {
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_PENDING,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  CREATE_MEETUP_PENDING,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE,
  GET_ALL_MEETUPS_PENDING,
  GET_ALL_MEETUPS_SUCCESS,
  GET_ALL_MEETUPS_FAILURE,
  GET_MEETUP_PENDING,
  GET_MEETUP_SUCCESS,
  GET_MEETUP_FAILURE,
  CREATE_QUESTION_PENDING,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE,
  GET_QUESTIONS_PENDING,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
  GET_A_QUESTION_PENDING,
  GET_A_QUESTION_SUCCESS,
  GET_A_QUESTION_FAILURE
};
