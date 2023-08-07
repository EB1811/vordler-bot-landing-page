<script>
  const imgUrl = new URL('../../abstract3.jpg', import.meta.url).href
</script>

<div class="bg-violet-800">
  <div class="min-h-screen px-10 pb-10 pt-52">
    <div class="grid grid-cols-2">
      <h2 class="3xl:text-8xl text-5xl font-normal text-white 2xl:text-7xl">
        Integrate AI as your moderator or chat bot
      </h2>
      <div class="3xl:max-w-3xl 3xl:mt-6 mt-2 2xl:mt-4">
        <h3 class="3xl:text-3xl text-2xl font-normal text-white">
          You can use a customized GPT AI to moderate your Twitch chat however
          you want to, and integrate it into your chat with custom chat
          commands.
        </h3>
        <div class="mt-6 flex">
          <h2
            class=" cursor-pointer border border-white px-3 text-lg font-normal text-white transition-all duration-100 hover:bg-white hover:text-violet-800"
          >
            Dashboard
          </h2>
          <h2
            class=" ml-3 cursor-pointer px-3 text-lg font-normal text-white underline underline-offset-8 transition-all duration-100 hover:decoration-gray-500"
          >
            <a href="#features">Learn More</a>
          </h2>
        </div>
      </div>
    </div>
    <img src={imgUrl} alt="" class="mt-20 h-5/6 object-cover" />
  </div>
</div>
