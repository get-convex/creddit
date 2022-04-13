import { mutation } from "convex-dev/server";

// Add a post.
export default mutation(({ db }, title: string) => {
  console.log("posting", title);
  db.insert("posts", { title, date: Date.now(), votes: 1 });
});
