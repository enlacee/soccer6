# soccer6

Fútbol 6 with Sencha Touch 2.1 and higher

![scrennshot](http://i64.tinypic.com/vnpnpw.png)

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


### Developer start guide

`app/api` this is to simbol directory => SLIM PHP
Comand for generate:

	ln -s /var/www/html/soccer6/app/api /var/www/html/api.soccer6/app/public/
