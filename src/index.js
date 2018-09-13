var { h, render } = require('preact')
var Accordion = require('carbon-components-react/lib/components/Accordion').default
var AccordionItem = require('carbon-components-react/lib/components/AccordionItem').default

function App (props) {
    return <div>
        <div>hello world</div>

        <Accordion>
            <AccordionItem title="woooooo">
                <p>foo bar</p>
            </AccordionItem>
        </Accordion>
    </div>
}

render(<App />, document.getElementById('content'))

