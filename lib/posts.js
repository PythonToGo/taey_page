import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export async function createPost({ title, content, imageUrls }) {
  try {
    const docRef = await addDoc(collection(db, 'blogs'), {
      title: title,
      content: content,
      imageUrls: imageUrls,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return docRef.id;
  } catch (error) {
    console.error('Error creating post: ', error);
  }
}
