import React from 'react'

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Mercury' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {       // this.state.value is the selected planet
    // alert('Your favorite planet is ' + this.state.value);
    window.location.href = '/planets/' + this.state.value;
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='px-5 py-2'>

        <div className='flex flex-row '>

          <select
            value={this.state.value}
            onChange={this.handleChange}
            id="planets"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500
             focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option value="Mercury">Mercury</option>
            <option value="Venus">Venus</option>
            <option value="Earth">Earth</option>
            <option value="Mars">Mars</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturn">Saturn</option>
            <option value="Uranus">Uranus</option>
            <option value="Neptune">Neptune</option>

          </select>

          <input className='inline-flex mx-2 justify-center rounded-md border border-transparent 
            bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' type="submit" value="Submit" />

        </div>


      </form>


    );
  }
}

export default Dropdown