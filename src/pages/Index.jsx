import { useState } from "react";
import { Search, MoreVertical, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const chats = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      timestamp: "2:30 PM",
      avatar: "https://placehold.co/40x40",
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Let's catch up later.",
      timestamp: "1:15 PM",
      avatar: "https://placehold.co/40x40",
    },
  ];

  const messages = [
    {
      id: 1,
      text: "Hello!",
      timestamp: "2:31 PM",
      avatar: "https://placehold.co/40x40",
    },
    {
      id: 2,
      text: "Hi, how are you?",
      timestamp: "2:32 PM",
      avatar: "https://placehold.co/40x40",
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-1/3 border-r">
        <div className="flex items-center justify-between p-4 border-b">
          <img src="https://placehold.co/40x40" alt="App Logo" />
          <Avatar>
            <AvatarImage src="https://placehold.co/40x40" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <div className="p-4 border-b">
          <div className="relative">
            <Input placeholder="Search chats" />
            <Search className="absolute top-2 right-2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <ScrollArea className="h-full">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center p-4 cursor-pointer ${
                selectedChat === chat.id ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <Avatar>
                <AvatarImage src={chat.avatar} alt={chat.name} />
                <AvatarFallback>{chat.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <div className="font-semibold">{chat.name}</div>
                <div className="text-sm text-gray-500">{chat.lastMessage}</div>
              </div>
              <div className="ml-auto text-xs text-gray-400">{chat.timestamp}</div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="w-2/3 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          {selectedChat && (
            <>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src={chats.find((chat) => chat.id === selectedChat).avatar} alt="Chat Avatar" />
                  <AvatarFallback>{chats.find((chat) => chat.id === selectedChat).name[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-4 font-semibold">
                  {chats.find((chat) => chat.id === selectedChat).name}
                </div>
              </div>
              <MoreVertical className="h-5 w-5 text-gray-400" />
            </>
          )}
        </div>
        <ScrollArea className="flex-1 p-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start mb-4">
              <Avatar>
                <AvatarImage src={message.avatar} alt="Message Avatar" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <Card className="ml-4">
                <CardContent>
                  <div>{message.text}</div>
                  <div className="text-xs text-gray-400">{message.timestamp}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </ScrollArea>
        <div className="p-4 border-t flex items-center">
          <Input
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 mr-4"
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;