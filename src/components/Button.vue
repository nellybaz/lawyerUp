<template>
    <div class='button'>
        <button @click="$emit('onButtonClick', {})">
            {{
                label
            }}
        </button>
    </div>
</template>


<script>
export default {
     name:'button',
     props:{
         label:{
             required:true,
             type:String,
         },

     }
}
</script>


<style lang='scss' scoped>
    .button {
        width:100%;

        button{
            width:100%;
            padding: 1em 1.5em;
            border: none;
            background: black;
            color:white;
            font-size: 15px;
            border-radius: 3px;
            cursor: pointer;
        }
    }
</style>