<template>
    <div class=''>
        <el-menu :default-active="activeMenu" class="el-menu-head" mode="horizontal">
            <head-bar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu>
    </div>
</template>

<script setup lang=ts>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import usePermissionStore from '@/store/permission'
import HeadBarItem from '@/layout/components/HeadBarItem.vue';

const permissionStore = usePermissionStore()

const permission_routes = permissionStore.PermissionRoutes().filter((route) => !route.meta?.hidden)
console.log("permission_routes:" + JSON.stringify(permission_routes));

const activeMenu = computed(() => {
    const route = useRoute();
    const { meta, path } = route

    // if set path, the sidebar will highlight the path you set
    if (meta.activeMenu) {
        return meta.activeMenu
    }
    return path
})

</script>

<style scoped></style>