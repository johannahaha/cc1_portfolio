export const useFilterStore = defineStore("filterStore", {
   state: () => {
      return {
         filter: ["all"],
      };
   },
   actions: {
      setFilter(value: string) {
         this.filter = [value];
      },
   },
   getters: {
      getFilter: (state) => state.filter[0],
   },
});

export const useLeftPostStore = defineStore("leftPostStore", {
   state: () => {
      return {
         left: 0,
      };
   },
   actions: {
      setLeftPost(left: number) {
         this.left = left;
      },
      increment() {
         this.left++;
      },
      decrement() {
         this.left--;
      },
      reset() {
         this.left = 0;
      },
   },
   getters: {
      getLeftPost: (state) => state.left,
   },
});

export const useScrollPosStore = defineStore("scrollPosStore", {
   state: () => {
      return {
         top: 0,
         left: 0,
      };
   },
   actions: {
      setScroll(y: number, x: number) {
         this.top = y;
         this.left = x;
      },
      reset() {
         this.left = 0;
         this.top = 0;
      },
   },
   getters: {
      getTop: (state) => state.top,
      getLeft: (state) => state.left,
   },
});
