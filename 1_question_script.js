function passWord() {
    var testV = 1;
    var pass1 = prompt('謎の正解を入力してください','謎の答えを入力してください'); //input
    while (testV < 100) {
        if (pass1.toLowerCase() == "食いしん坊のポチは、ソーセージ祭りが開催されている扉谷公園へ") { //password
        location.href ='1_answer.html'; //window
        break;
        } 
        testV+=1;
        var pass1 = 
        prompt('答えをもう一度確認してください！','謎の答えを入力してください'); //wrong
    }
    return " ";
}