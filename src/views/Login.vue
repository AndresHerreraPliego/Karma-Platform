<template>

<div>
  <px-header/>
  <px-login />
  </div>

  
</template>

<script>

import PxLogin from "@/components/PxLogin";
import PxHeader from '@/components/PxHeader'

export default {
  name: "Login",
  components: {PxLogin, PxHeader }
};
</script>