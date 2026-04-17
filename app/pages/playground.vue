<script lang="ts" setup>
const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Lime', 'Mango', 'Melon', 'Nectarine', 'Orange', 'Papaya', 'Pear', 'Pineapple', 'Plum', 'Raspberry', 'Strawberry', 'Tangerine', 'Watermelon']
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <UAutocompleteRoot>
      <UAutocompleteAnchor class="w-xs">
        <UAutocompleteInput />
        <UAutocompleteTrigger />
        <UAutocompleteCancel />
      </UAutocompleteAnchor>
      <UAutocompleteContent>
        <UAutocompleteViewport>
          <UAutocompleteEmpty />
          <UAutocompleteGroup>
            <UAutocompleteItem
              v-for="item in items"
              :key="item"
              :value="item"
            >
              {{ item }}
            </UAutocompleteItem>
          </UAutocompleteGroup>
        </UAutocompleteViewport>
      </UAutocompleteContent>
    </UAutocompleteRoot>
  </div>
</template>
