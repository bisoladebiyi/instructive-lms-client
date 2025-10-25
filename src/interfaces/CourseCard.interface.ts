export interface ICourseCard {
    id: string | number;
    title: string;
    author: string;
    rating: number;
    raters: number;
    bannerImg: string;
    isPrivate?: boolean;
}
