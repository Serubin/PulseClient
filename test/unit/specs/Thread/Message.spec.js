import Vue from 'vue'
import { mount } from 'vuenit';
import Sidebar from '@/components/Sidebar.vue';

describe('Message', () => {

    const options = {
        stubComponents : true
    }

    const props = {
        messageData: {
            mime_type: 'text/plain',
            content: 'test', 
            message_type: 0, // Default as "recieved"
            timestamp: new Date(), // TODO convert to unix TS
        }
    }

    it('can mount', () => {
        const vm = mount(Sidebar, options).$mount();
    });

    it('displays basic message', () => {
        const vm = mount(Sidebar, options).$mount();

        // Should contain  message
        expect(vm.$el.querySelector('message-content').textContent)
            .toBe(props.messageData.content);
    });

    it('displays multimedia message', () => {
        
        const media_data = {
                thumbnail: 'image.png',
                url: '/here',
                title: 'An image here',
                content: "This may or may not be an image'
        };

        props.messageData.mime_type = 'media/fake';
        props.messageData.content = JSON.stringify(media_data);

        const vm = mount(Sidebar, options).$mount();

        // Check media data
        expect(vm.media_thumb).toBe(media_data.thumbnail);
        expect(vm.media_link).toBe(media_data.url);
        expect(vm.media_title).toBe(media_data.title);
        expect(vm.media_content).toBe(media_data.description);
    
        // Check HTML render
        const media_area = vm.$el.querySelector("a");
        expect(media_area).toBeTruthy();
        expect(media_area.querySelector("img")).toBeTruthy();
        expect(media_area.querySelector("article-title")).toBeTruthy();
        expect(media_area.querySelector("article-snippet")).toBeTruthy();
    });
    
    it('displays correct styling', () => {
        
        props.messageData.mime_type = 'text/plain';
        props.messageData.content = 'test';

        const vm = mount(Sidebar, options).$mount();
        const class = vm.$el.querySelector('div div').className;

    });

});
