import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const data = await client.fetch(`*[_type=="blogs"]{
    heading, _id,
    description,
    image,
  }`);
  console.log(data);

  return (
    <div className="w-screen min-h-screen bg-slate-100 p-4">
      <h1 className="font-extrabold text-center text-4xl md:text-5xl mb-6">
        My First Sanity Project
      </h1>
      <h2 className="text-2xl md:text-4xl mb-4">Blogs:</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((blog: any, index: number) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[45%] lg:w-[30%] flex flex-col items-center"
          >
            <h3 className="font-bold text-lg mb-2 text-center">{blog.heading}</h3>
            {blog.image && (
              <div className="w-full">
                <Image
                  src={urlFor(blog.image).url()}
                  alt="blog-image"
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            )}
            <p className="text-sm mt-4 text-gray-700 text-center">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
