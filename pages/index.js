import Layout from "../shared/layout";
import Link from "next/link";

const Index = () => {
    return (
    <Layout>
        <h1>Home</h1>
        <Link href='/about'>
            <button>About</button>
        </Link>
        <Link href='/robots'>
            <button>Robots</button>
        </Link>
    </Layout>
    );
};

export default Index;