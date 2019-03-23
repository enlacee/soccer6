# soccer6

Fútbol 6 with Sencha Touch 2.1 and higher

![screenshot](http://i64.tinypic.com/vnpnpw.png)

### Config bash `.bashrc`
Install all dependecies like (nodejs=node, ruby, java, jre)

	vim ~/.bashrc

Add this:

	## add variables
	PATH="$(ruby -e 'print Gem.user_dir')/bin:$PATH"
	export PATH="/home/anb/bin/Sencha/Cmd:$PATH"

	## add java path
	export JAVA_HOME="/usr/lib/jvm/java-8-openjdk/bin/java:/usr/lib/jvm/java-8-openjdk/jre/bin:"
	export PATH="$JAVA_HOME:$PATH"

### Basic command `Sencha CMD`

	sencha web start
	sencha app watch

	sencha app build production

	# Use for update bootstrap.js and load the css in your app.js
	sencha app refresh


For prouction no alert

	sencha help app build
	sencha app build production

### Extending Your Application
	
Generating Models

	cd /path/to/MyApp
	sencha generate model User id:int,name,email

Generating Views

	cd /path/to/MyApp
	sencha generate view foo.Thing

### que version sencha estoy usando
	
	sencha which

### crear aplicacion sencha cmd con EXTJS

	sencha -sdk /path/to/ext6 generate app MyApp /path/to/my-app
	sencha generate app -ext MyApp /path/to/my-app


### crear aplicacion sencha cmd con Sencha Touch

	#  Make sure the current working directory is the Sencha Touch SDK
	cd /path/to/sencha-touch-sdk
	sencha generate app MyApp /path/to/www/myapp

	# si ya lo tienes especificado el PATH del SDK por linea de comando
	sencha -sdk /path/to/sencha-touch-sdk generate app MyApp /path/to/www/myapp


### Developer start guide

#### APIREST

`app/apiREST` this use the framework SLIM PHP

