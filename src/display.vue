<template>
  <div class="m2a-field-display">
    <div v-if="items.length > 1" class="items-container">
      <div v-for="(item) in items" :key="item.value" v-tooltip.bottom.center="item.label" class="item-tag">
        {{ getFirstTwoLetters(item.label) }}
      </div>
    </div>
    <span v-else-if="items.length === 1" v-tooltip.bottom.center="items[0].label">{{ getFirstTwoLetters(items[0].label) }}</span>
    <span v-else class="empty-state">No items selected</span>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  // Directus UI components are globally available in extensions

  const props = defineProps({
    value: {
      type: [String, Object, Array],
      default: null
    },
    display: {
      type: String,
      default: 'formatted'
    }
  });

  const items = computed(() => {
    if (!props.value) return [];
    let parsed;
    if (typeof props.value === 'string') {
      try {
        parsed = JSON.parse(props.value);
      } catch (error) {
        return [{ label: props.value, value: props.value }];
      }
    } else if (typeof props.value === 'object') {
      parsed = props.value;
    } else {
      return [{ label: String(props.value), value: String(props.value) }];
    }

    if (Array.isArray(parsed)) {
      return parsed.map(item => {
        if (typeof item === 'object') {
          return {
            label: item.title || item.name || item.value || item.id || '',
            value: item.id || item.value || item.title || item.name || ''
          };
        }
        return { label: String(item), value: String(item) };
      });
    } else if (typeof parsed === 'object') {
      return [{
        label: parsed.title || parsed.name || parsed.value || parsed.id || '',
        value: parsed.id || parsed.value || parsed.title || parsed.name || ''
      }];
    }
    return [{ label: String(parsed), value: String(parsed) }];
  });

  const getFirstTwoLetters = (text) => {
    if (!text) return '';
    // Filter out non-alphanumeric characters and get first two characters
    const alphanumericOnly = text.toString().replace(/[^a-zA-Z0-9]/g, '');
    return alphanumericOnly.substring(0, 2).toUpperCase();
  };

</script>

<style scoped>
.m2a-field-display {
  color: var(--theme-foreground);
  font-size: var(--theme-font-size-base);
  line-height: 1.4;
  word-break: break-word;
}

.items-container {
  display: flex;
  align-items: start;
  overflow: auto;
}

.item-tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  border-radius: var(--theme-border-radius);
  background: var(--theme-background-subdued);
  border: var(--theme-border-width) solid var(--theme-border-color);
  font-size: var(--theme-font-size-small);
  color: var(--theme-foreground);
}

.separator {
  margin-left: 4px;
  color: var(--theme-foreground-subdued);
}

.empty-state {
  color: var(--theme-foreground-subdued);
  font-style: italic;
}
</style>
