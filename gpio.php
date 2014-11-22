<?php 

if ($_GET["f"] === "reset") {
	echo "Test erfolgreich.";
}

public function test() {
	echo 'Test';
}

public function reset() {
	for ($i=0; $i < 8; $i++) { 
		exec('gpio write '.$i.' 0');
		sleep(0.02);
		exec('gpio mode '.$i.' in');	
	}
}

public function pinMode($pin, $mode) {
	if ($mode == 'in') {
		$com = 'gpio mode '.$pin.' in';
		exec($com);
	} else {
		$com = 'gpio mode '.$pin.' out';
		exec($com);
	}
}

public function switch($pin, $boolean) {
	if ($boolean) {
		$com = 'gpio write '.$pin.' 1';
		exec($com);
	} else {
		$com = 'gpio write '.$pin.' 0';
		exec($com);
	}
}

public function read($pin) {
	$result = exec('gpio read '.$pin);
	return $result;
}

?>