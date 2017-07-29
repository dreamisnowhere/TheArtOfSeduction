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



/* 전화번호 알아맞히기 기능 */
// 입력받은 PhoneNum 내용 저장
function savePhoneNum() {	
	phoneNum = document.getElementById("txtBox");			// txtBox를 phoneNum 변수에 담음
	localStorage.setItem("phoneNumStr", phoneNum.value);	// Local Storage에 텍스트 내용 저장
};

// PhoneNum 내용 가져오기
function loadPhoneNum() {
	resultNum = localStorage.getItem("phoneNumStr");	// resultNum에 저장된 내용을 읽어옴
	var check = parseInt(resultNum);					// 문자를 숫자로 변환
	
	if ( (check >= 2222222) && (check <= 199999998) ) {
		// 폰번호 구하는 연산
		result = check / 2;
		
		// "XXXX-XXXX" 형식의 문자열로 변환
		var intFrontNum = parseInt(result / 10000);
		var intBehindNum = result - (intFrontNum * 10000);
		var resultStr = intFrontNum + " - " + intBehindNum;
		
		resultNum = document.getElementById("result");	// result를 resultNum 변수에 담음
		resultNum.value = resultStr;					// 변환된 문자열을 resultNum 값으로 치환
	}
	else {
		alert("[입력값 에러] 입력하신 숫자를 다시 확인해 주세요.");
		history.back(-1);
	}
};

// 전화번호 세팅
function setPhoneNum() {
	selectValue = document.getElementById("select-choice-1").value;

	// link 정보 치환
	document.getElementById("link_one").href = "tel:" + selectValue + result;
	document.getElementById("link_two").href = "sms:" + selectValue + result;
};
