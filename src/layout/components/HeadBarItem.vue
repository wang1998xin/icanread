<template>
        <el-menu-item :index="item.path">
            <RouterLink :to="item.path">{{ item.meta.title  }}</RouterLink>
        </el-menu-item>
</template>

<script setup lang=ts>

const props = defineProps({
    // route object
    item: {
        type: Object,
        required: true
    },
    basePath: {
        type: String,
        default: ''
    }
})
console.log("item.title:"+JSON.stringify(props.item.meta));

// const resolvePath(routePath: string): string => {
// if (isExternal(routePath)) {
//     return routePath
// }
// if (isExternal(this.basePath)) {
//     return this.basePath
// }
//     return path.resolve(props.basePath, routePath)
// }


</script>

<style scoped></style>