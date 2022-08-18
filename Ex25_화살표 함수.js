
        
        /*
        const add = function(num1, num2) {
            const result = num1 + num2;
            return result;
        }
        */ 
       // 위의 함수를 아래의 화살표 함수로 변경
        const add = (num1,  num2) => num1+num2; // 리턴문이 한줄이기 때문에 
                                                // (num1+num2) 에서 괄호도 생략가능

        console.log(add(3, 8));

