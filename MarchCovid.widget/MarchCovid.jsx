// Edit to use a different start date
const covidStartDate = new Date("03/01/2020");
// Edit to adjust placement of widget
const topOfWidget = "100"
const leftOfWidget = "1200"


import { styled } from "uebersicht";
import { css } from "uebersicht";

export const refreshFrequency = 3600000; //Update every hour [3600000]

export function getDays () {
	let dateNow = new Date();
	// To calculate the time difference of two dates 
	var differenceInTime = dateNow.getTime() - covidStartDate.getTime(); 
  
	// To calculate the no. of days between two dates 
	var differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); 
	return differenceInDays
}

export const initialState = {differenceInDays: getDays()}

export const command = (dispatch) => {
  dispatch({differenceInDays: getDays()})
}

export const updateState = (event, previousState) => {
  if (event.error) {
    console.error(event.error)
    return {...previousState, warning: `We got an error: ${event.error}`}
  }
  return {differenceInDays: getDays()}
}

export const render = ({differenceInDays, error}) => {	
	return (
		<TimeWrapper>{differenceInDays}</TimeWrapper>
		)
}

const Wrapper = styled("div")``;

export const className = `
	top: ${topOfWidget}px;
	left: ${leftOfWidget}px;
	background-image: url(MarchCovid.widget/Mar.png);
	height: 128px;
	margin: 0px auto;
	text-align: center;
	border-width: 0px;
	border-style: none;
	font-family: Helvetica Neue;
	width: 128px;
    `
    
const TimeWrapper = styled("div")`
	font-size: 31pt;
	-webkit-transform: rotate(349deg);
	padding-top: 48px;
	padding-right: 9px;
	font-weight: bold;
	color: black;
`
;
