
import Image from 'next/image'
import './global.css'
import { blogPost } from '@/components/data'


const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-8">
        <div className="blog-header">
            <h2><span>Learn all you need</span><br></br> from industry<br></br> professionals</h2>
            <h4>Articles from seasoned industry professionals to help you grow through your student years</h4>
        </div>
        <div className="bloglist">
          {/* {
            blogPost.map((blog) => (
              <div key={blog.id}>
                <div>
                  <Image 
                    src={blog.image} 
                    alt="logo"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <h1>{blog.topic}</h1>
                  <p>{blog.description}</p>
                </div>
                <div>
                  <Image 
                    src={blog.authorImage}
                  />
                  <h5>article by {blog.author}</h5>
                  <p>{blog.period}</p>
                  <p>{blog.content}</p>
                </div>
              </div>
            ))
          } */}
        </div>
    </main>
  )
}

export default page