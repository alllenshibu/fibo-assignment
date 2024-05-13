import Layout from "@/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/page1");
  }, []);

  return (
    <Layout>
      <h1>Please wait...</h1>
    </Layout>
  );
}
