import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
//   }

//   const { title, content, links, selectedCategory, imageUrl, publicId } =
//     await req.json();

//   const authorEmail = session?.user?.email as string;

//   if (!title || !content) {
//     return NextResponse.json(
//       { error: "Title and content are required." },
//       { status: 500 }
//     );
//   }

//   try {

//     console.log("Post created");
//     return NextResponse.json(newPost);
//   } catch (error) {
//     return NextResponse.json({ message: "Could not create post." });
//   }
// }

export async function GET() {
  try {
    return NextResponse.json("salam");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}