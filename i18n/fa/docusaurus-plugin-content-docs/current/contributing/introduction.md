---
sidebar_position: 1
---

## تعاریف

**SWOB:** - SMSWithoutBorders

این سند جریان داده SWOB را توصیف می کند.

این سند حاوی اطلاعاتی در مورد عملکرد داخلی هر یک از ماژول ها نیست. اطلاعات مربوط به عملکرد داخلی هر ماژول را می توان در مخازن مربوطه آنها یافت.

این سند مخاطبان زیر را هدف قرار داده است:

- مهندسین نرم افزار
- مدیران برنامه

## بررسی اجمالی

#### خلاصه ای از جریان داده

<img alt="Figure: swob merge flow" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_merge_flow.png" />

### ذخیره دسترسی به حساب

SWOB بر اساس اصول [OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2) کار می کند.

> OAuth 2 یک چارچوب مجوز است که به برنامه های کاربردی - مانند Facebook، GitHub و DigitalOcean - امکان دسترسی محدود به حساب های کاربری در یک سرویس HTTP را می دهد. این کار با واگذاری احراز هویت کاربر به سرویسی که میزبان یک حساب کاربری است و اجازه دادن به برنامه های شخص ثالث برای دسترسی به آن حساب کاربری کار می کند. OAuth 2 جریان های مجوز را برای برنامه های کاربردی وب و دسکتاپ و همچنین دستگاه های تلفن همراه فراهم می کند.

<img width="350" height="400" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_auth.png" />

توکن های کاربر به صورت ایمن ذخیره می شوند و در صورت درخواست کاربر به موارد زیر دسترسی دارند:

- درخواست را به یک پلت فرم آنلاین از برنامه منتشر کنید
- ابطال نشانه ها
- حذف اکانت ها (این عمل توکن ها را نیز باطل می کند).

##### مخازن مرتبط

- [پایگاه داده ذخیره سازی دسترسی کاربر](https://github.com/smswithoutborders/SMSwithoutborders-BE)
- [واسط های کاربری مدیریت کاربر](https://github.com/smswithoutborders/smswithoutborders.com)

### درخواست با استفاده از پیامک

#### هماهنگ سازی

فرآیند همگام سازی از ارتباطات مبتنی بر RSA برای انجام یک دست دادن امن بین کاربران برنامه تلفن همراه و سرورهای Gateway استفاده می کند.

<img width="750" height="600" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_sync.png" />

دست دادن با برنامه و سرور Gateway به اشتراک گذاری ایمن کلیدهای مخفی که برای رمزگذاری پیام های SMS از برنامه استفاده می شود، پایان می یابد.

کلیدهای مخفی چندگانه در حال حاضر پشتیبانی نمی شوند، بنابراین کاربران به آخرین کلید مخفی مشترک متصل هستند. این باعث کاهش ارزش هر کلید ذخیره شده قبلی می شود.

کلیدهای مخفی در برنامه ذخیره می شوند و پس از تکمیل همگام سازی نمی توان آنها را از سرور درخواست کرد. این بدان معناست که هنگامی که کاربر دستگاه خود را تغییر می دهد یا برنامه را حذف نصب می کند، باید مجدداً همگام سازی کند.

##### مخازن مرتبط\*\*

- [سرور دروازه](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server)
- [برنامه اندروید](https://github.com/smswithoutborders/SMSwithoutBorders-App-Android)

#### درخواست و انتشار

کاربران انتخاب می کنند که می خواهند پیام های خود را از برنامه تلفن همراه به کدام پلتفرم منتشر کنند (ارسال کنند). سپس یکی از [کاربران دروازه](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client) به کاربر ارائه می شود که می تواند پیام های خود را به سرورهای دروازه ارسال کند. سرورهای پیش‌فرض Gateway پس از همگام‌سازی انتخاب می‌شوند و در اختیار کاربر قرار می‌گیرند، اما کاربر می‌تواند به صورت دستی آن را تغییر دهد.

<img width="750" height="600" src="https://github.com/smswithoutborders/SMSWithoutBorders-Resources/raw/master/multimedia/img/developers/swob_request_and_publish.png" />

پیام هایی که به Gateway Clients می رسد به سرور Gateway یا به تعداد سرورها یا مسیرهای Gateway که لازم است ارسال می شود.
پیام ها از طریق این فرآیند ارسال، رمزگذاری شده باقی می مانند.

سرورهای دروازه درخواست ارسال شده را از مشتریان دروازه دریافت می کنند، وجود درخواست کننده را احراز هویت می کنند، سپس پیام ها را رمزگشایی می کنند و به [Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher) ارسال می کنند.

گفتگوی ناشر با [ناشر مدیریت کاربر](https://github.com/smswithoutborders/SMSwithoutborders-BE) که درخواست را احراز هویت می کند و یک کپی رمزگشایی شده از اطلاعات رمز ذخیره شده کاربر (برای پلت فرم درخواستی) ارسال می کند. ناشر درخواست ناشر را مستقیماً به پلتفرم های درخواستی API یا از طریق SDK خود ارسال می کند.

##### مخازن مرتبط

- [کاربران دروازه](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Client)
- [سرور دروازه](https://github.com/smswithoutborders/SMSWithoutBorders-Gateway-Server)
- [Publisher](https://github.com/smswithoutborders/SMSWithoutBorders-Publisher)
