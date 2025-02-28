export default {
    name: 'services',
    title: 'Tjänster',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Rubrik',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',                
            },
        },      
        {
            name: 'image',
            title: 'Bild',
            type: 'image',            
        },
        {
            name: 'ingress',
            title: 'Inledande text',
            type:
            'text',
        },
        {
            name: 'description',
            title: 'Beskrivning',
            type: 'array',
            of: [
                {
                    type: 'block',
                }
            ],
        },
        {
            name: 'link',
            title: 'Länk',
            type: 'url',
        },
        {
            name: 'linkText',
            title: 'Länktext',
            type: 'string',
        },
        {
            name: 'contactPerson',
            title: 'Kontaktperson',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'employee'}]
                }],
        },
    ]
}