import { NextRequest, NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client")

const prisma =  new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page')) || 0;
  const limit = parseInt(url.searchParams.get('limit')) || 10;
  const search = url.searchParams.get('search_query') || "";
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
      message: error.message
    }, {
      status: 500
    });
  }
}
