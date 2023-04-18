// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import * as dotenv from 'dotenv';
// import { getCookie } from 'typescript-cookie';

// // dotenv.config();

// const bool = false;
// export default function middleware(request: NextRequest) {
//   //const jwt = require('jsonwebtoken'); // problem a cause de ca créer une fonction qui check si le token est bon du coup
//   // const Authetificator = sessionStorage.getItem('token');
//   // const Authetificator = getCookie('token');
//   if (request.nextUrl.pathname.startsWith('/api/messages')) {
//     // console.log(Authetificator,'1');
//     try {
//       // const decoded = jwt.verify(Authetificator, process.env.JWT_SIGN_SECRET);
//       // console.log(decoded);
//       // console.log('Connexion réussi'); // VALID TOKEN
//     } catch (err) {
//       // res.sendStatus(403); // BAD TOKEN
//       console.log(err)
//     }

//     return NextResponse.rewrite(new URL('/api/messages', request.url));
//   }
//   // if (request.nextUrl.pathname.startsWith('/api/messages') && bool === false) {
//   //   return NextResponse.rewrite((new URL('/error', request.url)));
//   // }
//   // if (request.nextUrl.pathname.startsWith('/dashboard')) {
//   //   return NextResponse.redirect(new URL('/dashboard/user', request.url));
//   // }
// }
