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
