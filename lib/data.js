"use server";

export async function fetchPosts() {
  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${process.env.ACCESS_TOKEN}`
    );

    const data = await res.json();
    return data;
  } catch (error) {}
}
