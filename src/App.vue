<template>
  <div id="app">
    <template v-if="!showPlayground">
      <a href="https://www.npmjs.com/package/vue-tel-input"><img src="https://img.shields.io/npm/dt/vue-tel-input.svg"></a>&nbsp;
      <a href="https://github.com/EducationLink/vue-tel-input"><img src="https://img.shields.io/github/stars/EducationLink/vue-tel-input.svg"></a>
      <h2 style="color: #999">made with &#x2764; by some <a
        style="color: inherit"
        href="https://github.com/EducationLink/vue-tel-input/graphs/contributors">awesome humans</a>.</h2>
      <div style="width: 500px; margin: 20px auto;">
        <vue-tel-input
          v-model="number"
          :preferred-countries="['AE', 'gb', 'ua']"
          :valid-characters-only="true"
          v-bind="bindProps"
          @input="onInput"/>
      </div>
      <div
        v-if="phone.number"
        style="color: #e83e8c">
        <span>
          Number:
          <strong>{{ phone.number }}</strong>,&nbsp;
        </span>
        <span>
          Is valid:
          <strong>{{ phone.valid }}</strong>,&nbsp;
        </span>
        <span>
          Country:
          <strong>{{ phone.country }}</strong>
        </span>
      </div>
    </template>
    <!-- built files will be auto injected -->
    <div style="text-align: center; margin-top: 20px;">
      View
      <span style="font-size: 15px;">
        [<a href="https://github.com/EducationLink/vue-tel-input">github</a>,
        <a href="https://github.com/EducationLink/vue-tel-input/releases">changelog</a>,
        <a href="https://www.npmjs.com/package/vue-tel-input">npm</a>,
        <a
          href=""
          @click.prevent="showPlayground = !showPlayground">
        {{ showPlayground ? 'homepage' : 'playground' }}</a>].
      </span>
    </div>
    <div
      v-if="showPlayground"
      style="margin-top: 20px;">
      <iframe
        src="https://codesandbox.io/embed/0yyyk45q7w?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue"
        title="Vue Template"
        allow="gyroscope; payment; ambient-light-sensor; encrypted-media"
        style="width:100%; height:80vh; border:0; border-radius: 4px; overflow:hidden;"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"/>
    </div>
  </div>
</template>

<style lang="sass">
  @import "../node_modules/bulma/sass/utilities/_all.sass"
  @import "../node_modules/bulma/sass/base/_all.sass"
  @import '../node_modules/bulma/sass/form/_all.sass'
</style>

<script>

import '../scss/vue-tel-input.scss';

export default {
  name: 'App',
  data() {
    return {
      showPlayground: false,
      number: '522048185',
      phone: {
        number: '',
        valid: false,
        country: undefined,
      },
      bindProps: {
        mode: 'national',
        // customValidate: '', //Custom RegEx to validate input
        separateDialCode: true,
        // defaultCountry: 'AE',
        disabledFetchingCountry: true,
        disabledFormatting: false,
        placeholder: 'Enter a phone number',
        enabledCountryCode: true,
        enabledFlags: true,
        preferredCountries: ['AE', 'IN', 'PK', 'GB'],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: 'off',
        name: 'telephone',
        maxLen: 25,
        wrapperClasses: '',
        inputClasses: 'input',
        inputOptions: {
          showDialCode: false,
        },
      },
    };
  },
  methods: {
    onInput(formattedNumber, { number, valid, country }) {
      this.phone.number = number.international;
      this.phone.valid = valid;
      this.phone.country = country && country.name;
    },
  },
};
</script>
