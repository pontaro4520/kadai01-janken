document.querySelector("h1").classList.add("text-blue-300")

const gu = "ぐー"
const cho = "ちょき"
const par = "ぱー"

const win = "あなたの勝ち"
const draw = "あいこ"
const lose = "あなたの負け"

var count = 0;
var win_count = 0;
var draw_count = 0;
var lose_count = 0;

var times = 1;

$('#times').click(function () {
    times = Number($('input[name="times"]:checked').val());
    // console.log(times+1);
})



// ボタンを押すと
$("#gu_btn").on("click", function () {

    for (let i = 0; i < times ; i++){
        console.log(i)
   

    // 試合回数をカウント
    count++;
    $("#count").text(count);

    // ボタンを押せているか？
    // alert("ok")

    // 1.乱数発生
    const r = Math.ceil(Math.random() * 3);
    console.log(r)

    // 2.if分岐
    if (r === 1) {
        $("#pc_hands").text(gu);
        $("#judgement").text(draw);
        draw_count++;
        $("#draw_count").text(draw_count)
    }

    else if (r === 2) {
        $("#pc_hands").text(cho);
        $("#judgement").text(win);
        win_count++;
        $("#win_count").text(win_count)
    }

    else if (r === 3) {
        $("#pc_hands").text(par);
        $("#judgement").text(lose);
        lose_count++;
        $("#lose_count").text(lose_count)
    }

    // 勝率計算
    var win_rate = (win_count / count) * 100;
    console.log(win_rate)
    $("#rate").html(win_rate);

}

})

// ボタンを押すと
$("#cho_btn").on("click", function () {

    for (let i = 0; i < times ; i++){
        console.log(i)

        // 試合回数をカウント
        count++;
        $("#count").text(count);

    // ボタンを押せているか？
    // alert("ok")

    // 1.乱数発生
    const r = Math.ceil(Math.random() * 3);
    console.log(r)

    // 2.if分岐
    if (r === 1) {
        $("#pc_hands").text(gu);
        $("#judgement").text(lose);
        lose_count++;
        $("#lose_count").text(lose_count)
    }

    else if (r === 2) {
        $("#pc_hands").text(cho);
        $("#judgement").text(draw);
        draw_count++;
        $("#draw_count").text(draw_count)
    }

    else if (r === 3) {
        $("#pc_hands").text(par);
        $("#judgement").text(win);
        win_count++;
        $("#win_count").text(win_count)
    }

        // 勝率計算
        var win_rate = (win_count / count) * 100;
        console.log(win_rate)
        $("#rate").html(win_rate);

    }
    

})

// ボタンを押すと
$("#par_btn").on("click", function () {

    for (let i = 0; i < times ; i++){
        console.log(i)

        // 試合回数をカウント
        count++;
        $("#count").text(count);

    // ボタンを押せているか？
    // alert("ok")

    // 1.乱数発生
    const r = Math.ceil(Math.random() * 3);
    console.log(r)

    // 2.if分岐
    if (r === 1) {
        $("#pc_hands").text(gu);
        $("#judgement").text(win);
        win_count++;
        $("#win_count").text(win_count)
    }

    else if (r === 2) {
        $("#pc_hands").text(cho);
        $("#judgement").text(lose);
        lose_count++;
        $("#lose_count").text(lose_count)
    }

    else if (r === 3) {
        $("#pc_hands").text(par);
        $("#judgement").text(draw);
        draw_count++;
        $("#draw_count").text(draw_count)
    }

        // 勝率計算
        var win_rate = (win_count / count) * 100;
        console.log(win_rate)
        $("#rate").html(win_rate);
  
    }


})

