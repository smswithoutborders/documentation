---
sidebar_position: 1
---

# یک صفحه ایجاد کنید

برای ایجاد یک **صفحه مستقل**، فایل های **Markdown یا React** را به `src/pages` اضافه کنید:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## اولین صفحه React خود را ایجاد کنید

یک فایل در `src/pages/my-react-page.js` ایجاد کنید:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

اکنون یک صفحه جدید در «http://localhost:3000/my-react-page» در دسترس است.

## اولین صفحه Markdown خود را ایجاد کنید

یک فایل در `src/pages/my-markdown-page.md` ایجاد کنید:

```mdx title="src/pages/my-markdown-page.md"
# صفحه Markdown من

این یک صفحه Markdown است
```

یک صفحه جدید اکنون در دسترس است`http://localhost:3000/my-markdown-page`.
