<template>
  <div>
    <slot name="title">
      <h1>Slots</h1>
    </slot>
    <slot name="body">
      <p>Texto sobre slots</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "SlotsSample",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
