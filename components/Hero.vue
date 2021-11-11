<template>
  <section>
    <div class="flex h-screen max-w-6xl mx-auto px-4 sm:px-6 py-auto items-center">
      <div class="pt-32 pb-12 m-auto  md:pt-40 md:pb-20">
        <div class="text-center pb-12 md:pb-16">
          <h1
            class="
              text-5xl
              md:text-6xl
              font-extrabold
              leading-tighter
              tracking-tighter
              dark:text-gray-100
              mb-4
            "
          >
            Learn A-Level
            <span
              class="
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-blue-500
                to-teal-400
              "
              >Computer Science</span
            >
          </h1>
          <div class="max-w-3xl mx-auto">
            <p
              class="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Every single AQA topic
            </p>
            <div
              class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <NuxtLink
                 to="#all-content"
                  class="
                    btn
                    text-white
                    bg-blue-600
                    hover:bg-blue-700
                    w-full
                    mb-4
                    sm:w-auto sm:mb-0
                  "
                  >View all content

              </NuxtLink>
              <div>
                <NuxtLink
                  class="
                    btn
                    text-white
                    bg-gray-900
                    dark:bg-gray-700
                    hover:bg-gray-800
                    w-full
                    sm:w-auto sm:ml-4
                  "
                  to="articles/4-1-fundamentals-of-programming"
                  >Skip to the start</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
export default {};
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>
