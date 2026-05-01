import { Link, useLocation } from "wouter";
import { MessageSquare, Settings, User } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  return (
    <nav className="flex items-center justify-around py-4 bg-white border-t border-amber-100">
      <Link href="/chat"><MessageSquare className={location === "/chat" ? "text-amber-500" : "text-gray-400"} /></Link>
      <Link href="/settings"><Settings className={location === "/settings" ? "text-amber-500" : "text-gray-400"} /></Link>
    </nav>
  );
}