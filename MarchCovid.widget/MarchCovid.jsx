// Edit lines 27 & 28 to adjust placement of widget
// Edit line 12 to use a different date

import { styled } from "uebersicht";
import { css } from "uebersicht";

export const refreshFrequency = 28800; //Update every 8 hours

const Wrapper = styled("div")``;

export const render = ({days}, dispatch) => {
	var covidStartDate = new Date("03/01/2020"); 
	let dateNow = new Date();
	
	// To calculate the time difference of two dates 
	var Difference_In_Time = dateNow.getTime() - covidStartDate.getTime(); 
  
	// To calculate the no. of days between two dates 
	var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24)); 
	
	return (
		<TimeWrapper>{Difference_In_Days}</TimeWrapper>
		)
}

export const className = `
	top: 100px;
	left: 1200px;
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
	font-size: 28pt;
	-webkit-transform: rotate(349deg);
	padding-top: 50px;
	padding-right: 9px;
	font-weight: bold;
	color: black;
`
;
