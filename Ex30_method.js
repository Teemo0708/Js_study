
        let boy = {
            name : "Mike",
            showName : function(){
                console.log(this.name); // boy를 this로 바꿈, 메소드의 this는 해당객체를 가르키기 때문에
                                                                    // this.name은 Mike를 의미함
                                        // 화살표 함수는 this를 window로 받아오기 때문에 사용x
            }
        };

        let man = boy;
        boy = null; // boy로 접근하는 것을 막음 

        man.showName();

   