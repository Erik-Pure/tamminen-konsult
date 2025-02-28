export default {
    name: 'employee',
    title: 'Anställd',
    type: 'document',
    fields: [        
        {
            name: 'title',
            title: 'Namn',
            type: 'string',
        },
        {
            name: 'bio',
            title: 'Biografi',
            type: 'array',
            of: [
                {
                    type: 'block',
                }
            ],
        },
        {
            name: 'city',
            title: 'Stad',
            type: 'string',
        },
        {
            name: 'email',
            title: 'E-post',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Telefon',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Bild',
            type: 'image',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn',  
            type: 'string',
        },        
    ]
}