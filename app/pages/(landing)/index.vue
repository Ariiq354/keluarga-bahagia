<script setup lang="ts">
  definePageMeta({
    layout: "landing",
  });

  const carouselItem = [
    {
      image: "/1.webp",
      title: "lorem ipsum",
      waktu: "30 Juni 2024",
      tempat: "bogor",
    },
    {
      image: "/2.webp",
      title: "lorem ipsum",
      waktu: "30 Juni 2024",
      tempat: "bogor",
    },
    {
      image: "/3.webp",
      title: "lorem ipsum",
      waktu: "30 Juni 2024",
      tempat: "bogor",
    },
    {
      image: "/4.webp",
      title: "lorem ipsum",
      waktu: "30 Juni 2024",
      tempat: "bogor",
    },
  ];
</script>

<template>
  <main class="font-sans">
    <Title>Keluarga Bahagia | DEV</Title>
    <div class="relative h-[90vh]">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 z-[5] transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          class="gradient sm:left-[calc(50% - 30rem)] relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-blue-500 opacity-30 sm:w-[72.1875rem]"
        />
      </div>
      <div class="container relative z-20 grid h-full grid-cols-2">
        <div class="flex h-full w-full flex-col justify-center gap-8 p-16">
          <h1 class="text text-6xl font-bold text-black">
            Temukan Rahasia
            <span class="text-eastern-blue-500">Keluarga </span>Bahagia
          </h1>
          <p class="text-xl font-semibold text-eastern-blue-700">
            Bergabunglah dengan seminar kami dan jelajahi buku-buku unggulan
            kami untuk mempelajari cara menciptakan keluarga yang kuat dan penuh
            kasih sayang.
          </p>
          <div class="flex gap-4">
            <UButton class="shadow-lg" href="/about">Learn More</UButton>
            <UButton variant="soft" class="shadow-lg" href="/login">
              Sign Up
            </UButton>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div
            class="rounded-lg bg-gray-900/5 p-2 ring-1 ring-inset ring-green-900/10"
          >
            <NuxtImg class="rounded-sm" src="/gambarUtama.webp" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white py-24">
      <div
        class="container flex h-full flex-col items-center justify-center gap-12 py-12"
      >
        <h1 class="mb-12 text-4xl font-bold">Kami Menyediakan Beberapa Jasa</h1>
        <div class="grid grid-cols-2 gap-12">
          <div class="rounded-lg bg-eastern-blue-100 p-12">
            <div
              class="mb-6 flex items-center justify-center text-eastern-blue-500"
            >
              <svg
                width="101.33619mm"
                class="h-auto w-24"
                height="109.8755mm"
                viewBox="0 0 101.33619 109.8755"
              >
                <g transform="translate(-7.5377496,166.95208)">
                  <path
                    id="path114"
                    style="fill: currentColor; fill-opacity: 1"
                    d="m 13.87135,-57.23568 c -1.3536,-0.32723 -3.5665,-1.66615 -4.3753,-2.64726 -0.4201,-0.50974 -1.0326,-1.46625 -1.3611,-2.12556 l -0.5972,-1.198751 v -44.582289 -44.58229 l 0.6552,-1.32291 c 0.8354,-1.68701 2.421,-3.27237 4.1073,-4.10685 1.2981,-0.64233 1.463,-0.65623 8.7745,-0.73952 l 7.4516,-0.0849 0.089,-2.87372 c 0.096,-3.10482 0.3282,-3.69712 1.9107,-4.87866 1.0245,-0.76492 3.5342,-0.76492 4.5587,0 1.5846,1.18307 1.8145,1.77205 1.9113,4.89689 l 0.09,2.89197 h 21.1198 21.1199 l 0.09,-2.89197 c 0.097,-3.12484 0.3266,-3.71382 1.9112,-4.89689 1.0245,-0.76492 3.5342,-0.76492 4.5587,0 1.5825,1.18154 1.8145,1.77384 1.9108,4.87866 l 0.089,2.87372 7.4515,0.0849 c 7.1121,0.081 7.5062,0.11207 8.6503,0.68155 1.8847,0.9381 2.9991,2.00621 3.9794,3.81425 l 0.9073,1.67348 v 44.58229 44.582289 l -0.713,1.351351 c -1.0561,2.00185 -1.8534,2.82598 -3.7052,3.83006 l -1.6672,0.90401 -44.0532,0.041 c -24.2292,0.0226 -44.4176,-0.0471 -44.8632,-0.15484 z m 86.6675,-37.853861 v -29.633329 h -42.3334 -42.3333 v 29.633329 29.63333 h 42.3333 42.3334 z m -49.7825,14.33414 c -1.4448,-0.73659 -15.2099,-13.94518 -15.5503,-14.92157 -1.1254,-3.22851 1.5117,-6.278789 4.8817,-5.646559 1.0007,0.18773 2.1611,1.17443 8.7953,7.478709 l 3.6766,3.49367 11.0911,-10.463179 c 6.122,-5.77529 11.5025,-10.64263 12.0093,-10.86371 2.4427,-1.06572 5.3889,0.61858 5.7466,3.28525 0.3018,2.25046 0.397,2.14271 -13.3232,15.084089 -7.0612,6.66038 -13.2737,12.31502 -13.8056,12.56587 -1.2532,0.59097 -2.3453,0.58707 -3.5215,-0.0126 z m 49.7825,-60.900799 v -8.46667 h -6.3266 -6.3266 l -0.09,2.89196 c -0.097,3.12485 -0.3266,3.71383 -1.9112,4.8969 -1.0246,0.76491 -3.5342,0.76491 -4.5588,0 -1.5846,-1.18307 -1.8144,-1.77205 -1.9112,-4.8969 l -0.09,-2.89196 h -21.1198 -21.1199 l -0.09,2.89196 c -0.097,3.12485 -0.3266,3.71383 -1.9112,4.8969 -1.0245,0.76491 -3.5342,0.76491 -4.5587,0 -1.5846,-1.18307 -1.8145,-1.77205 -1.9113,-4.8969 l -0.09,-2.89196 h -6.3266 -6.3266 v 8.46667 8.46666 h 42.3334 42.3333 z"
                  />
                </g>
              </svg>
            </div>
            <h1 class="mb-2 text-center text-2xl font-bold">Event</h1>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, a.
            </p>
          </div>
          <div class="rounded-lg bg-eastern-blue-100 p-12">
            <div
              class="mb-6 flex items-center justify-center text-eastern-blue-500"
            >
              <svg
                width="133.1423mm"
                class="h-auto w-24"
                height="132.05367mm"
                viewBox="0 0 133.14231 132.05366"
              >
                <g id="layer1" transform="translate(8.3652997,35.058952)">
                  <path
                    id="path116"
                    style="fill: currentColor; fill-opacity: 1"
                    d="m 44.504291,96.820798 c -7.6398,-0.92582 -15.6719,-4.26533 -21.5636,-8.96543 -1.9282,-1.53824 -5.7198,-5.41652 -7.3954,-7.5645 -7.7717997,-9.9627 -11.0639997,-22.64309 -9.0050997,-34.68497 0.493,-2.88349 1.9561,-7.64596 3.1618,-10.29156 0.9882997,-2.1688 0.8930997,-2.11112 3.9254997,-2.3763 3.7356,-0.32668 11.1789,-2.21422 12.5446,-3.18115 1.076,-0.76193 3.1762,-8.71854 3.6575,-13.85698 l 0.1825,-1.94929 1.8883,-0.86471 c 2.2195,-1.01641 5.3895,-2.09752 7.7672,-2.64892 2.2458,-0.5208485 2.268,-0.5159785 1.7977,0.39361 -1.4806,2.86301 -3.5383,9.32109 -3.9896,12.52099 -0.1745,1.23775 -0.219,1.28911 -1.8007,2.08142 -4.2988,2.15331 -8.6483,5.95741 -11.269,9.8559 -6.7679,10.06768 -7.3815,23.38659 -1.5368,33.36029 1.576,2.68928 3.0161,4.47892 5.5923,6.94937 4.5758,4.38803 9.8826,7.03008 16.4037,8.16684 3.5233,0.61417 9.2122,0.37833 12.6814,-0.52573 18.8228,-4.90506 28.7028,-25.58777 20.5421,-43.00235 -3.7415,-7.98407 -11.3358,-14.73236 -18.8374,-16.73871 -0.6893,-0.18437 -1.2518,-0.45934 -1.2501,-0.61106 0,-0.15172 0.4,-1.1844 0.8848,-2.29485 1.0447,-2.39275 2.7904,-5.07541 4.6642,-7.16761 l 1.3556,-1.51369 1.7717,0.66623 c 9.1036,3.4235 17.6865,11.49052 22.4989,21.14656 2.8528,5.72418 4.2172,10.99863 4.4592,17.23833 0.4832,12.46283 -3.6836,23.74344 -11.9384,32.31984 -6.6202,6.87811 -14.4055,11.18038 -23.5669,13.02332 -3.0658,0.61673 -10.4759,0.89686 -13.626,0.51511 z m 49.6112,-25.60966 c 1.3844,-3.47954 2.7441,-8.86239 3.1669,-12.53807 0.1666,-1.44792 0.2242,-1.54059 1.4129,-2.27312 7.234909,-4.4585 12.295909,-12.09247 13.710309,-20.68039 0.5963,-3.62063 0.3627,-8.79323 -0.5562,-12.31411 C 107.2001,5.5900095 86.666191,-4.0293405 70.057891,3.8276495 c -2.5093,1.18712 -5.954,3.63961 -8.1587,5.80877 -10.1322,9.9686985 -11.9309,25.1888585 -4.4124,37.3367285 1.802,2.91158 6.0115,7.26928 8.6715,8.97683 2.54,1.63049 5.8992,3.19226 8.1087,3.7699 l 1.7697,0.46265 -0.1468,0.90666 c -0.2158,1.33355 -2.8612,6.51034 -4.3102,8.43479 -1.4634,1.94369 -1.195,1.93255 -5.2559,0.21809 -12.5008,-5.27774 -21.9479,-16.81074 -24.7459,-30.20981 -4.1538,-19.89093 6.7065,-40.08777856 25.6109,-47.6285785 l 2.444,-0.97487 1.7894,1.4401 c 3.4845,2.8043 10.1691,6.82716994 11.3444,6.82716994 1.2109,0 8.1721,-4.10971994 11.179,-6.59977994 0.82,-0.67909 1.6317,-1.31944 1.8037,-1.423 0.8885,-0.53494 8.379209,3.21181 12.255009,6.12979 8.3583,6.29274 13.8944,15.0904085 16.1757,25.7054885 0.5071,2.3599 0.597,3.57474 0.597,8.06979 0,4.49505 -0.09,5.70989 -0.597,8.06979 -3.3311,15.49982 -14.0198,27.42742 -28.698809,32.02502 -1.4219,0.44537 -1.529,0.44834 -1.3657,0.038 z M 3.8906913,28.982718 c -3.89130007655,-0.75956 -6.9438,-2.19247 -9.1467,-4.29366 -5.5690003,-5.31198 -3.3225,-14.0678 4.0736,-15.8767785 1.49319992,-0.36523 2.08029992,-0.3907 3.3902,-0.1471 1.6307,0.30327 2.6295,0.1314 3.0397,-0.52309 0.1196,-0.19088 0.2204,-1.7758 0.2241,-3.52205 0.01,-2.82886 0.078,-3.31923 0.6568,-4.49792006 0.8313,-1.69150994 2.6873,-3.54695994 4.3768997,-4.37556994 1.0132,-0.49688 1.8495,-0.66986 3.5719,-0.73883 3.1895,-0.12771 4.8672,0.52894 7.0681,2.76648 3.7521,3.81471 5.5545,10.24199 4.8646,17.3474185 -0.3252,3.34944 -1.1018,7.30233 -1.9379,9.86436 l -0.6021,1.84511 -1.9844,0.60241 c -5.4923,1.66734 -13.4154997,2.36498 -17.5947997,1.54922 z M 80.884491,-5.9143105 c -4.8701,-2.65371 -9.8526,-6.7405415 -12.511,-10.2619815 -2.582,-3.42025 -4.0922,-8.38081 -3.51,-11.52982 0.5591,-3.02468 2.3636,-5.40951 5.0408,-6.66199 1.1748,-0.54963 1.8639,-0.6826 3.5766,-0.69008 1.8767,-0.008 2.3267,0.0917 3.9009,0.86634 1.1334,0.55772 2.0922,1.267 2.641,1.95364 1.612,2.0168 1.9958,2.33011 2.854,2.33011 0.5683,0 1.0053,-0.21624 1.4011,-0.69337 1.8758,-2.26084 2.7752,-3.07745 4.1098,-3.73176 1.2577,-0.61665 1.8257,-0.73082 3.6093,-0.72557 1.7473,0.005 2.3937,0.13431 3.7041,0.74021 3.2395,1.49778 4.908009,3.93841 5.102609,7.4639 0.1493,2.7066 -0.2428,4.57237 -1.508109,7.17579 -1.316,2.70752 -2.9497,4.83853 -5.7195,7.46035 -2.9968,2.8367515 -9.5382,7.1969815 -10.7646,7.1752815 -0.1867,-0.003 -1.0539,-0.39528 -1.927,-0.87105 z"
                  />
                </g>
              </svg>
            </div>
            <h1 class="mb-2 text-center text-2xl font-bold">Jodoh</h1>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, a.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[90vh] bg-eastern-blue-100">
      <div class="container grid h-full grid-cols-2 gap-12">
        <div
          class="flex h-full w-full items-center justify-center rounded p-12"
        >
          <div
            class="rounded-lg bg-gray-900/5 p-2 ring-1 ring-inset ring-green-900/10"
          >
            <NuxtImg class="rounded-sm" src="/gambarSeminar.webp" alt="" />
          </div>
        </div>
        <div class="flex h-full w-full flex-col justify-center gap-12">
          <h1 class="text-6xl font-bold">Seminar Pranikah</h1>
          <ul class="flex list-disc flex-col gap-4 text-xl">
            <li>
              Membantu Anda memahami esensi pernikahan sebagai ibadah dan
              separuh agama yang sempurna
            </li>
            <li>
              Mempersiapkan Anda untuk membangun rumah tangga yang kokoh dan
              bahagia
            </li>
            <li>
              Memberikan bekal ilmu dan keterampilan praktis untuk menghadapi
              berbagai tantangan dalam pernikahan
            </li>
            <li>Memperkuat komitmen dan komunikasi dengan pasangan</li>
          </ul>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              - [ Rino Amri, SE, M.Pd, chc] Konsultan Jelajah Diri
            </div>
            <div class="flex items-center gap-2">
              <div />
              - [ Andri setiawan ] Guru Besar ponpes Dahlan ikhsan
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-eastern-blue-700 py-12 text-white">
      <div
        class="container flex flex-col items-center justify-center gap-4 px-20 py-8"
      >
        <h1
          class="my-4 w-full border-b-2 py-4 text-center text-4xl font-semibold"
        >
          Daftar Event
        </h1>
        <UCarousel
          v-slot="{ item }"
          :items="carouselItem"
          arrows
          class="w-full"
          :ui="{
            item: 'basis-1/4 snap-start',
            container: 'rounded-lg',
          }"
          :prev-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-left-20-solid',
            class: '-start-12',
          }"
          :next-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-right-20-solid',
            class: '-end-12',
          }"
        >
          <UCard
            :ui="{
              body: {
                padding: 'sm:p-6',
              },
            }"
            class="mx-2 w-full rounded-lg bg-eastern-blue-100 text-black"
          >
            <div class="flex flex-col items-center justify-center gap-4 p-2">
              <div
                class="bg-primary flex aspect-square h-auto w-full items-center justify-center rounded-lg p-4"
              >
                <NuxtImg :src="item.image" alt="produk" />
              </div>
              <h1 class="text-lg font-bold">lorem ipsum</h1>
              <div class="flex w-full justify-between gap-4">
                <div class="flex flex-col gap-2">
                  <h1 class="font-serif text-sm font-semibold">Waktu</h1>
                  <p class="text-xs">30 Juni 2024</p>
                </div>
                <div class="flex flex-col gap-2">
                  <h1 class="font-serif text-sm font-semibold">Tempat</h1>
                  <p class="text-xs">Bogor</p>
                </div>
              </div>
            </div>
          </UCard>
        </UCarousel>
        <UButton class="w-fit" variant="soft">Lihat Semua Event</UButton>
      </div>
    </div>

    <div class="w-full bg-eastern-blue-700 px-12 py-12 text-eastern-blue-100">
      <p class="container w-2/3 text-center text-2xl leading-loose">
        "Menikah adalah perjalanan yang indah, namun membutuhkan persiapan yang
        matang. Bangunlah fondasi pernikahan yang kokoh dan bahagia. Jangan ragu
        untuk mendaftar dan persiapkan diri Anda untuk menyambut masa depan yang
        indah bersama pasangan tercinta."
      </p>
    </div>
  </main>
</template>

<style scoped>
  .gradient {
    clip-path: polygon(
      74.1% 44.1%,
      100% 61.6%,
      97.5% 26.9%,
      85.5% 0.1%,
      80.7% 2%,
      72.5% 32.5%,
      60.2% 62.4%,
      52.4% 68.1%,
      47.5% 58.3%,
      45.2% 34.5%,
      27.5% 76.7%,
      0.1% 64.9%,
      17.9% 100%,
      27.6% 76.8%,
      76.1% 97.7%,
      74.1% 44.1%
    );
  }
</style>
