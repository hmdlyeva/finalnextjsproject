import { NextRequest, NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore/lite";
import app from "@/app/api/firebase/config/firebaseClient";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log("salam");
  console.log(params.id);
  const db = getFirestore(app);
  const parentsCol = collection(db, "Parents");
  const parentSnapshot = await getDocs(parentsCol);
  const Allparents = parentSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  let obj = Allparents.find((elem) => elem.id == params.id);
  try {
    return NextResponse.json(obj);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log("salam");
  console.log(params.id);
  const db = getFirestore(app);
  const parentsCol = collection(db, "Parents");
  const parentSnapshot = await getDocs(parentsCol);
  const Allparents = parentSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  let obj = Allparents.filter((elem) => elem.id != params.id);
  try {
    return NextResponse.json(obj);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params, body }: { params: { id: string }; body: any }
) {
  console.log("salam");
  console.log(params.id);

  const db = getFirestore(app);
  const parentsCol = collection(db, "Parents");
  const parentDoc = doc(parentsCol, params.id);

  try {
    const existingData = await getDoc(parentDoc);

    if (existingData.exists()) {
      console.log("datani tapdi update elediii");
      await updateDoc(parentDoc, { ...existingData.data(), ...body });

      const updatedData = await getDoc(parentDoc);
      console.log(updatedData.data());
      return NextResponse.json({ id: updatedData.id, ...updatedData.data() });
    } else {
      return NextResponse.json(
        { message: "Parent not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some error occurred" },
      { status: 500 }
    );
  }
}


// export async function GET() {
//   const db = getFirestore(app);
//   const parent = collection(db, "Parents");
//   const parentSnapshot = await getDocs(parent);
//   const parents = parentSnapshot.docs.map((doc) => {
//     return { id: doc.id, ...doc.data() };
//   });
//   try {
//     return NextResponse.json(parents);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { message: "Some error occured" },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(request: NextRequest,{ params }: { params: { id: number } }) {
//   const body = await request.json()
//   const res = await fetch(process.env.PATH_URL_BACKEND+/api/posts/${params.id}, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   const data = await res.json();
//   return NextResponse.json(data)

// }
// export async function DELETE(request: NextRequest,{ params }: { params: { id: number } }) {
//   const res = await fetch(process.env.PATH_URL_BACKEND+/api/posts/${params.id}, {
//     next: { revalidate: 10 },
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   const data = await res.json();
//   return NextResponse.json(data)

// }
