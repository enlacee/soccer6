<?php
$base = __DIR__ . '/../app/';

$folders = [
	'Model',
	'Controller',
];

foreach($folders as $f)
{
	foreach (glob($base . "$f/*.php") as $k => $filename)
	{
		require $filename;
	}
}
