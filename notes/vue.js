// v-cloak for only render when finished page
// css -> [v-cloak] {display: none;}
// <div id="app" v-cloak>

// loop use key (performance etc.)
<p v-for="str in inputs" :key="str">{{str}}</p>
//or
<p v-for="(str,i) in inputs" :key="i">{{str}}</p>

// props read only

//child component + parent passing data
app.component('custom-form', {
            template: `
                <form @submit.prevent ="handleSubmit">
                    <h1>{{title}} </h1>
                    <p v-for="str in inputs" key="str">{{str}}</p>
                    <custom-input v-model="firstname" :label="firstnameLabel" />
                    <custom-input v-model="lastname" :label="lastnameLabel" />
                    <button>Submit</button>
                </form>
            `,
            components: ['custom-input'],
            data() {
                return {
                    title: "Login Form",
                    inputs: [
                        'email',
                        'password',
                        'name'
                    ],
                    firstname: null,
                    lastname: null,
                    firstnameLabel: 'Firstname',
                    lastnameLabel: 'Lastname'
                }
            },
            methods: {
                handleSubmit() {
                    console.log(this.firstname, this.lastname);
                }
            }
        });
        app.component('custom-input', {
            template: `
            <label>
                {{label}}
                <input v-model="inputValue" type="text">
            </label>
            `,
            props: ['label', 'modelValue'],
            computed: {
                inputValue: {
                    get() {
                        return this.modelValue;
                    },
                    set(value) {
                        console.log(value);
                        this.$emit('update:modelValue', value)

                    }
                }
            },
        })
 
