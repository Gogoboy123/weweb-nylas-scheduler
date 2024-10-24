<template>
    <nylas-scheduling
        @detailsConfirmed="(e) => $emit('detailsConfirmed', { ...e.detail, timestamp: e._vts })"></nylas-scheduling>
</template>

<script setup>
import { onMounted, onBeforeMount } from 'vue'

const props = defineProps({
    configurationId: {
        type: String,
        required: true
    },
    localization: {
        type: String,
        required: false
    }
})

onBeforeMount(() => {
    let script = wwLib.getFrontDocument().createElement("script");
    script.type = "module";
    script.id = "nylas-scheduler-id"
    script.defer = true;
    script.src = "https://cdn.jsdelivr.net/npm/@nylas/web-elements@1.1.1/dist/nylas-web-elements/nylas-web-elements.esm.js";
    if (wwLib.getFrontDocument().getElementById('nylas-scheduler-id')) {
        wwLib.getFrontDocument().getElementById('nylas-scheduler-id').remove();
    }
    wwLib.getFrontDocument().head.appendChild(script);
})


onMounted(() => {
    const nylasScheduling = wwLib.getFrontDocument().querySelector('nylas-scheduling');
    nylasScheduling.configurationId = props.configurationId;
    nylasScheduling.nylasBranding = false;
    nylasScheduling.localization = props.localization;
    nylasScheduling.bookingInfo = {primaryParticipant:{ email: "dev@mail.ca", name: "joe test"}};
})
</script>