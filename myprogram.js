let number = "";
let symbol = "";
let num_first = true;
let result_num = 0;
let num = 0;


// 入力された数字を文字列として保存し、返す
function push_number(x) {
    number = number + x;
    return number;
}

function push_symbol(x) {
    // +, -, *, / の場合
    if (x != "=") {
        symbol = x;

        // 1つ目の数字の場合
        if (num_first) {
            result_num = Number(number);
            num_first = false;
        }
        else if (number != ""){
            calculate(symbol, true);
        }
        number = "";
        return symbol;

    // ＝の場合
    } else {
        // 定数計算
        if (number == "") {
            calculate(symbol, false);
        }
        else {
            calculate(symbol, true);
        }
        return result_num;
    }
}

// 引数 x : +, -, *, / のどれかが入る
// 引数の計算方法で計算を行い、result_numに結果を入れる
function calculate(x, flg) {
    // 定数計算の場合
    if (flg)
        num = Number(number);
    switch(x) {
        case "+":
            result_num += num;
            break;
        case "-":
            result_num -= num;
            break;
        case "*":
            result_num *= num;
            break;
        case "/":
            // 割る数に0が入力された場合
            if (num == 0) {
                result_num = "Erorr : Divede by Zero";
                return 0;
            }
            result_num /= num;
            break;
    }
    number = "";
}
