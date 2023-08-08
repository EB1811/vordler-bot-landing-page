<script>
  import {onMount, onDestroy} from 'svelte'
  import {browser} from '$app/environment'

  let navbar_color = false

  if (browser) {
    const scrollNavBar = 300 + window.innerHeight / 2
    onMount(() => {
      window.onscroll = () => {
        if (window.scrollY > scrollNavBar) {
          navbar_color = true
        } else {
          navbar_color = false
        }
      }
    })

    onDestroy(() => {
      window.onscroll = () => {}
    })
  }
</script>

<div
  class="fixed z-50 w-full transition-colors duration-300"
  class:bg-violet-800={!navbar_color}
  class:bg-black={navbar_color}
>
  <header class="relative px-4 py-5 transition-all duration-500 lg:px-10">
    <div class="mx-auto">
      <div class="flex flex-row items-center">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 transition-all duration-500"
            viewBox="0 0 512 512"
            class:text-white={!navbar_color}
            class:text-violet-800={navbar_color}
          >
            <path
              d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"
            />
          </svg>
          <span class="ml-1 text-lg font-bold text-gray-50 lg:text-xl">
            VordlerBot
            <span class="hidden text-xs italic lg:inline-block">Open Alpha</span
            >
          </span>
        </div>

        <div
          class="ml-auto flex h-full w-1/2 flex-row items-center justify-end"
        >
          <div class="mx-3 hidden lg:block">
            <h2
              class="cursor-pointer text-lg font-normal text-white underline-offset-4 transition-all duration-100 hover:underline"
            >
              <a href="#features">Features</a>
            </h2>
          </div>

          <div class="mx-3 hidden lg:block">
            <h2
              class="cursor-pointer text-lg font-normal text-white underline-offset-4 transition-all duration-100 hover:underline"
            >
              <a href="#steps">How It Works</a>
            </h2>
          </div>

          <div class="mx-3">
            <h2
              class=" cursor-pointer border border-white px-3 text-lg font-normal text-white transition-all duration-100 hover:bg-white hover:text-violet-800"
            >
              Login
            </h2>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
