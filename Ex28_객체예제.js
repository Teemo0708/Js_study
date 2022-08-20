        function isAdult(user) {
            if(!('age' in user) || user.age < 20){ // Jane에 age 키가 없기 때문에 해당 키값이 없을 경우
                                                    //false가 되게끔 조건문을 설정
                return false;
            }
            return true;
        }

        const Mike = {
            name : "Mike",
            age : 30,
        };
        
        const Jane = {
            name : "Jane",
        };

        console.log(isAdult(Mike));
        console.log(isAdult(Jane));

    