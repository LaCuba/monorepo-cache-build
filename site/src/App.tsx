import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@repo/ui/button'
import { DataGrid } from '@repo/react-data-grid'
import type { Column } from '@repo/react-data-grid'

import '@repo/react-data-grid/styles.css'

interface Row {
  readonly id: number
  readonly task: string
  readonly complete: number
  readonly priority: string
  readonly issueType: string
}

function createRows(): Row[] {
  const rows: Row[] = []

  for (let i = 1; i < 500; i++) {
    rows.push({
      id: i,
      task: `Task ${i}`,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      priority: ['Critical', 'High', 'Medium', 'Low'][
        Math.round(Math.random() * 3)
      ],
      issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
        Math.round(Math.random() * 3)
      ],
    })
  }

  return rows
}

const columns: Column<Row>[] = [
  {
    key: 'id',
    name: 'ID',
    width: 80,
  },
  {
    key: 'task',
    name: 'Title',
    resizable: true,
  },
  {
    key: 'priority',
    name: 'Priority',
    resizable: true,
  },
  {
    key: 'issueType',
    name: 'Issue Type',
    resizable: true,
  },
  {
    key: 'complete',
    name: '% Complete',
    resizable: true,
  },
]

const rows = createRows()

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code style={{ color: 'green' }}>src/App.tsx</code> and save to
          test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <DataGrid columns={columns} rows={rows} />
    </>
  )
}

export default App
