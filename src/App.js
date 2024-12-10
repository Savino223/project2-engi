import Button from "./components/buttton/index.jsx";
import Input from "./components/input/index.jsx";
import Typography from "./components/typography/index.jsx";
import Header from "./components/headers/index.jsx";
import Tooltip from "./components/tooltip/index.jsx"; // Adjust path as necessary


function App() {
  return (
    <div>
      <h2>Button task</h2>

      <div className="button_holders">
        <Button size="smol">i</Button>
        <Button>have</Button>
        <Button size="big">children</Button>
      </div>
      <div className="button_holders">
        <Button variant="bordered" size="smol">in</Button>
        <Button variant="bordered">my</Button>
        <Button variant="bordered" size="big">basement</Button>
      </div>

      <h2>Input task</h2>

      <div className="input_holders">
        <Input
          label="Name"
          defaultValue="Ivan Ivanov"
        />
        <Input
          label="Name"
          defaultValue="Focus"
          variant="blue"
        />
        <Input
          label="Name"
          defaultValue="Danger"
          danger
        />
      </div>

      <h2>Typography task</h2>

      <div className="text_variants">
        <Typography size="sm">SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
        <Typography size="md">MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
        <Typography size="lg">LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</Typography>
      </div>

      <h2>Header task</h2>

      <div className="headings">
        <Header level={1}>H1. Heading</Header>
        <Header level={2}>H2. Heading</Header>
        <Header level={3}>H3. Heading</Header>
        <Header level={4}>H4. Heading</Header>
        <Header level={5}>H5. Heading</Header>
        <Header level={6}>H6. Heading</Header>
      </div>

      <h2>Tooltip task</h2>
      <div className="tooltip-holders">
        <Tooltip text="I am a tooltip" position="top">Top Tooltip</Tooltip>
        <Tooltip text="I am a tooltip" position="left">Left Tooltip</Tooltip>
        <Tooltip text="I am a tooltip" position="right">Right Tooltip</Tooltip>
        <Tooltip text="I am a tooltip" position="bottom">Bottom Tooltip</Tooltip>
      </div>

      <br></br>
      <br></br>
      <h2>Accordion task</h2>

    </div>
  );
}

export default App;
