<template>
  <div>
    <px-header/>
    <px-nosotros />
    </div>
</template>

<script>
import PxNosotros from "@/components/PxNosotros";
import PxHeader from '@/components/PxHeader';

export default {
  name: "Nosotros",
  components: { PxNosotros,PxHeader },
};
</script>
