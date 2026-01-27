<template>
    <div class="flex flex-col bg-stone-200 dark:bg-stone-900 dark:text-stone-50">
        <div class="container mx-auto max-w-7xl px-2"> 
            <slot />
        </div>        
        <div class="pt-2">
            <Footer />
        </div>
    </div>
</template>
  