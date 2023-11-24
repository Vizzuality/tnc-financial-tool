import { NextResponse } from "next/server";

import sendgridClient from "@sendgrid/client";

sendgridClient.setApiKey(process.env.SENDGRID_API_KEY_SUBSCRIPTION as string);

export async function PUT(req: Request) {
  const body: Record<string, string> = await req.json();

  const { email } = body;

  const data = {
    list_ids: ["faae0dc0-e055-49b1-8b0b-fe4b0398ffe8"],
    contacts: [
      {
        email,
      },
    ],
  };

  const request = {
    url: `/v3/marketing/contacts`,
    method: "PUT" as const,
    body: data,
  };

  const res = await sendgridClient.request(request);
  return NextResponse.json({ res });
}
