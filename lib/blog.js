import { db, storage } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//  refer Collection
const postsCollection = collection(db, 'posts');

// Create Post
export async function createPost({ title, content, imageFiles = [] }) {
  const imageUrls = await Promise.all(imageUploads(imageFiles));

  const docRef = await addDoc(collection(db, 'posts'), {
    title,
    content,
    imageUrls,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

// image upload, get url
async function uploadImages(files, postId) {
  const urls = await Promise.all(
    files.map(async (files, index) => {
      const storageRef = ref(
        storage,
        'blogs-images/${postId}/${Date.now()}_${file.name}'
      );
      const result = await uploadBytes(storyageRef, file);
      return await getDownloadURL(result.ref);
    })
  );

  return urls;
}

// Load all Posts
export async function getAllPosts() {
  const snapshot = await getDocs(collection(db, 'posts'));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Load specific Post
export async function getPostById(postId) {
  const docRef = doc(db, 'posts', postId);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}

// Update Post
export async function updatePost(postId, updatedData) {
  const docRef = doc(db, 'posts', postId);
  await updateDoc(docRef, {
    ...updatedData,
    updatedAt: serverTimestamp(),
  });
}

// Delete a specific Post
export async function deletePost(postId) {
  await deleteDoc(doc(db, 'posts', postId));
}
