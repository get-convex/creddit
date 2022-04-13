import type { NextPage } from "next";
import Head from "next/head";
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
import { v4 as uuidv4 } from "uuid";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]); // list of posts in sorted order
  const [newPostTitle, setNewPostTitle] = useState("");

  // Create a new post, add it to posts array, sort by vote count.
  async function handleAddPost(event: FormEvent) {
    event.preventDefault();
    if (newPostTitle) {
      setNewPostTitle("");
      const post: Post = {
        id: uuidv4(), // random unique post id
        title: newPostTitle,
        date: Date.now(),
        votes: 1,
      };
      console.log("posting", post);
      setPosts((posts) => [...posts, post].sort((a, b) => b.votes - a.votes));
    }
  }

  // Upvote post with given id and re-sort posts array.
  async function handleUpvote(id: string) {
    console.log("upvoting", id);
    setPosts((posts) =>
      posts
        .map((post: Post) =>
          post.id === id ? { ...post, votes: post.votes + 1 } : post
        )
        .sort((a, b) => b.votes - a.votes)
    );
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
            key={post.id}
            secondaryAction={
              <IconButton onClick={() => handleUpvote(post.id)}>
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
