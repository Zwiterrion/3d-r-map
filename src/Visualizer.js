import React from 'react'

export default class Visualizer extends React.Component {

  render() {
    const { department } = this.props
    return (
      <div className='Visualizer'>
        {department && <img src={`https://zwiterrion.github.io/ideas/images/${department}.png`} />}

        {!department && <p style={{
          textAlign: 'center'
        }}>
          Commencer par sélectionner un département sur la carte
        </p>}
      </div>
    )
  }
}
