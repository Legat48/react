import './PostView.css';
import { Post } from '../../api/Posts';
import { FC } from 'react';
import { FetchUserListView } from '../UserView/FetchUserListView';

function formatDate(timestamp: number | string) : string {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString(undefined, {
    timeStyle: 'medium',
  })}`;
}

interface PostViewProps {
  post: Post
}

export const PostView: FC<PostViewProps> = ({ post }) => {
  return (
    <div className="post-view">
      <FetchUserListView userId={post.authorId} />
      <p className="post-view__text">{post.text}</p>

      <time className="post-view__time">{formatDate(post.createdAt)}</time>
    </div>
  );
};
