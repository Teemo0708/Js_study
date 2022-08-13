
       /*
       String() -> 문자형으로 변환
       Number() -> 숫자형으로 변환
       Boolean() -> 불리언형으로 변환
        */

        console.log(
            Boolean(1),
            Boolean(123),
            Boolean("javascript")
        );

        console.log(
            // 숫자0, 빈 문자열, null, undefined, NaN의 경우 false로 변환
            Boolean(0),
            Boolean(""),
            Boolean(null),
            Boolean(undefined),
            Boolean(NaN)
        );

        // 주의사항
        console.log(
            Number(null), // 0으로 변환
            Number(undefined), // NaN으로 변환
            Boolean(0), // false로 변환
            Boolean('0'), // true로 변환
            Boolean(''), // false로 변환
            Boolean(' ') // true로 변환
        );
