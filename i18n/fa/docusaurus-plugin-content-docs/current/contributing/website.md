---
sidebar_position: 2
---

# SMSWithoutBorders.com

وب سایت رسمی SMSWithoutBorders.

در اینجا رابط کاربری است که از طریق آن کاربران می توانند حساب های خود را مدیریت کرده و اعتبار خود را ذخیره کنند

:::نکته آنچه یاد خواهید گرفت

- نحوه راه اندازی وب سایت
- نحوه تست و استقرار وب سایت با آپاچی و داکر

جدیدترین نسخه این راهنما را می‌توانید در ['websites github reposistory'] پیدا کنید (https://github.com/smswithoutborders/smswithoutborders.com)

فرانت اند با این خدمات یکپارچه می شود. ممکن است لازم باشد بسته به قسمتی که روی آن کار می کنید آنها را تنظیم کنید.

- ['API Backend'](https://github.com/smswithoutborders/smswithoutborders.com)
- ['Gateway Server'](https://github.com/smswithoutborders/smswithoutborders.com)

:::

## راهنمای راه اندازی

لطفا دستورالعمل های زیر را برای راه اندازی این پروژه دنبال کنید

## الزامات

- [Node.js LTS](https://nodejs.org/en/download/) >= v14
- [نخ](https://classic.yarnpkg.com/en/docs/install)
- [ساخت گنو](https://www.gnu.org/software/make/)
- [Docker] (https://www.docker.com/)

## وابستگی ها را نصب کنید

```bash
yarn install
```

## متغیرهای محیط را پیکربندی کنید

فایل های پیکربندی .env توسعه و تولید را با پیش فرض ایجاد کنید

```bash
make config
```

متغیرهای پیکربندی جهانی SMSWithoutBorders نیز می توانند برای لغو تنظیمات پیش فرض ارسال شوند

```bash
SWOB_BE_HOST=http://localhost:9000 SWOB_RECAPTCHA_ENABLE=true SWOB_RECAPTCHA_SITE_KEY=skfhk123 <command>
```

در جایی که دستور می‌تواند هر یک از اسکریپت‌های موجود در package.json یا Makefile target باشد، به‌عنوان مثال «yarn start»، «make build»

**.env.development.local** در محیط های توسعه و **.env.production.local** هنگام ایجاد بیلدهای تولید استفاده می شود.

این پروژه با [Create React App] (https://github.com/facebook/create-react-app) بوت استرپ شد که قراردادهای نامگذاری متغیرها را مشخص می کند.

در زیر پیش فرض ها آمده است. یک مرجع نیز در [env.example] نگهداری می شود (https://github.com/smswithoutborders/smswithoutborders.com/blob/main/env.example)

| Variable                         | Description                                                                                                 | Default value                                                                                           | Override                |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------- |
| PORT                             | development port                                                                                            | 18000                                                                                                   | PORT                    |
| GENERATE_SOURCEMAP               | Generate or ignore sourcemaps                                                                               | false                                                                                                   | N/A                     |
| REACT_APP_API_URL                | Backend API URL                                                                                             | <http://localhost:9000>                                                                                 | SWOB_BE_HOST            |
| REACT_APP_API_VERSION            | Backend API version                                                                                         | v2                                                                                                      | SWOB_BE_VERSION         |
| REACT_APP_GATEWAY_SERVER         | Gateway server API URL                                                                                      | <http://localhost:15000>                                                                                | SWOB_GS_HOST            |
| REACT_APP_GATEWAY_SERVER_VERSION | Gateway server version                                                                                      | v2                                                                                                      | SWOB_GS_VERSION         |
| REACT_APP_RECAPTCHA_ENABLE       | Enable or disable recaptcha, make sure this setting is also toggled on the API                              | false                                                                                                   | SWOB_RECAPTCHA_ENABLE   |
| REACT_APP_RECAPTCHA_SITE_KEY     | reCAPTCHAv2 site key obtained from [google](https://www.google.com/recaptcha/admin)                         | N/A                                                                                                     | SWOB_RECAPTCHA_SITE_KEY |
| REACT_APP_RECAPTCHA_API_URL      | API script src from reCaptchav2 setup [documentation](https://developers.google.com/recaptcha/docs/display) | <https://www.google.com/recaptcha/api.js>                                                               | N/A                     |
| REACT_APP_TUTORIAL_URL           | Link to the getting started tutorial                                                                        | <https://smswithoutborders.github.io/docs/tutorials/getting-started>                                    | N/A                     |
| REACT_APP_GATEWAY_TUTORIAL_URL   | Link to gateway client setup tutorial                                                                       | <https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client/blob/alpha_stable/src/README.md> | N/A                     |
| REACT_APP_PRIVACY_POLICY_URL     | Link to hosted privacy policy markdown file(s)                                                              | <https://raw.githubusercontent.com/smswithoutborders/smswithoutborders.com/dev/docs/privacy-policy>     | N/A                     |
| HTTPS                            | Enable or disable https                                                                                     | false                                                                                                   | SWOB_SSL_ENABLE         |
| SSL_CRT_FILE                     | Location of SSL CRT file                                                                                    | N/A                                                                                                     | SWOB_SSL_CRT_FILE       |
| SSL_KEY_FILE                     | Location of SSL Key file                                                                                    | N/A                                                                                                     | SWOB_SSL_KEY_FILE       |

## سرور توسعه را راه اندازی کنید

```bash
yarn start
```

**توجه** پیکربندی ها بررسی می شوند و هر بار که نخ اجرا می شود، دوباره تولید می شوند. .env.development در صورتی که از قبل وجود داشته باشد زیاده روی نخواهد کرد اما .env.production خواهد شد.

[http://localhost:18000](http://localhost:18000) را باز کنید تا آن را در مرورگر مشاهده کنید.

اگر ویرایش کنید، صفحه دوباره بارگیری می شود.

همچنین هر گونه خطای پرز را در کنسول خواهید دید.

## ساخت تولید ایجاد کنید

برای docker، بخش docker را در زیر ببینید.

یک ساخت تولید بهینه ایجاد کنید که بتواند روی سرورها میزبانی شود. این مرحله از متغیرهای موجود در **.env.production.local** استفاده می کند.

```bash
yarn build or make build
```

پس از تکمیل، پوشه «build» را برای فایل‌های قابل استقرار بررسی کنید.

## گسترش

### استقرار استاندارد با آپاچی

برای سرور لینوکس/اوبونتو که دارای وب سرور apache2 است، این مراحل را برای استقرار سایت دنبال کنید

- ماژول بازنویسی را فعال کنید

```bash
sudo a2enmod rewrite
```

- فایل پیکربندی آپاچی را در /etc/apache2/apache2.conf باز کنید
- اجازه AllowOverride را از هیچ به همه تغییر دهید

```bash
<Directory /var/www/>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
</Directory>
```

- محتویات پوشه ساخت را در روت سرور که معمولاً در /var/www/html قرار دارد کپی کنید. مطمئن شوید که فایل .htaccess کپی شده است. فایل .htaccess همانطور که [اینجا] مشخص شده بسیار مهم است (https://create-react-app.dev/docs/deployment/#static-server)

```bash
sudo cp -r build/. /var/www/html
```

- راه اندازی مجدد apache2

```bash
sudo systemctl restart apache2
```

### داکر

تصویر داکر SWOB برای اجرا در یک محیط تولید طراحی شده است، بنابراین، کلیدهای SSL مورد نیاز است

با ساختن تصویر داکر شروع کنید. یک اسکریپت ساخت وجود دارد که می توانید اجرا کنید. همچنین، SWOB env override می تواند مستقیماً به این دستور منتقل شود. پیکربندی متغیرهای env را در بالا ببینید.

```bash
SWOB_SSL_ENABLE=true SWOB_SSL_CRT_FILE=/path/to/server.crt SWOB_SSL_KEY_FILE=/path/to/server.key make image
```

همچنین می‌توانید متغیرهای دیگر SWOB env را برای استفاده به‌جای پیش‌فرض‌ها ارسال کنید.

```bash
SWOB_RECAPTCHA_ENABLE=true SWOB_RECAPTCHA_SITE_KEY=somekeyhere make image
```

فهرست کاملی از همه متغیرهای env را می‌توانید در بخش «پیکربندی متغیرهای env» در بالا پیدا کنید

پس از تکمیل ساخت، تصویر «swob-fe:latest» ایجاد می‌شود. تصویر پورت‌های «۸۰» و «۴۴۳» را نشان می‌دهد که می‌توانند در صورت نیاز نقشه‌برداری شوند

می‌توانید تصویر را با اجرای «make container» آزمایش کنید و از «http://localhost:18000» و «https://localhost:18001» در مرورگر بازدید کنید یا با استفاده از گزینه‌های پیکربندی docker خودتان.
