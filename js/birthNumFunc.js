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



/* 생일날짜 알아맞히기 기능 */
// 입력받은 BirthNum 내용 저장
function saveBirthNum() {
	birthNum = document.getElementById("txtBox");	// txtBox를 birthNum 변수에 담음
	localStorage.setItem("birthNumStr", birthNum.value);		// Local Storage에 텍스트 내용 저장
};

// BirthNum 내용 가져오기
function loadBirthNum() {
	resultNum = document.getElementById("result");		// result를 resultNum 변수에 담음
	
	var result = localStorage.getItem("birthNumStr");	// result에 저장된 내용을 읽어옴
	var check = parseInt(result);						// 문자를 숫자로 변환
	
	if ( (check >= 326) && (check <= 1456) ) {
		// 생일날짜 구하는 연산
		result = check - 225;
		
		// "XX월 XX일" 형식의 문자열로 변환 (소수점 방지를 위해 parseInt 사용)
		var intFrontNum = parseInt(result / 100);
		var intBehindNum = result - (intFrontNum * 100);
		resultStr = intFrontNum + " 월 " + intBehindNum + " 일 ";
		
		// 변환된 문자열을 resultNum 값으로 치환
		resultNum.value = resultStr;
	}
	else {
		alert("[입력값 에러] 입력하신 숫자를 다시 확인해 주세요.");
		history.back(-1);
	}
};
