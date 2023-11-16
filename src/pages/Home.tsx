import { Layout } from 'src/components'
import { BlockAnalytics, BlockCreditCards, BlockTransactions } from '../blocks'

function Home() {
  return (
    <Layout>
      <BlockCreditCards />
      <BlockAnalytics />
      <BlockTransactions />
    </Layout>
  )
}

export default Home
