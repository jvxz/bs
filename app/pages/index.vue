<script lang="ts" setup>
const dialogOpen = ref(false)
const timestamp = useTimestamp()

const { data: randomNumber, error, refresh: fetchRandomNumber } = await useFetch('/api/number')
</script>

<template>
  <NuxtErrorBoundary>
    <Transition name="zoom" appear>
      <div class="flex flex-col gap-2 h-screen items-center justify-center">
        <ClientOnly>
          <p class="tabular-nums">
            {{ timestamp }}
          </p>
        </ClientOnly>
        <div class="flex gap-2 items-center">
          <p v-if="error" class="text-danger">
            {{ error.data?.message }}
          </p>
          <p v-else>
            {{ randomNumber }}
          </p>
          <UButton
            size="icon"
            variant="ghost"
            @click="fetchRandomNumber"
          >
            <Icon name="mingcute:refresh-1-line" />
          </UButton>
        </div>
        <UDropdownMenuRoot>
          <UDropdownMenuTrigger as-child>
            <UButton>
              Click!
            </UButton>
          </UDropdownMenuTrigger>
          <UDropdownMenuContent>
            <UDropdownMenuItem @select="dialogOpen = true">
              Dialog
            </UDropdownMenuItem>
          </UDropdownMenuContent>
        </UDropdownMenuRoot>
        <ClientOnly>
          <UButton
            size="icon"
            variant="soft"
            @click="toggleColorMode"
          >
            <Icon :name="$colorMode.value === 'dark' ? 'mingcute:sun-line' : 'mingcute:moon-line'" />
          </UButton>
        </ClientOnly>
        <UDialogRoot v-model:open="dialogOpen">
          <UDialogContent>
            <UDialogHeader>
              <UDialogTitle>
                Example
              </UDialogTitle>
            </UDialogHeader>
            <p class="font-sans">
              This is sans
            </p>
            <p class="font-mono">
              This is mono
            </p>
            <UDialogFooter>
              <UDialogClose as-child>
                <UButton>Close </UButton>
              </UDialogClose>
            </UDialogFooter>
          </UDialogContent>
        </UDialogRoot>
      </div>
    </Transition>
  </NuxtErrorBoundary>
</template>
