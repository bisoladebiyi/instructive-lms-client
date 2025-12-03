export interface ICourseCardData {
  id: number;
  title: string;
  instructor: string;
  category?: string;
  bannerImg: string;
  progress?: number;
  rating?: number;
  ratingCount?: number;
  studentsEnrolled?: number;
  isPrivate?: boolean;
}

export interface ICourseCardProps {
  course: ICourseCardData;
  variant?: "enrolled" | "explore" | "instructor";
}
