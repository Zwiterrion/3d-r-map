import React from 'react'

export default class Visualizer extends React.Component {

  render() {
    const { department } = this.props
    return (
      <div className='Visualizer'>
        {department && <div sryle={{
          flex: 1
        }}>
          <img
            style={{ height: 'auto', width: '100%' }}
            src={`https://zwiterrion.github.io/ideas/images/${department}.png`} />
        </div>}

        {
          !department && <p style={{
            textAlign: 'center'
          }}>
            Commencer par sélectionner un département sur la carte
          </p>
        }
      </div >
    )
  }
}
