export default {
    editor: {
        label: {
            en: 'Nylas scheduler',
        },
    },
    properties: {
        configurationId: {
            label: {
                en: 'Configuration id',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        localization: {
            label: {
                en: 'localization',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        email: {
            label: {
                en: 'email',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        name: {
            label: {
                en: 'name',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        rescheduleBookingRef: {
            label: {
                en: 'reschedule Booking Reference',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        cancelBookingRef: {
            label: {
                en: 'Cancel Booking Reference',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
    },
    triggerEvents: [
        {
            name: 'event:booked',
            label: { en: 'On event booked' },
            event: {
                primaryParticipant: {
                    name: '',
                    email: '',
                },
                guests: [],
                additionalFields: {},
                timestamp: null,
            },
        },
    ],
};
