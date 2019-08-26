composer install --optimize-autoloader --no-interaction --no-dev

/var/tmp/node-v9.5.0-linux-x64/bin/node /var/tmp/node-v9.5.0-linux-x64/bin/npm run update-version

/var/tmp/node-v9.5.0-linux-x64/bin/node /var/tmp/node-v9.5.0-linux-x64/bin/npm run bootstrap-theme --scripts-prepend-node-path

/var/tmp/node-v9.5.0-linux-x64/bin/node /var/tmp/node-v9.5.0-linux-x64/bin/npm install --scripts-prepend-node-path

rm -rf public/build/* && /var/tmp/node-v9.5.0-linux-x64/bin/node node_modules/webpack/bin/webpack.js \
     --colors \
     --mode production \
     --trace-deprecation \
     --display-error-details \
     --scripts-prepend-node-path

for  use additional flags: --watch --progress

/var/tmp/node-v9.5.0-linux-x64/bin/node ./node_modules/webpack-cli/bin/webpack.js --mode=development -w

```
server {
    listen 80;
    server_name vue-example.local;
    root /var/www/lebnik/vue-example/public;
    location = /robots.txt {
        try_files $uri @robotsTxt;
    }
    location @robotsTxt {
        root /etc/nginx/files;
        try_files /robots.txt =404;
    }
    location = /apple-touch-icon.png {
        try_files $uri @appleTouchIcon;
    }
    location @appleTouchIcon {
        root /etc/nginx/files;
        try_files /logo.png =404;
    }
    location ~* ^.+\.(ico|jpg|jpeg|gif|png|svg|js|css|mp3|ogg|mpe?g|avi|zip|gz|bz2?|rar|swf|txt)$ {
        access_log /var/log/nginx/gatex.files;
    }
    location / {
        # try to serve file directly, fallback to app.php
        try_files $uri /index.php$is_args$args;
    }
    location ~ \.php$ {
        access_log /var/log/nginx/vue-example.local.phpfpm timed_combined;
        error_log /var/log/nginx/vue-example.local.phperror;
        fastcgi_pass 127.0.0.1:9020;
        fastcgi_split_path_info ^(.+\.php)(/.*)$;
        # GLOBAL-переменные, которые будут доступны в PHP
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param QUERY_STRING    $query_string;
        fastcgi_param REQUEST_METHOD  $request_method;
        fastcgi_param CONTENT_TYPE    $content_type;
        fastcgi_param CONTENT_LENGTH  $content_length;
        fastcgi_read_timeout 3000;
        include fastcgi_params;
    }
}
```
