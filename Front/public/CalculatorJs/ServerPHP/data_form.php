<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма отправки</title>
</head>

<body>
    <form action="" name="email_form" id="form_id" method="post" style="display: flex; flex-direction: column;">
        <input type="text" name="email" id="" placeholder="email получателя">
        <input type="text" name="typeWindow" placeholder="секций">
        <input type="text" name="widthWindow" placeholder="ширина окна">
        <input type="text" name="heightWindow" placeholder="высота окна">
        <input type="text" name="profileName" placeholder="профиль">
        <input type="text" name="glassName" placeholder="стекло">
        <input type="text" name="montage" placeholder="монтаж да/нет">
        <input type="text" name="delivery" placeholder="монтаж да/нет">
        <input type="text" name="option0" placeholder="отлив">
        <input type="text" name="option1" placeholder="подоконник">
        <input type="text" name="option2" placeholder="маскитная сетка">
        <input type="submit" value="Отправить на почту">
    </form>
</body>
<script type="module">
    document.getElementById('form_id').addEventListener('submit', async (e) => {
        e.preventDefault()
        let formdata = new FormData(email_form);
        let object = {}
        formdata.forEach((value, key) => object[key] = value);
        console.log(object);
        const response = await fetch('ServerPHP/send_mail.php', {
            method: 'POST',
            body: JSON.stringify(object)
        });
        if(response.ok){
            const json = await response.json();
            alert(json.message);
        }
        else{
            alert('Ошибка отправки');
        }
    })
</script>

</html>