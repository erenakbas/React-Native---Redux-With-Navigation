    
// import axios from 'axios'; 
export function actions(r) {
    return function (dispatch) { 
        dispatch({
            type: "changeDefault",
            payload:r

        });
    };
}
// export function translate(){
//     alert(1);
//     var headers= {"X-RapidAPI-Host": "YandexTranslatezakutynskyV1.p.rapidapi.com",
//             "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//             "Content-Type":"application/x-www-form-urlencoded"}
//             var data={
//                 "apiKey":"trnsl.1.1.20190719T224742Z.77c65d85b453950b.e790cbe887c0b7f2ec76cae43f44022b22243bc6",
//                 "lang":"english",
//                 "text":"hello"
//             }
            
//     return function (dispatch) { 
//         dispatch({
//             type: "translate",
//             payload:
//             axios({
//                 method: 'post',
//                 url: 'https://YandexTranslatezakutynskyV1.p.rapidapi.com/translate',
//                 data: data,
//                 config: { headers: headers}
//                 })
//                 .then(function (response) {
//                     //handle success
//                     console.log(response);
//                 })
//                 .catch(function (response) {
//                     //handle error
//                     console.log(response);
//                 })
//             // axios.post("https://YandexTranslatezakutynskyV1.p.rapidapi.com/translate",
//             // headers,data).then(function (result) { 
//             //     console.log(result);
//             // })
            
            
//             // ("http://erenakbas.com/Best/Login/Book").then(function (result) { 
//             //     return result.data;
//             // }) 
//         });
//     }; 
//     // trnsl.1.1.20190719T224742Z.77c65d85b453950b.e790cbe887c0b7f2ec76cae43f44022b22243bc6

// }    