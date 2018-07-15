<?php defined("CATALOG") or die("Access denied");

/**
 * изменение цены
 * */
function update_price(){
	global $connection;
	$id = (int) $_GET['title'];
	$price = (float) str_replace(',', '.', $_GET['val']);
	$query = "UPDATE products SET price = $price WHERE id = $id";
	$res = mysqli_query($connection, $query);
	if(mysqli_affected_rows($connection) > 0){
		return true;
	}else{
		return false;
	}
}

/**
 * удаление товара
 * */
function del_product(){
	global $connection;
	$id = (int) $_GET['id'];
	$query = "DELETE FROM products WHERE id = $id";
	$res = mysqli_query($connection, $query);
	if(mysqli_affected_rows($connection) > 0){
		return true;
	}else{
		return false;
	}
}

/**
* Получение отдельного товара
*/
function get_one_product($product_id){
	global $connection;
	$product_id = (int)$product_id;
	$query = "SELECT * FROM products WHERE id = $product_id";
	$res = mysqli_query($connection, $query);
	return mysqli_fetch_assoc($res);
}

function edit_product(){
    global $connection;
    $data = escape_data();
    $query = "UPDATE products SET title = '{$data['title']}', price = '{$data['price']}', content = '{$data['content']}' WHERE id = {$data['id']}";
    $res = mysqli_query($connection, $query);
    if(mysqli_affected_rows($connection) > 0){
        $_SESSION['res']['ok'] = 'Товар обновлен';
    }else{
        $_SESSION['res']['error'] = 'Ошибка редактирования товара! Возможно вы ничего не меняли';
    }
}