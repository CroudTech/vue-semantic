Checkbox:

```
    new Vue({
        data() {
            return {
                pizza: true,
            }
        },
        template: '<div><pre>Pizza: {{pizza}}</pre><semantic-checkbox v-model="pizza" label="🍕 Pizza" /></div>'
    })
```

```html
    <semantic-checkbox v-model="pizza" label="🍕 Pizza" />
```

Slider:

```
    new Vue({
        data() {
            return {
                love: false,
            }
        },
        template: '<div><pre>Love: {{love}}</pre><semantic-checkbox v-model="love" label="❤️ Love" type="slider" /></div>'
    })
```

```html
    <semantic-checkbox v-model="love" label="❤️ Love" type="slider"/>
```

Toggle:

```
    new Vue({
        data() {
            return {
                fire: true,
            }
        },
        template: '<div><pre>Fire: {{fire}}</pre><semantic-checkbox v-model="fire" label="🔥 Fire" type="toggle" /></div>'
    })
```

```html
    <semantic-checkbox v-model="fire" label="🔥 Fire" type="toggle" />
```

Disabled:

    <semantic-checkbox label="🔥 Fire" type="toggle" :disabled="true"/>
