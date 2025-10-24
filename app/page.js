import Link from "next/link";
 
export default function RootPage(){
  return (
    <main>
          <h1>CPRG 306: Web Development 2 - Assignments</h1>
          <p>
            <Link href="./week-2">Go to week 2</Link> &rarr; 
            <Link href="./week-3">Go to week 3</Link> &rarr; 
            <Link href="./week-4">Go to week 4</Link> &rarr; 
            <Link href="./week-5">Go to week 5</Link> &rarr; 
            <Link href="./week-6">Go to week 6</Link> &rarr;
            <Link href="./week-7">Go to week 7</Link>  
            </p>
          
        </main>
  )

  
}