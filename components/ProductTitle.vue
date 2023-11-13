<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center text-center font-medium mb-27"
  >
    <a class="flex justify-center items-center text-28" :href="url">
      <span class="pl-2 pt-2 pb-2">
        <slot name="title"></slot>
      </span>
      <span>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMzJ2MzJIMHoiLz4KICAgICAgICA8cGF0aCBkPSJtMTAuOTUyIDIzLjM4NCAyLjA5NiAyLjE0NiAxMC4wNTUtOS44MjUtOS43MDEtMTAuMjc4LTIuMTgyIDIuMDYgNy42NzcgOC4xMzN6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvZz4KPC9zdmc+Cg=="
          alt="더보기 아이콘"
        />
      </span>
    </a>
    <p class="text-semibold font-normal text-lightGray tracking-tighter">
      <slot name="subtitle"></slot>
    </p>
  </div>
</template>
