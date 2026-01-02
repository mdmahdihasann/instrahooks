
import ArticleImage from "../../assets/articles/post-1.jpg"
const PostImage = () => {
  return (
    <div className="relative">
          <a href="./post-details.html">
            <img
              src={ArticleImage}
              alt="Post image"
              className="w-full object-cover max-h-[1000px]"
            />
          </a>
        </div>

  )
}

export default PostImage