
        const superman = {
            name:'Clark',  // name -> key, Clark -> 값
            age:33,
        }

        // 접근
        superman.name; 
        superman['age'];
        console.log(superman.name);
        console.log(superman['age']);

        // 추가
        superman.gender = 'male';
        superman['hairColor'] = 'black';
        console.log(superman.gender);
        console.log(superman['hairColor']);

        // 삭제
        delete superman.hairColor;
        console.log(superman['hairColor']);

   