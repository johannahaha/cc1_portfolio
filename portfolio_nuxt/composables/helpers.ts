import { useFilterStore } from "@/stores/filters";

export function useCheckProjectTag(tags: Array<string>, filter: string) {
   const tag_titles = tags.map((x) => x.toLowerCase());
   //if all projects, return true for all
   if (filter === "all") {
      return true;
   }

   //matches current filter?
   else if (tag_titles.includes(filter)) {
      return true;
   }
   //otherwise false
   else {
      return false;
   }
}
