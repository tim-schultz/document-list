import { shallowMount } from '@vue/test-utils'
import Filters from '@/components/Filters.vue'

describe('Filters.vue', () => {
  it('renders correct number of filters based on props array', () => {
    const filters = [
      {
        name: 'Deleted',
        key: 'deleted',
        value: 'inactive',
      },
      {
        name: 'Redacted',
        key: 'redacted_at',
        value: 'inactive',
      },
      // Commented out to demonstrate ease of adding another filter
      // {
      //   name: 'Has Folder',
      //   key: 'folder',
      //   value: 'inactive',
      // },
    ]
    const wrapper = shallowMount(Filters, {
      propsData: { filters }
    })

    expect(wrapper.findAll('.filter').length).toBe(filters.length + 1)
  })
})
