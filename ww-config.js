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
