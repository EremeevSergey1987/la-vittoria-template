//*----------------------------------------Подключение переменных-------------------------------------------------------|
import {$vars, $state} from "./exports/expStateVars.js";
//*----------------------------------------Подключение плагинов---------------------------------------------------------|
import {$plugins} from "./exports/expPlugins.js";
//*----------------------------------------Подключение модулей----------------------------------------------------------|
import {$modules} from "./exports/expModules.js";
//*----------------------------------------Подключение функций----------------------------------------------------------|
import {$model} from "./exports/expModel.js";
//*----------------------------------------Подключение компонентов скрипта----------------------------------------------|
import {$components} from "./exports/expComponents.js";
//*--------------------------------------------------Основной скрипт----------------------------------------------------|

$plugins.colorSchemes.auto();
$plugins.mobileCheck();
$plugins.isAvifWebp({mode: "webp"});