		var toyRobot = {  // toyRobot 객체를 선언한 후 속성과 함수 정의
			productId: "123-12",
			name: "Robot",
			price : "25,000",
			madeIn : "Korea",
			quantity: 10,
			showStock : function() {  // showStock( ) 함수 정의
				document.querySelector('#display').innerHTML = this.name + " 제품은 " + this.quantity + "개 남아있습니다.";
			}
		};
		
		toyRobot.showStock();  // toyRobot 객체의 showStock( ) 함수 실행