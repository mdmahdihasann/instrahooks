import PostActions from "./PostActions";
import PostAddComment from "./PostAddComment";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostLike from "./PostLike";

const PostCard = () => {
  return (
    <div>
      <article className="border-b pb-4 mb-4 max-w-[560px] mx-auto border rounded-md">
        <PostHeader />
        <PostImage />
        <PostActions />
        <PostLike />
        <PostCaption />
        <PostComments />
        <PostAddComment />
      </article>
    </div>
  );
};

export default PostCard;
