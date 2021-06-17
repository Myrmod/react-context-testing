import React from 'react'
import './App.scss'
import Channels from './lib/components/Channels'
import TimeSpan from './lib/components/TimeSpan'

export default function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // this shouldn't be empty: https://jsfiddle.net/everdimension/5ry2wdaa/
    const formData = new FormData(e.target)

    // pressing enter will trigger the first submit button. In this case "copy"
    switch (e.nativeEvent.submitter.value) {
      case 'copy':
        for (var entry of formData.entries()) {
          console.log(entry);
        }
        break;

      case 'save':
        for (var entry of formData.entries()) {
          console.log(entry);
        }
        break;

      default:
        console.error(`unknown submitter "${e.nativeEvent.submitter.value}"`)
        break;
    }
  }

  return (
    <main className="App">
      <h1>Create your Media Plan</h1>
      <form onSubmit={handleSubmit} title="Create a Media Plan">
        <label>
          Media Plan
          <input type="text" name="media-plan" placeholder="Media Plan" required />
        </label>

        <TimeSpan />

        <Channels />

        <fieldset id="submit">
          <legend>Send options</legend>
          <button type="submit" name="submit" value="copy">
            Copy plan
          </button>
          <button type="submit" name="submit" value="save">
            Save plan
          </button>
        </fieldset>
      </form>
    </main>
  )
}
