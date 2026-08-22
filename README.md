# SBP Renovatie — сайт (Next.js)

Готовый проект: лендинг + рабочая форма заявок, которая пишет в твою базу Supabase.

## Что внутри
- `app/page.js` — сам лендинг (все секции, видео, слайдер до/после, форма).
- `app/globals.css` — стили.
- `app/api/lead/route.js` — серверная часть: принимает заявку и записывает её в Supabase.
- `public/` — логотип и иконки услуг.

---

## Как запустить сайт в интернете (пошагово)

### Шаг 1. Загрузить код на GitHub
1. Зайди на github.com → **New repository** → имя `sbp-renovatie` → **Create repository**.
2. На странице репозитория нажми **uploading an existing file**.
3. Перетащи туда **всё содержимое этой папки** (папки `app`, `public` и файлы `package.json`, `next.config.js`, `.gitignore`, `.env.local.example`, `README.md`).
   ⚠️ Файл `.env.local` НЕ загружай (его тут и нет — ключи вставляются в Vercel, см. Шаг 3).
4. Нажми **Commit changes**.

### Шаг 2. Подключить Vercel
1. На vercel.com → **Add New… → Project**.
2. Выбери свой репозиторий `sbp-renovatie` → **Import**.
3. Framework определится сам (**Next.js**). Ничего не меняй.

### Шаг 3. Вставить ключи (Environment Variables)
Перед деплоем (или потом в Settings → Environment Variables) добавь:

| Name | Value |
|------|-------|
| `SUPABASE_URL` | `https://nhiggggkfzhdzugljbdv.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | секретный ключ из Supabase (см. ниже) |

**Где взять `service_role`:** Supabase → твой проект → **Settings** (шестерёнка) → **API Keys** → строка **`service_role` (secret)** → **Reveal** → **Copy**. Вставь это значение прямо в поле Vercel.
🔒 Этот ключ — как мастер-пароль к базе. Вставляй его ТОЛЬКО в Vercel. Никому не пересылай.

### Шаг 4. Deploy
Нажми **Deploy**. Через минуту-две получишь ссылку вида `sbp-renovatie.vercel.app` — это твой живой сайт.

### Шаг 5. Проверить форму
Открой сайт → заполни форму → **Verstuur aanvraag**.
Проверь в Supabase: **Table Editor → leads** — там должна появиться строка с заявкой.

---

## Позже (не сейчас)
- **Свой домен** (`sbprenovatie.be`): Vercel → Settings → Domains → добавить.
- **Письмо на почту при заявке**: зарегистрируйся на resend.com, получи `RESEND_API_KEY`, добавь в Vercel переменные `RESEND_API_KEY` и `LEAD_EMAIL=sbprenovatie@gmail.com`. Заявки и так сохраняются в базе — почта это просто удобное уведомление.
- **Пиксель Meta** и **cookie-consent** — добавим отдельным шагом перед запуском рекламы.
- **BTW-номер** в футере, **реальное фото до/после**.

## Запуск локально (по желанию, если поставишь Node.js)
```
npm install
# создай файл .env.local по образцу .env.local.example
npm run dev
```
Откроется на http://localhost:3000
