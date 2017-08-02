### Basic usage

    <semantic-checkbox v-model="checkbox" label="🍕 Pizza" />

### Styling
Pass through the **type** prop to change the style of checkbo

    <div class="ui form">
        <div class="ui field">
            <semantic-checkbox v-model="checkbox" label="Checkbox" />
        </div>
        <div class="ui field">
            <semantic-checkbox v-model="checkbox" label="Slider" type="slider"/>
        </div>
        <div class="ui field">
            <semantic-checkbox v-model="checkbox" label="Toggle" type="toggle" />
        </div>
    </div>

### Disabled

    <semantic-checkbox label="🍕 Pizza" type="toggle" :disabled="true"/>

### Events
This component emits the **checkbox-clicked** event evert time the event is clicked

    <semantic-checkbox label="🍕 Pizza" type="toggle" @checkbox-clicked="(val) => { console.log(val) }"/>