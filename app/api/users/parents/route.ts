import { NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import app from "../../firebase/config/firebaseClient";

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
  const db = getFirestore(app);
  const citiesCol = collection(db, "Parents");
  const citySnapshot = await getDocs(citiesCol);
  const parents = citySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  try {
    return NextResponse.json(parents);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}
