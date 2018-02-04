// Import Vue and the component being tested
import Vue from 'vue'
import Splash from '@/components/Splash.vue'

describe('Splash', () => {
    // Inspect the raw component options
    it('has the correct name', () => {
        expect(Splash.name).toBe('splash')
    })
})
