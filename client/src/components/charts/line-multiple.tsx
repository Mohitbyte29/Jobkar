import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}


const chartData = [
  { month: "January", user: 186, company: 80, job: 120, internship: 90 },
  { month: "February", user: 305, company: 200, job: 150, internship: 110 },
  { month: "March", user: 237, company: 120, job: 180, internship: 95 },
  { month: "April", user: 73, company: 190, job: 100, internship: 130 },
  { month: "May", user: 209, company: 130, job: 160, internship: 140 },
  { month: "June", user: 214, company: 140, job: 170, internship: 125 },
];

const chartConfig = {
  user: {
    label: "User",
    color: "var(--chart-1)",
  },
  company: {
    label: "Company",
    color: "var(--chart-2)",
  },
  job: {
    label: "Job",
    color: "blue",
  },
  internship: {
    label: "Internship",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function LineMultiple() {
  
const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('/api/users');
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const userData = users.map(user => ({
    month: new Date(user.createdAt).toLocaleString('default', { month: 'long' }),
    user: 1, // Each user counts as 1
  }));

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold">Line Chart - Multiple</h3>
        <p className="text-sm text-muted-foreground">January - June 2024</p>
      </div>
      <div className="flex-1 flex items-center justify-center min-h-0">
        <ChartContainer className="w-full h-[250px]" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="month"
              tickFormatter={(value) => value.slice(0, 3)}
              tickLine={false}
              tickMargin={8}
            />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            <Line
              dataKey="user"
              dot={false}
              stroke="blue"
              strokeWidth={2}
              type="monotone"
            />
            <Line
              dataKey="company"
              dot={false}
              stroke="red"
              strokeWidth={2}
              type="monotone"
            />
            <Line
              dataKey="job"
              type="monotone"
              stroke="gray"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="internship"
              type="monotone"
              stroke="yellow"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
      <div className="flex flex-col gap-1 text-sm text-center mt-4">
        <div className="flex items-center justify-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground flex items-center justify-center gap-2 leading-none">
          Showing total visitors for the last 6 months
        </div>
      </div>
    </div>
  );
}

export default LineMultiple;
