### Basic usage

    <div class="ui very padded basic segment">
        <semantic-loading :active="true"></semantic-loading>
    </div>

### Change text
You can change the text of the spinner with the **text** prop

    <div class="ui very padded basic segment">
        <semantic-loading :active="true" text="Please wait..."></semantic-loading>
    </div>

### Styling
You can change the appearance of the spinner with the **size**, **inline**, **inverted** and **centered** props

    <div class="ui inverted basic segment">
        <semantic-loading :active="true" size="mini" :inline="true" :centered="false" :inverted="true"></semantic-loading>
    </div>