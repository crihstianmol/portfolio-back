//use portfolio
db.createCollection('certs', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['institute','instituteUrl','certTitle','certUrl'],
            properties: {
                institute: {
                    bsonType: 'string',
                    description: 'Cert Institute.'
                },
                instituteUrl: {
                    bsonType: 'string',
                    description: 'Cert Institute Url.'
                },
                certTitle: {
                    bsonType: 'string',
                    description: 'Cert Title.'
                },
                certUrl: {
                    bsonType: 'string',
                    description: 'Cert Url.'
                },
            }
        }
    }
})
