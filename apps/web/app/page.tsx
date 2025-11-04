import { prismaClient } from "db/client";

async function getUsers() {
  try {
    const response = await fetch('http://localhost:3001/users', {
      cache: 'no-store'
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log('Backend not available, using direct DB connection');
  }
  
  try {
    return await prismaClient.user.findMany({
      include: {
        Todo: true
      }
    });
  } catch (error) {
    return { error: 'Database connection failed' };
  }
}

export default async function Home() {
  const users = await getUsers();
  
  return (
    <div>
        {JSON.stringify(users)}
    </div>
  );
}

export const dynamic = 'force-dynamic'

//export const revalidate = 60  //Incremental site generation