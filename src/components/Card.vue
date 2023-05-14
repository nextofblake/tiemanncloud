<template>
  <div class="card">
    <div class="card-head">
      <slot name="head"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  methods: {},
}
</script>

<style scoped>
.card {
  background: var(--gradient-white);
  border-radius: var(--radius-md);
  width: 100%;
  box-shadow: 1px 2px 6px rgba(164, 175, 189, 0.32);
}
.card-shadow {
  box-shadow: 3px 3px 5px var(--color-gray-6);
}
.card.transparent {
  background: transparent;
  border: 1px solid var(--color-gray-2);
}
.card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  font-size: 2.5rem;
  font-family: var(--font-family-big);
  color: var(--color-gray-7);
  border-bottom: 3px solid var(--color-gray-3);
}
.card-head + .card-body {
  padding-top: 10px;
}
.card-body {
  padding: 10px;
}
.card-footer {
  padding: 6px 10px;
}
</style>
