import { Layout } from 'src/components'
import { BlockCreditCards, BlockTransactions } from '../blocks'

function Home() {
  return (
    <Layout>
      <BlockCreditCards />
      <BlockTransactions />
    </Layout>
  )
}

export default Home
