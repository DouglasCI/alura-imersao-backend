import fs from "fs";
import { getAllPosts, insertPost, updatePost } from "../models/model.js";
import generateDescription from "../services/gemini.js";

export async function listAllPosts(req, res) {
  const posts = await getAllPosts();

  res.status(200).json(posts);
}

export async function createPost(req, res) {
  const newPost = req.body;
  
  try {
    const createdPost = await insertPost(newPost);

    res.status(200).json(createdPost);
  } catch (error) {
    console.error(`Error when creating new post: ${error.message}`);
    res.status(500).json({"error": "Request failed."});
  }
}

export async function uploadImage(req, res) {
  const newPost = {descricao: "", img_url: req.file.originalname, alt: ""};
  
  try {
    const createdPost = await insertPost(newPost);
    const uploadedImage = `uploads/${createdPost.insertedId}.png`;

    fs.renameSync(req.file.path, uploadedImage);
    res.status(200).json(createdPost);
  } catch (error) {
    console.error(`Error when creating new post: ${error.message}`);
    res.status(500).json({"error": "Request failed."});
  }
}

export async function updateImage(req, res) {
  const id = req.params.id;
  const imageUrl = `http://localhost:3000/${id}.png`;

  try {
    const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
    const description = await generateDescription(imageBuffer);
    const post = {
      img_url: imageUrl,
      descricao: description,
      alt: req.body.alt,
    }
    const updatedPost = await updatePost(id, post);

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(`Error when creating new post: ${error.message}`);
    res.status(500).json({"error": "Request failed."});
  }
}