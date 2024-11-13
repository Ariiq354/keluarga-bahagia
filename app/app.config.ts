export default defineAppConfig({
  ui: {
    primary: "eastern-blue",
    card: {
      ring: "dark:ring-gray-700",
      body: {
        padding: "sm:p-8",
      },
    },
    button: {
      default: {
        size: "lg",
      },
    },
    input: {
      default: {
        size: "lg",
      },
    },
    select: {
      default: {
        size: "lg",
      },
    },
    table: {
      td: {
        size: "text-base",
      },
      th: {
        size: "text-base",
        font: "font-medium",
      },
      default: {
        sortButton: {
          class: "text-base p-0",
        },
      },
    },
    pagination: {
      wrapper: "flex items-center gap-1",
      base: "w-8 h-8 justify-center",
      rounded: "!rounded-full",
      default: {
        activeButton: {
          variant: "outline",
        },
      },
    },
  },
});
