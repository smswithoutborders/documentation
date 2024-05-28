---
sidebar_position: 3
---

# SMSWithoutBorders Backend

این یک API ابری و سرویس مدیریت کاربر است. این به طور مستقیم با پایگاه داده MySQL برای مدیریت کاربران قابل تنظیم است. همچنین ادغام های خارج از جعبه Google OAuth-2.0، Twitter OAuth، و نقاط پایانی تلگرام و احراز هویت حساب را فراهم می کند.

:::نکته آنچه یاد خواهید گرفت

- نحوه راه اندازی Backend
- نحوه آزمایش و استقرار با docker

جدیدترین نسخه این راهنما را می‌توانید در [`github reposistory`] (https://github.com/smswithoutborders/SMSwithoutborders-BE) پیدا کنید.

Backend با این خدمات یکپارچه می شود. ممکن است لازم باشد بسته به قسمتی که روی آن کار می کنید آنها را تنظیم کنید.

- ['Website'](https://github.com/smswithoutborders/smswithoutborders.com)
- ['سکوهای شخص ثالث'](https://github.com/smswithoutborders?q=custom&type=all&language=&sort=)

:::

## فهرست مطالب

- [SMSWithoutBorders Backend] (#smswithoutborders-backend)
  - [فهرست مطالب] (#جدول مطالب)
  - [نیازها] (#نیازمندی ها)
  - [نصب] (#نصب)
  - [عیب‌یابی] (#عیب‌یابی)
  - [تنظیم] (#راه اندازی)
  - [پیکربندی‌های محیط توسعه] (#توسعه-محیط-پیکربندی)
  - [پیکربندی‌های محیط تولید] (#production-environment-configurations)
  - [گزینه های پیکربندی] (#configuration-options)
    - [SEVER](#sever)
    - [CREDENTIALS] (# اعتبارنامه)
    - [RECAPTCHA] (#recaptcha)
    - [DEVELOPER](#developer)
  - [نحوه استفاده] (#روش استفاده)
  - [Start Backend User Management API] (#start-backend-user-management-api)
    - [محیط توسعه مدیریت کاربر] (#user-management-development-vironment)
    - [محیط تولید مدیریت کاربر] (#user-management-production-vironment)
  - [Start Backend Publisher API] (#start-backend-publisher-api)
    - [محیط توسعه ناشران] (#ناشر-محیط-توسعه)
    - [محیط تولید ناشر] (#ناشر-محیط تولید)
  - [Start both Backend User Management API and Backend Publisher API](#start-both-backend-user-management-api-and-backend-publisher-api)
    - [محیط توسعه] (#توسعه-محیط)
    - [محیط تولید] (#تولید-محیط)
  - [API SandBox] (#api-sandbox)
  - [API Logs] (#api-logs)

## الزامات

- [MySQL](https://www.mysql.com/) (نسخه >= 8.0.28) ([MariaDB](https://mariadb.org/))
- [nodejs](https://nodejs.org) (نسخه >= [16.14.0](https://nodejs.org/dist/v16.14.0/node-v16.14.0-linux-x64.tar.xz))
- [npm](https://www.npmjs.com/) (نسخه >= [8.3.1](https://nodejs.org/dist/v16.14.0/node-v16.14.0-linux-x64. tar.xz))

## نصب و راه اندازی

تمام وابستگی های زمان اجرا با استفاده از npm نصب می شوند

````bash
 npm install```

### عیب یابی

به چند دلیل، کاربران ممکن است گاهی اوقات در نصب با مشکل مواجه شوند. در اینجا چند دستورالعمل عیب یابی آورده شده است

- دایرکتوری «node_modules» و فایل «package-lock.json» را حذف کنید. دوباره نصب را امتحان کنید.

``باش
rm -rf node_modules package-lock.json
````

## برپایی

همه فایل‌های پیکربندی در فهرست **[config](https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/config)** یافت می‌شوند.
فایل‌های پیکربندی بر اساس **[متغیرهای محیطی](https://github.com/lorenwest/node-config/wiki/Environment-Variables)** نام‌گذاری می‌شوند.

### تنظیمات محیط توسعه

**[default.json](https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/config/example.default.json)** فایل پیکربندی یک محیط توسعه است.

برای راه‌اندازی پایگاه داده، API و اعتبار پلتفرم برای یک محیط توسعه، فایل‌های الگو را «example.default.json» کپی کنید و نام آن را به «default.json» تغییر دهید.

``باش
cp config/example.default.json config/default.json

```

### تنظیمات محیط تولید

**[production.json](https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/config/example.production.json)** فایل پیکربندی یک محیط تولید است.

برای راه‌اندازی پایگاه داده، API و اعتبار پلتفرم برای یک محیط productoin، فایل‌های الگو را «example.production.json» کپی کنید و نام آن را به «production.json» تغییر دهید.

``باش
cp config/example.production.json config/production.json
```

### گزینه های پیکربندی

اینها گزینه های هر **[پیکربندی](https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/config)** فایل هستند

#### سرور

مدیریت دسترسی به پیامک بدون مرز متمرکز کردن منابع و خدمات.

**پایگاه اطلاعاتی**

1. **HOST**: نام میزبان پایگاه داده ای که به آن متصل می شوید. (پیش فرض: localhost)
2. **USER**: کاربر MySQL برای احراز هویت به عنوان. (پیش‌فرض: ریشه)
3. **PASSWORD**: رمز عبور آن کاربر MySQL.
4. **DATABASE**: نام پایگاه داده برای استفاده برای این اتصال (پیش‌فرض: smswithoutborders)

**API**

1. **USER MANAGEMENT API PORT**: شماره پورتی که باید به آن متصل شوید. (پیش‌فرض: 9000)
2. **PUBLISHER API PORT**: شماره پورتی که باید به آن متصل شوید. (پیش‌فرض: 10000)
3. **KEY**: کلیدی که برای رمزگذاری داده های کاربر استفاده می شود. (پیش‌فرض: "de4053831a43d62d9e68fc11319270a9")
4. **SALT**: نمکی که برای هش کردن داده های کاربر استفاده می شود. (پیش‌فرض: "acaad78fd9dadcb056840c09073190a8")
5. **SECURE SESSIONS**: مقدار بولی را برای [خصیصه Secure Set-Cookie] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) مشخص می کند. وقتی حقیقت، صفت Secure تنظیم می شود، در غیر این صورت نیست. به طور پیش فرض، ویژگی Secure sessions روی truey تنظیم شده است.
6. **حداکثر جلسه**: عدد مورد استفاده در هنگام محاسبه [ویژگی Expires Set-Cookie] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) را مشخص می کند (بر حسب میلی ثانیه) /Set-Cookie). این کار با در نظر گرفتن زمان سرور فعلی و افزودن حداکثر میلی ثانیه به مقدار برای محاسبه تاریخ انقضا انجام می شود. به طور پیش فرض، حداکثر سن برای دو ساعت (7200000 میلی ثانیه) تنظیم شده است.
7. **فعال کردن مسدود کردن**: مقدار بولی را برای ردیابی کاربر ناموفق [احراز هویت] مشخص می کند (https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/docs/FEATURES_v2.md#2-authenticate-an -account) تلاش می کند.
8. **تلاش های بلوک کوتاه**: تعداد [احراز هویت] ناموفق را مشخص می کند (https://github.com/smswithoutborders/SMSwithoutborders-BE/blob/main/docs/FEATURES_v2.md#2-authenticate-an-account ) قبل از یک بلوک کوتاه تلاش می کند. چندین بلوک کوتاه منجر به یک بلوک طولانی می شود.
9. **تلاش های بلوک طولانی**: تعداد تلاش های بلوک کوتاه ناموفق قبل از یک بلوک طولانی را مشخص می کند.
10. **SHORT BLOCK DURATION**: مدت زمان (بر حسب دقیقه) یک بلوک کوتاه را مشخص می کند.
11. **LONG BLOCK DURATION**: مدت زمان (بر حسب دقیقه) یک بلوک طولانی را مشخص می کند.

**OTP**

یک کاربر روزانه چهار بار برای درخواست یک کد OTP تلاش می کند

1. **ENABLE_OTP_BLOCKING**: مقدار بولی را برای روشن/خاموش کردن ردیابی درخواست های کد OTP مشخص می کند.
2. **FIRST RESEND DURATION**: مدت زمان (بر حسب میلی ثانیه) برای اولین درخواست OTP را مشخص می کند.
3. **SECOND RESEND DURATION**: مدت زمان (بر حسب میلی ثانیه) برای دومین درخواست OTP را مشخص می کند.
4. ** THIRD RESEND DURATION **: مدت زمان (بر حسب میلی ثانیه) برای سومین درخواست OTP را مشخص می کند.
5. **FOURTH RESEND DURATION**: مدت زمان (بر حسب میلی ثانیه) برای چهارمین درخواست OTP را مشخص می کند.
   **GATEWAY Server**

این یک مورد استفاده از پروژه [SMSWithoutBorders-Gateway-Server](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server) است.

1. **URL**: URL سرور دروازه ای که به آن متصل می شوید. (پیش فرض: localhost)
2. **PORT**: شماره پورتی که باید به آن متصل شوید. (پیش‌فرض: 6969)

**شروع**

هدر Access-Control-Allow-Origin CORS را پیکربندی می کند. مقادیر ممکن:

آرایه - مبدا را به آرایه ای از مبداهای معتبر تنظیم کنید. هر مبدا می تواند یک String یا یک RegExp باشد. برای مثال ["http://example1.com"، /\.example2\.com$/] هر درخواستی را از "http://example1.com" یا از زیر دامنه "example2.com" می پذیرد. (پیش‌فرض: "localhost:18000")

**SSL API**

1. **API PORT**: شماره پورتی که باید به آن متصل شوید.
2. **CERTIFICATE**: مسیری به گواهی SSL شما.
3. **KEY **: مسیر به کلید SSL شما.
4. **PEM**: مسیری به SSL PEM شما.

#### اعتبارنامه

**گوگل**

اطلاعات کاربری را از [کنسول Google Cloud Platform] (https://console.cloud.google.com/) دریافت کنید

1. **شناسه مشتری GOOGLE**: شناسه مشتری Google شما
2. **محرمانه مشتری GOOGLE**: راز مشتری گوگل شما

**توییتر**

اعتبارنامه ها را از [درگاه توسعه دهندگان توییتر] (https://developer.twitter.com/en/docs/developer-portal/overview) دریافت کنید

1. ** TWITTER API KEY **: کلید API توییتر شما
2. ** TWITTER API KEY SECRET **: رمز کلید API توییتر شما

**تلگرام**

این یک مورد استفاده از پروژه [SMSWithoutBorders-customplatform-Telegram](https://github.com/smswithoutborders/SMSWithoutBorders-customplatform-Telegram) است.

1. **تلگرام درخواست میزبان **: آدرس سرور پلتفرم سفارشی تلگرام که به آن متصل می شوید.

#### RECAPTCHA

دریافت KEY از [Google reCAPTCHA](https://developers.google.com/recaptcha)

1. **ENABLE RECAPTCHA**: مقدار بولی را برای روشن/خاموش کردن recaptcha مشخص می کند.
2. **کلید محرمانه**: کلید مخفی Google reCAPTCHA شما

#### توسعه دهنده

دسترسی به پیامک بدون مرز منبع توسعه دهندگان را مدیریت می کند.

1. **HOST**: URL سرور توسعه دهندگانی که به آن متصل می شوید. (پیش فرض: localhost)
2. **PORT**: شماره پورتی که باید به آن متصل شوید. (پیش‌فرض: 12000)

## How to use

### Start Backend User Management API

#### User management development environment

- with NPM

``Be
Run npm start_main

```

- with NODE

``Be
node controllers/sync_platforms.js && node server.js
```

#### مدیریت کاربر محیط تولید

- با NPM

``باش
NODE_ENV=production npm start_main را اجرا کنید
```

- با NODE

``باش
NODE_ENV=production node controllers/sync_platforms.js && node server.js

### Start the Backend Publisher API

#### Publisher development environment

- with NPM

``Be
Run npm start_pub
```

- with NODE

``Be
node controllers/sync_platforms.js && node server_pub.js

```


#### محیط تولید ناشر

- با NPM

``باش
NODE_ENV=production npm start_pub را اجرا کنید
```

- با NODE

``باش
NODE_ENV=گره کنترلرهای تولید/sync_platforms.js && node server_pub.js

```

### هم API مدیریت کاربر Backend و هم API Publisher Backend را شروع کنید

#### محیط توسعه

- با NPM

``باش
npm شروع اجرا
```

#### محیط تولید

- با NPM

``باش
NODE_ENV= شروع تولید npm

```

## API SandBox

```

http://localhost:{PORT}/v1/api-docs

http://localhost:{PORT}/v2/api-docs

```

## گزارش های API

به‌طور پیش‌فرض [سطوح ورود] (https://github.com/smswithoutborders/SMSwithoutborders-BE/tree/main) روی «info» تنظیم شده‌اند. می‌توانید [سطوح ورود] را تغییر دهید (https://github.com/smswithoutborders/SMSwithoutborders-BE/tree/main/). برای مثال، [Start both Backend User Management API and Backend Publisher API](#Start-both-Backend-User-management-API-and-Backend-Publisher-API) با [log level](https://github.com/smswithoutborders/SMSwithoutborders-BE/tree/main) روی "اشکال زدایی" تنظیم شد

```

LOG_LEVEL=اشکال npm اشکال زدایی

```

همه فایل‌های گزارش در فهرست سیاهه‌ها یافت می‌شوند. [بیشتر بخوانید](https://github.com/smswithoutborders/SMSwithoutborders-BE/tree/main/) ...
```