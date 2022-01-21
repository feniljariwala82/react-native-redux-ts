export type ThemeType = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
};

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoState = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
};
