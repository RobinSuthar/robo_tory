"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ChatArea from "./chat-area";
import { useEffect, useState } from "react";
import { Brain, X } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Response } from "../ui/shadcn-io/ai/response";
import { AIArray } from "@/type/type";
import { Spinner } from "../ui/spinner";
import { Separator } from "@radix-ui/react-separator";

export default function Dashboard() {
  const [gptResponse, setGPTResponse] = useState<AIArray[]>([
    {
      aiResponse: "AI Greeting — Hello, how can I help you?",
      userResponse: "",
    },
  ]);

  const [inputSend, setInputSend] = useState<boolean>(false);

  useEffect(() => {
    console.log("GPT LENGTH, ", gptResponse.length);
  }, [gptResponse, setGPTResponse]);

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          ></Separator>
        </header>
        <div className=" flex justify-center ">
          <div className="top-0  lg:w-[calc(52rem-5rem)]  md:w-[calc(38rem-5rem)] sm:w-[calc(28rem-5rem)] w-[calc(28rem-5rem)] ">
            <ScrollArea className="h-[600px] min-aw-full">
              {" "}
              {gptResponse.map((xa, index) => {
                console.log(xa);
                return (
                  <div className="mt-6" key={xa.aiResponse}>
                    <p className=" text-right    mt-8 mb-8 mr-4  ">
                      {xa.userResponse}
                    </p>
                    {xa.aiResponse ? (
                      <Response className="w-full">{xa.aiResponse}</Response>
                    ) : (
                      <div>
                        <Brain className="size-5" />
                        Thinking...
                        <Spinner />
                      </div>
                    )}
                  </div>
                );
              })}
              {/* {META_DATA.map((xa) => {
                return (
                  <div className="mt-6" key={xa.aiResponse}>
                    <Response className="w-full">{gptResponse.aiResponse}</Response>
                    <p className=" text-right  mt-8 mr-4  ">
                      {xa.userResponse}
                    </p>
                  </div>
                );
              })} */}
              <p className="h-20"></p>
            </ScrollArea>
          </div>

          <div className="absolute bottom-0">
            <ChatArea
              setData={setGPTResponse}
              data={gptResponse}
              setInput={setInputSend}
            />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
