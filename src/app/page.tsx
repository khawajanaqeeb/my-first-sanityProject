import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const data = await client.fetch(`*[_type=="blogs"]{
  heading,_id,
  description,
  image,
  }` )
    console.log(data)
     return (
      <div className=" w-screen h-screen bg-slate-100 " >
        <h1 className="font-extrabold text-center text-5xl ">My First Sanity Project</h1>
     <h2 className="text-4xl mt-10">Blogs:</h2> 
      <div className="flex gap-5 mt-[2%]">
      {
        data.map((data:any,index:number) =>(
          <div key={index}>{data.heading}
          
          
          {
      data.image && (
        <div><Image src={urlFor(data.image).url()} alt="blog-image" width={200} height={100}  /></div>

      )
     }
     <div>Description: {data.description}</div>
          </div>)

        )
      }
      </div>
      </div>
  );
}
