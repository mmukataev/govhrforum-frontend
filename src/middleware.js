// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Если запрашивается корневая страница, перенаправляем на /kz
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", req.url), 301); // Редирект на /kz
  }

  return NextResponse.next(); // Если нет редиректа, продолжим выполнение запроса
}
