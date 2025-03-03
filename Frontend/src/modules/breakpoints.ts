import { ref, onMounted, onUnmounted } from 'vue';

export function useBreakpoints() {
  const width = ref(window.innerWidth);

  const breakpoints = {
    '2xs': 375,
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };

  const is2Xs = ref(false);
  const isXs = ref(false);
  const isSm = ref(false);
  const isMd = ref(false);
  const isLg = ref(false);
  const isXl = ref(false);
  const is2Xl = ref(false);

  const updateBreakpoints = () => {
    width.value = window.innerWidth;

    is2Xs.value = width.value >= breakpoints['2xs'];
    isXs.value = width.value >= breakpoints['xs'];
    isSm.value = width.value >= breakpoints['sm'];
    isMd.value = width.value >= breakpoints['md'];
    isLg.value = width.value >= breakpoints['lg'];
    isXl.value = width.value >= breakpoints['xl'];
    is2Xl.value = width.value >= breakpoints['2xl'];
  };

  onMounted(() => {
    window.addEventListener('resize', updateBreakpoints);
    updateBreakpoints();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoints);
  });

  return {
    width,
    is2Xs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
  };
}
