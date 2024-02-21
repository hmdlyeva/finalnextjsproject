import { NextRequest, NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore/lite";
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
  const citiesCol = collection(db, "Babysits");
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

export async function POST(request: NextRequest, { body }: { body: any }) {
  try {
    const db = getFirestore(app);
    const parentsCol = collection(db, "Babysits");

    const newDocRef = await addDoc(parentsCol, body);

    const newDocSnapshot = await getDoc(newDocRef);

    console.log(newDocSnapshot.data());

    return NextResponse.json(
      { id: newDocSnapshot.id, ...newDocSnapshot.data() },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Some error occurred" },
      { status: 500 }
    );
  }
}

