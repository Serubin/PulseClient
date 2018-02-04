import Vue from 'vue'
import { mount } from 'vuenit';
import Sidebar from '@/components/Sidebar.vue';

describe('Sidebar', () => {

    const options = {
        inject: { $router, $route, $store },
        stubComponents : true
    }

    const vm = mount(Sidebar, options);

    it('can mount', () => {
        vm.$mount();
    });

    it('has four links', () => {
        // Rendered links should be equal to vm.links
        expect(vm.$el.querySelectorAll("li").length)
            .toBe(Object.keys(vm.links).length);
    });

    it('show\'s conversations appropriately', () => {

        // On conversations list & logged in, false
        vm.$route.name = "conversations-list";
        vm.$store.commit('account_id', "12345");
        expect(vm.showConversations).toBe(false)

        // On not conversations list & logged in, true
        vm.$route.name = 'thread';
        expect(vm.showConversations).toBe(true)

        // Not logged in, false
        vm.$store.commit('account_id', '');
        expect(vm.showConversations).toBe(false)
    });

});
