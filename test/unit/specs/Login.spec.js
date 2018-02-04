// Import Vue and the component being tested
import Vue from 'vue'
import {mount} from 'vuenit';
import Login from '@/components/Login.vue'

describe('Login', () => {

    const options = {
        inject: { $router, $store },
        stubComponents : true
    }

    const vm = mount(Login, options);
    
    // Check basic usage
    it('can mount', () => {
        vm.$mount();
    });

    // Determine default info
    it('set\'s global title correctly', () => {
        expect($store.state.title).toBe("PulseClient");
    });

    // Check doLogin
    it('correctly handles login request (will be error)', (done) => {
        
        vm.username = "test"; // Set false credentials
        vm.password = "test";
        
        vm.doLogin() // Do login
        
        setTimeout(() => { // Wait 1 seconds for login request
            expect(vm.error).toBe(true);
            done(); // Finish test
        }, 1000);
    });

    // Check hash Processing
    it('correctly transforms & stores hash/key', () => {
        vm.password = '123456789';
        const data = {
            'account_id': '1a2b3c4d5e6f7g',
            'salt1': '987654321=',
            'salt2': '123456789='
        }

        vm.handleData(data);

        expect($store.state.account_id).toBe(data.account_id);
        expect($store.state.hash).toBe("4MylUSRbzxgzCKC/jsj5G19ml/ivDEAgMeHezFQR4k0=");
        expect($store.state.salt).toBe(data.salt1);

    });
})

