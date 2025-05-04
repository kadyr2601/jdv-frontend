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

    return NextResponse.next()
}

export const config = {
    matcher: ["/sitemap.xml"],
}
