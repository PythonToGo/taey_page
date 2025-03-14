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
// import { doc, getDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

//  refer Collection
const postsCollection = collection(db, 'posts');

// Create Post
export async function createPost({
  title,
  content,
  tags = [],
  imageFiles = [],
}) {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      title,
      content,
      tags,
      imageUrls: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    const imageUrls = await Promise.all(imageUploads(imageFiles));

    await updateDoc(docRef, { imageUrls });

    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
}

// image upload, get url
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

async function uploadImages(files, postId) {
  const urls = [];

  for (const file of files) {
    const storageRef = ref(
      storage,
      `blog-images/${postId}/${Date.now()}_${file.name}`
    );
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
  }
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
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
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
