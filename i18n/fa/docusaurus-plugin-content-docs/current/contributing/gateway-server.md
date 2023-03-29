---
sidebar_position: 6
---

# SMSWithoutBorders Gateway Server

Gateway-servers کاربران را قادر می سازد تا با ماژول ناشر همگام سازی و ارتباط برقرار کنند

:::نکته آنچه یاد خواهید گرفت

- نحوه راه اندازی و استفاده از Gateway Server

جدیدترین نسخه این راهنما را می توان در [` مخزن github`] (https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server) پیدا کرد.

فرانت اند با این خدمات یکپارچه می شود. ممکن است لازم باشد بسته به قسمتی که روی آن کار می کنید آنها را تنظیم کنید.

- ['برنامه اندروید'](https://github.com/smswithoutborders/SMSWithoutBorders-App-Android)

- ['Gateway Client'](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client)

:::

### الزامات

- پایتون 3

### امکانات

- سرور کارگزار پیام برای [Gateway-Client](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) (\_به [SMSWithoutBorders-OpenAPI](https://github.com/smswithoutborders/SMSWith-Open) مراجعه کنید )

- همگام سازی [SMSWithoutBorders-App](https://github.com/smswithoutborders/SMSWithoutBorders-App-Android) برای ارتباط با [Publisher] (https://github.com/smswithoutborders/SMSWithoutBorders-Publisher)

  > این باید در همان مکان [Publisher] (https://github.com/smswithoutborders/SMSWithoutBorders-Publisher) میزبانی شود، زیرا Publisher مستقیماً در معرض وب نیست.

- ارسال درخواست انتشار از [Gateway-Client](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) به [Publisher] (https://github.com/smswithoutborders/SMSWithoutBorders-Publisher)
- درخواست [Gateway-Client's] (https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) را برای پیوستن به [Publisher] (https://github.com/smswithoutborders/SMSWithoutBorders-Publisher) تأیید می کند.

### نصب و راه اندازی

```bash
https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server.git
git submodule update --force --recursive --init --remote
cd SMSWithoutBorders-Gateway-Server
python3 -m virtualenv venv
. venv/bin/activate
pip3 install -r requirements.txt
```

در صورت تمایل، «make» را برای نصب git hook اجرا کنید

### ساختار دایرکتوری

_/gateway_server_ \
شامل جلسات Gateway [server websocket] (https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/gateway_server/sessions_websocket.py) است که برای همگام‌سازی کاربران لازم است.

### پیکربندی

#### پیکربندی API دروازه

- فایل های کانفیگ را کپی و ویرایش کنید

```bash
cp confs/example.conf.ini confs/conf.ini
```

#### پیکربندی سرور دروازه

- فایل های کانفیگ را کپی و ویرایش کنید

```bash
cp gateway_server/confs/example.conf.ini gateway_server/confs/conf.ini
```

#### استفاده

<a name="synchronization" ></a>

#### Gateway API

##### Gateway API را به صورت دستی شروع کنید

```bash
. venv/bin/activate
python3 main.py
```

- لیست گره های موجود را دریافت کنید
  `/seeds
`

مثلا

```bash
curl localhost:6969/seeds -H "Content-Type: application/json"
```

برمی گرداند

```json
[
  {
    "IMSI": "sample_IMSI",
    "LPS": 1648206122.81431,
    "MSISDN": "sample_MSISDN",
    "seed_type": "seed"
  }
]
```

- Gateway را به Gateway های فعال اضافه کنید
  `/ping
`

مثلا

```bash
curl -X POST \
 localhost:6969/seeds/ping \
 -d '{"IMSI":"sample_IMSI", "MSISDN":"sample_MSISDN", "seed_type":"seed"}' \
 -H "Content-Type: application/json"
```

LPS جلسه جاری را برمی گرداند. LPS = آخرین جلسه پینگ

#### هماهنگ سازی

برای اینکه کاربران بتوانند کلیدهای امنیتی، پلتفرم‌ها و دروازه‌های موجود را بدست آورند، همگام‌سازی لازم است.

##### راه اندازی دستی جلسات وب سوکت

```bash
. venv/bin/activate
python3 gateway_server/sessions_websocket.py
```

##### پیکربندی

تمام تنظیمات مربوط به سوکت‌های وب را می‌توان در فایل «conf.ini» در «gateway_server» انجام داد.
`session_change_limit` : تعداد دفعاتی که websocket کلاینت URL های تغییر جلسه را دریافت می کند \
`session_sleep_timeout` : تعداد ثانیه های خواب پس از ارسال آدرس تغییر جلسه به مشتری \
`session_paused_timeout`: تعداد ثانیه‌هایی که باید قبل از بستن اتصال در حالت توقف باقی بمانند

##### جریان همگام سازی

1. با درخواست برای یک جلسه جدید شروع کنید. \
   `GET /<api-version>/sync/users/<user-id>` \
   \
   این یک URL رشته ای را برمی گرداند که می تواند توسط کلاینت های وب سوکت به آن متصل شود. کاربران می توانند با این \ ارتباط برقرار کنند
   URL را برگرداند یا آنها را از طریق عملکرد اسکن QR در برنامه اسکن کنید. فرکانس تغییر آدرس های اینترنتی همگام سازی بستگی دارد
   در تنظیمات پیکربندی`[sync] session_sleep_timeout` (defaults = 15 seconds). \
   \
   تعداد کل تغییرات در فرکانس قابل تغییر است`[sync] session_change_limit` (defaults = 3 times) \

جلسه ```, `200` ایجاد شد

```, `500` برخی از خطاها رخ داده است، گزارش های اشکال زدایی را بررسی کنید

2. هنگامی که یک URL همگام‌سازی متصل شد و پردازش شروع شد، وب‌سوکت یک متن مکث «201-pause» ارسال می‌کند. \
   کاربر شروع به احراز هویت خود می کند و سیاست های امنیتی خود را به رکورد خود در سرور اضافه می کند.

3. هنگامی که کاربر دست دادن لازم را انجام داد و تبادل اطلاعات آغاز شد، وب سوکت یک \ ارسال می کند.
   متن تصدیق «200- تأیید».

<a name="testing" />

#### آزمایش کردن

- آزمایش [مدل کاربران] (https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/gateway_server/users.py)

```bash
python -m unittest gateway_server/test/UTestUsers.py
```

-

* آزمایش [WebSockets] (https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/gateway_server/sessions_websocket.py)

[https://github.com/vi/websocat](https://github.com/vi/websocat)

_مانجارو_

```bash
sudo pacman -S websocat jq
```

_تست وب سوکت_

```bash
websocat ws://localhost:6996/v2/sync/init/111/000
```

- آزمایش [رمزگذاری/رمزگشایی RSA] (https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/test/security_rsa.py)
  این به فایل های pem نیاز دارد. آنها را در test/dir کپی کنید تا امکان اجرای آزمایشی فراهم شود

```bash
python -m unittest test/security_rsa.py
```

- آزمایش [کل فرآیند Handshake] (https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server/tree/main/test/handshake.py)
  این به فایل های pem نیاز دارد. آنها را در test/dir کپی کنید تا امکان اجرای آزمایشی فراهم شود

```bash
./test/handshake.sh
```
