<?php 

function myMax($xs) {
	$max = null;

	foreach ($xs as $elem) {
		if( !is_array($elem) ){
			if( $max < $elem ) {
				$max = $elem;
			}
		}else{
			$embedded_max = myMax($elem);
			
			if( $max < $embedded_max) {
				$max = $embedded_max;
			}
		}
	}

  	return $max;
}
 
echo myMax([1, 2, [3, 4]]); // 4

echo "<pre />";

$list = [20, 10, -5, 0, 5];

function mySort(&$list) {

	$list_length = count($list);

    for($i=0; $i < $list_length - 1; $i++) {

 		for($j=0; $j < $list_length - 1; $j++) {
 			if($list[$j] > $list[$j +1 ]) {
 				list($list[$j], $list[$j+1]) = array($list[$j+1], $list[$j]);
 			}
 		}

 	}
}

mySort($list);

print_r($list); // -5, 0, 5, 10, 20
