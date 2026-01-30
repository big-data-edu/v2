
export interface Initiative {
  id: number;
  title: string;
  org: string;
  level: string[];
  type: string;
  dataType: string;
  decision: string;
  description: string;
  impact: string;
  link: string;
  tag: string;
}

export interface CareerRole {
  id: string;
  title: string;
  description: string;
  skills: string[];
  miniProject: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
  color: string;
  solution: string;
  sourceLink?: string;
}

export interface FundingCall {
  title: string;
  status: string;
  description: string;
  budget: string;
  duration: string;
  focus: string;
  color: string;
}
