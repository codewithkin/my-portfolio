import { Settings } from "lucide-react";

export type Service = {
  id: number;
  title: string;
  description: string;
  action: string;
  actionText: string;
  bg?: string;
  icon: typeof Settings;
};

export type Services = Service[];
