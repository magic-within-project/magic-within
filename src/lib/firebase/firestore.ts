import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

interface collectedData {
  name: string;
  beforeSelfRate: string;
  heartReframing: string;
  supportQuote: string;
  doubtYourselfTopic: string;
  isDoubtYourselfFeelDown: string;
  doubtYourselfFeeling: string;
  selfReframing: string;
  afterSelfRate: string;
}

export async function addData(data: collectedData) {
  const doc = await addDoc(collection(db, "collectedData"), data);
  console.log(doc.id);
}
