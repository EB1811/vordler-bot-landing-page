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
  <header class="relative px-10 py-5 transition-all duration-500">
    <div class="mx-auto">
      <div class="flex flex-row items-center">
        <div class="flex h-full w-1/2 flex-col justify-center md:text-left">
          <h1
            class="text-2xl font-bold transition-colors duration-300"
            class:text-white={!navbar_color}
            class:text-violet-600={navbar_color}
          >
            VordlerBot <span class="text-xs italic">open alpha</span>
          </h1>
        </div>

        <div
          class="justify-right flex h-full w-1/2 flex-row items-center justify-end"
        >
          <div class="mx-3">
            <h2
              class="cursor-pointer text-lg font-normal text-white underline-offset-4 transition-all duration-100 hover:underline"
            >
              <a href="#features">Features</a>
            </h2>
          </div>

          <div class="mx-3">
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
