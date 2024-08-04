import { NextRequest, NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client")

const prisma =  new PrismaClient();

export async function GET(req : Request) {
  const url = new URL(req.url);

  // Create URLSearchParams object from the query string
  const searchParams = new URLSearchParams(url.search);

  const page = parseInt(searchParams.get('page') ?? '0', 10);
  const limit = parseInt(searchParams.get('limit') ?? '10', 10);
  const search = searchParams.get('search_query') ?? '';
  const offset = limit * page;

  try {
    const totalRows = await prisma.dataKelas.count({
      where : {
        OR : [
          {
              nama_eng : {
                  contains : search
              },
          },
              {
                  nama_ind : {
                      contains : search
                  }
              }
        ]
      }
  });

    const totalPage = Math.ceil(totalRows / limit);

    const result = await prisma.dataKelas.findMany({
      where : {
          OR : [
            {
                nama_eng : {
                    contains : search
                },
            },
                {
                    nama_ind : {
                        contains : search
                    }
                }
          ]
        },
        skip : offset,
        take : limit ,
        orderBy : {
          id : 'asc'
        }
  });

    const rePage = page + 1;

    return NextResponse.json({
      result,
      page,
      limit,
      totalRows,
      totalPage,
      number: rePage <= 1 ? 1 : rePage * 10
    }, {
      status: 200
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      
    }, {
      status: 500
    });
  }
}
