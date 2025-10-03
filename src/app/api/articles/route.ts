import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : undefined;

    const articles = await prisma.article.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return NextResponse.json(articles);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}

// POST
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, excerpt, content, thumbnailUrl, author } = body;

    if (!title || !slug || !content) {
      return NextResponse.json({ error: 'Title, slug, and content are required' }, { status: 400 });
    }

    const article = await prisma.article.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        thumbnailUrl,
        author: author || 'Admin',
      },
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}
