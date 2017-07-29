/**
 * @author : console.log
 * @date : 2011.06.24.
 */

/* 페이지 접속시 HTML5 지원여부 확인 */
function htmlLevel() {
	// HTML5 미지원시
	if (!window.localStorage) {
		document.write('<p>이 브라우저는 Local Storage를 지원하지 않습니다.</p>');
		document.write('<p>최신 브라우저로 업그레이드 해주세요.</p>');
	}
};



/* 생각한 숫자 알아맞히기 기능 */
// 입력받은 숫자 내용 저장
function saveThinkNum() {
	thinkNumOne = document.getElementById("num_one");			// num_one을 thinkNumOne 변수에 담음
	thinkNumTwo = document.getElementById("num_two");			// num_two를 thinkNumOne 변수에 담음
	localStorage.setItem("thinkNumOne", thinkNumOne.value);		// Local Storage에 텍스트 내용 저장
	localStorage.setItem("thinkNumTwo", thinkNumTwo.value);		// Local Storage에 텍스트 내용 저장
};

// 저장된 내용 가져와서 연산 후 출력
function loadThinkNum() {
	resultNum = document.getElementById("result");			// result를 resultNum 변수에 담음
	resultNumOne = localStorage.getItem("thinkNumOne");		// Local Storage에 저장된 내용을 읽어옴
	resultNumTwo = localStorage.getItem("thinkNumTwo");		// Local Storage에 저장된 내용을 읽어옴
	
	var checkOne = parseInt(resultNumOne);
	var checkTwo = parseInt(resultNumTwo);
	
	if ( (checkOne >= 0) && (checkOne <= 9) && (checkTwo >= 0) && (checkTwo <= 9) ) {
		resultNumSum = checkOne + checkTwo;
		
		if ( (resultNumSum >= 0) && (resultNumSum <= 9) ) {
			resultNumSum = 9 - resultNumSum;
			resultNum.value = resultNumSum;
		}
		else {
			resultNumSum = 18 - resultNumSum;
			resultNum.value = resultNumSum;
		}
	}
	else {
		alert("[입력값 에러] 입력하신 숫자를 다시 확인해 주세요.")
		history.back(-1);
	}
};