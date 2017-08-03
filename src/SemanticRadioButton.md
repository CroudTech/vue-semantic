### Basic Usage
You can pass a form label in as the **default** slot 

    <semantic-radiobutton v-model="radio" :data="[{value: 1, label: 'One'},{value: 2, label: 'Two'},{value: 3, label: 'Three'}]">
        <label>What is your favourite number?</label>
    </semantic-radiobutton>


### Styling
You can change the styling by passing in the **type** and **form-type** props

    <div class="ui form">
        <div class="field">
            <semantic-radiobutton v-model="radio" :data="[{value: 1, label: 'One'},{value: 2, label: 'Two'},{value: 3, label: 'Three'}]" type="slider">
                <label>Slider</label>
            </semantic-radiobutton>
        </div>

        <div class="field">
            <semantic-radiobutton v-model="radio" :data="[{value: 1, label: 'One'},{value: 2, label: 'Two'},{value: 3, label: 'Three'}]" type="toggle">
                <label>Toggle</label>
            </semantic-radiobutton>
        </div>

        <div class="field">
            <semantic-radiobutton v-model="radio" :data="[{value: 1, label: 'One'},{value: 2, label: 'Two'},{value: 3, label: 'Three'}]" form-type="inline">
                <label>Inline</label>
            </semantic-radiobutton>
        </div>
        
    </div>

### Disabled
You can use the disabled prop to lock the radio buttons

    <div>
        <semantic-radiobutton v-model="radio" :data="[{value: 1, label: 'One'},{value: 2, label: 'Two'},{value: 3, label: 'Three'}]" :disabled="true">
            <label>What is your favourite number?</label>
        </semantic-radiobutton>
    </div>

### Events
This component emits the **selection-changed** event every time the value changes

    <semantic-radiobutton v-model="radio" :data="[{value: 1, label: 'One'},{value: 2, label: 'Two'},{value: 3, label: 'Three'}]" @selection-changed="(val) => {}"/>