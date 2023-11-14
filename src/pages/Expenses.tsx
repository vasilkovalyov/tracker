import { Layout } from 'src/components'
import { BlockExpenses, BlockExpensesInfo } from '../blocks'

function Expenses() {
  return (
    <Layout>
      <BlockExpensesInfo />
      <BlockExpenses />
    </Layout>
  )
}

export default Expenses
