import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../shared/layout";

const Robots = (props) => {
   return (
       <Layout>
          <h1>Robots</h1>
          <Link href='/'>
             <button>Home</button>
          </Link>
          <div>
             {
                props.robots.map(robot => (
                  <li key={robot.id}>
                     <Link href={`robots/${robot.id}`}>
                        <a>{robot.name}</a>
                     </Link>
                  </li>
                 )
               )
             }
          </div>
       </Layout>
   )
};

Robots.getInitialProps = async function () {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await response.json();
   console.log(data);
   return {
      robots: data
   }
};

export default Robots;