# PREREQUISITES
You need the following set of requirements:
* Mysql server
* Apache server
* Php and PhpMyAdmin
* nodejs

## STEP #1: PREPARE YOUR APP DIRECTORY
```
mkdir dir_app_name
cd dir_app_name
touch app.js
mkdir routes
mkdir db
mkdir controllers
npm init
npm i mysql express body-parser cors morgan nodemon
```

## STEP #2: PREPARE YOUR MYSQL SERVER
```
sudo apt install mysql-server
sudo mysql_secure_installation
systemctl start mysql.service
sudo mysql
mysql> STATUS;
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Password';
mysql> exit
mysql -u root -p
```
```
mysql> UNINSTALL COMPONENT "file://component_validate_password";
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;
mysql> CREATE USER 'myuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Strong@Pass123';
mysql> CREATE DATABASE mydatabase;
mysql> GRANT ALL PRIVILEGES ON mydatabase.* TO 'myuser'@'localhost' WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES;
mysql> exit
```
```
systemctl status mysql.service
```
## STEP #3: PREPARE YOUR APACHE SERVER

```
sudo apt install apache2
sudo systemctl enable apache2
systemctl status apache2.service 
```
## STEP #4: PREPARE THE PHPMYADMIN

```
sudo apt-get install ca-certificates apt-transport-https software-properties-common wget curl lsb-release
sudo apt install php8.1 libapache2-mod-php8.1
sudo apt install php php-{fpm,mbstring,bcmath,xml,mysql,common,gd,cli,curl,zip}
sudo apt install phpmyadmin
sudo> mysql
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Password';
mysql> INSTALL COMPONENT "file://component_validate_password";
exit
```
```
sudo mysql_secure_installation 
mysql -u root -p 
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Root@Pass123';
exit
```
```
sudo phpenmod mbstring
sudo systemctl restart apache2
```

if this error is appar (Apache/2.4.52 (Ubuntu) Server at localhost Port ) 

```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin & then sudo /etc/init.d/apache2 reload
```
## ALTERNATIVE SOLUTION

### xampp

Download XAMPP from "https://www.apachefriends.org/download.html".