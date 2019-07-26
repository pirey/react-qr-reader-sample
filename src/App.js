import React from 'react'
import QrReader from 'react-qr-reader'
import { Row, Col } from 'react-bootstrap'

function App() {
  const handleError = error => {
    console.error(error)
  }
  const handleScan = value => {
    if (value) {
      console.log(value)
    }
  }
  return (
    <Row>
      <Col sm={{
        span: 4,
        offset: 4
      }}>
        <QrReader delay={300} onError={handleError} onScan={handleScan} />
      </Col>
    </Row>
  )
}

export default App
