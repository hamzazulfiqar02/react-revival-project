import { NextResponse } from "next/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

const createClient = () => {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};

const supabase = createClient();

const blog = {
  id: "1",
  author: "Mark",
  content: "blog 1 content is here",
};

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   console.log("rewq", req)
//   return NextResponse.json(
//     { message: "Data successfully", blog },
//     { status: 200 }
//   );
// }

export async function POST(req: Request) {
  console.log("req", req);
  try {
    const formData = await req.formData();

    if (!formData) {
      return NextResponse.json(
        { error: "No data received in the request" },
        { status: 400 }
      );
    }

    const submission_id = formData.get("submission_id");
    const formID = formData.get("formID");
    const firstName = formData.get("name[first]");
    const lastName = formData.get("name[last]");
    const email = formData.get("email");

    const data = {
      submission_id,
      formID,
      firstName,
      lastName,
      email,
    };

    // const formDataEntries = Array.from(formData.entries());

    const { data: insertedData, error } = await supabase
      .from("jot_form") // Replace with your actual table name
      .insert([data]);

    // Step 5: Handle any errors in the database insertion
    if (error) {
      console.log("Supabase Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Step 6: Return a success message
    return NextResponse.json(
      { message: "Data successfully saved" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Unexpected Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
