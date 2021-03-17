<template>
    <div class="box-container">
        <img :src="groupedProps.img" alt="icon">
        <div class="box-desc">
            <h5>{{groupedProps.title}}</h5>
            <p>{{groupedProps.desc}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"BoxElement",
    props: {
        groupedProps: {
            type: Object
        },
    }
}
</script>
<style scoped lang="scss" src="./BoxElement.style.scss">

</style>