> Please note this Boilerplate is not 100% perfect, it is just to get your project started.

# not finished yet

# Why

I only want to make a website in 1 port, I know this is a bad idea but i like it

- nextjs
- hono
- next-intl
- including authentication not use any library

## Getting Started

rename `.env.example` to `.env` or create `.env` in root file

```bash
DATABASE_URL="postgresql://root:root@localhost:5432/mydatabase?schema=public" # yours databse url,  if you don't want to use postgresql please prisma Documentation
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000 # nase url
TOKEN_JWT=secret # secret key for jwt
```

and run

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

```bash
└── 📁honoNext
    └── 📁messages  # i18n
    └── 📁prisma # prisma
    └── 📁public
    └── 📁src
        └── 📁app # main page
            └── 📁login # login page
        └── 📁server # for server
            └── 📁routes # route for hono/backend
        └── 📁utility # all function or utility
    └── tailwind.config.ts
    └── tsconfig.json
```

## Learn More

To learn more about Next.js, hono.js, prisma , take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [hono.js Documentation](https://hono.dev/docs/) - for backend
- [prisma Documentation](https://www.prisma.io/docs) - orm
- [next-intl Documentation](next-intl-docs.vercel.app) - for i18n (cookis base, cek in file i18n.ts)

## having problems?

just open issues or contact me
