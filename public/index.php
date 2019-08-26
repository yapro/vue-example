<?php
// первым делом делаем проверку прав доступа (так делать правильней, чтобы фронт не посылал N запросов, в каждом из которых тоже будет проверка доступа)

define('WEBAPP_VERSION', trim(file_get_contents(__DIR__.'/../cache/git-commit-revision-number')));// объявляем хеш сборки

?><!DOCTYPE html>
<html lang="ru">
    <head>
        <title>Skynet - Ui</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/build/bootstrap.theme.css?vers=<?=WEBAPP_VERSION?>" />
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
        <script type="text/javascript" src="/build/Shift.js?vers=<?=WEBAPP_VERSION?>"></script>
    </body>
</html>
