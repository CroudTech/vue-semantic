### Basic usage
    
    <div>
        <button @click="showModal = true" class="ui button">Show</button>
        <semantic-modal v-model="showModal" :settings="{content_classes: {content: true}, closeable: true, closeable_button: true}" title="A Title">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem id aliquam officiis voluptatibus, incidunt tempore quisquam, quae quasi fugit illo fuga mollitia dicta quaerat corporis expedita, suscipit iste eligendi. Maxime.
            </p>
        </semantic-modal>    
    </div>

### Using slots
You can pass in slots for overriding the **actions** and the **header** elements.

    <div>
        <button @click="showModal = true" class="ui button">Show</button>
        <semantic-modal v-model="showModal" :settings="{content_classes: {content: true}, closeable: true, closeable_button: true}">
            <div slot="header" class="header">
                <h1>Large Header</h1>
            </div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem id aliquam officiis voluptatibus, incidunt tempore quisquam, quae quasi fugit illo fuga mollitia dicta quaerat corporis expedita, suscipit iste eligendi. Maxime.
            </p>

            <div slot="actions" class="actions">
                <button class="ui small button" @click="showModal = false">Cancel</button>
                <button class="ui small yellow button" @click="() => {showModal = false; $toasted.show('Action called')}">Call To Action</button>
            </div>
        </semantic-modal>    
    </div>


### Handle Events
This component emits the **close-modal** event before closing

    <div>
        <button @click="showModal = true" class="ui button">Show</button>
        <semantic-modal :active="showModal" :settings="{content_classes: {content: true}, closeable: true, closeable_button: true}" @close-modal="showModal = false">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem id aliquam officiis voluptatibus, incidunt tempore quisquam, quae quasi fugit illo fuga mollitia dicta quaerat corporis expedita, suscipit iste eligendi. Maxime.
            </p>
        </semantic-modal>    
    </div>