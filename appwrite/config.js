import { Client, Databases } from "appwrite";

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64b789dcbdf036484cfe') // Your project ID
    ;

export const databases = new Databases(client);

//* This is will only provide single data/document 
export const promise_getDocuments = databases.getDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID, // DATABASE_ID
    process.env.NEXT_PUBLIC_COLLECTION_ID, // COLLECTION_ID
    process.env.NEXT_PUBLIC_DOCUMENT_ID  // DOCUMENT_ID
);


//* This is will show all the data/document present into the collections. We can fetch through the map function
export const promise_listDocuments = databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID, // DATABASE_ID
    process.env.NEXT_PUBLIC_COLLECTION_ID, // COLLECTION_ID
);


//* This function will delete your specific document
// export const promise_deleteDocument = databases.deleteDocument(
//     process.env.NEXT_PUBLIC_DATABASE_ID,
//     process.env.NEXT_PUBLIC_COLLECTION_ID,
//     process.env.NEXT_PUBLIC_DOCUMENT_ID
// );
