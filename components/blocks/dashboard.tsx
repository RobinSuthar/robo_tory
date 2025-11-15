"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import ChatArea from "./chat-area";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Response } from "../ui/shadcn-io/ai/response";
import { META_DATA } from "@/metadata/conversition-data";
import { AIArray } from "@/type/type";

export default function Dashboard() {
  const [gptResponse, setGPTResponse] = useState<AIArray[]>([
    {
      aiResponse: "# AI Greeting — Hello, how can I help you?",
      userResponse: "",
    },
  ]);

  useEffect(() => {
    console.log("GPT RESPONSE STATE AVRAIBEL  :  ", gptResponse);
  }, [gptResponse, setGPTResponse]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className=" flex justify-center ">
          <div className="top-0  lg:w-[calc(52rem-5rem)]  md:w-[calc(38rem-5rem)] sm:w-[calc(28rem-5rem)] w-[calc(28rem-5rem)] ">
            <ScrollArea className="h-[600px] min-aw-full">
              {" "}
              {gptResponse.map((xa) => {
                console.log(xa);
                return (
                  <div className="mt-6" key={xa.aiResponse}>
                    <p className=" text-right    mt-8 mb-8 mr-4  ">
                      {xa.userResponse}
                    </p>
                    <Response className="w-full">{xa.aiResponse}</Response>
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
            <ChatArea setData={setGPTResponse} data={gptResponse} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
