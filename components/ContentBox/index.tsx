import Link from 'next/link'
import styles from './ContentBox.module.scss'

interface ContentBoxProps {
  href: string
  content: string
}

const index: React.FC<ContentBoxProps> = ({ href, content }) => {
  return (
    <Link href={href}>
      <div className={styles.box}>{content}</div>
    </Link>
  )
}

export default index;