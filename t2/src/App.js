import { useState } from 'react'
import Table from './components/Table'

function App () {
  const [tableData, setTableData] = useState({
    headings: [
      'Total', 'eNPS', 'Leadership', 'Job satisfaction', 'Meaningfulness', 'Autonomy', 'Work situation',
      'Participation', 'Personal development', 'Organizational commitment', 'Dedication', 'Custom'
    ],
    rows: [
      [8.6, 75, 9.1, 8, 8.6, 7.9, 9, 8.3, 8.8, 1.1, 9.3],
      [8.5, 83, 8.1, 8.1, 9.1, 8.6, 7.8, 8.6, 2.5, 9.2, 9],
      [8.7, 67, 7.8, 8.4, 10, 9.4, 7.2, 8.9, 4.6, 9.2, 8.9]
    ]
  })

  return (
    <div className='App'>
      <Table tableName='Analysis' tableData={tableData} />
    </div>
  )
}

export default App
