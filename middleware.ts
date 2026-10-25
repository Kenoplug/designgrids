import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-designgrids-route", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ["/client-portal/:path*", "/admin/:path*"]
};
