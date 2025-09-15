import Link from "next/link";

export default function StudentInfo(){
  return(
    <div>
      <h2>Sudent Info</h2>
      <p>Khushdeep Kaur</p>
      <p>
        <Link href="https://github.com/khushdeep5/cprg306-assignments.git" > My repository </Link>
      </p>
    </div>
  );

}