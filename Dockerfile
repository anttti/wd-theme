FROM wordpress:4.6.1-php7.0-apache
MAINTAINER Antti Mattila <me@rarelyneeded.com>

COPY ./wp-content /var/www/html/wp-content
