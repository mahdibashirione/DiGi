import Accurdion from "../common/Accurdion";

const Questions = () => {
  const options = [
    {
      id: 1,
      title: "ترخینه چه امکانات متفاوتی داره؟",
      description:
        "وبسایت سفارش غذای رستوران‌های زنجیره‌ای ترخینه با اتصال مستقیم به نرم افزار اتوماسیون شعبات رستوران، امکان اشتباهات هنگام ثبت سفارش آنلاین غذا و همچنین زمان مورد نیاز برای آماده سازی و تحویل آن را به حداقل ممکن می رسونه.",
    },
    {
      id: 2,
      title: "چطور می تونم در ترخینه حساب کاربری ایجاد کنم؟",
      description:
        "خیلی ساده، پس از انتخاب غذای مورد علاقه تان از منوی رستوران، هنگام ثبت سفارش با وارد کردن شماره تلفن همراه یک پیامک حاوی کد تایید برای شما ارسال و با وارد کردن کد تایید، ثبت نام شما تکمیل می شه. یا می تونید در صفحه اصلی سایت روی گزینه ورود کلیک کنید.",
    },
    {
      id: 3,
      title: "سابقه و لیست خریدهای قبلی ام رو کجا ببینم؟",
      description:
        "با ورود به حساب کاربری و کلیک روی گزینه سفارشات قبلی سابقه تمام خریدهای شما نمایش داده می شه.",
    },
    {
      id: 4,
      title: "چه راه هایی برای پرداخت دارم؟",
      description:
        "هنگام ثبت سفارش غذا می تونید روش پرداخت دلخواه خودتون رو انتخاب کنید. آنلاین و یا نقدی در هنگام تحویل سفارش بصورت حضوری.",
    },
    {
      id: 5,
      title:
        "آیا قیمت در منوی وبسایت ترخینه با قیمت منوی شعبات رستوران یکسان است؟",
      description:
        "بله. قیمت منوی وبسایت ترخینه دقیقا مطابق با قیمت منوی شعب رستوران  است و در صورت تغییر قیمت از طرف رستوران این تغییر در وبسایت ترخینه بلافاصله قابل مشاهده است.",
    },
    {
      id: 6,
      title: "چطور می تونم از اعتبار هدیه و تخفیف استفاده کنم؟",
      description:
        "برای استفاده از کد تخفیف میتونید به سادگی کد رو در سبد خرید، در قسمت مشخص شده وارد کنید. اعتبار هدیه هنگام انتخاب روش پرداخت برای شما نمایش داده میشه و در صورت تمایل میتونید ازش استفاده کنید.",
    },
  ];

  return (
    <article className="container px-4 py-8">
      <div className="w-full border-2 rounded-lg divide-y">
        {options.map((question) => {
          return (
            <Accurdion
              styleTitle="text-primary"
              key={question.id}
              title={question.title}
            >
              <p className="text-sm md:text-base md:leading-7 text-gray-500 leading-6 select-none pb-4 pl-8 text-justify">
                {question.description}
              </p>
            </Accurdion>
          );
        })}
      </div>
    </article>
  );
};

export default Questions;