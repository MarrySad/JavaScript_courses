var event, ok, money = 0, id=0;

while (id < works.length) {
    do {
        ok = false;
        event = +prompt(works[id].a00 + '\n' + works[id].a1 + works[id].a2 + works[id].a3 + works[id].a4 + '\n(-1 - Забрать выйгрыш)');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(4, event);
        }
    } while (!ok);
    if (event == works[id].a0) {
        alert("Правильный ответ! Плюс " + works[id].a5 + " в вашу копилочку!");
        money += works[id].a5
        id++;
    } else if (event == -1) {
        break;
    } else {
        alert('Не верно!')
        break;
    }
}

if (id == works.length) {
    alert('Победа!!! Вы прошли игру!\n' + 'Число правильных ответов: ' + (id) + '\nВаш выйгрыш: ' + money + ' шекелей!')
} else {
    alert('Спасибо за игру!\n ' + 'Число правильных ответов: ' + (id) + '\nВаш выйгрыш: ' + money + ' шекелей!')
}

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}