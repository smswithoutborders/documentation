---
sidebar_position: 4
---

# SMSWithoutBorders Gateway clients

Gateway Client یک دروازه مدیریت پیام کوتاه لینوکس است. می تواند با استفاده از ابزارهای لینوکس ModemManager پیام های SMS را دریافت و ارسال کند. هدف آن این است که مجموعه ابزار کاملی از همه پیامک های لینوکس باشد. با مودم های USB 2G/3G بهترین عملکرد را دارد

::: نکته آنچه یاد خواهید گرفت

- نحوه راه اندازی و استفاده از Gateway Clients

جدیدترین نسخه این راهنما را می‌توانید در  پیدا کنید [مخزن github](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client)

:::

## نصب و پیکربندی

### نصب و راه اندازی

#### نصب وابستگی های مورد نیاز

- پایتون 3

#### وابستگی ها

##### اوبونتو

`sudo apt install build-essential libpython3-dev libdbus-1-dev`

`sudo apt نصب python3-gi python3-gi-cairo gir1.2-gtk-3.0`

`sudo apt install libgirepository1.0-dev gcc libcairo2-dev pkg-config python3-dev python3-venv`

##### طاق

"sudo pacman -S python-gobject gtk3".

`sudo pacman -S python cairo pkgconf gobject-introspection gtk3`

#### ساخت و نصب کنید

مخزن را کلون کنید

```bash
git clone https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client.git
```

```bash
cd SMSWithoutBorders-Gateway-Client
```

فایل های پیکربندی خود را ایجاد کنید

```bash
make
```

وابستگی های بیشتری نصب کنید

```bash
make install
```

#### پیکربندی


خوشه‌های شما برای برقراری ارتباط به سرور نیاز دارند و باید در فایل‌های پیکربندی خود به آن اشاره کنید.

- ویرایش ".configs/config.ini" ref:[پیوند به فایل پیکربندی نمونه](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client/tree/master/.configs/example.config.ini)

-  را دنبال کنید [این مراحل](https://smswithoutborders.github.io/docs/developers/getting-started) تا شناسه و کلید تأیید اعتبار خود را دریافت کنید

```ini
[OPENAPI]
API_ID=<نام کاربری سرور خود را در اینجا وارد کنید (همانند شناسه تأیید اعتبار توسعه دهنده افکانرد)>
API_KEY=<گذرواژه سرور خود را در اینجا وارد کنید (همانند کلید Auth توسعه دهنده افکانرد)>
```

- حتماً URL اتصال خود را طوری تنظیم کنید که به [سرور RabbitMQ](https://developers.smswithoutborders.com:15671) اشاره کند.

```ini
CONNECTION_URL=developers.smswithoutborders.com
```

#### در حال اجرا به عنوان سرویس سیستم

##### لینوکس

```bash
make start
```

- برای شروع خودکار در بوت آپ

```bash
make enable
```

<b>برای مشاهده همه گزارش‌های در حال اجرا</b>

```bash
tail -f src/services/logs/service.log
```

#### در حال اجرا به صورت دستی

##### لینوکس

- برای اجرای خروجی (ارسال پیامک)
  - مودم USB خود را وصل کنید
  - محیط مجازی خود را فعال کنید
  
  ```bash
  source venv/bin/activate
  ```
  - برای پیام های OpenAPI خروجی:
  ```bash
  python3 src/main.py --log=DEBUG --module=outbound
  ```
  - برای اجرای ورودی (دریافت و پردازش پیام های دریافتی)
  ```bash
  python3 src/main.py --log=DEBUG --module=inbound
  ```

<b>گزارش ها - </b>

**systemd**

<small>ورودی</small>

```bash
journalctl -af -u swob_inbound.service
```

<small>خروجی</small>

```bash
journalctl -af -u swob_outbound.service
```

### ارسال پیامک با استفاده از OpenAPI

با [OpenAPI](https://smswithoutborders-openapi.readthedocs.io/en/latest/overview.html)، می توانید پیامک های تکی و انبوه را از طریق Gateway Client ارسال کنید. پس از Gateway Client به عنوان یک سرویس سیستمی یا به صورت دستی، خوب است که شروع به ارسال پیامک کنید.

### راه اندازی در Raspberry pi (تست شده در 4B)

#### سرور اوبونتو

_Refs_

https://ubuntu.com/tutorials/how-to-install-ubuntu-on-your-raspberry-pi#4-boot-ubuntu-server<br /> https://itsfoss.com/connect-wifi-terminal-ubuntu/
