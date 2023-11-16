import { Layout } from 'src/components'
import { BlockExpenses, BlockExpensesInfo } from '../blocks'

function Expenses() {
  return (
    <Layout pageName='Expenses'>
      <BlockExpensesInfo />
      <BlockExpenses />
    </Layout>
  )
}

export default Expenses
