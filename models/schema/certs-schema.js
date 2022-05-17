import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const certSchema = new Schema(
    {
        institute: {
            type: String,
            required: true
        },
        instituteUrl: {
            type: String,
            required: true
        },
        certTitle: {
            type: String,
            required: true
        },
        certUrl: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
    }
);

const CertModel = model('certs', certSchema);

export { CertModel };
