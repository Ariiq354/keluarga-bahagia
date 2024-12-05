<script setup lang="ts">
  definePageMeta({
    layout: "landing",
  });
</script>

<template>
  <main>
    <div
      class="flex w-full flex-col items-center justify-center gap-4 bg-eastern-blue-500 px-96 py-20 text-center text-white"
    >
      <h1 class="text-5xl font-bold">Tentang Kami</h1>
    </div>
    <div class="container mt-12 grid grid-cols-2 gap-12">
      <p class="flex items-center">
        Platform website Keluarga Bahagia adalah sebuah situs web yang dirancang
        khusus untuk Pendidikan Pranikah dan memperkuat ikatan keluarga.
        Platform ini juga dirancang menjadi platform pencarian jodoh terdepan di
        Indonesia yang memfasilitasi terciptanya keluarga-keluarga berkualitas,
        berdaya saing, dan berwawasan luas, serta berkontribusi dalam mewujudkan
        Indonesia Emas 2045. Platform ini hadir sebagai solusi modern untuk
        mempertuemukan individu yang memiliki visi dan nilai-nilai yang sejalan
        dalam membangun keluarga harmonis. Kami berkomitmen membantu membantu
        anda memahami esensi pernikahan sebagai ibadah dan separuh agama yang
        sempurna, keuntungan menyiapkan diri menjadi calon pasangan yang baik
        adalah mendapatkan calon pasangan yang baik, karena keluarga adalah
        fondasi yang penting dalam kehidupan kita yang memberikan dukungan,
        cinta, dan makna dalam perjalanan kita melalui hidup.
      </p>
      <div class="flex items-center justify-center">
        <div
          class="m-12 flex aspect-square w-full max-w-[400px] items-center justify-center bg-gray-300"
        >
          <UIcon name="i-heroicons-photo" />
        </div>
      </div>
    </div>

    <h1 class="mb-12 text-center text-4xl font-bold">Diajarkan Praktisi</h1>
    <div class="container grid grid-cols-4 gap-12">
      <div
        v-for="(_, index) in Array(8)"
        :key="index"
        class="rounded-lg bg-white p-4 shadow-lg"
      >
        <div
          class="mb-6 flex aspect-square w-full items-center justify-center rounded bg-gray-300"
        >
          <UIcon name="i-heroicons-photo" />
        </div>
        <h1 class="mb-2 text-xl">John Doe</h1>
        <p class="text-black/60">Project Manager</p>
      </div>
    </div>
    <div class="flex w-full justify-center py-12">
      <UButton class="rounded-full text-lg" size="lg">Download Profil</UButton>
    </div>
  </main>
</template>
