// import type { NextApiRequest, NextApiResponse } from 'next'
// import { NextResponse } from 'next/server'

// export function GET(req: NextApiRequest, res: NextApiResponse) {
//     return NextResponse.json({ name: 'John Doe' })
// }

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    return Response.json({ name: 'John Doe' })
}