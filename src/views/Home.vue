<template>

  <div>
  <px-header/>
  <px-jumbo/>
  </div>

</template>

<script>
import PxJumbo from "@/components/PxJumbo";
import PxHeader from '@/components/PxHeader';

export default {
  name: "Home",
  components: { PxJumbo,PxHeader},
};
</script>
