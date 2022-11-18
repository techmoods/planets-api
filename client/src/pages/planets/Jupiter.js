import { Component } from 'react'
import Dropdown from '../../components/Dropdown'

class Jupiter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: [],
            basicDetails: [],
            imgSrc: []
        }
    }

    componentDidMount() {
        fetch('/api/planets')
            .then(res => res.json())
            .then(planets => {
                const selected = planets[4]
                const basicDetails = planets[4].basicDetails
                const imgSrc = planets[4].imgSrc
                this.setState({ selected: selected })
                this.setState({ basicDetails: basicDetails })
                this.setState({ imgSrc: imgSrc })
            })
    }

    render() {
        

        return (
            <div>
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <Dropdown/>
                    <div className="grid grid-cols-1 md:grid-cols-2 px-4 py-5 sm:px-6">
                        <h3 className="planet-title text-5xl mb-6 text-center font-medium leading-6 text-gray-900 dark:text-white">{this.state.selected.name}</h3>
                        <p className="mt-1 max-w-2xl text-sm text-center text-gray-500">{this.state.selected.description}</p>
                    </div>
                    <div className="grid grid-cols-1 px-4 py-5 sm:px-6 bg-white">
                        <img className='planet-image' src={this.state.imgSrc.img} width="100%" alt='' />
                        <p className="mt-4 max-w-2xl text-sm text-gray-500">{this.state.imgSrc.imgDescription}</p>
                    </div>
                    <div className="border-t border-gray-200">
                            <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Planet Details</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul>
                                    <li>
                                        <div className='flex items-center justify-between'>
                                    <span>Mass:</span> 
                                    <span>{this.state.basicDetails.mass}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between'>
                                    <span>Diameter:</span> 
                                    <span>{this.state.basicDetails.diameter}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between'>
                                    <span>Density:</span> 
                                    <span>{this.state.basicDetails.density}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between'>
                                    <span>Gravity:</span> 
                                    <span>{this.state.basicDetails.gravity}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between'>
                                    <span>Length of Day:</span> 
                                    <span>{this.state.basicDetails.lengthOfDay}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between'>
                                    <span>Distance from Sun:</span> 
                                    <span>{this.state.basicDetails.distanceFromSun}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between'>
                                    <span>Mean Temperature:</span> 
                                    <span>{this.state.basicDetails.meanTemperature}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between'>
                                    <span>Number of Moons:</span> 
                                    <span>{this.state.basicDetails.numberOfMoons}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between'>
                                    <span>Ring System:</span> 
                                    <span>{this.state.basicDetails.numberOfMoons ? 'Yes' : 'No'}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between'>
                                    <span>Global Magnetic Field:</span> 
                                    <span>{this.state.basicDetails.globalMagneticField ? 'Yes' : 'No'}</span>
                                        </div>
                                    </li>
                                </ul>
                                </dd>

                            </div>

                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                        <span className="ml-2 w-0 flex-1 truncate">Source: { this.state.imgSrc.source }</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href={ this.state.imgSrc.sourceLink } className="font-medium text-indigo-600 hover:text-indigo-500">Link</a>
                                    </div>
                                    </li>
                                </ul>
                                </dd>
                            </div>
                            </dl>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Jupiter;