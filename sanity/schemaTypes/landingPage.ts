export default {
    name: 'landingPage',
    title: 'Startsida',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Rubrik',
            type: 'string',
        },
        {
            name: 'ingress',
            title: 'Inledande text',
            type: 'array', 
            of: [
            {
                type: 'block', 
            }],
        }
    ]
}