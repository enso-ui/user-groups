<template>
    <div class="columns is-centered">
        <div class="column is-half-desktop is-full-touch">
            <enso-form class="box"/>
        </div>
    </div>
</template>

<script>
import { EnsoForm } from '@enso-ui/forms/bulma';

export default {
    name: 'Edit',

    components: { EnsoForm },
};
</script>
