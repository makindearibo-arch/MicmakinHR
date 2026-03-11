import React from 'react';
import { Badge } from '@/components/ui/badge';

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const s = status.toLowerCase();
  let variant: "default" | "secondary" | "destructive" | "outline" = "secondary";
  let classes = "";
  
  if (s === 'active' || s === 'approved' || s === 'paid') {
    classes = "bg-green-500/15 text-green-700 hover:bg-green-500/20 border-transparent shadow-none";
  } else if (s === 'pending') {
    classes = "bg-amber-500/15 text-amber-700 hover:bg-amber-500/20 border-transparent shadow-none";
  } else if (s === 'rejected' || s === 'inactive') {
    classes = "bg-red-500/15 text-red-700 hover:bg-red-500/20 border-transparent shadow-none";
  } else if (s === 'processing') {
    classes = "bg-blue-500/15 text-blue-700 hover:bg-blue-500/20 border-transparent shadow-none";
  } else {
    classes = "bg-gray-500/15 text-gray-700 hover:bg-gray-500/20 border-transparent shadow-none";
  }

  return (
    <Badge className={`capitalize font-semibold tracking-wide px-2.5 py-0.5 ${classes}`} variant={variant}>
      {status}
    </Badge>
  );
}
