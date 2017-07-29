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
function saveDelNum() {
	delNumOne = document.getElementById("num_one");			// num_one을 thinkNumOne 변수에 담음
	localStorage.setItem("delNumOne", delNumOne.value);		// Local Storage에 텍스트 내용 저장
};

// 저장된 내용 가져와서 연산 후 출력
function loadDelNum() {
	resultNum = document.getElementById("result");			// result를 resultNum 변수에 담음
	resultNumOne = localStorage.getItem("delNumOne");		// Local Storage에 저장된 내용을 읽어옴
	var check = parseInt(resultNumOne);						// 문자를 숫자로 변환
	
	if ( (check >= 9) && (check <= 27) ) {
		if ( check <= 18 ) {
			resultNumOne = 18 - check;
			
			// 변환된 문자열을 resultNum 값으로 치환
			resultNum.value = resultNumOne;
		}
		else {
			resultNumOne = 27 - check;
			
			// 변환된 문자열을 resultNum 값으로 치환
			resultNum.value = resultNumOne;
		}
	}
	else {
		alert("[입력값 에러] 입력하신 숫자를 다시 확인해 주세요.");
		history.back(-1);
	}
};
