<template>
<div class="element-example">
    <div class="ui top attached header left aligned">
        <h5>{{title}}</h5>
    </div>
    <div class="ui attached segment html top">
        <!-- Example Element -->
        <slot></slot>
    
        <!-- Code -->
        <div @click="show = !show" class="ui bottom attached label pointer">Code</div></div>
        <transition name="slide" mode="out-in">
        <div v-if="show" class="annotation">
        <div class="ui instructive bottom attached segment">
        <code class="code xml" select>
            {{ exampleCode }}
        </code>
        </div>
        </div>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      title: {
        default : 'Your title here',
      },
      exampleCode: {
          default: '<!-- HTML here -->',
      },
    },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main.ui.container {
  width: 600px;
}

.example {
  margin-top: 5px;
  margin-bottom: 30px;
}

.element-example {
    margin-bottom: 25px;
}

h5 {
  display: inline-block !important;
}

i {
  display: inline-block !important;
}

.pointer {
  cursor: pointer;
}

.annotation pre code {
    min-width: 500px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

code.code.xml {
    color: #555555;
}

code.code {
    color: #333333;
}

code.code, code.code span {
    -moz-transition: 0.5s color ease;
    -webkit-transition: 0.5s color ease;
    -ms-transition: 0.5s color ease;
    transition: 0.5s color ease;
}

code.code {
    display: block;
    overflow-x: auto;
    padding: 0em;
    color: #666;
    background-color: transparent;
    -webkit-text-size-adjust: none;
}

pre code {
    border: none;
    padding: 0px;
    font-size: 1em;
}

code {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    display: inline-block;
    font-family: "Monaco","Menlo","Ubuntu Mono","Consolas","source-code-pro",monospace;
    font-size: 0.875em;
    font-weight: bold;
    padding: 1px 6px;
    vertical-align: baseline;
}

.ui.styled.accordion {
    width: 500px;
}

.ui.fluid.accordion, .ui.fluid.accordion .accordion {
    width: 100% !important;
}

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }

</style>
