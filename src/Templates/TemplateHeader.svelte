<script lang="ts">
    import logo_snarp from "../Icons/Templates/logo_snarp.png";
    import logo_air from "../Icons/Templates/logo_air.png";
    export let title: string;
</script>

<div class="template">
    <p class="template__header tacenter bold uppercase">
        agence a.i.r agence d’investigations & recherches
    </p>
    <div class="flex images mt-large">
        <img class="logo_air" src={logo_air} alt="logo_air" />
        <img class="logo_snarp" src={logo_snarp} alt="logo_snarp" />
    </div>
    <h2 class="title mt-large tacenter">{title}</h2>
</div>

<style>
    .template__header {
        text-transform: uppercase;
    }

    .title {
        text-transform: uppercase;
        font-size: 2.5rem;
    }

    .logo_air {
        width: 15rem;
    }
</style>
