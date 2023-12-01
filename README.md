## PREPARE YOUR APP DIRECTORY
```
mkdir dir_app_name
cd dir_app_name
touch app.js
mkdir routes
mkdir db
mkdir controllers
npm init
npm i mysql
npm i express
npm i body-parser
npm i cors
npm i morgan
npm i nodemon.
```

## PREPARE YOUR MYSQL SERVER
```
sudo apt install mysql-server
systemctl start mysql.service
sudo mysql
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
mysql>exit
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
## PREPARE YOUR APACHE SERVER

```
sudo apt install apache2
sudo systemctl enable apache2
systemctl status apache2.service 
```
## PREPARE THE PHPMYADMIN

```
sudo apt install php8.1
sudo apt install 
sudo apt install php-mysql php-mbstring php-zip php-gd php-json php-curl 
sudo apt install phpmyadmin
mysql -u root -p
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
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
