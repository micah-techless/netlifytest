import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const siteID = Netlify.env.get("NOODLES_SITE_ID");
  const token = Netlify.env.get("NOODLES_TOKEN");
  const blobStorageStoreName = "sysprobe";
  const credentialsFileName = "init";

  const store = getStore(blobStorageStoreName, { siteID, token });
  console.log("NOODLES GOT STORE");
  const entry = await store.get(credentialsFileName);
  console.log(`NOODLES GOT FILE - LENGHT: ${entry.byteLength}`);

  if (entry === null) {
    return new Response("Could not find entry with key 'aws_credentials'", {
      status: 404,
    });
  }

  return new Response(entry);
};
