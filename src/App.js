import Button from "./components/buttton/index.jsx";
import Inputs from "./components/input/index.jsx";

function App() {
  return <div>
    <div class="button_holders">
      <Button size="smol">i</Button>
      <Button>have</Button>
      <Button size="big">children</Button>
    </div>
    <div class="button_holders">
      <Button variant="bordered" size="smol">in</Button>
      <Button variant="bordered">my</Button>
      <Button variant="bordered" size="big">basement</Button>
    </div>

    <div className="input_holders">
      <Inputs
        label="Name"
        type="text"
        placeholder="Ivan Ivanov"
        value=""
        onChange={(e) => console.log(e.target.value)}
      />
      <Inputs
        label="Name"
        type="text"
        placeholder="Focus"
        variant="blue"
      />
      <Inputs
        label="Name"
        type="text"
        placeholder="Danger"
        danger={true}
      />
    </div>

  </div> ;
}

export default App;