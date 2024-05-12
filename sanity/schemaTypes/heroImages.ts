export default {
    name: 'heroImages',
    type: 'document',
    title: 'Two Hero Images',
    fields: 
    [
        {
            name: 'image1',
            type: 'image',
            title: 'First Image',
            
        },
        {
            name: 'image2',
            type: 'image',
            title: "Second Image",
            of: [{type: 'image'}],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of Hero Image'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Hero Image Slug',
            options: {
                source: 'name',
            }
        }
    ]
}