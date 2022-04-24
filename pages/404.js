import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout title="Page not found">
      <div className="flex flex-col items-center mt-20">
        <Image
          src="/images/logo.png"
          width={70}
          height={70}
          alt=""
          className="bg-gray-800 rounded-2xl"
        />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
