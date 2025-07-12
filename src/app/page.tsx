"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Page =  () => {
  const trpc = useTRPC();
  trpc.hello.queryOptions({ text: "hello world" });
  const {data} =useQuery(trpc.hello.queryOptions({ text: "Anas" }));
  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};
export default Page;
