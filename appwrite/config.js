import { Client, Databases, Account, ID } from "appwrite";

export const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID) // Your project ID


//* Create a client's database
export const databases = new Databases(client);

//* Create an Account 
export const account = new Account(client);

//* Unique ID
export const uid = ID.unique();

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
