import type { NextPage } from "next";
import { useState, FormEvent } from "react";
import moment from "moment";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  Avatar,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { Post } from "../lib/common";
import { useMutation, useQuery } from "../convex/_generated";

const Home: NextPage = () => {
  const posts = useQuery("listPosts") ?? []; // convex query to list posts
  const upvote = useMutation("upvote"); // convex mutation to upvote a post
  const addPost = useMutation("addPost"); // convex mutation to add a post
  const [newPostTitle, setNewPostTitle] = useState("");

  async function handleAddPost(event: FormEvent) {
    event.preventDefault();
    if (newPostTitle) {
      setNewPostTitle("");
      await addPost(newPostTitle);
    }
  }

  return (
    <Stack alignItems="center" minHeight="100vh" sx={{ mt: 10 }}>
      <form onSubmit={handleAddPost}>
        <FormControl>
          <Stack direction={"row"}>
            <TextField
              label="New post"
              sx={{ width: 520 }}
              value={newPostTitle}
              onChange={(event) => setNewPostTitle(event.target.value)}
            />
            <Button type="submit" disabled={!newPostTitle}>
              Add
            </Button>
          </Stack>
        </FormControl>
      </form>
      <List sx={{ width: "100%", maxWidth: 600 }}>
        {posts.map((post: Post) => (
          <ListItem
            key={post._id.toString()}
            secondaryAction={
              <IconButton onClick={() => upvote(post._id)}>
                <ThumbUpIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>{post.votes}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={post.title}
              secondary={moment(post.date).fromNow()}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Home;
