import { Component } from 'react'

class Planets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: []
        }
    }

    componentDidMount() {
        fetch('/api/planets')
            .then(res => res.json())
            .then(planets => {
                this.setState({ planets: planets})
            })
    }

    render() {
        return (
            <div>
                <h1>Planet Component</h1>
                <ul>
                    {
                        this.state.planets.map(planet => (
                            <li key={planet.id}>
                                <div>
                                    Planet Name: {planet.name}, Order: {planet.planetOrder}
                                </div>
                                <img className='' src={planet.imgSrc.img} width="100px" alt={planet.name} />
                            </li>
                            
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Planets;