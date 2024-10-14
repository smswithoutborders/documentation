---
sidebar_position: 7
---

# SMSWithoutBorders OpenAPI

SMSWithoutBorders OpenAPI یک سیستم صف بندی ساده را با RabbitMQ ادغام می کند، که به توسعه دهندگان اجازه می دهد پیام های SMS خروجی را از مشتریان Gateway خود مدیریت کنند.

:::نکته آنچه یاد خواهید گرفت

- نحوه راه اندازی و استفاده از OpenAPI

جدیدترین نسخه این راهنما را می توان در [` مخزن github`] یافت (https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI)

فرانت اند با این خدمات یکپارچه می شود. ممکن است لازم باشد بسته به قسمتی که روی آن کار می کنید آنها را تنظیم کنید.

- [`Gateway Client`](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client)
- [`RabbitMQ`](https://github.com/smswithoutborders/SMSWithoutBorders-Product-deps-RabbitMQ)

:::

## فهرست مطالب

1. [نیازها](#نیازمندی ها)
2. [وابستگی](#وابستگی)
3. [نصب](#نصب)
4. [تنظیم](#setup)

## الزامات

- [Python](https://www.python.org/) (نسخه >= [3.8.10](https://www.python.org/downloads/release/python-3810/))

- [محیط های مجازی پایتون](https://docs.python.org/3/tutorial/venv.html)

## وابستگی ها

این پروژه شامل ماژول های فرعی است. برای شبیه سازی همه زیر ماژول ها استفاده کنید

```
git submodule update --init --recursive --remote
```

راه اندازی [سرور RabbitMQ](https://github.com/smswithoutborders/SMSWithoutBorders-Product-deps-RabbitMQ)

- به دایرکتوری RabbitMQ در مخزن بروید

```
cd RabbitMQ
```

- [نصب](https://github.com/smswithoutborders/SMSWithoutBorders-Product-deps-RabbitMQ#rabbitmq-for-openapi)

در اوبونتو **libmysqlclient-dev** مورد نیاز است

```
sudo apt install python3-dev libmysqlclient-dev
```

## نصب و راه اندازی

ایجاد یک محیط مجازی **(venv)**

```
python3 -m venv venv
```

وارد فضای کاری Virtual Environments شوید

```
. venv/bin/activate
```

تمام بسته های پایتون را نصب کنید

```
python -m pip install -r requirements.txt
```

## برپایی

همه فایل‌های پیکربندی در فهرست **[config](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI/tree/main/config)** یافت می‌شوند.

### تنظیمات توسعه

**[default.ini](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI/tree/main/config/example.default.ini)** فایل پیکربندی است.

برای راه‌اندازی API، فایل‌های الگو را «example.default.ini» کپی کنید و نام آن را به «default.ini» تغییر دهید.

```
cp config/example.default.ini config/default.ini
```

### به تنظیمات دسترسی پیدا کنید

**[setup.ini](https://github.com/smswithoutborders/SMSWithoutBorders-OpenAPI/tree/main/example.setup.ini)** فایل دسترسی است.

برای تنظیم دسترسی، فایل‌های الگو را "example.setup.ini" کپی کنید و نام آن را به "setup.ini" تغییر دهید.

```
cp example.setup.ini setup.ini
```

## نحوه استفاده

### API را شروع کنید

```bash
python3 server.py
```

## API SandBox

```
<host>:<PORT>/<VERSION>/api-docs/
```