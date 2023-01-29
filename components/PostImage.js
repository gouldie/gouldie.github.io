function PostImage({ src, alt, width }) {
  return (
    <figure className='text-center pt-4 pb-6'>
      <img className={`inline max-w-[90%]`} src={src} alt={alt} style={{ width }} />
      <figcaption className='text-xs pt-2'>Image: {alt}</figcaption>
    </figure>
  )
}

export default PostImage
