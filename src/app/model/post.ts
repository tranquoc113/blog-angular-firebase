export class Post {
  id: string;
  title: string;
  content: string;
  slug: string;
  avatar: any;
  date: number;
  active: boolean;
  comment_count = 0;
  category_id: number;
}
