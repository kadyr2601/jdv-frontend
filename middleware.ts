import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    // Проверяем, является ли запрос к sitemap.xml
    if (request.nextUrl.pathname.endsWith("/sitemap.xml")) {
        // Получаем оригинальный ответ
        const response = NextResponse.next()

        // Устанавливаем правильный Content-Type
        response.headers.set("Content-Type", "application/xml; charset=utf-8")

        return response
    }

    // Проверяем, является ли запрос к robots.txt
    if (request.nextUrl.pathname.endsWith("/robots.txt")) {
        // Получаем оригинальный ответ
        const response = NextResponse.next()

        // Устанавливаем правильный Content-Type для robots.txt (должен быть text/plain, а не text/xml)
        response.headers.set("Content-Type", "text/plain; charset=utf-8")

        return response
    }

    return NextResponse.next()
}

export const config = {
    // Добавляем "/robots.txt" в matcher, иначе middleware не будет применяться к robots.txt
    matcher: ["/sitemap.xml", "/robots.txt"],
}
