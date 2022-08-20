
        function makeObject(name, age){ // 객체를 생성하는 함수
            return{
                name : name, //name,
                age : age, // age,   이렇게 축약해서 사용도 가능
                hobby : 'football',
            }
        }

        const Mike = makeObject('Mike', 33);
        console.log(Mike);
        console.log("age" in Mike); // 객체 안에 age 키가 있는지 확인
        console.log("birthday" in Mike); // 객체 안에 birthday 키가 있는지 확인

   