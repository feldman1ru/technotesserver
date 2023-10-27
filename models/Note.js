const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const noteSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        ticket: {
            type: Number,
        },
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    },
)

// noteSchema.plugin(AutoIncrement, {
//     inc_field: 'ticket',
//     id: 'ticketNums',
//     start_seq: 500
// })

// noteSchema.pre('save', async function (next) {
//     if (!this.ticket) {
//         const generatedTicket = await generateTicketNumber();
//         this.ticket = generatedTicket;
//     }
//     next();
// });

// noteSchema.pre('save', async function (next) {
//     try {
//         if (!this.ticket) {
//             const generatedTicket = await generateTicketNumber();
//             this.ticket = generatedTicket;
//         }
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = mongoose.model('Note', noteSchema)