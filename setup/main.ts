import { defineAppSetup } from '@slidev/types'
import BlokInk from '@storyblok/design-system'
import '@storyblok/design-system/dist/storyblok-design-system.css'
 
export default defineAppSetup(({ app }) => {
    app.use(BlokInk) // vue 3
})
