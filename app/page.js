import Link from "next/link";
 
export default function RootPage(){
  return (
    <main>
          <h1>CPRG 306: Web Development 2 - Assignments</h1>
          <p>
            <Link href="./week-2">Go to week 2</Link> &rarr; 
            <Link href="./week-3">Go to week 3</Link></p>
          
        </main>
  )

  
}