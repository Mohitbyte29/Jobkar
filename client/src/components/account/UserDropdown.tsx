
import { Bell, CreditCard, Lock, LogOut, Mail, User, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "@/context/UserContext"
import axios from "axios"

export const UserDropdown = () => {
  const {user, setUser} = useUser();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try{
      if (!user) return;  
      const res = await axios.post('/api/auth/logout', {}, {
        withCredentials: true
      });
      if (res.data.success) {
        setUser(null);
        navigate('/');
      }
    }
    catch(err){
      console.log(err);
      if(axios.isAxiosError(err)){
        console.log(err.response?.data);
      }
    }
  };
  return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="gap-2 h-9 bg-black rounded-full" variant="outline">
        <Avatar className="h-8 w-8 ">
          <AvatarImage alt="@haydenbleasel" src="https://github.com/haydenbleasel.png" />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-64">
      <DropdownMenuLabel className="font-normal">
        <div className="flex items-center gap-3 pb-2">
          <Avatar className="h-10 w-10">
            <AvatarImage alt="@haydenbleasel" src="https://github.com/haydenbleasel.png" />
            <AvatarFallback>HB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <p className="font-medium text-sm leading-none">Hayden Bleasel</p>
            <p className="text-muted-foreground text-xs leading-none">hello@haydenbleasel.com</p>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Account</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User />
          <Link to="/profile" className="text-sm font-label-strong text-on-surface-variant hover:text-on-surface transition-colors duration-200">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Mail />
          Email Preferences
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell />
          Notifications
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Lock />
          Privacy & Security
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Billing</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <CreditCard />
          Payment Methods
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Users />
          Subscription
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive" onClick={handleLogout} >
        <LogOut />
        <div >
          Log out
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

// export default UserDropdown
