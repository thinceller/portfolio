import dayjs from 'dayjs'

const BlogDate = props => {
  const date = dayjs(props.date)
  return (
    <p>
      {date.format('YYYY/MM/DD')}
      <style jsx>{`
        p {
          color: rgb(105, 105, 105);
        }
      `}</style>
    </p>
  )
}

export default BlogDate
