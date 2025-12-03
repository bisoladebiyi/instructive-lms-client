export interface ILesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "text" | "pdf";
  videoUrl?: string;
  textContent?: string;
  pdfUrl?: string;
  isCompleted: boolean;
}

export type IInstructorLesson = Omit<ILesson, "isCompleted">