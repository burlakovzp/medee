<?php defined("CATALOG") or die("Access denied");

include 'models/main_model.php';

$options = get_options_use();
$theme = PATH . "views/{$options['theme']}/";

$categories = get_cat();
$categories_tree = map_tree($categories);
$categories_menu = categories_to_string($categories_tree);

// получение страниц меню
$pages = get_pages();

check_remember();

?>