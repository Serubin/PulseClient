// Import Vue and the component being tested
import Vue from 'vue'
import Spinner from '@/components/Spinner.vue'

describe('Spinner', () => {
    // Inspect the raw component options
    it('has the correct name', () => {
        expect(Spinner.name).toBe('spinner')
    })
})

