Basic Dropdown:

```
    new Vue({
        data() {
            return {
                options: [
                    {id: 1, name: 'Foo'},
                    {id: 2, name: 'Bar'},
                ],
                model: 1
            }
        },
        template: '<semantic-form-dropdown v-model="model" :options="options" />'
    })
```

```html
    <semantic-form-dropdown v-model="model" :options="options" />
```

Slotted Dropdown:

```
    new Vue({
        data() {
            return {
                options: [
                    {id: 1, name: 'Foo'},
                    {id: 2, name: 'Bar'},
                ],
                model: 1
            }
        },
        template: '<semantic-form-dropdown v-model="model" :options="options" ><div class="item" data-value="3"><i class="green check icon"></i>Baz</div><div class="divider"></div></semantic-form-dropdown>'
    })
```

```html
    <semantic-form-dropdown v-model="model" :options="options" >
        <div class="item" data-value="3">
            <i class="green check icon"></i>
            Baz
        </div>
        <div class="divider"></div>
    </semantic-form-dropdown>
```

Fluid Search Dropdown:

```
    new Vue({
        data() {
            return {
                options: [
                    {id: 1, name: 'Foo'},
                    {id: 2, name: 'Bar'},
                ],
                model: 1
            }
        },
        template: '<semantic-form-dropdown v-model="model" :options="options" fluid search/>'
    })
```

```html
    <semantic-form-dropdown v-model="model" :options="options" fluid search></semantic-form-dropdown>
```
