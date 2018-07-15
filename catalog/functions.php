<?php

function get_cat(){
    global $connection;
    $query = "SELECT * FROM categories";
    $res = mysqli_query($connection, $query);

    $arr_cat = array();
    while($row = mysqli_fetch_assoc($res)){
        $arr_cat[$row['id']] = $row;
    }
    return $arr_cat;
}

function print_arr($array) {
    echo "<pre>" . print_r($array, true) . "</pre>";
}

function map_tree($dataset) {
    $tree = array();

    foreach ($dataset as $id=>&$node) {
        if (!$node['parent']){
            $tree[$id] = &$node;
        }else{
            $dataset[$node['parent']]['childs'][$id] = &$node;
        }
    }

    return $tree;
}

function categories_to_string($data){
    foreach($data as $item){
        $string .= categories_to_template($item);
    }
    return $string;
}


function categories_to_template($category){
    ob_start();
    include 'category_template.php';
    return ob_get_clean();
}

function breadcrumbs($array, $id){
    if(!$id) return false;

    $count = count($array);
    $breadcrumbs_array = array();
    echo $breadcrumbs_array;
    for($i = 0; $i < $count; $i++){
        if(isset($array[$id])){
            $breadcrumbs_array[$array[$id]['id']] = $array[$id]['title'];
            $id = $array[$id]['parent'];
        }else break;
    }
    return array_reverse($breadcrumbs_array, true);
}