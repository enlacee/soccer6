# soccer6 API

Fútbol 6 with Slim 3 with SQLITE

![scrennshot](http://i.imgur.com/AJjr4mE.png)

### Install API REST

01. Create the database: with the config: `app/src/settings.php`
Crear la configuración.

``` php
'db' => [
	'host' => 'localhost',
	'user' => 'pepe',
	'pass' => '',
	'dbname' => 'anb_soccer6',
],
```

02. (Usado) En `api/app/src/dependencies.php` configurarción de base de datos SQLITE.

``` php
// database
$container['db'] = function ($c) {
	$db = $c->get('settings')['db'];
	$pdo = new PDO("mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'],
		$db['user'], $db['pass']);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	return $pdo;
};
```

### Install

Install by composer

	cd app
	composer install

Dar permiso de escritura

	sudo chmod 777 -R app/logs

Instalar dependencia basica PHP SQLITE

	sudo apt-get install sqlite php5-sqlite


