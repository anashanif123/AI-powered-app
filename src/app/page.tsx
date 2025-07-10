"use client";

import { useTRPC } from "@/trpc/client";

const Page =  () => {
  const trpc = useTRPC();
  trpc.hello.queryOptions({ text: "hello world" });
  return (
    <div>
      <h1>nextjs</h1>
    </div>
  );
};
export default Page;
