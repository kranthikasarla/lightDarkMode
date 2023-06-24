// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  ButtonText = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const modeClassName1 = isDarkMode ? 'light-heading' : 'dark-heading'
    const ButtonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={modeClassName}>
          <h1 className={modeClassName1}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.ButtonText}>
            {ButtonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
