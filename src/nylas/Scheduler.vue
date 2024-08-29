<template>
    <nylas-scheduling></nylas-scheduling>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
    configurationId: {
        type: String,
        required: true
    }
})

let script = wwLib.getFrontDocument().createElement("script");
script.type = "module";
script.id = "nylas-scheduler-id"
script.defer = true;
script.src = "https://unpkg.com/@nylas/web-elements@latest";

onMounted(() => {
    if (wwLib.getFrontDocument().getElementById('nylas-scheduler-id')) {
        wwLib.getFrontDocument().getElementById('nylas-scheduler-id').remove();
    }
    wwLib.getFrontDocument().head.appendChild(script);
    setTimeout(() => setConfigurationId(), 1000);
})

const setConfigurationId = () => {
    const nylasScheduling = wwLib.getFrontDocument().querySelector('nylas-scheduling');
    nylasScheduling.configurationId = props.configurationId;
}
</script>