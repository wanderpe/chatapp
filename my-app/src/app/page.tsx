import Chatheader from "@/components/chatheader";
import InitUser from "@/lib/store/initUser";
import { supabaseServer } from "@/lib/supabase/server";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";


export default async function Home() {

  const supabase = supabaseServer();

  const {data} = await supabase.auth.getSession();


  //console.log(data.session)
  return (
   
      <>
        <div className="max-w-3xl mx-auto md:py-10 h-screen">
          <div className="border rounded-md flex flex-col relative">
            <Chatheader user={data.session?.user}></Chatheader>
          </div>
          <div className="flex-1 bg-slate-500 flex-col p-5 h-[700px] overflow-y-auto border rounded-md">
            <div className="flex-1 ">
              <ChatMessages/>
              
              
            </div>
            
            
          </div>
          <ChatInput/>
          
        </div>
        <InitUser user={data.session?.user} />
      </>
    
  );
}
