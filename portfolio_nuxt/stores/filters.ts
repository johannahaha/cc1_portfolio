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
